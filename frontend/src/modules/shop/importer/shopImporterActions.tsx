import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/shop/importer/shopImporterSelectors';
import ShopService from 'src/modules/shop/shopService';
import fields from 'src/modules/shop/importer/shopImporterFields';
import { i18n } from 'src/i18n';

const shopImporterActions = importerActions(
  'SHOP_IMPORTER',
  selectors,
  ShopService.import,
  fields,
  i18n('entities.shop.importer.fileName'),
);

export default shopImporterActions;
