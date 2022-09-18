import { createSelector } from 'reselect';

const selectRaw = (state) => state.facing.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const facingDestroySelectors = {
  selectLoading,
};

export default facingDestroySelectors;
