import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import taskSelectors from 'src/modules/task/taskSelectors';
import destroyActions from 'src/modules/task/destroy/taskDestroyActions';
import destroySelectors from 'src/modules/task/destroy/taskDestroySelectors';
import actions from 'src/modules/task/list/taskListActions';
import selectors from 'src/modules/task/list/taskListSelectors';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import Pagination from 'src/view/shared/table/Pagination';
import Spinner from 'src/view/shared/Spinner';
import UserListItem from 'src/view/user/list/UserListItem';
import moment from 'moment';
import TaskListListItem from 'src/view/taskList/list/TaskListListItem';
import TaskPriorityListItem from 'src/view/taskPriority/list/TaskPriorityListItem';
import {
  Table,
  TableRow,
  Checkbox,
  TableBody,
  IconButton,
  Tooltip,
  TableContainer,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import MDBox from 'src/mui/components/MDBox';
import DataTableHeadCell from 'src/mui/examples/Tables/DataTable/DataTableHeadCell';
import DataTableBodyCell from 'src/mui/examples/Tables/DataTable/DataTableBodyCell';
import MDTypography from 'src/mui/components/MDTypography';
import { selectMuiSettings } from 'src/modules/mui/muiSelectors';
import TaskStatusViewItem from 'src/view/task/view/TaskStatusViewItem';

function TaskListTable(props) {
  const { sidenavColor } = selectMuiSettings();
  const [recordIdToDestroy, setRecordIdToDestroy] =
    useState(null);
  const dispatch = useDispatch();

  const findLoading = useSelector(selectors.selectLoading);

  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );

  const loading = findLoading || destroyLoading;

  const rows = useSelector(selectors.selectRows);
  const pagination = useSelector(
    selectors.selectPagination,
  );
  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
  );
  const hasRows = useSelector(selectors.selectHasRows);
  const sorter = useSelector(selectors.selectSorter);
  const isAllSelected = useSelector(
    selectors.selectIsAllSelected,
  );
  const hasPermissionToEdit = useSelector(
    taskSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    taskSelectors.selectPermissionToDestroy,
  );

  const doOpenDestroyConfirmModal = (id) => {
    setRecordIdToDestroy(id);
  };

  const doCloseDestroyConfirmModal = () => {
    setRecordIdToDestroy(null);
  };

  const doChangeSort = (field) => {
    const order =
      sorter.field === field && sorter.order === 'asc'
        ? 'desc'
        : 'asc';

    dispatch(
      actions.doChangeSort({
        field,
        order,
      }),
    );
  };

  const doChangePagination = (pagination) => {
    dispatch(actions.doChangePagination(pagination));
  };

  const doDestroy = (id) => {
    doCloseDestroyConfirmModal();

    dispatch(destroyActions.doDestroy(id));
  };

  const doToggleAllSelected = () => {
    dispatch(actions.doToggleAllSelected());
  };

  const doToggleOneSelected = (id) => {
    dispatch(actions.doToggleOneSelected(id));
  };

  return (
    <>
      <TableContainer sx={{ boxShadow: 'none' }}>
        <Table>
          <MDBox component="thead">
            <TableRow>
              <DataTableHeadCell
                padding="checkbox"
                sorted={false}
              >
                {hasRows && (
                  <Checkbox
                    checked={Boolean(isAllSelected)}
                    onChange={() => doToggleAllSelected()}
                    size="small"
                  />
                )}
              </DataTableHeadCell>
              <DataTableHeadCell sorted={false} width="0">
                {' '}
              </DataTableHeadCell>
              <DataTableHeadCell
                onClick={() => doChangeSort('reference')}
                sorted={
                  sorter.field === 'reference'
                    ? sorter.order
                    : 'none'
                }
                noWrap
              >
                {i18n('entities.task.fields.reference')}
              </DataTableHeadCell>
              <DataTableHeadCell
                onClick={() => doChangeSort('title')}
                sorted={
                  sorter.field === 'title'
                    ? sorter.order
                    : 'none'
                }
                noWrap
              >
                {i18n('entities.task.fields.title')}
              </DataTableHeadCell>
              <DataTableHeadCell sorted={false} noWrap>
                {i18n('entities.task.fields.taskList')}
              </DataTableHeadCell>
              <DataTableHeadCell sorted={false} noWrap>
                {i18n('entities.task.fields.priority')}
              </DataTableHeadCell>
              <DataTableHeadCell
                onClick={() => doChangeSort('repeat')}
                sorted={
                  sorter.field === 'repeat'
                    ? sorter.order
                    : 'none'
                }
                noWrap
              >
                {i18n('entities.task.fields.repeat')}
              </DataTableHeadCell>
              <DataTableHeadCell
                onClick={() => doChangeSort('status')}
                sorted={
                  sorter.field === 'status'
                    ? sorter.order
                    : 'none'
                }
                noWrap
              >
                {i18n('entities.task.fields.status')}
              </DataTableHeadCell>
              <DataTableHeadCell sorted={false} noWrap>
                {i18n('entities.task.fields.owner')}
              </DataTableHeadCell>
              <DataTableHeadCell sorted={false} noWrap>
                {i18n('entities.task.fields.approver')}
              </DataTableHeadCell>
              <DataTableHeadCell
                onClick={() => doChangeSort('dueDate')}
                sorted={
                  sorter.field === 'dueDate'
                    ? sorter.order
                    : 'none'
                }
                noWrap
              >
                {i18n('entities.task.fields.dueDate')}
              </DataTableHeadCell>
              <DataTableHeadCell
                onClick={() =>
                  doChangeSort('completedDate')
                }
                sorted={
                  sorter.field === 'completedDate'
                    ? sorter.order
                    : 'none'
                }
                noWrap
              >
                {i18n('entities.task.fields.completedDate')}
              </DataTableHeadCell>
            </TableRow>
          </MDBox>
          <TableBody>
            {loading && (
              <TableRow>
                <DataTableBodyCell
                  align="center"
                  colSpan={100}
                >
                  <Spinner />
                </DataTableBodyCell>
              </TableRow>
            )}
            {!loading && !hasRows && (
              <TableRow>
                <DataTableBodyCell
                  align="center"
                  colSpan={100}
                >
                  <MDTypography align="center">
                    {i18n('table.noData')}
                  </MDTypography>
                </DataTableBodyCell>
              </TableRow>
            )}
            {!loading &&
              rows.map((row) => (
                <TableRow key={row.id}>
                  <DataTableBodyCell padding="checkbox">
                    <Checkbox
                      checked={selectedKeys.includes(
                        row.id,
                      )}
                      onChange={() =>
                        doToggleOneSelected(row.id)
                      }
                      size="small"
                    />
                  </DataTableBodyCell>
                  <DataTableBodyCell>
                    <MDBox
                      display="flex"
                      justifyContent="flex-end"
                    >
                      <Tooltip title={i18n('common.view')}>
                        <IconButton
                          component={Link}
                          color={sidenavColor}
                          to={`/task/${row.id}`}
                        >
                          <SearchIcon />
                        </IconButton>
                      </Tooltip>
                      {hasPermissionToEdit && (
                        <Tooltip
                          title={i18n('common.edit')}
                        >
                          <IconButton
                            color={sidenavColor}
                            component={Link}
                            to={`/task/${row.id}/edit`}
                          >
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                      )}
                      {hasPermissionToDestroy && (
                        <Tooltip
                          title={i18n('common.destroy')}
                        >
                          <IconButton
                            color={sidenavColor}
                            onClick={() =>
                              doOpenDestroyConfirmModal(
                                row.id,
                              )
                            }
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      )}
                    </MDBox>
                  </DataTableBodyCell>
                  <DataTableBodyCell align="right">
                    {row.reference}
                  </DataTableBodyCell>
                  <DataTableBodyCell>
                    {row.title}
                  </DataTableBodyCell>
                  <DataTableBodyCell>
                    <TaskListListItem
                      value={row.taskList}
                    />
                  </DataTableBodyCell>
                  <DataTableBodyCell>
                    <TaskPriorityListItem
                      value={row.priority}
                    />
                  </DataTableBodyCell>
                  <DataTableBodyCell
                    fontWeight={
                      row.repeat === 'Never' ? null : 'bold'
                    }
                  >
                    {row.repeat
                      ? i18n(
                          `entities.task.enumerators.repeat.${row.repeat}`,
                        )
                      : null}
                  </DataTableBodyCell>
                  <DataTableBodyCell>
                    <TaskStatusViewItem
                      value={row.status}
                    />
                  </DataTableBodyCell>
                  <DataTableBodyCell>
                    <UserListItem value={row.owner} />
                  </DataTableBodyCell>
                  <DataTableBodyCell>
                    <UserListItem value={row.approver} />
                  </DataTableBodyCell>
                  <DataTableBodyCell>
                    {row.dueDate
                      ? moment(row.dueDate).format(
                          'YYYY-MM-DD HH:mm',
                        )
                      : null}
                  </DataTableBodyCell>
                  <DataTableBodyCell>
                    {row.completedDate
                      ? moment(row.completedDate).format(
                          'YYYY-MM-DD HH:mm',
                        )
                      : null}
                  </DataTableBodyCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>

        <Pagination
          onChange={doChangePagination}
          disabled={loading}
          pagination={pagination}
          entriesPerPage
          showTotalEntries
        />
      </TableContainer>

      {recordIdToDestroy && (
        <ConfirmModal
          title={i18n('common.areYouSure')}
          onConfirm={() => doDestroy(recordIdToDestroy)}
          onClose={() => doCloseDestroyConfirmModal()}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        />
      )}
    </>
  );
}

export default TaskListTable;
