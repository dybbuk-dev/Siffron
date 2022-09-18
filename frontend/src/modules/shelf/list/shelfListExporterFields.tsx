import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.shelf.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.shelf.fields.name'),
  },
  {
    name: 'shop',
    label: i18n('entities.shelf.fields.shop'),
    render: exporterRenders.relationToOne('name'),
  },
  {
    name: 'department',
    label: i18n('entities.shelf.fields.department'),
    render: exporterRenders.relationToOne('name'),
  },
  {
    name: 'section',
    label: i18n('entities.shelf.fields.section'),
    render: exporterRenders.relationToOne('name'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.shelf.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.shelf.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
