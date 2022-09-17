import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.section.fields.name'),
    schema: schemas.string(
      i18n('entities.section.fields.name'),
      {
        required: true,
        max: 200,
        min: 1,
      },
    ),
  },
  {
    name: 'department',
    label: i18n('entities.section.fields.department'),
    schema: schemas.relationToOne(
      i18n('entities.section.fields.department'),
      {},
    ),
  },
];
