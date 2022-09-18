import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import facingSelectors from 'src/modules/facing/facingSelectors';
import destroyActions from 'src/modules/facing/destroy/facingDestroyActions';
import destroySelectors from 'src/modules/facing/destroy/facingDestroySelectors';
import actions from 'src/modules/facing/list/facingListActions';
import selectors from 'src/modules/facing/list/facingListSelectors';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import Pagination from 'src/view/shared/table/Pagination';
import Spinner from 'src/view/shared/Spinner';
import ShopListItem from 'src/view/shop/list/ShopListItem';
import DepartmentListItem from 'src/view/department/list/DepartmentListItem';
import SectionListItem from 'src/view/section/list/SectionListItem';
import ShelfListItem from 'src/view/shelf/list/ShelfListItem';
import UserListItem from 'src/view/user/list/UserListItem';
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

function FacingListTable(props) {
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
    facingSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    facingSelectors.selectPermissionToDestroy,
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
                onClick={() => doChangeSort('model')}
                sorted={
                  sorter.field === 'model'
                    ? sorter.order
                    : 'none'
                }
                noWrap
              >
                {i18n('entities.facing.fields.model')}
              </DataTableHeadCell>
              <DataTableHeadCell sorted={false} noWrap>
                {i18n('entities.facing.fields.type')}
              </DataTableHeadCell>
              <DataTableHeadCell sorted={false} noWrap>
                {i18n('entities.facing.fields.sn')}
              </DataTableHeadCell>
              <DataTableHeadCell sorted={false} noWrap>
                {i18n('entities.shop.fields.manager')}
              </DataTableHeadCell>
              <DataTableHeadCell sorted={false} noWrap>
                {i18n('entities.facing.fields.shop')}
              </DataTableHeadCell>
              <DataTableHeadCell sorted={false} noWrap>
                {i18n('entities.facing.fields.department')}
              </DataTableHeadCell>
              <DataTableHeadCell sorted={false} noWrap>
                {i18n('entities.facing.fields.section')}
              </DataTableHeadCell>
              <DataTableHeadCell sorted={false} noWrap>
                {i18n('entities.facing.fields.shelf')}
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
                          to={`/facing/${row.id}`}
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
                            to={`/facing/${row.id}/edit`}
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
                  <DataTableBodyCell>
                    {row.model}
                  </DataTableBodyCell>
                  <DataTableBodyCell>
                    {row.type}
                  </DataTableBodyCell>
                  <DataTableBodyCell>
                    {row.sn}
                  </DataTableBodyCell>
                  <DataTableBodyCell>
                    <UserListItem value={row.manager} />
                  </DataTableBodyCell>
                  <DataTableBodyCell>
                    <ShopListItem value={row.shop} />
                  </DataTableBodyCell>
                  <DataTableBodyCell>
                    <DepartmentListItem
                      value={row.department}
                    />
                  </DataTableBodyCell>
                  <DataTableBodyCell>
                    <SectionListItem value={row.section} />
                  </DataTableBodyCell>
                  <DataTableBodyCell>
                    <ShelfListItem value={row.shelf} />
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

export default FacingListTable;
