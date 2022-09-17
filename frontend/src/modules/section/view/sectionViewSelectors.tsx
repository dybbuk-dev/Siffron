import { createSelector } from 'reselect';

const selectRaw = (state) => state.section.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const sectionViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default sectionViewSelectors;
