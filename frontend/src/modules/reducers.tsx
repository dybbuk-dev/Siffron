import { connectRouter } from 'connected-react-router';
import layout from 'src/modules/layout/layoutReducers';
import auth from 'src/modules/auth/authReducers';
import tenant from 'src/modules/tenant/tenantReducers';
import user from 'src/modules/user/userReducers';
import auditLog from 'src/modules/auditLog/auditLogReducers';
import settings from 'src/modules/settings/settingsReducers';
import shop from 'src/modules/shop/shopReducers';
import department from 'src/modules/department/departmentReducers';
import section from 'src/modules/section/sectionReducers';
import task from 'src/modules/task/taskReducers';
import taskPriority from 'src/modules/taskPriority/taskPriorityReducers';
import taskList from 'src/modules/taskList/taskListReducers';
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
    shop,
    department,
    section,
    tenant,
    user,
    auditLog,
    settings,
    task,
    taskPriority,
    taskList,
  });
