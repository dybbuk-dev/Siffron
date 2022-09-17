import React from 'react';
import { i18n } from 'src/i18n';
import SectionListFilter from 'src/view/section/list/SectionListFilter';
import SectionListTable from 'src/view/section/list/SectionListTable';
import SectionListToolbar from 'src/view/section/list/SectionListToolbar';
import { Card } from '@mui/material';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';

function SectionListPage(props) {
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
              {i18n('entities.section.list.title')}
            </MDTypography>

            <SectionListToolbar />
          </MDBox>
          <SectionListFilter />
        </MDBox>
        <SectionListTable />
      </Card>
    </>
  );
}

export default SectionListPage;
