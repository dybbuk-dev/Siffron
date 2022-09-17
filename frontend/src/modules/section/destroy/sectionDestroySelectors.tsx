import { createSelector } from 'reselect';

const selectRaw = (state) => state.section.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const sectionDestroySelectors = {
  selectLoading,
};

export default sectionDestroySelectors;
