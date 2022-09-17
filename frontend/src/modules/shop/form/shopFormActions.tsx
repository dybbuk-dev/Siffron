import ShopService from 'src/modules/shop/shopService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'SHOP_FORM';

const shopFormActions = {
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
        type: shopFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ShopService.find(id);
      }

      dispatch({
        type: shopFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: shopFormActions.INIT_ERROR,
      });

      getHistory().push('/shop');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: shopFormActions.CREATE_STARTED,
      });

      await ShopService.create(values);

      dispatch({
        type: shopFormActions.CREATE_SUCCESS,
      });

      Message.success(i18n('entities.shop.create.success'));

      getHistory().push('/shop');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: shopFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: shopFormActions.UPDATE_STARTED,
      });

      await ShopService.update(id, values);

      dispatch({
        type: shopFormActions.UPDATE_SUCCESS,
      });

      Message.success(i18n('entities.shop.update.success'));

      getHistory().push('/shop');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: shopFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default shopFormActions;
