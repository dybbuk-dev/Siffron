import Permissions from 'src/security/permissions';
import config from 'src/config';
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

  config.isPlanEnabled && {
    path: '/plan',
    i18n: 'plan.title',
    collapseName: 'my-profile',
    parent: '/person-name-breadcrumb',
    loader: () => import('src/view/plan/PlanPage'),
    permissionRequired: permissions.planRead,
    exact: true,
  },

  {
    path: '/user',
    i18n: 'user.menu',
    parent: '/',
    loader: () => import('src/view/user/list/UserPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/user/new',
    i18n: 'user.new.title',
    parent: '/user',
    loader: () => import('src/view/user/new/UserNewPage'),
    permissionRequired: permissions.userCreate,
    exact: true,
  },

  {
    path: '/user/importer',
    i18n: 'user.importer.title',
    parent: '/user',
    loader: () =>
      import('src/view/user/importer/UserImporterPage'),
    permissionRequired: permissions.userImport,
    exact: true,
  },

  {
    path: '/user/:id/edit',
    i18n: 'user.edit.title',
    parent: '/user',
    loader: () => import('src/view/user/edit/UserEditPage'),
    permissionRequired: permissions.userEdit,
    exact: true,
  },

  {
    path: '/user/:id',
    i18n: 'user.view.title',
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

  // #region Broker
  {
    path: '/broker',
    collapseName: 'broker',
    i18n: 'entities.broker.menu',
    parent: '/',
    loader: () =>
      import('src/view/broker/list/BrokerListPage'),
    permissionRequired: permissions.brokerRead,
    exact: true,
  },

  {
    path: '/broker/new',
    collapseName: 'broker',
    i18n: 'entities.broker.new.title',
    parent: '/broker',
    loader: () =>
      import('src/view/broker/form/BrokerFormPage'),
    permissionRequired: permissions.brokerCreate,
    exact: true,
  },

  {
    path: '/broker/importer',
    collapseName: 'broker',
    i18n: 'entities.broker.importer.title',
    parent: '/broker',
    loader: () =>
      import('src/view/broker/importer/BrokerImporterPage'),
    permissionRequired: permissions.brokerImport,
    exact: true,
  },

  {
    path: '/broker/:id/edit',
    collapseName: 'broker',
    i18n: 'entities.broker.edit.title',
    parent: '/broker',
    loader: () =>
      import('src/view/broker/form/BrokerFormPage'),
    permissionRequired: permissions.brokerEdit,
    exact: true,
  },

  {
    path: '/broker/:id',
    collapseName: 'broker',
    i18n: 'entities.broker.view.title',
    parent: '/broker',
    loader: () =>
      import('src/view/broker/view/BrokerViewPage'),
    permissionRequired: permissions.brokerRead,
    exact: true,
  },
  // #endregion

  // #region Author
  {
    path: '/author',
    collapseName: 'author',
    i18n: 'collapses.author.menu',
    parent: '/',
    loader: () =>
      import('src/view/author/list/AuthorListPage'),
    permissionRequired: permissions.authorRead,
    exact: true,
  },
  {
    path: '/author/new',
    collapseName: 'author',
    i18n: 'entities.author.new.title',
    parent: '/author',
    loader: () =>
      import('src/view/author/form/AuthorFormPage'),
    permissionRequired: permissions.authorCreate,
    exact: true,
  },

  {
    path: '/author/importer',
    collapseName: 'author',
    i18n: 'entities.author.importer.title',
    parent: '/author',
    loader: () =>
      import('src/view/author/importer/AuthorImporterPage'),
    permissionRequired: permissions.authorImport,
    exact: true,
  },

  {
    path: '/author/:id/edit',
    collapseName: 'author',
    i18n: 'entities.author.edit.title',
    parent: '/author',
    loader: () =>
      import('src/view/author/form/AuthorFormPage'),
    permissionRequired: permissions.authorEdit,
    exact: true,
  },

  {
    path: '/author/:id',
    collapseName: 'author',
    i18n: 'entities.author.view.title',
    parent: '/author',
    loader: () =>
      import('src/view/author/view/AuthorViewPage'),
    permissionRequired: permissions.authorRead,
    exact: true,
  },
  // #endregion

  // #region Affiliate link
  {
    path: '/affiliate-links',
    collapseName: 'affiliateLinks',
    i18n: 'collapses.affiliateLink.menu',
    parent: '/',
    redirect: '/affiliate-link',
    permissionRequired: null,
    virtual: true,
  },

  // #region Affiliate links
  {
    path: '/affiliate-link',
    collapseName: 'affiliateLinks',
    i18n: 'entities.affiliateLink.menu',
    parent: '/affiliate-links',
    loader: () =>
      import(
        'src/view/affiliateLink/list/AffiliateLinkListPage'
      ),
    permissionRequired: permissions.affiliateLinkRead,
    exact: true,
  },
  {
    path: '/affiliate-link/new',
    collapseName: 'affiliateLinks',
    i18n: 'entities.affiliateLink.new.title',
    parent: '/affiliate-links',
    loader: () =>
      import(
        'src/view/affiliateLink/form/AffiliateLinkFormPage'
      ),
    permissionRequired: permissions.affiliateLinkCreate,
    exact: true,
  },

  {
    path: '/affiliate-link/importer',
    collapseName: 'affiliateLinks',
    i18n: 'entities.affiliateLink.importer.title',
    parent: '/affiliate-links',
    loader: () =>
      import(
        'src/view/affiliateLink/importer/AffiliateLinkImporterPage'
      ),
    permissionRequired: permissions.affiliateLinkImport,
    exact: true,
  },

  {
    path: '/affiliate-link/:id/edit',
    collapseName: 'affiliateLinks',
    i18n: 'entities.affiliateLink.edit.title',
    parent: '/affiliate-links',
    loader: () =>
      import(
        'src/view/affiliateLink/form/AffiliateLinkFormPage'
      ),
    permissionRequired: permissions.affiliateLinkEdit,
    exact: true,
  },

  {
    path: '/affiliate-link/:id',
    collapseName: 'affiliateLinks',
    i18n: 'entities.affiliateLink.view.title',
    parent: '/affiliate-links',
    loader: () =>
      import(
        'src/view/affiliateLink/view/AffiliateLinkViewPage'
      ),
    permissionRequired: permissions.affiliateLinkRead,
    exact: true,
  },
  // #endregion

  // #region Tracking Parameter
  {
    path: '/tracking-parameter',
    collapseName: 'affiliateLinks',
    i18n: 'entities.trackingParameter.menu',
    parent: '/affiliate-links',
    loader: () =>
      import(
        'src/view/trackingParameter/list/TrackingParameterListPage'
      ),
    permissionRequired: permissions.trackingParameterRead,
    exact: true,
  },
  {
    path: '/tracking-parameter/new',
    collapseName: 'affiliateLinks',
    i18n: 'entities.trackingParameter.new.title',
    parent: '/affiliate-links',
    loader: () =>
      import(
        'src/view/trackingParameter/form/TrackingParameterFormPage'
      ),
    permissionRequired: permissions.trackingParameterCreate,
    exact: true,
  },

  {
    path: '/tracking-parameter/importer',
    collapseName: 'affiliateLinks',
    i18n: 'entities.trackingParameter.importer.title',
    parent: '/affiliate-links',
    loader: () =>
      import(
        'src/view/trackingParameter/importer/TrackingParameterImporterPage'
      ),
    permissionRequired: permissions.trackingParameterImport,
    exact: true,
  },

  {
    path: '/tracking-parameter/:id/edit',
    collapseName: 'affiliateLinks',
    i18n: 'entities.trackingParameter.edit.title',
    parent: '/affiliate-links',
    loader: () =>
      import(
        'src/view/trackingParameter/form/TrackingParameterFormPage'
      ),
    permissionRequired: permissions.trackingParameterEdit,
    exact: true,
  },

  {
    path: '/tracking-parameter/:id',
    collapseName: 'affiliateLinks',
    i18n: 'entities.trackingParameter.view.title',
    parent: '/affiliate-links',
    loader: () =>
      import(
        'src/view/trackingParameter/view/TrackingParameterViewPage'
      ),
    permissionRequired: permissions.trackingParameterRead,
    exact: true,
  },
  // #endregion

  // #endregion

  // #region Blogs
  {
    path: '/blogs',
    collapseName: 'blog',
    i18n: 'collapses.blog.menu',
    parent: '/',
    redirect: '/blog',
    permissionRequired: null,
    virtual: true,
  },

  // #region Blog
  {
    path: '/blog',
    collapseName: 'blog',
    i18n: 'entities.blog.menu',
    parent: '/blogs',
    loader: () => import('src/view/blog/list/BlogListPage'),
    permissionRequired: permissions.blogRead,
    exact: true,
  },
  {
    path: '/blog/new',
    collapseName: 'blog',
    i18n: 'entities.blog.new.title',
    parent: '/blog',
    loader: () => import('src/view/blog/form/BlogFormPage'),
    permissionRequired: permissions.blogCreate,
    exact: true,
  },

  {
    path: '/blog/importer',
    collapseName: 'blog',
    i18n: 'entities.blog.importer.title',
    parent: '/blog',
    loader: () =>
      import('src/view/blog/importer/BlogImporterPage'),
    permissionRequired: permissions.blogImport,
    exact: true,
  },

  {
    path: '/blog/:id/edit',
    collapseName: 'blog',
    i18n: 'entities.blog.edit.title',
    parent: '/blog',
    loader: () => import('src/view/blog/form/BlogFormPage'),
    permissionRequired: permissions.blogEdit,
    exact: true,
  },

  {
    path: '/blog/:id',
    collapseName: 'blog',
    i18n: 'entities.blog.view.title',
    parent: '/blog',
    loader: () => import('src/view/blog/view/BlogViewPage'),
    permissionRequired: permissions.blogRead,
    exact: true,
  },
  // #endregion

  // #region Blog Comment
  {
    path: '/blog-comment',
    collapseName: 'blog',
    i18n: 'entities.blogComment.menu',
    parent: '/blogs',
    loader: () =>
      import(
        'src/view/blogComment/list/BlogCommentListPage'
      ),
    permissionRequired: permissions.blogCommentRead,
    exact: true,
  },
  {
    path: '/blog-comment/new',
    collapseName: 'blog',
    i18n: 'entities.blogComment.new.title',
    parent: '/blogComment',
    loader: () =>
      import(
        'src/view/blogComment/form/BlogCommentFormPage'
      ),
    permissionRequired: permissions.blogCommentCreate,
    exact: true,
  },

  {
    path: '/blog-comment/importer',
    collapseName: 'blog',
    i18n: 'entities.blogComment.importer.title',
    parent: '/blogComment',
    loader: () =>
      import(
        'src/view/blogComment/importer/BlogCommentImporterPage'
      ),
    permissionRequired: permissions.blogCommentImport,
    exact: true,
  },

  {
    path: '/blog-comment/:id/edit',
    collapseName: 'blog',
    i18n: 'entities.blogComment.edit.title',
    parent: '/blogComment',
    loader: () =>
      import(
        'src/view/blogComment/form/BlogCommentFormPage'
      ),
    permissionRequired: permissions.blogCommentEdit,
    exact: true,
  },

  {
    path: '/blog-comment/:id',
    collapseName: 'blog',
    i18n: 'entities.blogComment.view.title',
    parent: '/blogComment',
    loader: () =>
      import(
        'src/view/blogComment/view/BlogCommentViewPage'
      ),
    permissionRequired: permissions.blogCommentRead,
    exact: true,
  },
  // #endregion

  // #endregion

  // #region Broker Post
  {
    path: '/broker-post',
    collapseName: 'brokerPost',
    i18n: 'collapses.brokerPost.menu',
    parent: '/',
    loader: () =>
      import('src/view/brokerPost/list/BrokerPostListPage'),
    permissionRequired: permissions.brokerPostRead,
    exact: true,
  },
  {
    path: '/broker-post/new',
    collapseName: 'brokerPost',
    i18n: 'entities.brokerPost.new.title',
    parent: '/broker-post',
    loader: () =>
      import('src/view/brokerPost/form/BrokerPostFormPage'),
    permissionRequired: permissions.brokerPostCreate,
    exact: true,
  },

  {
    path: '/broker-post/importer',
    collapseName: 'brokerPost',
    i18n: 'entities.brokerPost.importer.title',
    parent: '/broker-post',
    loader: () =>
      import(
        'src/view/brokerPost/importer/BrokerPostImporterPage'
      ),
    permissionRequired: permissions.brokerPostImport,
    exact: true,
  },

  {
    path: '/broker-post/:id/edit',
    collapseName: 'brokerPost',
    i18n: 'entities.brokerPost.edit.title',
    parent: '/broker-post',
    loader: () =>
      import('src/view/brokerPost/form/BrokerPostFormPage'),
    permissionRequired: permissions.brokerPostEdit,
    exact: true,
  },

  {
    path: '/broker-post/:id',
    collapseName: 'brokerPost',
    i18n: 'entities.brokerPost.view.title',
    parent: '/broker-post',
    loader: () =>
      import('src/view/brokerPost/view/BrokerPostViewPage'),
    permissionRequired: permissions.brokerPostRead,
    exact: true,
  },
  // #endregion

  // #region Routes
  {
    path: '/routes',
    collapseName: 'routes',
    i18n: 'collapses.routes.menu',
    parent: '/',
    redirect: '/navigation',
    permissionRequired: null,
    virtual: true,
  },

  // #region Navigation
  {
    path: '/navigation',
    collapseName: 'routes',
    i18n: 'entities.navigation.menu',
    parent: '/routes',
    loader: () =>
      import('src/view/navigation/list/NavigationListPage'),
    permissionRequired: permissions.navigationRead,
    exact: true,
  },

  {
    path: '/navigation/new',
    collapseName: 'routes',
    i18n: 'entities.navigation.new.title',
    parent: '/navigation',
    loader: () =>
      import('src/view/navigation/form/NavigationFormPage'),
    permissionRequired: permissions.navigationCreate,
    exact: true,
  },

  {
    path: '/navigation/importer',
    collapseName: 'routes',
    i18n: 'entities.navigation.importer.title',
    parent: '/navigation',
    loader: () =>
      import(
        'src/view/navigation/importer/NavigationImporterPage'
      ),
    permissionRequired: permissions.navigationImport,
    exact: true,
  },

  {
    path: '/navigation/:id/edit',
    collapseName: 'routes',
    i18n: 'entities.navigation.edit.title',
    parent: '/navigation',
    loader: () =>
      import('src/view/navigation/form/NavigationFormPage'),
    permissionRequired: permissions.navigationEdit,
    exact: true,
  },

  {
    path: '/navigation/:id',
    collapseName: 'routes',
    i18n: 'entities.navigation.view.title',
    parent: '/navigation',
    loader: () =>
      import('src/view/navigation/view/NavigationViewPage'),
    permissionRequired: permissions.navigationRead,
    exact: true,
  },
  // #endregion

  // #region Broker Article
  {
    path: '/broker-article',
    collapseName: 'broker',
    i18n: 'entities.brokerArticle.menu',
    parent: '/routes',
    loader: () =>
      import(
        'src/view/brokerArticle/list/BrokerArticleListPage'
      ),
    permissionRequired: permissions.brokerArticleRead,
    exact: true,
  },

  {
    path: '/broker-article/new',
    collapseName: 'broker',
    i18n: 'entities.brokerArticle.new.title',
    parent: '/brokerArticle',
    loader: () =>
      import(
        'src/view/brokerArticle/form/BrokerArticleFormPage'
      ),
    permissionRequired: permissions.brokerArticleCreate,
    exact: true,
  },

  {
    path: '/broker-article/importer',
    collapseName: 'broker',
    i18n: 'entities.brokerArticle.importer.title',
    parent: '/brokerArticle',
    loader: () =>
      import(
        'src/view/brokerArticle/importer/BrokerArticleImporterPage'
      ),
    permissionRequired: permissions.brokerArticleImport,
    exact: true,
  },

  {
    path: '/broker-article/:id/edit',
    collapseName: 'broker',
    i18n: 'entities.brokerArticle.edit.title',
    parent: '/brokerArticle',
    loader: () =>
      import(
        'src/view/brokerArticle/form/BrokerArticleFormPage'
      ),
    permissionRequired: permissions.brokerArticleEdit,
    exact: true,
  },

  {
    path: '/broker-article/:id',
    collapseName: 'broker',
    i18n: 'entities.brokerArticle.view.title',
    parent: '/brokerArticle',
    loader: () =>
      import(
        'src/view/brokerArticle/view/BrokerArticleViewPage'
      ),
    permissionRequired: permissions.brokerArticleRead,
    exact: true,
  },
  // #endregion

  // #region Category
  {
    path: '/category',
    collapseName: 'routes',
    i18n: 'entities.category.menu',
    parent: '/routes',
    loader: () =>
      import('src/view/category/list/CategoryListPage'),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },

  {
    path: '/category/new',
    collapseName: 'routes',
    i18n: 'entities.category.new.title',
    parent: '/category',
    loader: () =>
      import('src/view/category/form/CategoryFormPage'),
    permissionRequired: permissions.categoryCreate,
    exact: true,
  },

  {
    path: '/category/importer',
    collapseName: 'routes',
    i18n: 'entities.category.importer.title',
    parent: '/category',
    loader: () =>
      import(
        'src/view/category/importer/CategoryImporterPage'
      ),
    permissionRequired: permissions.categoryImport,
    exact: true,
  },

  {
    path: '/category/:id/edit',
    collapseName: 'routes',
    i18n: 'entities.category.edit.title',
    parent: '/category',
    loader: () =>
      import('src/view/category/form/CategoryFormPage'),
    permissionRequired: permissions.categoryEdit,
    exact: true,
  },

  {
    path: '/category/:id',
    collapseName: 'routes',
    i18n: 'entities.category.view.title',
    parent: '/category',
    loader: () =>
      import('src/view/category/view/CategoryViewPage'),
    permissionRequired: permissions.categoryRead,
    exact: true,
  },
  // #endregion

  // #endregion

  // #region news
  {
    path: '/news',
    collapseName: 'news',
    i18n: 'entities.news.menu',
    parent: '/',
    loader: () => import('src/view/news/list/NewsListPage'),
    permissionRequired: permissions.newsRead,
    exact: true,
  },
  {
    path: '/news/new',
    collapseName: 'news',
    i18n: 'entities.news.new.title',
    parent: '/news',
    loader: () => import('src/view/news/form/NewsFormPage'),
    permissionRequired: permissions.newsCreate,
    exact: true,
  },

  {
    path: '/news/importer',
    collapseName: 'news',
    i18n: 'entities.news.importer.title',
    parent: '/news',
    loader: () =>
      import('src/view/news/importer/NewsImporterPage'),
    permissionRequired: permissions.newsImport,
    exact: true,
  },

  {
    path: '/news/:id/edit',
    collapseName: 'news',
    i18n: 'entities.news.edit.title',
    parent: '/news',
    loader: () => import('src/view/news/form/NewsFormPage'),
    permissionRequired: permissions.newsEdit,
    exact: true,
  },

  {
    path: '/news/:id',
    collapseName: 'news',
    i18n: 'entities.news.view.title',
    parent: '/news',
    loader: () => import('src/view/news/view/NewsViewPage'),
    permissionRequired: permissions.newsRead,
    exact: true,
  },
  // #endregion

  // #region Promotion
  {
    path: '/promotions',
    collapseName: 'promotion',
    i18n: 'collapses.promotion.menu',
    parent: '/',
    redirect: '/promotion',
    permissionRequired: null,
    virtual: true,
  },

  // #region Promotions
  {
    path: '/promotion',
    collapseName: 'promotion',
    i18n: 'entities.promotion.menu',
    parent: '/promotions',
    loader: () =>
      import('src/view/promotion/list/PromotionListPage'),
    permissionRequired: permissions.promotionRead,
    exact: true,
  },
  {
    path: '/promotion/new',
    collapseName: 'promotion',
    i18n: 'entities.promotion.new.title',
    parent: '/promotion',
    loader: () =>
      import('src/view/promotion/form/PromotionFormPage'),
    permissionRequired: permissions.promotionCreate,
    exact: true,
  },

  {
    path: '/promotion/importer',
    collapseName: 'promotion',
    i18n: 'entities.promotion.importer.title',
    parent: '/promotion',
    loader: () =>
      import(
        'src/view/promotion/importer/PromotionImporterPage'
      ),
    permissionRequired: permissions.promotionImport,
    exact: true,
  },

  {
    path: '/promotion/:id/edit',
    collapseName: 'promotion',
    i18n: 'entities.promotion.edit.title',
    parent: '/promotion',
    loader: () =>
      import('src/view/promotion/form/PromotionFormPage'),
    permissionRequired: permissions.promotionEdit,
    exact: true,
  },

  {
    path: '/promotion/:id',
    collapseName: 'promotion',
    i18n: 'entities.promotion.view.title',
    parent: '/promotion',
    loader: () =>
      import('src/view/promotion/view/PromotionViewPage'),
    permissionRequired: permissions.promotionRead,
    exact: true,
  },
  // #endregion

  // #region Openx banners
  {
    path: '/open-x',
    collapseName: 'promotion',
    i18n: 'entities.openx.menu',
    parent: '/promotions',
    loader: () =>
      import('src/view/openx/list/OpenxListPage'),
    permissionRequired: permissions.openxRead,
    exact: true,
  },
  {
    path: '/open-x/new',
    collapseName: 'promotion',
    i18n: 'entities.openx.new.title',
    parent: '/open-x',
    loader: () =>
      import('src/view/openx/form/OpenxFormPage'),
    permissionRequired: permissions.openxCreate,
    exact: true,
  },

  {
    path: '/open-x/importer',
    collapseName: 'promotion',
    i18n: 'entities.openx.importer.title',
    parent: '/open-x',
    loader: () =>
      import('src/view/openx/importer/OpenxImporterPage'),
    permissionRequired: permissions.openxImport,
    exact: true,
  },

  {
    path: '/open-x/:id/edit',
    collapseName: 'promotion',
    i18n: 'entities.openx.edit.title',
    parent: '/open-x',
    loader: () =>
      import('src/view/openx/form/OpenxFormPage'),
    permissionRequired: permissions.openxEdit,
    exact: true,
  },

  {
    path: '/open-x/:id',
    collapseName: 'promotion',
    i18n: 'entities.openx.view.title',
    parent: '/open-x',
    loader: () =>
      import('src/view/openx/view/OpenxViewPage'),
    permissionRequired: permissions.openxRead,
    exact: true,
  },
  // #endregion

  // #endregion

  // #region Page
  {
    path: '/page',
    collapseName: 'page',
    i18n: 'collapses.page.menu',
    parent: '/',
    loader: () => import('src/view/page/list/PageListPage'),
    permissionRequired: permissions.pageRead,
    exact: true,
  },

  {
    path: '/page/new',
    collapseName: 'page',
    i18n: 'entities.page.new.title',
    parent: '/page',
    loader: () => import('src/view/page/form/PageFormPage'),
    permissionRequired: permissions.pageCreate,
    exact: true,
  },

  {
    path: '/page/importer',
    collapseName: 'page',
    i18n: 'entities.page.importer.title',
    parent: '/page',
    loader: () =>
      import('src/view/page/importer/PageImporterPage'),
    permissionRequired: permissions.pageImport,
    exact: true,
  },

  {
    path: '/page/:id/edit',
    collapseName: 'page',
    i18n: 'entities.page.edit.title',
    parent: '/page',
    loader: () => import('src/view/page/form/PageFormPage'),
    permissionRequired: permissions.pageEdit,
    exact: true,
  },

  {
    path: '/page/:id',
    collapseName: 'page',
    i18n: 'entities.page.view.title',
    parent: '/page',
    loader: () => import('src/view/page/view/PageViewPage'),
    permissionRequired: permissions.pageRead,
    exact: true,
  },
  // #endregion
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
