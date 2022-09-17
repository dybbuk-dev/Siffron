import SectionService from 'src/modules/section/sectionService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'SECTION_FORM';

const sectionFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: sectionFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await SectionService.find(id);
      }

      dispatch({
        type: sectionFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: sectionFormActions.INIT_ERROR,
      });

      getHistory().push('/section');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: sectionFormActions.CREATE_STARTED,
      });

      await SectionService.create(values);

      dispatch({
        type: sectionFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.section.create.success'),
      );

      getHistory().push('/section');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: sectionFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: sectionFormActions.UPDATE_STARTED,
      });

      await SectionService.update(id, values);

      dispatch({
        type: sectionFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.section.update.success'),
      );

      getHistory().push('/section');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: sectionFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default sectionFormActions;
