import { Card } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/shop/view/shopViewActions';
import selectors from 'src/modules/shop/view/shopViewSelectors';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';
import ShopView from 'src/view/shop/view/ShopView';
import ShopViewToolbar from 'src/view/shop/view/ShopViewToolbar';

function ShopPage() {
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
                {i18n('entities.shop.view.title')}
              </MDTypography>
            </MDBox>
            <ShopViewToolbar match={match} />
          </MDBox>

          <ShopView loading={loading} record={record} />
        </MDBox>
      </Card>
    </>
  );
}

export default ShopPage;
