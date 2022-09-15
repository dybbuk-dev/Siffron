export default class PermissionChecker {
  currentTenant;
  currentUser;

  constructor(currentTenant, currentUser) {
    this.currentTenant = currentTenant;
    this.currentUser = currentUser;
  }

  get currentUserRolesIds() {
    if (!this.currentUser || !this.currentUser.tenants) {
      return [];
    }

    const tenant = this.currentUser.tenants
      .filter(
        (tenantUser) => tenantUser.status === 'active',
      )
      .find(
        (tenantUser) =>
          tenantUser.tenant.id === this.currentTenant.id,
      );

    if (!tenant) {
      return [];
    }

    return tenant.roles;
  }

  match(permission) {
    if (!permission) {
      return true;
    }

    return this.rolesMatchOneOf(permission.allowedRoles);
  }

  rolesMatchOneOf(arg) {
    if (!this.currentUserRolesIds) {
      return false;
    }

    if (!arg) {
      return false;
    }

    if (Array.isArray(arg)) {
      if (!arg.length) {
        return false;
      }

      return arg.some((role) =>
        this.currentUserRolesIds.includes(role),
      );
    }

    return this.currentUserRolesIds.includes(arg);
  }

  get isEmptyTenant() {
    if (!this.isAuthenticated) {
      return true;
    }

    if (!this.currentUser.tenants) {
      return true;
    }

    return !this.currentUser.tenants.some(
      (tenant) => tenant.status === 'active',
    );
  }

  get isEmptyPermissions() {
    if (!this.isAuthenticated) {
      return true;
    }

    if (!this.currentUser.tenants) {
      return true;
    }

    const tenant = this.currentUser.tenants.find(
      (tenant) => tenant.status === 'active',
    );

    if (!tenant) {
      return true;
    }

    return !tenant.roles || !tenant.roles.length;
  }

  get isAuthenticated() {
    return (
      Boolean(this.currentUser) &&
      Boolean(this.currentUser.id)
    );
  }

  get isEmailVerified() {
    if (!this.isAuthenticated) {
      return false;
    }

    return this.currentUser.emailVerified;
  }
}
