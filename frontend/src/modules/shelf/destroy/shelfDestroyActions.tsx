import listActions from 'src/modules/shelf/list/shelfListActions';
import ShelfService from 'src/modules/shelf/shelfService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'SECTION_DESTROY';

const shelfDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: shelfDestroyActions.DESTROY_STARTED,
      });

      await ShelfService.destroyAll([id]);

      dispatch({
        type: shelfDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.shelf.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/shelf');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: shelfDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: shelfDestroyActions.DESTROY_ALL_STARTED,
      });

      await ShelfService.destroyAll(ids);

      dispatch({
        type: shelfDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.shelf.destroyAll.success'),
      );

      getHistory().push('/shelf');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: shelfDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default shelfDestroyActions;
