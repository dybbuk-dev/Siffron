import { Card } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/shelf/view/shelfViewActions';
import selectors from 'src/modules/shelf/view/shelfViewSelectors';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';
import ShelfView from 'src/view/shelf/view/ShelfView';
import ShelfViewToolbar from 'src/view/shelf/view/ShelfViewToolbar';

function ShelfPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Card>
        <MDBox py={3} px={3}>
          <MDBox
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <MDBox
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
            >
              <MDTypography variant="h4">
                {i18n('entities.shelf.view.title')}
              </MDTypography>
            </MDBox>
            <ShelfViewToolbar match={match} />
          </MDBox>

          <ShelfView loading={loading} record={record} />
        </MDBox>
      </Card>
    </>
  );
}

export default ShelfPage;
