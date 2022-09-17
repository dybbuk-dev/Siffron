import React from 'react';
import { i18n } from 'src/i18n';
import ShopListFilter from 'src/view/shop/list/ShopListFilter';
import ShopListTable from 'src/view/shop/list/ShopListTable';
import ShopListToolbar from 'src/view/shop/list/ShopListToolbar';
import { Card } from '@mui/material';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';

function ShopListPage(props) {
  return (
    <>
      <Card>
        <MDBox pt={3} px={3}>
          <MDBox
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <MDTypography variant="h3">
              {i18n('entities.shop.list.title')}
            </MDTypography>

            <ShopListToolbar />
          </MDBox>
          <ShopListFilter />
        </MDBox>
        <ShopListTable />
      </Card>
    </>
  );
}

export default ShopListPage;
