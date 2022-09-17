import SectionService from 'src/modules/section/sectionService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'SHOP_VIEW';

const sectionViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: sectionViewActions.FIND_STARTED,
      });

      const record = await SectionService.find(id);

      dispatch({
        type: sectionViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: sectionViewActions.FIND_ERROR,
      });

      getHistory().push('/section');
    }
  },
};

export default sectionViewActions;
