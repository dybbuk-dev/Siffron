import list from 'src/modules/shelf/list/shelfListReducers';
import form from 'src/modules/shelf/form/shelfFormReducers';
import view from 'src/modules/shelf/view/shelfViewReducers';
import destroy from 'src/modules/shelf/destroy/shelfDestroyReducers';
import importerReducer from 'src/modules/shelf/importer/shelfImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
