import listActions from 'src/modules/section/list/sectionListActions';
import SectionService from 'src/modules/section/sectionService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'SECTION_DESTROY';

const sectionDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: sectionDestroyActions.DESTROY_STARTED,
      });

      await SectionService.destroyAll([id]);

      dispatch({
        type: sectionDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.section.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/section');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: sectionDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: sectionDestroyActions.DESTROY_ALL_STARTED,
      });

      await SectionService.destroyAll(ids);

      dispatch({
        type: sectionDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.section.destroyAll.success'),
      );

      getHistory().push('/section');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: sectionDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default sectionDestroyActions;
