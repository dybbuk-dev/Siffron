import { connectRouter } from 'connected-react-router';
import layout from 'src/modules/layout/layoutReducers';
import auth from 'src/modules/auth/authReducers';
import tenant from 'src/modules/tenant/tenantReducers';
import plan from 'src/modules/plan/planReducers';
import user from 'src/modules/user/userReducers';
import auditLog from 'src/modules/auditLog/auditLogReducers';
import settings from 'src/modules/settings/settingsReducers';
import vendor from 'src/modules/vendor/vendorReducers';
import vendorCategory from 'src/modules/vendorCategory/vendorCategoryReducers';
import task from 'src/modules/task/taskReducers';
import taskPriority from 'src/modules/taskPriority/taskPriorityReducers';
import taskList from 'src/modules/taskList/taskListReducers';
import note from 'src/modules/note/noteReducers';
import risk from 'src/modules/risk/riskReducers';
import riskCategory from 'src/modules/riskCategory/riskCategoryReducers';
import product from 'src/modules/product/productReducers';
import productCategory from 'src/modules/productCategory/productCategoryReducers';
import organizationProfile from 'src/modules/organizationProfile/organizationProfileReducers';
import { combineReducers } from 'redux';
import mui from 'src/modules/mui/muiReducers';
import widget from 'src/modules/widget/widgetReducers';
import taskInstance from 'src/modules/taskInstance/taskInstanceReducers';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    mui,
    widget,
    taskInstance,
    layout,
    auth,
    tenant,
    plan,
    user,
    auditLog,
    settings,
    vendor,
    vendorCategory,
    task,
    taskPriority,
    taskList,
    note,
    risk,
    riskCategory,
    product,
    productCategory,
    organizationProfile,
  });
