import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import vendorEnumerators from 'src/modules/vendor/vendorEnumerators';

export default [
  {
    name: 'reference',
    label: i18n('entities.vendor.fields.reference'),
    schema: schemas.integer(
      i18n('entities.vendor.fields.reference'),
      {
        required: true,
      },
    ),
  },
  {
    name: 'name',
    label: i18n('entities.vendor.fields.name'),
    schema: schemas.string(
      i18n('entities.vendor.fields.name'),
      {
        required: true,
        min: 1,
        max: 250,
      },
    ),
  },
  {
    name: 'status',
    label: i18n('entities.vendor.fields.status'),
    schema: schemas.enumerator(
      i18n('entities.vendor.fields.status'),
      {
        required: true,
        options: vendorEnumerators.status,
      },
    ),
  },
  {
    name: 'category',
    label: i18n('entities.vendor.fields.category'),
    schema: schemas.relationToOne(
      i18n('entities.vendor.fields.category'),
      {
        required: true,
      },
    ),
  },
  {
    name: 'rating',
    label: i18n('entities.vendor.fields.rating'),
    schema: schemas.enumerator(
      i18n('entities.vendor.fields.rating'),
      {
        required: true,
        options: vendorEnumerators.rating,
      },
    ),
  },
  {
    name: 'primaryContactName',
    label: i18n(
      'entities.vendor.fields.primaryContactName',
    ),
    schema: schemas.string(
      i18n('entities.vendor.fields.primaryContactName'),
      {
        required: true,
        max: 100,
        min: 1,
      },
    ),
  },
  {
    name: 'primaryContactEmail',
    label: i18n(
      'entities.vendor.fields.primaryContactEmail',
    ),
    schema: schemas.string(
      i18n('entities.vendor.fields.primaryContactEmail'),
      {
        required: true,
        max: 100,
        min: 1,
      },
    ),
  },
  {
    name: 'primaryContactPhoneNumber',
    label: i18n(
      'entities.vendor.fields.primaryContactPhoneNumber',
    ),
    schema: schemas.string(
      i18n(
        'entities.vendor.fields.primaryContactPhoneNumber',
      ),
      {
        max: 50,
        min: 1,
      },
    ),
  },
  {
    name: 'countryOfIncorporation',
    label: i18n(
      'entities.vendor.fields.countryOfIncorporation',
    ),
    schema: schemas.enumerator(
      i18n('entities.vendor.fields.countryOfIncorporation'),
      {
        required: true,
        options: vendorEnumerators.countryOfIncorporation,
      },
    ),
  },
  {
    name: 'dataProcessed',
    label: i18n('entities.vendor.fields.dataProcessed'),
    schema: schemas.stringArray(
      i18n('entities.vendor.fields.dataProcessed'),
      {
        required: true,
      },
    ),
  },
  {
    name: 'industry',
    label: i18n('entities.vendor.fields.industry'),
    schema: schemas.enumerator(
      i18n('entities.vendor.fields.industry'),
      {
        required: true,
        options: vendorEnumerators.industry,
      },
    ),
  },
  {
    name: 'supportEmail',
    label: i18n('entities.vendor.fields.supportEmail'),
    schema: schemas.string(
      i18n('entities.vendor.fields.supportEmail'),
      {
        max: 100,
        min: 1,
      },
    ),
  },
  {
    name: 'supportPhoneNumber',
    label: i18n(
      'entities.vendor.fields.supportPhoneNumber',
    ),
    schema: schemas.string(
      i18n('entities.vendor.fields.supportPhoneNumber'),
      {
        max: 50,
        min: 1,
      },
    ),
  },
  {
    name: 'internalBusinessSponsor',
    label: i18n(
      'entities.vendor.fields.internalBusinessSponsor',
    ),
    schema: schemas.string(
      i18n(
        'entities.vendor.fields.internalBusinessSponsor',
      ),
      {
        min: 1,
        max: 200,
      },
    ),
  },
  {
    name: 'descriptionOfServices',
    label: i18n(
      'entities.vendor.fields.descriptionOfServices',
    ),
    schema: schemas.string(
      i18n('entities.vendor.fields.descriptionOfServices'),
      {
        max: 250,
        min: 1,
      },
    ),
  },
  {
    name: 'logo',
    label: i18n('entities.vendor.fields.logo'),
    schema: schemas.images(
      i18n('entities.vendor.fields.logo'),
      {},
    ),
  },
  {
    name: 'website',
    label: i18n('entities.vendor.fields.website'),
    schema: schemas.string(
      i18n('entities.vendor.fields.website'),
      {
        max: 100,
        min: 1,
      },
    ),
  },
  {
    name: 'address',
    label: i18n('entities.vendor.fields.address'),
    schema: schemas.string(
      i18n('entities.vendor.fields.address'),
      {
        max: 500,
        min: 1,
      },
    ),
  },
  {
    name: 'contract',
    label: i18n('entities.vendor.fields.contract'),
    schema: schemas.files(
      i18n('entities.vendor.fields.contract'),
      {},
    ),
  },
  {
    name: 'documentation',
    label: i18n('entities.vendor.fields.documentation'),
    schema: schemas.files(
      i18n('entities.vendor.fields.documentation'),
      {},
    ),
  },
  {
    name: 'dpiaCompleted',
    label: i18n('entities.vendor.fields.dpiaCompleted'),
    schema: schemas.boolean(
      i18n('entities.vendor.fields.dpiaCompleted'),
      {},
    ),
  },
  {
    name: 'dtiaCompleted',
    label: i18n('entities.vendor.fields.dtiaCompleted'),
    schema: schemas.boolean(
      i18n('entities.vendor.fields.dtiaCompleted'),
      {},
    ),
  },
  {
    name: 'iso27001',
    label: i18n('entities.vendor.fields.iso27001'),
    schema: schemas.boolean(
      i18n('entities.vendor.fields.iso27001'),
      {},
    ),
  },
  {
    name: 'soc1',
    label: i18n('entities.vendor.fields.soc1'),
    schema: schemas.boolean(
      i18n('entities.vendor.fields.soc1'),
      {},
    ),
  },
  {
    name: 'soc2',
    label: i18n('entities.vendor.fields.soc2'),
    schema: schemas.boolean(
      i18n('entities.vendor.fields.soc2'),
      {},
    ),
  },
  {
    name: 'hippa',
    label: i18n('entities.vendor.fields.hippa'),
    schema: schemas.boolean(
      i18n('entities.vendor.fields.hippa'),
      {},
    ),
  },
  {
    name: 'pcidss',
    label: i18n('entities.vendor.fields.pcidss'),
    schema: schemas.boolean(
      i18n('entities.vendor.fields.pcidss'),
      {},
    ),
  },
  {
    name: 'fedramp',
    label: i18n('entities.vendor.fields.fedramp'),
    schema: schemas.boolean(
      i18n('entities.vendor.fields.fedramp'),
      {},
    ),
  },
  {
    name: 'gdpr',
    label: i18n('entities.vendor.fields.gdpr'),
    schema: schemas.boolean(
      i18n('entities.vendor.fields.gdpr'),
      {},
    ),
  },
  {
    name: 'ccpa',
    label: i18n('entities.vendor.fields.ccpa'),
    schema: schemas.boolean(
      i18n('entities.vendor.fields.ccpa'),
      {},
    ),
  },
  {
    name: 'sox',
    label: i18n('entities.vendor.fields.sox'),
    schema: schemas.boolean(
      i18n('entities.vendor.fields.sox'),
      {},
    ),
  },
  {
    name: 'cobit',
    label: i18n('entities.vendor.fields.cobit'),
    schema: schemas.boolean(
      i18n('entities.vendor.fields.cobit'),
      {},
    ),
  },
  {
    name: 'risks',
    label: i18n('entities.vendor.fields.risks'),
    schema: schemas.relationToMany(
      i18n('entities.vendor.fields.risks'),
      {},
    ),
  },
  {
    name: 'tasks',
    label: i18n('entities.vendor.fields.tasks'),
    schema: schemas.relationToMany(
      i18n('entities.vendor.fields.tasks'),
      {},
    ),
  },
];
