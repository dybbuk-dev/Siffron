import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import Storage from 'src/security/storage';
import FilesFormItem from 'src/view/shared/form/items/FilesFormItem';
import TaskListAutocompleteFormItem from 'src/view/taskList/autocomplete/TaskListAutocompleteFormItem';
import NoteAutocompleteFormItem from 'src/view/note/autocomplete/NoteAutocompleteFormItem';
import TaskPriorityAutocompleteFormItem from 'src/view/taskPriority/autocomplete/TaskPriorityAutocompleteFormItem';
import { Grid } from '@mui/material';
import { i18n } from 'src/i18n';
import { selectMuiSettings } from 'src/modules/mui/muiSelectors';
import taskEnumerators from 'src/modules/task/taskEnumerators';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';
import ColorBadgeSelectFormItem, {
  generateColorBadgeSelectOptions,
} from 'src/view/shared/form/items/ColorBadgeSelectFormItem';
import CustomStyledSelectFormItem from 'src/view/shared/form/items/CustomStyledSelectFormItem';
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';

function NewTaskLayout(props) {
  const { sidenavColor } = selectMuiSettings();
  const { title, initialValues, hiddenImpossibleFields } =
    props;
  return (
    <MDBox px={1}>
      <Grid spacing={2} container>
        <Grid item xs={12}>
          <MDBox
            variant="gradient"
            bgColor={sidenavColor}
            borderRadius="lg"
            coloredShadow={sidenavColor}
            py={2}
            style={{
              position: 'absolute',
              left: '1rem',
              right: '1rem',
              top: '-1rem',
              zIndex: 2,
            }}
          >
            <MDTypography
              variant="h3"
              color="white"
              textAlign="center"
            >
              {title ?? i18n('entities.task.new.title')}
            </MDTypography>
          </MDBox>
          <MDBox mb={6}></MDBox>
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
            label={i18n('entities.task.fields.taskList')}
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
            label={i18n('entities.task.fields.status')}
            options={generateColorBadgeSelectOptions(
              taskEnumerators.status,
              taskEnumerators.statusColor,
              'entities.task.enumerators.status',
            )}
            required={true}
            variant="standard"
          />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <TaskPriorityAutocompleteFormItem
            name="priority"
            label={i18n('entities.task.fields.priority')}
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
            label={i18n('entities.task.fields.approver')}
            required={false}
            showCreate={true}
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <DatePickerFormItem
            name="dueDate"
            label={i18n('entities.task.fields.dueDate')}
            required={false}
            variant="standard"
            showTime
          />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <CustomStyledSelectFormItem
            name="repeat"
            label={i18n('entities.task.fields.repeat')}
            value={initialValues.repeat}
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
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <FilesFormItem
            name="attachments"
            label={i18n('entities.task.fields.attachments')}
            required={false}
            storage={Storage.values.taskAttachments}
            max={undefined}
            formats={['txt', 'doc', 'pdf', 'xlsx']}
          />
        </Grid>
        {!hiddenImpossibleFields && (
          <>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <NoteAutocompleteFormItem
                name="notes"
                label={i18n('entities.task.fields.notes')}
                required={false}
                showCreate={true}
                mode="multiple"
                variant="standard"
                fullWidth
              />
            </Grid>
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
          </>
        )}
      </Grid>
    </MDBox>
  );
}

export default NewTaskLayout;
