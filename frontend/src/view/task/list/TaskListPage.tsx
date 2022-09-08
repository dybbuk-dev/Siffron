import React from 'react';
import { i18n } from 'src/i18n';
import TaskListFilter from 'src/view/task/list/TaskListFilter';
import TaskListTable from 'src/view/task/list/TaskListTable';
import TaskListToolbar from 'src/view/task/list/TaskListToolbar';
import { Card } from '@mui/material';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';

function TaskListPage(props) {
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
              {i18n('entities.task.list.title')}
            </MDTypography>

            <TaskListToolbar />
          </MDBox>
          <TaskListFilter />
        </MDBox>
        <TaskListTable />
      </Card>
    </>
  );
}

export default TaskListPage;
