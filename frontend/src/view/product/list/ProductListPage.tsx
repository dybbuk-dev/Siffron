import React from 'react';
import { i18n } from 'src/i18n';
import ProductListFilter from 'src/view/product/list/ProductListFilter';
import ProductListTable from 'src/view/product/list/ProductListTable';
import ProductListToolbar from 'src/view/product/list/ProductListToolbar';
import { Card } from '@mui/material';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';

function ProductListPage(props) {
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
              {i18n('entities.product.list.title')}
            </MDTypography>
            <ProductListToolbar />
          </MDBox>
          <ProductListFilter />
        </MDBox>
        <ProductListTable />
      </Card>
    </>
  );
}

export default ProductListPage;
