import { createSelector } from 'reselect';

const selectRaw = (state) => state.department.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const departmentDestroySelectors = {
  selectLoading,
};

export default departmentDestroySelectors;
