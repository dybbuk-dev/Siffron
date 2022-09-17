import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/department/importer/departmentImporterSelectors';
import DepartmentService from 'src/modules/department/departmentService';
import fields from 'src/modules/department/importer/departmentImporterFields';
import { i18n } from 'src/i18n';

const departmentImporterActions = importerActions(
  'DEPARTMENT_IMPORTER',
  selectors,
  DepartmentService.import,
  fields,
  i18n('entities.department.importer.fileName'),
);

export default departmentImporterActions;
