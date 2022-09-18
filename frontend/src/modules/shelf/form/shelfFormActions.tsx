import ShelfService from 'src/modules/shelf/shelfService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'SECTION_FORM';

const shelfFormActions = {
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
        type: shelfFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ShelfService.find(id);
      }

      dispatch({
        type: shelfFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: shelfFormActions.INIT_ERROR,
      });

      getHistory().push('/shelf');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: shelfFormActions.CREATE_STARTED,
      });

      await ShelfService.create(values);

      dispatch({
        type: shelfFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.shelf.create.success'),
      );

      getHistory().push('/shelf');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: shelfFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: shelfFormActions.UPDATE_STARTED,
      });

      await ShelfService.update(id, values);

      dispatch({
        type: shelfFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.shelf.update.success'),
      );

      getHistory().push('/shelf');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: shelfFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default shelfFormActions;
