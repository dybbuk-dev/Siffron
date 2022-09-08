import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import riskSelectors from 'src/modules/risk/riskSelectors';
import destroyActions from 'src/modules/risk/destroy/riskDestroyActions';
import destroySelectors from 'src/modules/risk/destroy/riskDestroySelectors';
import actions from 'src/modules/risk/list/riskListActions';
import selectors from 'src/modules/risk/list/riskListSelectors';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import Pagination from 'src/view/shared/table/Pagination';
import Spinner from 'src/view/shared/Spinner';
import { selectMuiSettings } from 'src/modules/mui/muiSelectors';
import MDBox from 'src/mui/components/MDBox';
import DataTableHeadCell from 'src/mui/examples/Tables/DataTable/DataTableHeadCell';
import DataTableBodyCell from 'src/mui/examples/Tables/DataTable/DataTableBodyCell';
import MDTypography from 'src/mui/components/MDTypography';
import RiskCategoryListItem from 'src/view/riskCategory/list/RiskCategoryListItem';
import UserListItem from 'src/view/user/list/UserListItem';
import { Box, TableContainer } from '@mui/material';
import RiskInherentScoreViewItem from 'src/view/risk/view/RiskInherentScoreViewItem';
import RiskStatusViewItem from 'src/view/risk/view/RiskStatusViewItem';
import RiskLikelihoodViewItem from 'src/view/risk/view/RiskLikelihoodViewItem';
import RiskImpactViewItem from 'src/view/risk/view/RiskImpactViewItem';

function RiskListTable(props) {
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
    riskSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    riskSelectors.selectPermissionToDestroy,
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
              >
                {i18n('entities.risk.fields.reference')}
              </DataTableHeadCell>
              <DataTableHeadCell
                onClick={() => doChangeSort('title')}
                sorted={
                  sorter.field === 'title'
                    ? sorter.order
                    : 'none'
                }
              >
                {i18n('entities.risk.fields.title')}
              </DataTableHeadCell>
              <DataTableHeadCell sorted={false}>
                {i18n('entities.risk.fields.category')}
              </DataTableHeadCell>
              <DataTableHeadCell
                onClick={() => doChangeSort('status')}
                sorted={
                  sorter.field === 'status'
                    ? sorter.order
                    : 'none'
                }
              >
                {i18n('entities.risk.fields.status')}
              </DataTableHeadCell>
              <DataTableHeadCell sorted={false}>
                {i18n('entities.risk.fields.owner')}
              </DataTableHeadCell>
              <DataTableHeadCell
                onClick={() => doChangeSort('likelihood')}
                sorted={
                  sorter.field === 'likelihood'
                    ? sorter.order
                    : 'none'
                }
              >
                {i18n('entities.risk.fields.likelihood')}
              </DataTableHeadCell>
              <DataTableHeadCell
                onClick={() => doChangeSort('impact')}
                sorted={
                  sorter.field === 'impact'
                    ? sorter.order
                    : 'none'
                }
              >
                {i18n('entities.risk.fields.impact')}
              </DataTableHeadCell>
              <DataTableHeadCell
                onClick={() =>
                  doChangeSort('inherentScore')
                }
                sorted={
                  sorter.field === 'inherentScore'
                    ? sorter.order
                    : 'none'
                }
              >
                {i18n('entities.risk.fields.inherentScore')}
              </DataTableHeadCell>
              <DataTableHeadCell
                onClick={() =>
                  doChangeSort('residualScore')
                }
                sorted={
                  sorter.field === 'residualScore'
                    ? sorter.order
                    : 'none'
                }
              >
                {i18n('entities.risk.fields.residualScore')}
              </DataTableHeadCell>
              <DataTableHeadCell
                onClick={() => doChangeSort('cost')}
                sorted={
                  sorter.field === 'cost'
                    ? sorter.order
                    : 'none'
                }
              >
                {i18n('entities.risk.fields.cost')}
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
                    <Box
                      display="flex"
                      justifyContent="flex-end"
                    >
                      <Tooltip title={i18n('common.view')}>
                        <IconButton
                          component={Link}
                          color={sidenavColor}
                          to={`/risk/${row.id}`}
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
                            to={`/risk/${row.id}/edit`}
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
                    </Box>
                  </DataTableBodyCell>
                  <DataTableBodyCell align="right">
                    {row.reference}
                  </DataTableBodyCell>
                  <DataTableBodyCell>
                    {row.title}
                  </DataTableBodyCell>
                  <DataTableBodyCell>
                    <RiskCategoryListItem
                      value={row.category}
                    />
                  </DataTableBodyCell>
                  <DataTableBodyCell>
                    <RiskStatusViewItem
                      value={row.status}
                    />
                  </DataTableBodyCell>
                  <DataTableBodyCell>
                    <UserListItem value={row.owner} />
                  </DataTableBodyCell>
                  <DataTableBodyCell>
                    <RiskLikelihoodViewItem
                      value={row.likelihood}
                    />
                  </DataTableBodyCell>
                  <DataTableBodyCell>
                    <RiskImpactViewItem
                      value={row.impact}
                    />
                  </DataTableBodyCell>
                  <DataTableBodyCell>
                    <RiskInherentScoreViewItem
                      value={row.inherentScore}
                    />
                  </DataTableBodyCell>
                  <DataTableBodyCell align="right">
                    {row.residualScore}
                  </DataTableBodyCell>
                  <DataTableBodyCell align="right">
                    {row.cost}
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

export default RiskListTable;
