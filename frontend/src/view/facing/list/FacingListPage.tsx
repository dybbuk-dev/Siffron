import React from 'react';
import { i18n } from 'src/i18n';
import FacingListFilter from 'src/view/facing/list/FacingListFilter';
import FacingListTable from 'src/view/facing/list/FacingListTable';
import FacingListToolbar from 'src/view/facing/list/FacingListToolbar';
import { Card } from '@mui/material';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';

function FacingListPage(props) {
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
              {i18n('entities.facing.list.title')}
            </MDTypography>

            <FacingListToolbar />
          </MDBox>
          <FacingListFilter />
        </MDBox>
        <FacingListTable />
      </Card>
    </>
  );
}

export default FacingListPage;
