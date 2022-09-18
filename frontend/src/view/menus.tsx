import Permissions from 'src/security/permissions';
import { i18n } from 'src/i18n';
import { Icon } from '@mui/material';

const permissions = Permissions.values;

const menus = [
  {
    path: '/',
    exact: true,
    icon: <Icon fontSize="medium">dashboard</Icon>,
    name: i18n('dashboard.menu'),
    permissionRequired: null,
  },

  {
    name: i18n('collapses.management.menu'),
    key: 'managements',
    icon: <Icon fontSize="medium">poll</Icon>,
    collapse: [
      {
        path: '/shop',
        permissionRequired: permissions.shopRead,
        name: i18n('entities.shop.menu'),
        icon: <Icon>store</Icon>,
      },

      {
        path: '/department',
        permissionRequired: permissions.departmentRead,
        name: i18n('entities.department.menu'),
        icon: <Icon>view_comfy</Icon>,
      },

      {
        path: '/section',
        permissionRequired: permissions.sectionRead,
        name: i18n('entities.section.menu'),
        icon: <Icon>window</Icon>,
      },

      {
        path: '/shelf',
        permissionRequired: permissions.shelfRead,
        name: i18n('entities.shelf.menu'),
        icon: <Icon>web_stories</Icon>,
      },

      {
        path: '/facing',
        permissionRequired: permissions.facingRead,
        name: i18n('entities.facing.menu'),
        icon: <Icon>inventory</Icon>,
      },
    ],
  },

  {
    name: i18n('settings.menu'),
    key: 'settings',
    icon: <Icon fontSize="medium">settings</Icon>,
    permissionRequired: permissions.settingsEdit,
    collapse: [
      {
        path: '/settings',
        name: i18n('settings.tenant'),
        permissionRequired: permissions.settingsEdit,
        icon: <Icon>room_preferences</Icon>,
      },

      {
        path: '/audit-logs',
        name: i18n('auditLog.menu'),
        permissionRequired: permissions.auditLogRead,
        icon: <Icon>restore</Icon>,
      },
    ],
  },
].filter(Boolean);

const profileRoutes = [
  {
    name: i18n('auth.profile.title'),
    path: '/profile',
    icon: <Icon>person_outline</Icon>,
  },
  {
    name: i18n('auth.passwordChange.title'),
    path: '/password-change',
    icon: <Icon>lock</Icon>,
  },
].filter(Boolean);

const tenantRoutes = [
  {
    name: i18n('tenant.list.title'),
    path: '/tenant',
    icon: <Icon>apps</Icon>,
  },
].filter(Boolean);

const userRoutes = [
  {
    path: '/user',
    name: i18n('user.menu'),
    permissionRequired: permissions.userRead,
    icon: <Icon fontSize="medium">person</Icon>,
  },
].filter(Boolean);

export { menus, profileRoutes, tenantRoutes, userRoutes };
