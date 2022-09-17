import { createSelector } from 'reselect';

const selectRaw = (state) => state.shop.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const shopDestroySelectors = {
  selectLoading,
};

export default shopDestroySelectors;
