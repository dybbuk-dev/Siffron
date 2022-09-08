import React from 'react';
import { i18n } from 'src/i18n';
import RiskCategoryListFilter from 'src/view/riskCategory/list/RiskCategoryListFilter';
import RiskCategoryListTable from 'src/view/riskCategory/list/RiskCategoryListTable';
import RiskCategoryListToolbar from 'src/view/riskCategory/list/RiskCategoryListToolbar';
import { Card } from '@mui/material';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';

function RiskCategoryListPage(props) {
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
              {i18n('entities.riskCategory.list.title')}
            </MDTypography>

            <RiskCategoryListToolbar />
          </MDBox>
          <RiskCategoryListFilter />
        </MDBox>
        <RiskCategoryListTable />
      </Card>
    </>
  );
}

export default RiskCategoryListPage;
