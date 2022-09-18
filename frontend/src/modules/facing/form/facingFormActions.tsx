import FacingService from 'src/modules/facing/facingService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'SECTION_FORM';

const facingFormActions = {
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
        type: facingFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await FacingService.find(id);
      }

      dispatch({
        type: facingFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: facingFormActions.INIT_ERROR,
      });

      getHistory().push('/facing');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: facingFormActions.CREATE_STARTED,
      });

      await FacingService.create(values);

      dispatch({
        type: facingFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.facing.create.success'),
      );

      getHistory().push('/facing');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: facingFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: facingFormActions.UPDATE_STARTED,
      });

      await FacingService.update(id, values);

      dispatch({
        type: facingFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.facing.update.success'),
      );

      getHistory().push('/facing');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: facingFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default facingFormActions;
