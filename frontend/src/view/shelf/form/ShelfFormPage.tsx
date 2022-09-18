import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/shelf/form/shelfFormActions';
import selectors from 'src/modules/shelf/form/shelfFormSelectors';
import ShelfForm from 'src/view/shelf/form/ShelfForm';
import { getHistory } from 'src/modules/store';
import Spinner from 'src/view/shared/Spinner';
import { Grid } from '@mui/material';

function ShelfFormPage(props) {
  const [dispatched, setDispatched] = useState(false);
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const initLoading = useSelector(
    selectors.selectInitLoading,
  );
  const saveLoading = useSelector(
    selectors.selectSaveLoading,
  );
  const record = useSelector(selectors.selectRecord);

  const isEditing = Boolean(match.params.id);
  const title = isEditing
    ? i18n('entities.shelf.edit.title')
    : i18n('entities.shelf.new.title');

  useEffect(() => {
    dispatch(actions.doInit(match.params.id));
    setDispatched(true);
  }, [dispatch, match.params.id]);

  const doSubmit = (id, data) => {
    if (isEditing) {
      console.log(data);
      dispatch(actions.doUpdate(id, data));
    } else {
      console.log(data);
      dispatch(actions.doCreate(data));
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        {initLoading && <Spinner />}

        {dispatched && !initLoading && (
          <ShelfForm
            saveLoading={saveLoading}
            record={record}
            title={title}
            onSubmit={doSubmit}
            onCancel={() => getHistory().push('/shelf')}
          />
        )}
      </Grid>
    </Grid>
  );
}

export default ShelfFormPage;
