import { createSelector } from 'reselect';

const selectRaw = (state) => state.shelf.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const shelfViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default shelfViewSelectors;
