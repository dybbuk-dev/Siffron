import React from 'react';
import { i18n } from 'src/i18n';
import DepartmentListFilter from 'src/view/department/list/DepartmentListFilter';
import DepartmentListTable from 'src/view/department/list/DepartmentListTable';
import DepartmentListToolbar from 'src/view/department/list/DepartmentListToolbar';
import { Card } from '@mui/material';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';

function DepartmentListPage(props) {
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
              {i18n('entities.department.list.title')}
            </MDTypography>

            <DepartmentListToolbar />
          </MDBox>
          <DepartmentListFilter />
        </MDBox>
        <DepartmentListTable />
      </Card>
    </>
  );
}

export default DepartmentListPage;
