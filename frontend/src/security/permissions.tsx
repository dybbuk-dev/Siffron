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
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;
