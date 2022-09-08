export function getUserNameOrEmailPrefix(user) {
  if (!user || !(user instanceof Object)) {
    return null;
  }
  const fullName = [user.firstName, user.lastName]
    .join(' ')
    .trim();

  return fullName === ''
    ? user.email?.split('@')[0]
    : fullName;
}

export function getUserAvatar(user) {
  if (!user || !user.avatars || !user.avatars.length) {
    return null;
  }

  return user.avatars[0].downloadUrl;
}

export function getTaskDisplayColor(color) {
  const colors = {
    red: '#ea4335',
    orange: '#ff7b25',
    yellow: '#feb236',
    green: '#4CAF50',
    blue: '#1A73E8',
    indigo: '#3f51b5',
    violet: '#9c27b0',
  };

  return colors[color] ?? color;
}

export function getTaskPriorityColor(priority) {
  const colors = {
    Critical: '#ea4335',
    High: '#ff7b25',
    Medium: '#feb236',
    Low: '#4CAF50',
    None: '#1A73E8',
  };

  return colors[priority] ?? null;
}
