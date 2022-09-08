import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { i18n } from 'src/i18n';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  DialogActions,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MDTypography from 'src/mui/components/MDTypography';
import MDBox from 'src/mui/components/MDBox';
import TaskView from 'src/view/task/view/TaskView';
import { useDispatch, useSelector } from 'react-redux';
import taskInstanceViewActions from 'src/modules/taskInstance/view/taskInstanceViewActions';
import selectors from 'src/modules/taskInstance/view/taskInstanceViewSelectors';
import MDButton from 'src/mui/components/MDButton';
import { selectMuiSettings } from 'src/modules/mui/muiSelectors';
import taskSelectors from 'src/modules/task/taskSelectors';

function TaskViewModal(props) {
  const dispatch = useDispatch();

  const { sidenavColor } = selectMuiSettings();

  const editable = useSelector(
    taskSelectors.selectPermissionToEdit,
  );

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(taskInstanceViewActions.doFind(props.id));
  }, [dispatch, props.id]);

  const doClose = () => {
    return props.onClose();
  };

  const doEdit = () => {
    doClose();
    props.onEdit();
  };

  return ReactDOM.createPortal(
    <Dialog
      open={true}
      onClose={doClose}
      maxWidth="xl"
      fullWidth={true}
    >
      <DialogTitle>
        <MDBox
          display="flex"
          justifyContent="space-between"
        >
          <MDBox
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
          >
            <MDTypography>
              {i18n('entities.task.view.title')}
            </MDTypography>
            {record && (
              <MDTypography
                variant="button"
                color="text"
                fontWeight="regular"
                ml={3}
              >
                {`# ${record?.reference}`}
              </MDTypography>
            )}
          </MDBox>
          <IconButton
            color="secondary"
            onClick={doClose}
            size="small"
          >
            <CloseIcon />
          </IconButton>
        </MDBox>
      </DialogTitle>
      <DialogContent>
        <MDBox p={2}>
          <TaskView loading={loading} record={record} />
        </MDBox>
      </DialogContent>
      {editable && (
        <DialogActions>
          <MDButton
            variant="gradient"
            color={sidenavColor}
            onClick={doEdit}
          >
            {i18n('entities.task.edit.title')}
          </MDButton>
        </DialogActions>
      )}
    </Dialog>,
    (document as any).getElementById('modal-root'),
  );
}

export default TaskViewModal;
