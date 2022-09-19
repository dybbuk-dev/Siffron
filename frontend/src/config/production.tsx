// Place the URL here with the /api suffix.
// Ex.:`https://domain.com/api`;
const backendUrl = `/api`;

/**
 * Frontend URL.
 */
const frontendUrl = {
  host: 'siffron.com',
  protocol: 'https',
};

/**
 * Tenant Mode
 * multi: Allow new users to create new tenants.
 * multi-with-subdomain: Same as multi, but enable access to the tenant via subdomain.
 * single: One tenant, the first user to register will be the admin.
 */
const tenantMode = 'multi-with-subdomain';

export default {
  frontendUrl,
  backendUrl,
  tenantMode,
};
