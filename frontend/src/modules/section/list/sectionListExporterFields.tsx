import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.section.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.section.fields.name'),
  },
  {
    name: 'department',
    label: i18n('entities.section.fields.department'),
    render: exporterRenders.relationToOne('name'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.section.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.section.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
