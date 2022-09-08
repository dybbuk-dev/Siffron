import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'reference',
    label: i18n('entities.product.fields.reference'),
    schema: schemas.integer(
      i18n('entities.product.fields.reference'),
      {
        required: true,
      },
    ),
  },
  {
    name: 'title',
    label: i18n('entities.product.fields.title'),
    schema: schemas.string(
      i18n('entities.product.fields.title'),
      {
        required: true,
        min: 1,
        max: 200,
      },
    ),
  },
  {
    name: 'description',
    label: i18n('entities.product.fields.description'),
    schema: schemas.string(
      i18n('entities.product.fields.description'),
      {
        required: true,
        min: 1,
        max: 1000,
      },
    ),
  },
  {
    name: 'category',
    label: i18n('entities.product.fields.category'),
    schema: schemas.relationToOne(
      i18n('entities.product.fields.category'),
      {
        required: true,
      },
    ),
  },
  {
    name: 'website',
    label: i18n('entities.product.fields.website'),
    schema: schemas.string(
      i18n('entities.product.fields.website'),
      {
        required: true,
        max: 100,
        min: 1,
      },
    ),
  },
  {
    name: 'logo',
    label: i18n('entities.product.fields.logo'),
    schema: schemas.images(
      i18n('entities.product.fields.logo'),
      {
        required: true,
      },
    ),
  },
  {
    name: 'rating',
    label: i18n('entities.product.fields.rating'),
    schema: schemas.decimal(
      i18n('entities.product.fields.rating'),
      {
        max: 5,
        min: 0,
      },
    ),
  },
  {
    name: 'popularity',
    label: i18n('entities.product.fields.popularity'),
    schema: schemas.integer(
      i18n('entities.product.fields.popularity'),
      {
        min: 0,
        max: 100,
      },
    ),
  },
];
