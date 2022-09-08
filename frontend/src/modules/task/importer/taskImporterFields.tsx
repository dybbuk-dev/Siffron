import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import taskEnumerators from 'src/modules/task/taskEnumerators';
import moment from 'moment';

export default [
  {
    name: 'reference',
    label: i18n('entities.task.fields.reference'),
    schema: schemas.integer(
      i18n('entities.task.fields.reference'),
      {
        required: true,
      },
    ),
  },
  {
    name: 'title',
    label: i18n('entities.task.fields.title'),
    schema: schemas.string(
      i18n('entities.task.fields.title'),
      {
        required: true,
        max: 200,
        min: 1,
      },
    ),
  },
  {
    name: 'taskList',
    label: i18n('entities.task.fields.taskList'),
    schema: schemas.relationToMany(
      i18n('entities.task.fields.taskList'),
      {
        required: true,
      },
    ),
  },
  {
    name: 'instructions',
    label: i18n('entities.task.fields.instructions'),
    schema: schemas.string(
      i18n('entities.task.fields.instructions'),
      {
        max: 1000,
        min: 1,
      },
    ),
  },
  {
    name: 'notes',
    label: i18n('entities.task.fields.notes'),
    schema: schemas.relationToMany(
      i18n('entities.task.fields.notes'),
      {
        max: 50,
      },
    ),
  },
  {
    name: 'priority',
    label: i18n('entities.task.fields.priority'),
    schema: schemas.relationToOne(
      i18n('entities.task.fields.priority'),
      {
        required: true,
      },
    ),
  },
  {
    name: 'repeat',
    label: i18n('entities.task.fields.repeat'),
    schema: schemas.enumerator(
      i18n('entities.task.fields.repeat'),
      {
        required: true,
        options: taskEnumerators.repeat,
      },
    ),
  },
  {
    name: 'status',
    label: i18n('entities.task.fields.status'),
    schema: schemas.enumerator(
      i18n('entities.task.fields.status'),
      {
        required: true,
        options: taskEnumerators.status,
      },
    ),
  },
  {
    name: 'owner',
    label: i18n('entities.task.fields.owner'),
    schema: schemas.relationToOne(
      i18n('entities.task.fields.owner'),
      {},
    ),
  },
  {
    name: 'approver',
    label: i18n('entities.task.fields.approver'),
    schema: schemas.relationToOne(
      i18n('entities.task.fields.approver'),
      {},
    ),
  },
  {
    name: 'dueDate',
    label: i18n('entities.task.fields.dueDate'),
    schema: schemas.datetime(
      i18n('entities.task.fields.dueDate'),
      {},
    ),
    render: (value) =>
      value && value instanceof Date
        ? moment(value).format('YYYY-MM-DD HH:mm')
        : value,
  },
  {
    name: 'completedDate',
    label: i18n('entities.task.fields.completedDate'),
    schema: schemas.datetime(
      i18n('entities.task.fields.completedDate'),
      {},
    ),
    render: (value) =>
      value && value instanceof Date
        ? moment(value).format('YYYY-MM-DD HH:mm')
        : value,
  },
  {
    name: 'attachments',
    label: i18n('entities.task.fields.attachments'),
    schema: schemas.files(
      i18n('entities.task.fields.attachments'),
      {},
    ),
  },
];
