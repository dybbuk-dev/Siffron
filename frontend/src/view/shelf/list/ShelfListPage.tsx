import React from 'react';
import { i18n } from 'src/i18n';
import ShelfListFilter from 'src/view/shelf/list/ShelfListFilter';
import ShelfListTable from 'src/view/shelf/list/ShelfListTable';
import ShelfListToolbar from 'src/view/shelf/list/ShelfListToolbar';
import { Card } from '@mui/material';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';

function ShelfListPage(props) {
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
              {i18n('entities.shelf.list.title')}
            </MDTypography>

            <ShelfListToolbar />
          </MDBox>
          <ShelfListFilter />
        </MDBox>
        <ShelfListTable />
      </Card>
    </>
  );
}

export default ShelfListPage;
