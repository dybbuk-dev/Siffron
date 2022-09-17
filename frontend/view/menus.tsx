import { i18n } from 'src/i18n';
import { Icon } from '@mui/material';
import config from 'src/config';
import Permissions from 'src/security/permissions';

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
    path: '/user',
    name: i18n('user.menu'),
    permissionRequired: permissions.userRead,
    icon: <Icon fontSize="medium">person</Icon>,
  },

  {
    path: '/author',
    name: i18n('author.menu'),
    permissionRequired: permissions.authorRead,
    icon: <Icon fontSize="medium">recent_actors</Icon>,
  },

  {
    name: i18n('collapses.affiliateLink.menu'),
    key: 'affiliateLinks',
    icon: <Icon fontSize="medium">share</Icon>,
    collapse: [
      {
        path: '/affiliate-link',
        permissionRequired: permissions.affiliateLinkRead,
        name: i18n('entities.affiliateLink.menu'),
      },
      {
        path: '/tracking-parameter',
        permissionRequired:
          permissions.trackingParameterRead,
        name: i18n('entities.trackingParameter.menu'),
      },
    ],
  },

  {
    name: i18n('collapses.blog.menu'),
    key: 'blog',
    icon: <Icon fontSize="medium">article</Icon>,
    collapse: [
      {
        path: '/blog',
        permissionRequired: permissions.blogRead,
        name: i18n('entities.blog.menu'),
      },
      {
        path: '/blog-comment',
        permissionRequired: permissions.blogCommentRead,
        name: i18n('entities.blogComment.menu'),
      },
    ],
  },

  {
    name: i18n('collapses.routes.menu'),
    key: 'routes',
    icon: <Icon fontSize="medium">signpost</Icon>,
    collapse: [
      {
        path: '/navigation',
        permissionRequired: permissions.navigationRead,
        name: i18n('entities.navigation.menu'),
      },
      {
        path: '/category',
        permissionRequired: permissions.categoryRead,
        name: i18n('entities.category.menu'),
      },
    ],
  },

  {
    path: '/broker',
    name: i18n('entities.broker.menu'),
    permissionRequired: permissions.brokerRead,
    icon: <Icon fontSize="medium">badge</Icon>,
  },

  {
    path: '/broker-post',
    name: i18n('entities.brokerPost.menu'),
    permissionRequired: permissions.brokerPostRead,
    icon: <Icon fontSize="medium">comment</Icon>,
  },

  {
    path: '/news',
    name: i18n('entities.news.menu'),
    permissionRequired: permissions.newsRead,
    icon: <Icon fontSize="medium">newspaper</Icon>,
  },

  {
    name: i18n('collapses.promotion.menu'),
    key: 'promotion',
    icon: <Icon fontSize="medium">view_carousel</Icon>,
    collapse: [
      {
        path: '/open-x',
        permissionRequired: permissions.openxRead,
        name: i18n('entities.openx.menu'),
      },
      {
        path: '/promotion',
        permissionRequired: permissions.promotionRead,
        name: i18n('entities.promotion.menu'),
      },
    ],
  },

  {
    path: '/page',
    name: i18n('entities.page.menu'),
    permissionRequired: permissions.pageRead,
    icon: <Icon fontSize="medium">description</Icon>,
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

const userRoutes = [].filter(Boolean);

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
