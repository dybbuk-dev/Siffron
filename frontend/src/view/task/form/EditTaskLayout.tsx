import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import Storage from 'src/security/storage';
import FilesFormItem from 'src/view/shared/form/items/FilesFormItem';
import TaskListAutocompleteFormItem from 'src/view/taskList/autocomplete/TaskListAutocompleteFormItem';
import NoteAutocompleteFormItem from 'src/view/note/autocomplete/NoteAutocompleteFormItem';
import TaskPriorityAutocompleteFormItem from 'src/view/taskPriority/autocomplete/TaskPriorityAutocompleteFormItem';
import { Grid, Card } from '@mui/material';
import { i18n } from 'src/i18n';
import taskEnumerators from 'src/modules/task/taskEnumerators';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';
import ColorBadgeSelectFormItem, {
  generateColorBadgeSelectOptions,
} from 'src/view/shared/form/items/ColorBadgeSelectFormItem';
import CustomStyledSelectFormItem from 'src/view/shared/form/items/CustomStyledSelectFormItem';
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import { useState } from 'react';

function EditTaskLayout(props) {
  const { initialValues } = props;
  const [visibleCompletedDate, setVisibleCompletedDate] =
    useState(initialValues.status === 'Complete');
  const onChangeStatus = (repeatVal) => {
    setVisibleCompletedDate(repeatVal === 'Complete');
  };
  return (
    <Grid container spacing={2}>
      <Grid item lg={8} md={8} sm={12} xs={12}>
        <Card>
          <MDBox px={3} py={3}>
            <Grid spacing={2} container>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <MDBox
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <MDTypography variant="h5">
                    {i18n('entities.task.info')}
                  </MDTypography>
                  <MDTypography
                    variant="button"
                    color="text"
                    fontWeight="bold"
                  >
                    {`# ${initialValues.reference}`}
                  </MDTypography>
                </MDBox>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <InputFormItem
                  name="title"
                  label={i18n('entities.task.fields.title')}
                  required={true}
                  variant="standard"
                />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <TaskListAutocompleteFormItem
                  name="taskList"
                  label={i18n(
                    'entities.task.fields.taskList',
                  )}
                  required={true}
                  showCreate={true}
                  variant="standard"
                  mode="multiple"
                  fullWidth
                />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <TextAreaFormItem
                  name="instructions"
                  label={i18n(
                    'entities.task.fields.instructions',
                  )}
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <ColorBadgeSelectFormItem
                  name="status"
                  label={i18n(
                    'entities.task.fields.status',
                  )}
                  options={generateColorBadgeSelectOptions(
                    taskEnumerators.status,
                    taskEnumerators.statusColor,
                    'entities.task.enumerators.status',
                  )}
                  required={true}
                  variant="standard"
                  onChange={onChangeStatus}
                />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <TaskPriorityAutocompleteFormItem
                  name="priority"
                  label={i18n(
                    'entities.task.fields.priority',
                  )}
                  required={true}
                  showCreate={true}
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <UserAutocompleteFormItem
                  name="owner"
                  label={i18n('entities.task.fields.owner')}
                  required={false}
                  showCreate={true}
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <UserAutocompleteFormItem
                  name="approver"
                  label={i18n(
                    'entities.task.fields.approver',
                  )}
                  required={false}
                  showCreate={true}
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <DatePickerFormItem
                  name="dueDate"
                  label={i18n(
                    'entities.task.fields.dueDate',
                  )}
                  required={false}
                  variant="standard"
                  showTime
                />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <CustomStyledSelectFormItem
                  name="repeat"
                  value={initialValues.repeat}
                  label={i18n(
                    'entities.task.fields.repeat',
                  )}
                  options={taskEnumerators.repeat.map(
                    (value) => ({
                      value,
                      label: i18n(
                        `entities.task.enumerators.repeat.${value}`,
                      ),
                      style:
                        value === 'Never'
                          ? null
                          : {
                              fontWeight: 'bold',
                            },
                    }),
                  )}
                  required={true}
                  variant="standard"
                />
              </Grid>
              {visibleCompletedDate && (
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <DatePickerFormItem
                    name="completedDate"
                    label={i18n(
                      'entities.task.fields.completedDate',
                    )}
                    required={false}
                    variant="standard"
                    showTime
                  />
                </Grid>
              )}
            </Grid>
          </MDBox>
        </Card>
      </Grid>
      <Grid item lg={4} md={4} sm={12} xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card>
              <MDBox p={3}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <MDTypography variant="h5">
                      {i18n('entities.task.fields.notes')}
                    </MDTypography>
                  </Grid>
                  <Grid item xs={12}>
                    <NoteAutocompleteFormItem
                      name="notes"
                      label={i18n(
                        'entities.task.fields.notes',
                      )}
                      required={false}
                      showCreate={true}
                      mode="multiple"
                      variant="standard"
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <MDBox p={3}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <MDTypography variant="h5">
                      {i18n(
                        'entities.task.fields.attachments',
                      )}
                    </MDTypography>
                  </Grid>
                  <Grid item xs={12}>
                    <FilesFormItem
                      name="attachments"
                      label={i18n(
                        'entities.task.fields.attachments',
                      )}
                      required={false}
                      storage={
                        Storage.values.taskAttachments
                      }
                      max={undefined}
                      formats={[
                        'txt',
                        'doc',
                        'pdf',
                        'xlsx',
                      ]}
                    />
                  </Grid>
                </Grid>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default EditTaskLayout;
