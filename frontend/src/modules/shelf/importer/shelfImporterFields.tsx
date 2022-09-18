import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.shelf.fields.name'),
    schema: schemas.string(
      i18n('entities.shelf.fields.name'),
      {
        required: true,
        max: 200,
        min: 1,
      },
    ),
  },
  {
    name: 'shop',
    label: i18n('entities.shelf.fields.shop'),
    schema: schemas.relationToOne(
      i18n('entities.shelf.fields.shop'),
      {},
    ),
  },
  {
    name: 'department',
    label: i18n('entities.shelf.fields.department'),
    schema: schemas.relationToOne(
      i18n('entities.shelf.fields.department'),
      {},
    ),
  },
  {
    name: 'section',
    label: i18n('entities.shelf.fields.section'),
    schema: schemas.relationToOne(
      i18n('entities.shelf.fields.section'),
      {},
    ),
  },
];
