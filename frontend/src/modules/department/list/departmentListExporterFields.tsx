import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.department.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.department.fields.name'),
  },
  {
    name: 'shop',
    label: i18n('entities.department.fields.shop'),
    render: exporterRenders.relationToOne('name'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.department.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.department.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
