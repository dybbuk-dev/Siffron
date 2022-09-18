import { createSelector } from 'reselect';

const selectRaw = (state) => state.facing.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const facingViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default facingViewSelectors;
