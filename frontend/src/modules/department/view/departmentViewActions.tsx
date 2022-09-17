import DepartmentService from 'src/modules/department/departmentService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'DEPARTMENT_VIEW';

const departmentViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: departmentViewActions.FIND_STARTED,
      });

      const record = await DepartmentService.find(id);

      dispatch({
        type: departmentViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: departmentViewActions.FIND_ERROR,
      });

      getHistory().push('/department');
    }
  },
};

export default departmentViewActions;
