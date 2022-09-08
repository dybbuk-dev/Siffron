import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/product/view/productViewActions';
import selectors from 'src/modules/product/view/productViewSelectors';
import ProductView from 'src/view/product/view/ProductView';
import ProductViewToolbar from 'src/view/product/view/ProductViewToolbar';
import { Card } from '@mui/material';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';

function ProductPage() {
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
                {i18n('entities.product.view.title')}
              </MDTypography>
              {record && (
                <MDTypography
                  variant="button"
                  color="text"
                  fontWeight="bold"
                  ml={3}
                >
                  {`# ${record?.reference}`}
                </MDTypography>
              )}
            </MDBox>
            <ProductViewToolbar match={match} />
          </MDBox>
          <ProductView loading={loading} record={record} />
        </MDBox>
      </Card>
    </>
  );
}

export default ProductPage;
