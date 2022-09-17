import ShopService from 'src/modules/shop/shopService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'SHOP_VIEW';

const shopViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: shopViewActions.FIND_STARTED,
      });

      const record = await ShopService.find(id);

      dispatch({
        type: shopViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: shopViewActions.FIND_ERROR,
      });

      getHistory().push('/shop');
    }
  },
};

export default shopViewActions;
