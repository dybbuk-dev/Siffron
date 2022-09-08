import React from 'react';
import { i18n } from 'src/i18n';
import RiskListFilter from 'src/view/risk/list/RiskListFilter';
import RiskListTable from 'src/view/risk/list/RiskListTable';
import RiskListToolbar from 'src/view/risk/list/RiskListToolbar';
import { Card } from '@mui/material';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';

function RiskListPage(props) {
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
              {i18n('entities.risk.list.title')}
            </MDTypography>
            <RiskListToolbar />
          </MDBox>
          <RiskListFilter />
        </MDBox>
        <RiskListTable />
      </Card>
    </>
  );
}

export default RiskListPage;
