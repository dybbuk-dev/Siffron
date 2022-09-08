import Permissions from 'src/security/permissions';
import { i18n } from 'src/i18n';
import config from 'src/config';
import { Icon } from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import InventoryIcon from '@mui/icons-material/Inventory';

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
    path: '/organization-profile',
    name: i18n('entities.organizationProfile.menu'),
    permissionRequired: permissions.organizationProfileRead,
    icon: <Icon>business</Icon>,
  },

  {
    name: i18n('collapses.tasks.menu'),
    key: 'tasks',
    icon: <Icon fontSize="medium">assignment</Icon>,
    collapse: [
      {
        path: '/task',
        permissionRequired: permissions.taskRead,
        name: i18n('entities.task.menu'),
        icon: <Icon>task</Icon>,
      },

      {
        path: '/task-priority',
        permissionRequired: permissions.taskPriorityRead,
        name: i18n('entities.taskPriority.menu'),
        icon: <Icon>low_priority</Icon>,
      },

      {
        path: '/task-list',
        permissionRequired: permissions.taskListRead,
        name: i18n('entities.taskList.menu'),
        icon: <Icon>list_alt</Icon>,
      },

      {
        path: '/note',
        permissionRequired: permissions.noteRead,
        name: i18n('entities.note.menu'),
        icon: <Icon>note</Icon>,
      },
    ],
  },

  {
    name: i18n('collapses.vendors.menu'),
    key: 'vendor-management',
    icon: <StorefrontIcon fontSize="medium" />,
    collapse: [
      {
        path: '/vendor',
        permissionRequired: permissions.vendorRead,
        name: i18n('entities.vendor.menu'),
        icon: <StorefrontIcon />,
      },

      {
        path: '/vendor-category',
        permissionRequired: permissions.vendorCategoryRead,
        name: i18n('entities.vendorCategory.menu'),
        icon: <Icon>category</Icon>,
      },
    ],
  },

  {
    name: i18n('collapses.risks.menu'),
    key: 'risk-management',
    icon: <Icon fontSize="medium">gpp_maybe</Icon>,
    collapse: [
      {
        path: '/risk',
        permissionRequired: permissions.riskRead,
        name: i18n('entities.risk.menu'),
        icon: <Icon>assignment_late</Icon>,
      },

      {
        path: '/risk-category',
        permissionRequired: permissions.riskCategoryRead,
        name: i18n('entities.riskCategory.menu'),
        icon: <Icon>crisis_alert</Icon>,
      },
    ],
  },

  {
    name: i18n('collapses.marketplace.menu'),
    key: 'marketplace',
    icon: <Icon fontSize="medium">store_front</Icon>,
    collapse: [
      {
        path: '/product',
        permissionRequired: permissions.productRead,
        name: i18n('entities.product.menu'),
        icon: <InventoryIcon />,
      },

      {
        path: '/product-category',
        permissionRequired: permissions.productCategoryRead,
        name: i18n('entities.productCategory.menu'),
        icon: <Icon>category</Icon>,
      },
    ],
  },

  {
    name: i18n('collapses.reports.menu'),
    key: 'reports',
    icon: <Icon fontSize="medium">assessment</Icon>,
    collapse: [
      {
        path: '/report/tasks-by-month',
        permissionRequired: permissions.taskRead,
        name: i18n('reports.tasksByMonth.menu'),
        icon: <Icon>task</Icon>,
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

const planRoutes = [
  config.isPlanEnabled && {
    path: '/plan',
    permissionRequired: permissions.planRead,
    icon: (
      <Icon fontSize="medium">credit_card_outlined</Icon>
    ),
    name: i18n('plan.menu'),
  },
].filter(Boolean);

export {
  menus,
  profileRoutes,
  tenantRoutes,
  userRoutes,
  planRoutes,
};
