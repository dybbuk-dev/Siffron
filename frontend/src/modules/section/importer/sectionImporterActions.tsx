import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/section/importer/sectionImporterSelectors';
import SectionService from 'src/modules/section/sectionService';
import fields from 'src/modules/section/importer/sectionImporterFields';
import { i18n } from 'src/i18n';

const sectionImporterActions = importerActions(
  'SECTION_IMPORTER',
  selectors,
  SectionService.import,
  fields,
  i18n('entities.section.importer.fileName'),
);

export default sectionImporterActions;
