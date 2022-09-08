import Error400 from '../errors/Error400';
import MongooseRepository from '../database/repositories/mongooseRepository';
import { IServiceOptions } from './IServiceOptions';
import VendorRepository from '../database/repositories/vendorRepository';
import VendorCategoryRepository from '../database/repositories/vendorCategoryRepository';
import RiskRepository from '../database/repositories/riskRepository';
import TaskRepository from '../database/repositories/taskRepository';

export default class VendorService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  async create(data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      const lastVendor =
        await VendorRepository.findAndCountAll(
          {
            filter: {},
            orderBy: 'reference_DESC',
            limit: 1,
          },
          { ...this.options, session },
        );
      data.reference =
        Number(lastVendor.rows[0]?.reference ?? 0) + 1;
      data.category =
        await VendorCategoryRepository.filterIdInTenant(
          data.category.id ?? data.category,
          { ...this.options, session },
        );
      data.risks = await RiskRepository.filterIdsInTenant(
        data.risks.map((risk) => risk.id ?? risk),
        { ...this.options, session },
      );
      data.tasks = await TaskRepository.filterIdsInTenant(
        data.tasks.map((task) => task.id ?? task),
        { ...this.options, session },
      );

      const keys = Object.keys(data);
      for (const key of keys) {
        if (data[key] === '') {
          data[key] = null;
        }
      }

      const record = await VendorRepository.create(data, {
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
        'vendor',
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
        await VendorCategoryRepository.filterIdInTenant(
          data.category.id ?? data.category,
          { ...this.options, session },
        );
      data.risks = await RiskRepository.filterIdsInTenant(
        data.risks.map((risk) => risk.id ?? risk),
        { ...this.options, session },
      );
      data.tasks = await TaskRepository.filterIdsInTenant(
        data.tasks.map((task) => task.id ?? task),
        { ...this.options, session },
      );

      const keys = Object.keys(data);
      for (const key of keys) {
        if (data[key] === '') {
          data[key] = null;
        }
      }

      const record = await VendorRepository.update(
        id,
        data,
        {
          ...this.options,
          session,
        },
      );

      await MongooseRepository.commitTransaction(session);

      return record;
    } catch (error) {
      await MongooseRepository.abortTransaction(session);

      MongooseRepository.handleUniqueFieldError(
        error,
        this.options.language,
        'vendor',
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
        await VendorRepository.destroy(id, {
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
    return VendorRepository.findById(id, this.options);
  }

  async findAllAutocomplete(search, limit) {
    return VendorRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  async findAndCountAll(args) {
    return VendorRepository.findAndCountAll(
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
    const count = await VendorRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}
