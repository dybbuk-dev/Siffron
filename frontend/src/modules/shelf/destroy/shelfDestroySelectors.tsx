import { createSelector } from 'reselect';

const selectRaw = (state) => state.shelf.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const shelfDestroySelectors = {
  selectLoading,
};

export default shelfDestroySelectors;
