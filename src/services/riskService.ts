import Error400 from '../errors/Error400';
import MongooseRepository from '../database/repositories/mongooseRepository';
import { IServiceOptions } from './IServiceOptions';
import RiskRepository from '../database/repositories/riskRepository';
import RiskCategoryRepository from '../database/repositories/riskCategoryRepository';
import TaskRepository from '../database/repositories/taskRepository';
import UserRepository from '../database/repositories/userRepository';

export default class RiskService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  async create(data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      const lastRisk = await RiskRepository.findAndCountAll(
        { filter: {}, orderBy: 'reference_DESC', limit: 1 },
        { ...this.options, session },
      );
      data.reference =
        Number(lastRisk.rows[0]?.reference ?? 0) + 1;
      data.category =
        await RiskCategoryRepository.filterIdInTenant(
          data.category,
          { ...this.options, session },
        );
      data.owner = await UserRepository.filterIdInTenant(
        data.owner,
        { ...this.options, session },
      );
      data.tasks = await TaskRepository.filterIdsInTenant(
        data.tasks,
        { ...this.options, session },
      );

      const record = await RiskRepository.create(data, {
        ...this.options,
        session,
      });

      await MongooseRepository.commitTransaction(session);

      return record;
    } catch (error) {
      await MongooseRepository.abortTransaction(session);

      MongooseRepository.handleUniqueFieldError(
        error,
        this.options.language,
        'risk',
      );

      throw error;
    }
  }

  async update(id, data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      data.category =
        await RiskCategoryRepository.filterIdInTenant(
          data.category,
          { ...this.options, session },
        );
      data.owner = await UserRepository.filterIdInTenant(
        data.owner,
        { ...this.options, session },
      );
      data.tasks = await TaskRepository.filterIdsInTenant(
        data.tasks,
        { ...this.options, session },
      );

      const record = await RiskRepository.update(id, data, {
        ...this.options,
        session,
      });

      await MongooseRepository.commitTransaction(session);

      return record;
    } catch (error) {
      await MongooseRepository.abortTransaction(session);

      MongooseRepository.handleUniqueFieldError(
        error,
        this.options.language,
        'risk',
      );

      throw error;
    }
  }

  async destroyAll(ids) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      for (const id of ids) {
        await RiskRepository.destroy(id, {
          ...this.options,
          session,
        });
      }

      await MongooseRepository.commitTransaction(session);
    } catch (error) {
      await MongooseRepository.abortTransaction(session);
      throw error;
    }
  }

  async findById(id) {
    return RiskRepository.findById(id, this.options);
  }

  async findAllAutocomplete(search, limit) {
    return RiskRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  async findAndCountAll(args) {
    return RiskRepository.findAndCountAll(
      args,
      this.options,
    );
  }

  async import(data, importHash) {
    if (!importHash) {
      throw new Error400(
        this.options.language,
        'importer.errors.importHashRequired',
      );
    }

    if (await this._isImportHashExistent(importHash)) {
      throw new Error400(
        this.options.language,
        'importer.errors.importHashExistent',
      );
    }

    const dataToCreate = {
      ...data,
      importHash,
    };

    return this.create(dataToCreate);
  }

  async _isImportHashExistent(importHash) {
    const count = await RiskRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}
