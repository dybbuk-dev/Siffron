export default (app) => {
  app.post(
    `/tenant/:tenantId/task-priority`,
    require('./taskPriorityCreate').default,
  );
  app.put(
    `/tenant/:tenantId/task-priority/:id`,
    require('./taskPriorityUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/task-priority/import`,
    require('./taskPriorityImport').default,
  );
  app.delete(
    `/tenant/:tenantId/task-priority`,
    require('./taskPriorityDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/task-priority/autocomplete`,
    require('./taskPriorityAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/task-priority`,
    require('./taskPriorityList').default,
  );
  app.get(
    `/tenant/:tenantId/task-priority/:id`,
    require('./taskPriorityFind').default,
  );
};