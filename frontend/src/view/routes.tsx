import Permissions from 'src/security/permissions';
const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    i18n: 'dashboard.menu',
    loader: () =>
      import('src/view/dashboard/DashboardPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/report',
    collapseName: 'reports',
    i18n: 'collapses.reports.menu',
    parent: '/',
    redirect: '/report/tasks-by-month',
    permissionRequired: null,
    virtual: true,
  },

  {
    path: '/report/tasks-by-month',
    collapseName: 'reports',
    i18n: 'reports.tasksByMonth.menu',
    parent: '/report',
    loader: () =>
      import('src/view/report/view/TasksByMonthPage'),
    permissionRequired: permissions.taskRead,
    exact: true,
  },

  {
    path: '/person-name-breadcrumb',
    collapseName: 'my-profile',
    // labelCode: '{USER_TEXT}',
    i18n: 'roles.admin.label',
    parent: '/',
    redirect: '/profile',
    permissionRequired: null,
    virtual: true,
  },

  {
    path: '/profile',
    collapseName: 'my-profile',
    i18n: 'auth.profile.title',
    parent: '/person-name-breadcrumb',
    loader: () => import('src/view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/password-change',
    collapseName: 'my-profile',
    i18n: 'auth.passwordChange.title',
    parent: '/person-name-breadcrumb',
    loader: () =>
      import('src/view/auth/PasswordChangeFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/tenant',
    collapseName: 'my-profile',
    i18n: 'tenant.list.title',
    parent: '/person-name-breadcrumb',
    loader: () =>
      import('src/view/tenant/list/TenantListPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/tenant/new',
    collapseName: 'my-profile',
    i18n: 'tenant.new.title',
    parent: '/tenant',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/tenant/:id/edit',
    collapseName: 'my-profile',
    i18n: 'tenant.edit.title',
    parent: '/tenant',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/user',
    i18n: 'user.menu',
    collapseName: 'my-profile',
    parent: '/person-name-breadcrumb',
    loader: () => import('src/view/user/list/UserPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/user/new',
    i18n: 'user.new.title',
    collapseName: 'my-profile',
    parent: '/user',
    loader: () => import('src/view/user/new/UserNewPage'),
    permissionRequired: permissions.userCreate,
    exact: true,
  },

  {
    path: '/user/importer',
    i18n: 'user.importer.title',
    collapseName: 'my-profile',
    parent: '/user',
    loader: () =>
      import('src/view/user/importer/UserImporterPage'),
    permissionRequired: permissions.userImport,
    exact: true,
  },

  {
    path: '/user/:id/edit',
    i18n: 'user.edit.title',
    collapseName: 'my-profile',
    parent: '/user',
    loader: () => import('src/view/user/edit/UserEditPage'),
    permissionRequired: permissions.userEdit,
    exact: true,
  },

  {
    path: '/user/:id',
    i18n: 'user.view.title',
    collapseName: 'my-profile',
    parent: '/user',
    loader: () => import('src/view/user/view/UserViewPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/settings-breadcrumb',
    collapseName: 'settings',
    i18n: 'settings.title',
    parent: '/',
    redirect: '/settings',
    permissionRequired: null,
    virtual: true,
  },

  {
    path: '/audit-logs',
    collapseName: 'settings',
    i18n: 'auditLog.menu',
    parent: '/settings-breadcrumb',
    loader: () => import('src/view/auditLog/AuditLogPage'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    collapseName: 'settings',
    i18n: 'settings.tenant',
    parent: '/settings-breadcrumb',
    loader: () =>
      import('src/view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '/tasks-breadcrumb',
    collapseName: 'tasks',
    i18n: 'collapses.tasks.menu',
    parent: '/',
    redirect: '/task',
    permissionRequired: null,
    virtual: true,
  },

  {
    path: '/task',
    collapseName: 'tasks',
    i18n: 'entities.task.menu',
    parent: '/tasks-breadcrumb',
    loader: () => import('src/view/task/list/TaskListPage'),
    permissionRequired: permissions.taskRead,
    exact: true,
  },

  {
    path: '/task/new',
    collapseName: 'tasks',
    i18n: 'entities.task.new.title',
    parent: '/task',
    loader: () => import('src/view/task/form/TaskFormPage'),
    permissionRequired: permissions.taskCreate,
    exact: true,
  },

  {
    path: '/task/importer',
    collapseName: 'tasks',
    i18n: 'entities.task.importer.title',
    parent: '/task',
    loader: () =>
      import('src/view/task/importer/TaskImporterPage'),
    permissionRequired: permissions.taskImport,
    exact: true,
  },

  {
    path: '/task/:id/edit',
    collapseName: 'tasks',
    i18n: 'entities.task.edit.title',
    parent: '/task',
    loader: () => import('src/view/task/form/TaskFormPage'),
    permissionRequired: permissions.taskEdit,
    exact: true,
  },

  {
    path: '/task/:id',
    collapseName: 'tasks',
    i18n: 'entities.task.view.title',
    parent: '/task',
    loader: () => import('src/view/task/view/TaskViewPage'),
    permissionRequired: permissions.taskRead,
    exact: true,
  },

  {
    path: '/task-priority',
    collapseName: 'tasks',
    i18n: 'entities.taskPriority.menu',
    parent: '/tasks-breadcrumb',
    loader: () =>
      import(
        'src/view/taskPriority/list/TaskPriorityListPage'
      ),
    permissionRequired: permissions.taskPriorityRead,
    exact: true,
  },

  {
    path: '/task-priority/new',
    collapseName: 'tasks',
    i18n: 'entities.taskPriority.new.title',
    parent: '/task-priority',
    loader: () =>
      import(
        'src/view/taskPriority/form/TaskPriorityFormPage'
      ),
    permissionRequired: permissions.taskPriorityCreate,
    exact: true,
  },

  {
    path: '/task-priority/importer',
    collapseName: 'tasks',
    i18n: 'entities.taskPriority.importer.title',
    parent: '/task-priority',
    loader: () =>
      import(
        'src/view/taskPriority/importer/TaskPriorityImporterPage'
      ),
    permissionRequired: permissions.taskPriorityImport,
    exact: true,
  },

  {
    path: '/task-priority/:id/edit',
    collapseName: 'tasks',
    i18n: 'entities.taskPriority.edit.title',
    parent: '/task-priority',
    loader: () =>
      import(
        'src/view/taskPriority/form/TaskPriorityFormPage'
      ),
    permissionRequired: permissions.taskPriorityEdit,
    exact: true,
  },

  {
    path: '/task-priority/:id',
    collapseName: 'tasks',
    i18n: 'entities.taskPriority.view.title',
    parent: '/task-priority',
    loader: () =>
      import(
        'src/view/taskPriority/view/TaskPriorityViewPage'
      ),
    permissionRequired: permissions.taskPriorityRead,
    exact: true,
  },

  {
    path: '/task-list',
    collapseName: 'tasks',
    i18n: 'entities.taskList.menu',
    parent: '/tasks-breadcrumb',
    loader: () =>
      import('src/view/taskList/list/TaskListListPage'),
    permissionRequired: permissions.taskListRead,
    exact: true,
  },

  {
    path: '/task-list/new',
    collapseName: 'tasks',
    i18n: 'entities.taskList.new.title',
    parent: '/task-list',
    loader: () =>
      import('src/view/taskList/form/TaskListFormPage'),
    permissionRequired: permissions.taskListCreate,
    exact: true,
  },

  {
    path: '/task-list/importer',
    collapseName: 'tasks',
    i18n: 'entities.taskList.importer.title',
    parent: '/task-list',
    loader: () =>
      import(
        'src/view/taskList/importer/TaskListImporterPage'
      ),
    permissionRequired: permissions.taskListImport,
    exact: true,
  },

  {
    path: '/task-list/:id/edit',
    collapseName: 'tasks',
    i18n: 'entities.taskList.edit.title',
    parent: '/task-list',
    loader: () =>
      import('src/view/taskList/form/TaskListFormPage'),
    permissionRequired: permissions.taskListEdit,
    exact: true,
  },

  {
    path: '/task-list/:id',
    collapseName: 'tasks',
    i18n: 'entities.taskList.view.title',
    parent: '/task-list',
    loader: () =>
      import('src/view/taskList/view/TaskListViewPage'),
    permissionRequired: permissions.taskListRead,
    exact: true,
  },
].filter(Boolean);

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('src/view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('src/view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () =>
      import('src/view/auth/ForgotPasswordPage'),
  },
].filter(Boolean);

const emptyTenantRoutes = [
  {
    path: '/auth/tenant',
    loader: () => import('src/view/auth/TenantPage'),
  },
].filter(Boolean);

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () =>
      import('src/view/auth/EmptyPermissionsPage'),
  },
].filter(Boolean);

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () =>
      import('src/view/auth/EmailUnverifiedPage'),
  },
].filter(Boolean);

const simpleRoutes = [
  {
    path: '/auth/password-reset',
    loader: () => import('src/view/auth/PasswordResetPage'),
  },
  {
    path: '/auth/invitation',
    loader: () => import('src/view/auth/InvitationPage'),
  },
  {
    path: '/auth/verify-email',
    loader: () => import('src/view/auth/VerifyEmailPage'),
  },
  {
    path: '/403',
    loader: () =>
      import('src/view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () =>
      import('src/view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () =>
      import('src/view/shared/errors/Error404Page'),
  },
].filter(Boolean);

export default {
  privateRoutes,
  publicRoutes,
  emptyTenantRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};

export function findRoute(url = null, routes = []) {
  return (
    !!url &&
    (routes.find((route) => url === route.path) ||
      routes.find(
        (route) =>
          /\/:[\w\d_-]+/g.test(route.path) &&
          new RegExp(
            `^${route.path.replace(
              /:[\w\d_-]+/g,
              '[\\w\\d]+',
            )}$`,
          ).test(url),
      ))
  );
}

export function matchedRoutes(
  url = null,
  exactOnly = false,
) {
  if (url === null || url === undefined) {
    return null;
  }

  let routes = [];

  const searchRouteStack = (url, exactOnly) => {
    const found = findRoute(url, privateRoutes);

    if (exactOnly === true) {
      return found;
    }

    if (found) {
      routes.push(found);
      if (found.parent && found.parent !== '/') {
        return searchRouteStack(found.parent, exactOnly);
      }
    }

    routes.reverse();

    return routes;
  };

  return searchRouteStack(url, exactOnly);
}
