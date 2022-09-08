import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import riskEnumerators from 'src/modules/risk/riskEnumerators';

export default [
  {
    name: 'reference',
    label: i18n('entities.risk.fields.reference'),
    schema: schemas.integer(
      i18n('entities.risk.fields.reference'),
      {
        required: true,
      },
    ),
  },
  {
    name: 'title',
    label: i18n('entities.risk.fields.title'),
    schema: schemas.string(
      i18n('entities.risk.fields.title'),
      {
        required: true,
        min: 1,
        max: 250,
      },
    ),
  },
  {
    name: 'description',
    label: i18n('entities.risk.fields.description'),
    schema: schemas.string(
      i18n('entities.risk.fields.description'),
      {
        max: 2500,
        min: 1,
      },
    ),
  },
  {
    name: 'category',
    label: i18n('entities.risk.fields.category'),
    schema: schemas.relationToOne(
      i18n('entities.risk.fields.category'),
      {
        required: true,
      },
    ),
  },
  {
    name: 'status',
    label: i18n('entities.risk.fields.status'),
    schema: schemas.enumerator(
      i18n('entities.risk.fields.status'),
      {
        required: true,
        options: riskEnumerators.status,
      },
    ),
  },
  {
    name: 'owner',
    label: i18n('entities.risk.fields.owner'),
    schema: schemas.relationToOne(
      i18n('entities.risk.fields.owner'),
      {},
    ),
  },
  {
    name: 'likelihood',
    label: i18n('entities.risk.fields.likelihood'),
    schema: schemas.enumerator(
      i18n('entities.risk.fields.likelihood'),
      {
        required: true,
        options: riskEnumerators.likelihood,
      },
    ),
  },
  {
    name: 'impact',
    label: i18n('entities.risk.fields.impact'),
    schema: schemas.enumerator(
      i18n('entities.risk.fields.impact'),
      {
        required: true,
        options: riskEnumerators.impact,
      },
    ),
  },
  {
    name: 'inherentScore',
    label: i18n('entities.risk.fields.inherentScore'),
    schema: schemas.integer(
      i18n('entities.risk.fields.inherentScore'),
      {
        required: true,
      },
    ),
  },
  {
    name: 'residualScore',
    label: i18n('entities.risk.fields.residualScore'),
    schema: schemas.integer(
      i18n('entities.risk.fields.residualScore'),
      {
        required: true,
      },
    ),
  },
  {
    name: 'cost',
    label: i18n('entities.risk.fields.cost'),
    schema: schemas.decimal(
      i18n('entities.risk.fields.cost'),
      {
        required: true,
      },
    ),
  },
  {
    name: 'mitigationPlan',
    label: i18n('entities.risk.fields.mitigationPlan'),
    schema: schemas.string(
      i18n('entities.risk.fields.mitigationPlan'),
      {
        min: 1,
        max: 5000,
      },
    ),
  },
  {
    name: 'tasks',
    label: i18n('entities.risk.fields.tasks'),
    schema: schemas.relationToMany(
      i18n('entities.risk.fields.tasks'),
      {},
    ),
  },
];
