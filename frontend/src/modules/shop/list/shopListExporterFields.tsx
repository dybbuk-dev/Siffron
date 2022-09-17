import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.shop.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.shop.fields.name'),
  },
  {
    name: 'manager',
    label: i18n('entities.shop.fields.manager'),
    render: exporterRenders.relationToOneUser(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.shop.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.shop.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
