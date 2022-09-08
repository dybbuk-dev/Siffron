import Error400 from '../errors/Error400';
import MongooseRepository from '../database/repositories/mongooseRepository';
import { IServiceOptions } from './IServiceOptions';
import TaskRepository from '../database/repositories/taskRepository';
import TaskInstanceRepository from '../database/repositories/taskInstanceRepository';
import TaskListRepository from '../database/repositories/taskListRepository';
import NoteRepository from '../database/repositories/noteRepository';
import TaskPriorityRepository from '../database/repositories/taskPriorityRepository';
import UserRepository from '../database/repositories/userRepository';
import DateTimeUtils from '../utils/dateTimeUtils';

export default class TaskInstanceService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  async create(data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      data.task = await TaskRepository.filterIdInTenant(
        data.task,
        { ...this.options, session },
      );
      data.taskList =
        await TaskListRepository.filterIdsInTenant(
          data.taskList,
          { ...this.options, session },
        );
      data.notes = await NoteRepository.filterIdsInTenant(
        data.notes,
        { ...this.options, session },
      );
      data.priority =
        await TaskPriorityRepository.filterIdInTenant(
          data.priority,
          { ...this.options, session },
        );
      data.owner = await UserRepository.filterIdInTenant(
        data.owner,
        { ...this.options, session },
      );
      data.approver = await UserRepository.filterIdInTenant(
        data.approver,
        { ...this.options, session },
      );

      const lastTaskInstance =
        await TaskInstanceRepository.findAndCountAll(
          {
            filter: {
              task: data.task,
            },
            limit: 1,
            orderBy: 'dueDate_DESC',
          },
          { ...this.options, session },
        );

      const recurrenceDates = DateTimeUtils.RecurrenceDates(
        data.repeat,
        lastTaskInstance.rows[0]?.dueDate ?? data.dueDate,
        2,
      );
      data.reference = lastTaskInstance.rows[0].reference;
      data.dueDate =
        recurrenceDates[lastTaskInstance.rows.length];

      const record = await TaskInstanceRepository.create(
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
        'task',
      );

      throw error;
    }
  }

  async update(id, data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      data.taskList =
        await TaskListRepository.filterIdsInTenant(
          data.taskList,
          { ...this.options, session },
        );
      data.notes = await NoteRepository.filterIdsInTenant(
        data.notes,
        { ...this.options, session },
      );
      data.priority =
        await TaskPriorityRepository.filterIdInTenant(
          data.priority,
          { ...this.options, session },
        );
      data.owner = await UserRepository.filterIdInTenant(
        data.owner,
        { ...this.options, session },
      );
      data.approver = await UserRepository.filterIdInTenant(
        data.approver,
        { ...this.options, session },
      );

      const record = await TaskInstanceRepository.update(
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
        'task',
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
        await TaskInstanceRepository.destroy(id, {
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
    return TaskInstanceRepository.findById(
      id,
      this.options,
    );
  }

  async findAllAutocomplete(search, limit) {
    return TaskInstanceRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  async findAndCountAll(args) {
    return TaskInstanceRepository.findAndCountAll(
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
    const count = await TaskInstanceRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}
