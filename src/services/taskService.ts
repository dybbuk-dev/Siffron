import Error400 from '../errors/Error400';
import MongooseRepository from '../database/repositories/mongooseRepository';
import { IServiceOptions } from './IServiceOptions';
import TaskRepository from '../database/repositories/taskRepository';
import TaskListRepository from '../database/repositories/taskListRepository';
import NoteRepository from '../database/repositories/noteRepository';
import TaskPriorityRepository from '../database/repositories/taskPriorityRepository';
import UserRepository from '../database/repositories/userRepository';
import TaskInstanceRepositoryEx from '../database/repositories/extend/taskInstanceRepositoryEx';

export default class TaskService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  async create(data) {
    const session = await MongooseRepository.createSession(
      this.options.database,
    );

    try {
      const lastTask = await TaskRepository.findAndCountAll(
        { filter: {}, orderBy: 'reference_DESC', limit: 1 },
        { ...this.options, session },
      );
      data.reference =
        Number(lastTask.rows[0]?.reference ?? 0) + 1;
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

      const record = await TaskRepository.create(data, {
        ...this.options,
        session,
      });

      if (record.dueDate) {
        await TaskInstanceRepositoryEx.createDefaults(
          data,
          record,
          {
            ...this.options,
            session,
          },
        );
      }

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
      const oldRecord = await TaskRepository.findById(id, {
        ...this.options,
        session,
      });

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

      const record = await TaskRepository.update(id, data, {
        ...this.options,
        session,
      });

      if (!oldRecord.dueDate && record.dueDate) {
        await TaskInstanceRepositoryEx.createDefaults(
          {
            reference: record.reference,
            title: record.title,
            taskList: record.taskList,
            instructions: record.instructions,
            notes: record.notes,
            priority: record.priority,
            repeat: record.repeat,
            status: record.status,
            owner: record.owner,
            approver: record.approver,
            dueDate: record.dueDate,
            completedDate: record.completedDate,
            attachments: record.attachments,
          },
          record,
          {
            ...this.options,
            session,
          },
        );
      }

      await TaskInstanceRepositoryEx.updateFutureInstance(
        record.id,
        {
          status: record.status,
        },
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
        await TaskRepository.destroy(id, {
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
    return TaskRepository.findById(id, this.options);
  }

  async findAllAutocomplete(search, limit) {
    return TaskRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  async findAndCountAll(args) {
    return TaskRepository.findAndCountAll(
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
    const count = await TaskRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}
