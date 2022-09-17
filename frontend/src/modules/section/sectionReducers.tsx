import list from 'src/modules/section/list/sectionListReducers';
import form from 'src/modules/section/form/sectionFormReducers';
import view from 'src/modules/section/view/sectionViewReducers';
import destroy from 'src/modules/section/destroy/sectionDestroyReducers';
import importerReducer from 'src/modules/section/importer/sectionImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
