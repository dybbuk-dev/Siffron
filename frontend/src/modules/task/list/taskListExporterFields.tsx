import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.task.fields.id'),
  },
  {
    name: 'reference',
    label: i18n('entities.task.fields.reference'),
  },
  {
    name: 'title',
    label: i18n('entities.task.fields.title'),
  },
  {
    name: 'taskList',
    label: i18n('entities.task.fields.taskList'),
    render: exporterRenders.relationToMany('name'),
  },
  {
    name: 'instructions',
    label: i18n('entities.task.fields.instructions'),
  },
  {
    name: 'notes',
    label: i18n('entities.task.fields.notes'),
    render: exporterRenders.relationToMany('message'),
  },
  {
    name: 'priority',
    label: i18n('entities.task.fields.priority'),
    render: exporterRenders.relationToOne('priority'),
  },
  {
    name: 'repeat',
    label: i18n('entities.task.fields.repeat'),
  },
  {
    name: 'status',
    label: i18n('entities.task.fields.status'),
  },
  {
    name: 'owner',
    label: i18n('entities.task.fields.owner'),
    render: exporterRenders.relationToOneUser(),
  },
  {
    name: 'approver',
    label: i18n('entities.task.fields.approver'),
    render: exporterRenders.relationToOneUser(),
  },
  {
    name: 'dueDate',
    label: i18n('entities.task.fields.dueDate'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'completedDate',
    label: i18n('entities.task.fields.completedDate'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'attachments',
    label: i18n('entities.task.fields.attachments'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.task.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.task.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
