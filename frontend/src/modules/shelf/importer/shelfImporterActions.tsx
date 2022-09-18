import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/shelf/importer/shelfImporterSelectors';
import ShelfService from 'src/modules/shelf/shelfService';
import fields from 'src/modules/shelf/importer/shelfImporterFields';
import { i18n } from 'src/i18n';

const shelfImporterActions = importerActions(
  'SECTION_IMPORTER',
  selectors,
  ShelfService.import,
  fields,
  i18n('entities.shelf.importer.fileName'),
);

export default shelfImporterActions;
