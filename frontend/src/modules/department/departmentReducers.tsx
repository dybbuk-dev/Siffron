import list from 'src/modules/department/list/departmentListReducers';
import form from 'src/modules/department/form/departmentFormReducers';
import view from 'src/modules/department/view/departmentViewReducers';
import destroy from 'src/modules/department/destroy/departmentDestroyReducers';
import importerReducer from 'src/modules/department/importer/departmentImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
