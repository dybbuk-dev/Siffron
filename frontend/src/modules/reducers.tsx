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
import shelf from 'src/modules/shelf/shelfReducers';
import facing from 'src/modules/facing/facingReducers';
import { combineReducers } from 'redux';
import mui from 'src/modules/mui/muiReducers';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    mui,
    layout,
    auth,
    shop,
    department,
    section,
    shelf,
    facing,
    tenant,
    user,
    auditLog,
    settings,
  });
