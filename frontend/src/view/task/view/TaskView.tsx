import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import moment from 'moment';
import FilesViewItem from 'src/view/shared/view/FilesViewItem';
import TaskListViewItem from 'src/view/taskList/view/TaskListViewItem';
import TaskPriorityViewItem from 'src/view/taskPriority/view/TaskPriorityViewItem';
import { Grid } from '@mui/material';
import MDTypography from 'src/mui/components/MDTypography';
import TaskStatusViewItem from 'src/view/task/view/TaskStatusViewItem';
import CustomViewItem from 'src/view/shared/view/CustomViewItem';
import MDBox from 'src/mui/components/MDBox';

function TaskView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <Grid container spacing={4}>
        <Grid item lg={8} md={8} sm={12} xs={12}>
          <Grid spacing={2} container>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <MDTypography variant="h3">
                {record.title}
              </MDTypography>
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TaskListViewItem
                label={i18n(
                  'entities.task.fields.taskList',
                )}
                value={record.taskList}
              />
            </Grid>

            <Grid item xs={12}>
              <TextViewItem
                label={i18n(
                  'entities.task.fields.instructions',
                )}
                value={record.instructions}
                multiline
              />
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <CustomViewItem
                label={i18n('entities.task.fields.status')}
                value={[record.status]}
                render={(values) =>
                  values.map((value) => (
                    <TaskStatusViewItem
                      key={value}
                      value={value}
                    />
                  ))
                }
              />
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TaskPriorityViewItem
                label={i18n(
                  'entities.task.fields.priority',
                )}
                value={record.priority}
              />
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <UserViewItem
                label={i18n('entities.task.fields.owner')}
                value={record.owner}
              />
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <UserViewItem
                label={i18n(
                  'entities.task.fields.approver',
                )}
                value={record.approver}
              />
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextViewItem
                label={i18n('entities.task.fields.dueDate')}
                value={moment(record.dueDate).format(
                  'YYYY-MM-DD HH:mm',
                )}
              />
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <CustomViewItem
                label={i18n('entities.task.fields.repeat')}
                value={[record.repeat]}
                render={(values) =>
                  values.map((value) => (
                    <MDTypography
                      key={value}
                      variant="button"
                      fontWeight={
                        record.repeat === 'Never'
                          ? 'regular'
                          : 'bold'
                      }
                    >
                      {record.repeat &&
                        i18n(
                          `entities.task.enumerators.repeat.${record.repeat}`,
                        )}
                    </MDTypography>
                  ))
                }
              />
            </Grid>

            {record.status === 'Complete' && (
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <TextViewItem
                  label={i18n(
                    'entities.task.fields.completedDate',
                  )}
                  value={moment(
                    record.completedDate,
                  ).format('YYYY-MM-DD HH:mm')}
                />
              </Grid>
            )}
          </Grid>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <MDTypography variant="h5">
                {i18n('entities.task.fields.notes')}
              </MDTypography>
            </Grid>
            <Grid item xs={12}>
              <MDTypography variant="h5" mt={3}>
                {i18n('entities.task.fields.attachments')}
              </MDTypography>
            </Grid>
            <Grid item xs={12}>
              <FilesViewItem
                label={i18n(
                  'entities.task.fields.attachments',
                )}
                value={record.attachments}
                hiddenLabel
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return renderView();
}

export default TaskView;
