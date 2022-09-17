import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import UserViewItem from 'src/view/user/view/UserViewItem';
import { Grid } from '@mui/material';
import MDTypography from 'src/mui/components/MDTypography';

function ShopView(props) {
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
              <UserViewItem
                label={i18n('entities.shop.fields.manager')}
                value={record.manager}
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

export default ShopView;
