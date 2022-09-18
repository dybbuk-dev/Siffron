import FacingService from 'src/modules/facing/facingService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'SHOP_VIEW';

const facingViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: facingViewActions.FIND_STARTED,
      });

      const record = await FacingService.find(id);

      dispatch({
        type: facingViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: facingViewActions.FIND_ERROR,
      });

      getHistory().push('/facing');
    }
  },
};

export default facingViewActions;
