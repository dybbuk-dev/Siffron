import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import facingEnumerators from 'src/modules/facing/facingEnumerators';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'model',
    label: i18n('entities.facing.fields.model'),
    schema: schemas.string(
      i18n('entities.facing.fields.model'),
      {
        required: true,
        max: 200,
        min: 1,
      },
    ),
  },
  {
    name: 'type',
    label: i18n('entities.facing.fields.type'),
    schema: schemas.enumerator(
      i18n('entities.facing.fields.type'),
      {
        required: true,
        options: facingEnumerators.type,
      },
    ),
  },
  {
    name: 'sn',
    label: i18n('entities.facing.fields.sn'),
    schema: schemas.string(
      i18n('entities.facing.fields.sn'),
      {
        required: true,
        max: 200,
        min: 1,
      },
    ),
  },
  {
    name: 'manager',
    label: i18n('entities.facing.fields.manager'),
    schema: schemas.relationToOne(
      i18n('entities.facing.fields.manager'),
      {
        required: true,
      },
    ),
  },
  {
    name: 'shop',
    label: i18n('entities.facing.fields.shop'),
    schema: schemas.relationToOne(
      i18n('entities.facing.fields.shop'),
      {
        required: true,
      },
    ),
  },
  {
    name: 'department',
    label: i18n('entities.facing.fields.department'),
    schema: schemas.relationToOne(
      i18n('entities.facing.fields.department'),
      {
        required: true,
      },
    ),
  },
  {
    name: 'section',
    label: i18n('entities.facing.fields.section'),
    schema: schemas.relationToOne(
      i18n('entities.facing.fields.section'),
      {
        required: true,
      },
    ),
  },
  {
    name: 'shelf',
    label: i18n('entities.facing.fields.shelf'),
    schema: schemas.relationToOne(
      i18n('entities.facing.fields.shelf'),
      {
        required: true,
      },
    ),
  },
];
