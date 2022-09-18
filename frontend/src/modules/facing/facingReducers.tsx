import list from 'src/modules/facing/list/facingListReducers';
import form from 'src/modules/facing/form/facingFormReducers';
import view from 'src/modules/facing/view/facingViewReducers';
import destroy from 'src/modules/facing/destroy/facingDestroyReducers';
import importerReducer from 'src/modules/facing/importer/facingImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
