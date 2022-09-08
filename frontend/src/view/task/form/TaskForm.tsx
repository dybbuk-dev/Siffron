import React, { useState } from 'react';
import { i18n } from 'src/i18n';
import FormWrapper, {
  FormButtons,
} from 'src/view/shared/styles/FormWrapper';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import taskEnumerators from 'src/modules/task/taskEnumerators';
import moment from 'moment';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import UndoIcon from '@mui/icons-material/Undo';
import MDButton from 'src/mui/components/MDButton';
import { selectMuiSettings } from 'src/modules/mui/muiSelectors';
import EditTaskLayout from 'src/view/task/form/EditTaskLayout';
import NewTaskLayout from 'src/view/task/form/NewTaskLayout';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';
import { Card, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import authSelectors from 'src/modules/auth/authSelectors';

const schema = yup.object().shape({
  title: yupFormSchemas.string(
    i18n('entities.task.fields.title'),
    {
      required: true,
      max: 200,
      min: 1,
    },
  ),
  taskList: yupFormSchemas.relationToMany(
    i18n('entities.task.fields.taskList'),
    {
      required: true,
    },
  ),
  instructions: yupFormSchemas.string(
    i18n('entities.task.fields.instructions'),
    {
      max: 1000,
      min: 1,
    },
  ),
  notes: yupFormSchemas.relationToMany(
    i18n('entities.task.fields.notes'),
    {
      max: 50,
    },
  ),
  priority: yupFormSchemas.relationToOne(
    i18n('entities.task.fields.priority'),
    {
      required: true,
    },
  ),
  repeat: yupFormSchemas.enumerator(
    i18n('entities.task.fields.repeat'),
    {
      required: true,
      options: taskEnumerators.repeat,
    },
  ),
  status: yupFormSchemas.enumerator(
    i18n('entities.task.fields.status'),
    {
      required: true,
      options: taskEnumerators.status,
    },
  ),
  owner: yupFormSchemas.relationToOne(
    i18n('entities.task.fields.owner'),
    {},
  ),
  approver: yupFormSchemas.relationToOne(
    i18n('entities.task.fields.approver'),
    {},
  ),
  dueDate: yupFormSchemas.datetime(
    i18n('entities.task.fields.dueDate'),
    {},
  ),
  completedDate: yupFormSchemas.datetime(
    i18n('entities.task.fields.completedDate'),
    {},
  ),
  attachments: yupFormSchemas.files(
    i18n('entities.task.fields.attachments'),
    {},
  ),
});

function TaskForm(props) {
  const { sidenavColor } = selectMuiSettings();
  const defaultTaskPriority = useSelector(
    authSelectors.selectDefaultTaskPriority,
  );
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      reference: record.reference,
      title: record.title,
      taskList: record.taskList || [],
      instructions: record.instructions,
      notes: record.notes || [],
      priority: record.priority ?? defaultTaskPriority,
      repeat: record.repeat ?? 'Never',
      status: record.status ?? 'ToDo',
      owner: record.owner,
      approver: record.approver,
      dueDate: record.dueDate
        ? moment(record.dueDate)
        : null,
      completedDate: record.completedDate
        ? moment(record.completedDate)
        : null,
      attachments: record.attachments || [],
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    defaultValues: initialValues as any,
  });

  const onSubmit = (values) => {
    props.onSubmit(props.record?.id, values);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  const {
    saveLoading,
    modal,
    isEditing,
    title,
    hiddenImpossibleFields,
  } = props;

  const makeFormButtons = (modal = false) => {
    return (
      <FormButtons
        style={{
          flexDirection: modal ? 'row-reverse' : undefined,
        }}
      >
        <MDButton
          variant="gradient"
          color={sidenavColor}
          disabled={saveLoading}
          type="submit"
          onClick={form.handleSubmit(onSubmit)}
          startIcon={<SaveIcon />}
          size="small"
        >
          {i18n('common.save')}
        </MDButton>

        <MDButton
          variant="outlined"
          color={sidenavColor}
          disabled={saveLoading}
          onClick={onReset}
          type="button"
          startIcon={<UndoIcon />}
          size="small"
        >
          {i18n('common.reset')}
        </MDButton>

        {props.onCancel ? (
          <MDButton
            variant="outlined"
            color={sidenavColor}
            disabled={saveLoading}
            onClick={() => props.onCancel()}
            type="button"
            startIcon={<CloseIcon />}
            size="small"
          >
            {i18n('common.cancel')}
          </MDButton>
        ) : null}
      </FormButtons>
    );
  };

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {!isEditing &&
            (modal ? (
              <NewTaskLayout
                title={title}
                initialValues={{ ...initialValues }}
                hiddenImpossibleFields={
                  hiddenImpossibleFields
                }
                modal
              />
            ) : (
              <Grid
                container
                spacing={2}
                justifyContent="center"
                mt={1}
              >
                <Grid item lg={9} md={8} sm={12} xs={12}>
                  <Card>
                    <MDBox px={2} py={2}>
                      <NewTaskLayout
                        title={title}
                        initialValues={{ ...initialValues }}
                        hiddenImpossibleFields={
                          hiddenImpossibleFields
                        }
                        modal
                      />
                      <MDBox px={1}>
                        {makeFormButtons(true)}
                      </MDBox>
                    </MDBox>
                  </Card>
                </Grid>
              </Grid>
            ))}
          {isEditing && (
            <MDBox
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <MDTypography variant="h4">
                {i18n('entities.task.edit.title')}
              </MDTypography>
              {makeFormButtons(true)}
            </MDBox>
          )}
          {!isEditing && modal && makeFormButtons(modal)}
          {isEditing && (
            <EditTaskLayout
              title={title}
              initialValues={{ ...initialValues }}
              hiddenImpossibleFields={
                hiddenImpossibleFields
              }
              modal
            />
          )}
        </form>
      </FormProvider>
    </FormWrapper>
  );
}

export default TaskForm;
