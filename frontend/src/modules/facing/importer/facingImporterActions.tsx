import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/facing/importer/facingImporterSelectors';
import FacingService from 'src/modules/facing/facingService';
import fields from 'src/modules/facing/importer/facingImporterFields';
import { i18n } from 'src/i18n';

const facingImporterActions = importerActions(
  'SECTION_IMPORTER',
  selectors,
  FacingService.import,
  fields,
  i18n('entities.facing.importer.fileName'),
);

export default facingImporterActions;
