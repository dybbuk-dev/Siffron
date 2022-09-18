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
    collapseName: 'companies',
    i18n: 'tenant.list.title',
    parent: '/person-name-breadcrumb',
    loader: () =>
      import('src/view/tenant/list/TenantListPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/tenant/new',
    collapseName: 'companies',
    i18n: 'tenant.new.title',
    parent: '/tenant',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/tenant/:id/edit',
    collapseName: 'companies',
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
    collapseName: 'users',
    parent: '/person-name-breadcrumb',
    loader: () => import('src/view/user/list/UserPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/user/new',
    i18n: 'user.new.title',
    collapseName: 'users',
    parent: '/user',
    loader: () => import('src/view/user/new/UserNewPage'),
    permissionRequired: permissions.userCreate,
    exact: true,
  },

  {
    path: '/user/importer',
    i18n: 'user.importer.title',
    collapseName: 'users',
    parent: '/user',
    loader: () =>
      import('src/view/user/importer/UserImporterPage'),
    permissionRequired: permissions.userImport,
    exact: true,
  },

  {
    path: '/user/:id/edit',
    i18n: 'user.edit.title',
    collapseName: 'users',
    parent: '/user',
    loader: () => import('src/view/user/edit/UserEditPage'),
    permissionRequired: permissions.userEdit,
    exact: true,
  },

  {
    path: '/user/:id',
    i18n: 'user.view.title',
    collapseName: 'users',
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
    path: '/management',
    collapseName: 'managements',
    i18n: 'collapses.management.menu',
    parent: '/',
    redirect: '/shop',
    permissionRequired: null,
    virtual: true,
  },

  {
    path: '/shop',
    collapseName: 'managements',
    i18n: 'entities.shop.menu',
    parent: '/management',
    loader: () => import('src/view/shop/list/ShopListPage'),
    permissionRequired: permissions.shopRead,
    exact: true,
  },

  {
    path: '/shop/new',
    collapseName: 'managements',
    i18n: 'entities.shop.new.title',
    parent: '/shop',
    loader: () => import('src/view/shop/form/ShopFormPage'),
    permissionRequired: permissions.shopCreate,
    exact: true,
  },

  {
    path: '/shop/importer',
    collapseName: 'managements',
    i18n: 'entities.shop.importer.title',
    parent: '/shop',
    loader: () =>
      import('src/view/shop/importer/ShopImporterPage'),
    permissionRequired: permissions.shopImport,
    exact: true,
  },

  {
    path: '/shop/:id/edit',
    collapseName: 'managements',
    i18n: 'entities.shop.edit.title',
    parent: '/shop',
    loader: () => import('src/view/shop/form/ShopFormPage'),
    permissionRequired: permissions.shopEdit,
    exact: true,
  },

  {
    path: '/shop/:id',
    collapseName: 'managements',
    i18n: 'entities.shop.view.title',
    parent: '/shop',
    loader: () => import('src/view/shop/view/ShopViewPage'),
    permissionRequired: permissions.shopRead,
    exact: true,
  },

  {
    path: '/department',
    collapseName: 'managements',
    i18n: 'entities.department.menu',
    parent: '/management',
    loader: () =>
      import('src/view/department/list/DepartmentListPage'),
    permissionRequired: permissions.departmentRead,
    exact: true,
  },

  {
    path: '/department/new',
    collapseName: 'managements',
    i18n: 'entities.department.new.title',
    parent: '/department',
    loader: () =>
      import('src/view/department/form/DepartmentFormPage'),
    permissionRequired: permissions.departmentCreate,
    exact: true,
  },

  {
    path: '/department/importer',
    collapseName: 'managements',
    i18n: 'entities.department.importer.title',
    parent: '/department',
    loader: () =>
      import(
        'src/view/department/importer/DepartmentImporterPage'
      ),
    permissionRequired: permissions.departmentImport,
    exact: true,
  },

  {
    path: '/department/:id/edit',
    collapseName: 'managements',
    i18n: 'entities.department.edit.title',
    parent: '/department',
    loader: () =>
      import('src/view/department/form/DepartmentFormPage'),
    permissionRequired: permissions.departmentEdit,
    exact: true,
  },

  {
    path: '/department/:id',
    collapseName: 'managements',
    i18n: 'entities.department.view.title',
    parent: '/department',
    loader: () =>
      import('src/view/department/view/DepartmentViewPage'),
    permissionRequired: permissions.departmentRead,
    exact: true,
  },

  {
    path: '/section',
    collapseName: 'managements',
    i18n: 'entities.section.menu',
    parent: '/management',
    loader: () =>
      import('src/view/section/list/SectionListPage'),
    permissionRequired: permissions.sectionRead,
    exact: true,
  },

  {
    path: '/section/new',
    collapseName: 'managements',
    i18n: 'entities.section.new.title',
    parent: '/section',
    loader: () =>
      import('src/view/section/form/SectionFormPage'),
    permissionRequired: permissions.sectionCreate,
    exact: true,
  },

  {
    path: '/section/importer',
    collapseName: 'managements',
    i18n: 'entities.section.importer.title',
    parent: '/section',
    loader: () =>
      import(
        'src/view/section/importer/SectionImporterPage'
      ),
    permissionRequired: permissions.sectionImport,
    exact: true,
  },

  {
    path: '/section/:id/edit',
    collapseName: 'managements',
    i18n: 'entities.section.edit.title',
    parent: '/section',
    loader: () =>
      import('src/view/section/form/SectionFormPage'),
    permissionRequired: permissions.sectionEdit,
    exact: true,
  },

  {
    path: '/section/:id',
    collapseName: 'managements',
    i18n: 'entities.section.view.title',
    parent: '/section',
    loader: () =>
      import('src/view/section/view/SectionViewPage'),
    permissionRequired: permissions.sectionRead,
    exact: true,
  },

  {
    path: '/shelf',
    collapseName: 'managements',
    i18n: 'entities.shelf.menu',
    parent: '/management',
    loader: () =>
      import('src/view/shelf/list/ShelfListPage'),
    permissionRequired: permissions.shelfRead,
    exact: true,
  },

  {
    path: '/shelf/new',
    collapseName: 'managements',
    i18n: 'entities.shelf.new.title',
    parent: '/shelf',
    loader: () =>
      import('src/view/shelf/form/ShelfFormPage'),
    permissionRequired: permissions.shelfCreate,
    exact: true,
  },

  {
    path: '/shelf/importer',
    collapseName: 'managements',
    i18n: 'entities.shelf.importer.title',
    parent: '/shelf',
    loader: () =>
      import('src/view/shelf/importer/ShelfImporterPage'),
    permissionRequired: permissions.shelfImport,
    exact: true,
  },

  {
    path: '/shelf/:id/edit',
    collapseName: 'managements',
    i18n: 'entities.shelf.edit.title',
    parent: '/shelf',
    loader: () =>
      import('src/view/shelf/form/ShelfFormPage'),
    permissionRequired: permissions.shelfEdit,
    exact: true,
  },

  {
    path: '/shelf/:id',
    collapseName: 'managements',
    i18n: 'entities.shelf.view.title',
    parent: '/shelf',
    loader: () =>
      import('src/view/shelf/view/ShelfViewPage'),
    permissionRequired: permissions.shelfRead,
    exact: true,
  },

  {
    path: '/facing',
    collapseName: 'managements',
    i18n: 'entities.facing.menu',
    parent: '/management',
    loader: () =>
      import('src/view/facing/list/FacingListPage'),
    permissionRequired: permissions.facingRead,
    exact: true,
  },

  {
    path: '/facing/new',
    collapseName: 'managements',
    i18n: 'entities.facing.new.title',
    parent: '/facing',
    loader: () =>
      import('src/view/facing/form/FacingFormPage'),
    permissionRequired: permissions.facingCreate,
    exact: true,
  },

  {
    path: '/facing/importer',
    collapseName: 'managements',
    i18n: 'entities.facing.importer.title',
    parent: '/facing',
    loader: () =>
      import('src/view/facing/importer/FacingImporterPage'),
    permissionRequired: permissions.facingImport,
    exact: true,
  },

  {
    path: '/facing/:id/edit',
    collapseName: 'managements',
    i18n: 'entities.facing.edit.title',
    parent: '/facing',
    loader: () =>
      import('src/view/facing/form/FacingFormPage'),
    permissionRequired: permissions.facingEdit,
    exact: true,
  },

  {
    path: '/facing/:id',
    collapseName: 'managements',
    i18n: 'entities.facing.view.title',
    parent: '/facing',
    loader: () =>
      import('src/view/facing/view/FacingViewPage'),
    permissionRequired: permissions.facingRead,
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
