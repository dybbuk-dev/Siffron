import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import ShopViewItem from 'src/view/shop/view/ShopViewItem';
import DepartmentViewItem from 'src/view/department/view/DepartmentViewItem';
import SectionViewItem from 'src/view/section/view/SectionViewItem';
import { Grid } from '@mui/material';
import MDTypography from 'src/mui/components/MDTypography';

function ShelfView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <Grid container spacing={4}>
        <Grid item lg={8} md={8} sm={12} xs={12}>
          <Grid spacing={2} container>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <MDTypography variant="h3">
                {record.name}
              </MDTypography>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <DepartmentViewItem
                label={i18n('entities.shelf.fields.shop')}
                value={record.shop}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <DepartmentViewItem
                label={i18n(
                  'entities.shelf.fields.department',
                )}
                value={record.department}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <DepartmentViewItem
                label={i18n(
                  'entities.shelf.fields.section',
                )}
                value={record.section}
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

export default ShelfView;
