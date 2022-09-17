import list from 'src/modules/shop/list/shopListReducers';
import form from 'src/modules/shop/form/shopFormReducers';
import view from 'src/modules/shop/view/shopViewReducers';
import destroy from 'src/modules/shop/destroy/shopDestroyReducers';
import importerReducer from 'src/modules/shop/importer/shopImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
