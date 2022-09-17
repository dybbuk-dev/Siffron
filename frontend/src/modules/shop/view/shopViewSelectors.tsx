import { createSelector } from 'reselect';

const selectRaw = (state) => state.shop.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const shopViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default shopViewSelectors;
