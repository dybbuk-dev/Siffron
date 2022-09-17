import Roles from 'src/security/roles';
import Storage from 'src/security/storage';

const storage = Storage.values;
const roles = Roles.values;

class Permissions {
  static get values() {
    return {
      tenantEdit: {
        id: 'tenantEdit',
        allowedRoles: [roles.admin],
      },
      tenantDestroy: {
        id: 'tenantDestroy',
        allowedRoles: [roles.admin],
      },
      userEdit: {
        id: 'userEdit',
        allowedRoles: [roles.admin],
      },
      userDestroy: {
        id: 'userDestroy',
        allowedRoles: [roles.admin],
      },
      userCreate: {
        id: 'userCreate',
        allowedRoles: [roles.admin],
      },
      userImport: {
        id: 'userImport',
        allowedRoles: [roles.admin],
      },
      userRead: {
        id: 'userRead',
        allowedRoles: [roles.admin],
      },
      userAutocomplete: {
        id: 'userAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.admin],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.admin],
        allowedStorage: [
          storage.settingsBackgroundImages,
          storage.settingsLogos,
        ],
      },

      shopImport: {
        id: 'shopImport',
        allowedRoles: [roles.admin],
      },
      shopCreate: {
        id: 'shopCreate',
        allowedRoles: [roles.admin],
      },
      shopEdit: {
        id: 'shopEdit',
        allowedRoles: [roles.admin],
      },
      shopDestroy: {
        id: 'shopDestroy',
        allowedRoles: [roles.admin],
      },
      shopRead: {
        id: 'shopRead',
        allowedRoles: [roles.admin, roles.custom],
      },
      shopAutocomplete: {
        id: 'shopAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
      },

      departmentImport: {
        id: 'departmentImport',
        allowedRoles: [roles.admin],
      },
      departmentCreate: {
        id: 'departmentCreate',
        allowedRoles: [roles.admin],
      },
      departmentEdit: {
        id: 'departmentEdit',
        allowedRoles: [roles.admin],
      },
      departmentDestroy: {
        id: 'departmentDestroy',
        allowedRoles: [roles.admin],
      },
      departmentRead: {
        id: 'departmentRead',
        allowedRoles: [roles.admin, roles.custom],
      },
      departmentAutocomplete: {
        id: 'departmentAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
      },

      sectionImport: {
        id: 'sectionImport',
        allowedRoles: [roles.admin],
      },
      sectionCreate: {
        id: 'sectionCreate',
        allowedRoles: [roles.admin],
      },
      sectionEdit: {
        id: 'sectionEdit',
        allowedRoles: [roles.admin],
      },
      sectionDestroy: {
        id: 'sectionDestroy',
        allowedRoles: [roles.admin],
      },
      sectionRead: {
        id: 'sectionRead',
        allowedRoles: [roles.admin, roles.custom],
      },
      sectionAutocomplete: {
        id: 'sectionAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
      },

      shelfImport: {
        id: 'shelfImport',
        allowedRoles: [roles.admin],
      },
      shelfCreate: {
        id: 'shelfCreate',
        allowedRoles: [roles.admin],
      },
      shelfEdit: {
        id: 'shelfEdit',
        allowedRoles: [roles.admin],
      },
      shelfDestroy: {
        id: 'shelfDestroy',
        allowedRoles: [roles.admin],
      },
      shelfRead: {
        id: 'shelfRead',
        allowedRoles: [roles.admin, roles.custom],
      },
      shelfAutocomplete: {
        id: 'shelfAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
      },

      facingImport: {
        id: 'facingImport',
        allowedRoles: [roles.admin],
      },
      facingCreate: {
        id: 'facingCreate',
        allowedRoles: [roles.admin],
      },
      facingEdit: {
        id: 'facingEdit',
        allowedRoles: [roles.admin],
      },
      facingDestroy: {
        id: 'facingDestroy',
        allowedRoles: [roles.admin],
      },
      facingRead: {
        id: 'facingRead',
        allowedRoles: [roles.admin, roles.custom],
      },
      facingAutocomplete: {
        id: 'facingAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
      },

      taskImport: {
        id: 'taskImport',
        allowedRoles: [roles.admin],
      },
      taskCreate: {
        id: 'taskCreate',
        allowedRoles: [roles.admin],
        allowedStorage: [storage.taskAttachments],
      },
      taskEdit: {
        id: 'taskEdit',
        allowedRoles: [roles.admin],
        allowedStorage: [storage.taskAttachments],
      },
      taskDestroy: {
        id: 'taskDestroy',
        allowedRoles: [roles.admin],
        allowedStorage: [storage.taskAttachments],
      },
      taskRead: {
        id: 'taskRead',
        allowedRoles: [roles.admin, roles.custom],
      },
      taskAutocomplete: {
        id: 'taskAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
      },

      taskPriorityImport: {
        id: 'taskPriorityImport',
        allowedRoles: [roles.admin],
      },
      taskPriorityCreate: {
        id: 'taskPriorityCreate',
        allowedRoles: [roles.admin],
        allowedStorage: [],
      },
      taskPriorityEdit: {
        id: 'taskPriorityEdit',
        allowedRoles: [roles.admin],
        allowedStorage: [],
      },
      taskPriorityDestroy: {
        id: 'taskPriorityDestroy',
        allowedRoles: [roles.admin],
        allowedStorage: [],
      },
      taskPriorityRead: {
        id: 'taskPriorityRead',
        allowedRoles: [roles.admin, roles.custom],
      },
      taskPriorityAutocomplete: {
        id: 'taskPriorityAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
      },

      taskListImport: {
        id: 'taskListImport',
        allowedRoles: [roles.admin],
      },
      taskListCreate: {
        id: 'taskListCreate',
        allowedRoles: [roles.admin],
        allowedStorage: [],
      },
      taskListEdit: {
        id: 'taskListEdit',
        allowedRoles: [roles.admin],
        allowedStorage: [],
      },
      taskListDestroy: {
        id: 'taskListDestroy',
        allowedRoles: [roles.admin],
        allowedStorage: [],
      },
      taskListRead: {
        id: 'taskListRead',
        allowedRoles: [roles.admin, roles.custom],
      },
      taskListAutocomplete: {
        id: 'taskListAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
      },

      noteImport: {
        id: 'noteImport',
        allowedRoles: [roles.admin],
      },
      noteCreate: {
        id: 'noteCreate',
        allowedRoles: [roles.admin],
        allowedStorage: [],
      },
      noteEdit: {
        id: 'noteEdit',
        allowedRoles: [roles.admin],
        allowedStorage: [],
      },
      noteDestroy: {
        id: 'noteDestroy',
        allowedRoles: [roles.admin],
        allowedStorage: [],
      },
      noteRead: {
        id: 'noteRead',
        allowedRoles: [roles.admin, roles.custom],
      },
      noteAutocomplete: {
        id: 'noteAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
      },

      riskImport: {
        id: 'riskImport',
        allowedRoles: [roles.admin],
      },
      riskCreate: {
        id: 'riskCreate',
        allowedRoles: [roles.admin],
        allowedStorage: [],
      },
      riskEdit: {
        id: 'riskEdit',
        allowedRoles: [roles.admin],
        allowedStorage: [],
      },
      riskDestroy: {
        id: 'riskDestroy',
        allowedRoles: [roles.admin],
        allowedStorage: [],
      },
      riskRead: {
        id: 'riskRead',
        allowedRoles: [roles.admin, roles.custom],
      },
      riskAutocomplete: {
        id: 'riskAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
      },

      riskCategoryImport: {
        id: 'riskCategoryImport',
        allowedRoles: [roles.admin],
      },
      riskCategoryCreate: {
        id: 'riskCategoryCreate',
        allowedRoles: [roles.admin],
        allowedStorage: [],
      },
      riskCategoryEdit: {
        id: 'riskCategoryEdit',
        allowedRoles: [roles.admin],
        allowedStorage: [],
      },
      riskCategoryDestroy: {
        id: 'riskCategoryDestroy',
        allowedRoles: [roles.admin],
        allowedStorage: [],
      },
      riskCategoryRead: {
        id: 'riskCategoryRead',
        allowedRoles: [roles.admin, roles.custom],
      },
      riskCategoryAutocomplete: {
        id: 'riskCategoryAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
      },

      productImport: {
        id: 'productImport',
        allowedRoles: [roles.admin],
      },
      productCreate: {
        id: 'productCreate',
        allowedRoles: [roles.admin],
        allowedStorage: [storage.productLogo],
      },
      productEdit: {
        id: 'productEdit',
        allowedRoles: [roles.admin],
        allowedStorage: [storage.productLogo],
      },
      productDestroy: {
        id: 'productDestroy',
        allowedRoles: [roles.admin],
        allowedStorage: [storage.productLogo],
      },
      productRead: {
        id: 'productRead',
        allowedRoles: [roles.admin, roles.custom],
      },
      productAutocomplete: {
        id: 'productAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
      },

      productCategoryImport: {
        id: 'productCategoryImport',
        allowedRoles: [roles.admin],
      },
      productCategoryCreate: {
        id: 'productCategoryCreate',
        allowedRoles: [roles.admin],
        allowedStorage: [],
      },
      productCategoryEdit: {
        id: 'productCategoryEdit',
        allowedRoles: [roles.admin],
        allowedStorage: [],
      },
      productCategoryDestroy: {
        id: 'productCategoryDestroy',
        allowedRoles: [roles.admin],
        allowedStorage: [],
      },
      productCategoryRead: {
        id: 'productCategoryRead',
        allowedRoles: [roles.admin, roles.custom],
      },
      productCategoryAutocomplete: {
        id: 'productCategoryAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
      },

      organizationProfileImport: {
        id: 'organizationProfileImport',
        allowedRoles: [roles.admin],
      },
      organizationProfileCreate: {
        id: 'organizationProfileCreate',
        allowedRoles: [roles.admin],
        allowedStorage: [],
      },
      organizationProfileEdit: {
        id: 'organizationProfileEdit',
        allowedRoles: [roles.admin],
        allowedStorage: [],
      },
      organizationProfileDestroy: {
        id: 'organizationProfileDestroy',
        allowedRoles: [roles.admin],
        allowedStorage: [],
      },
      organizationProfileRead: {
        id: 'organizationProfileRead',
        allowedRoles: [roles.admin, roles.custom],
      },
      organizationProfileAutocomplete: {
        id: 'organizationProfileAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;
