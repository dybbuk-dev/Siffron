import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.facing.fields.id'),
  },
  {
    name: 'model',
    label: i18n('entities.facing.fields.model'),
  },
  {
    name: 'type',
    label: i18n('entities.facing.fields.type'),
  },
  {
    name: 'sn',
    label: i18n('entities.facing.fields.sn'),
  },
  {
    name: 'manager',
    label: i18n('entities.shop.fields.manager'),
    render: exporterRenders.relationToOneUser(),
  },
  {
    name: 'shop',
    label: i18n('entities.facing.fields.shop'),
    render: exporterRenders.relationToOne('name'),
  },
  {
    name: 'department',
    label: i18n('entities.facing.fields.department'),
    render: exporterRenders.relationToOne('name'),
  },
  {
    name: 'section',
    label: i18n('entities.facing.fields.section'),
    render: exporterRenders.relationToOne('name'),
  },
  {
    name: 'shelf',
    label: i18n('entities.facing.fields.shelf'),
    render: exporterRenders.relationToOne('name'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.facing.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.facing.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
