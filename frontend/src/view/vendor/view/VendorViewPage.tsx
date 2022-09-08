import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/vendor/view/vendorViewActions';
import selectors from 'src/modules/vendor/view/vendorViewSelectors';
import VendorView from 'src/view/vendor/view/VendorView';
import VendorViewToolbar from 'src/view/vendor/view/VendorViewToolbar';
import { Card } from '@mui/material';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';

function VendorPage() {
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
        <MDBox px={3} py={3}>
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
                {i18n('entities.vendor.view.title')}
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
            <VendorViewToolbar match={match} />
          </MDBox>
          <VendorView loading={loading} record={record} />
        </MDBox>
      </Card>
    </>
  );
}

export default VendorPage;
