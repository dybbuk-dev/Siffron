import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import ShopViewItem from 'src/view/shop/view/ShopViewItem';
import DepartmentViewItem from 'src/view/department/view/DepartmentViewItem';
import SectionViewItem from 'src/view/section/view/SectionViewItem';
import ShelfViewItem from 'src/view/shelf/view/ShelfViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import FacingTypeViewItem from 'src/view/facing/view/FacingTypeViewItem';
import CustomViewItem from 'src/view/shared/view/CustomViewItem';
import { Grid } from '@mui/material';
import MDTypography from 'src/mui/components/MDTypography';

function FacingView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <Grid container spacing={4}>
        <Grid item lg={8} md={8} sm={12} xs={12}>
          <Grid spacing={2} container>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <MDTypography variant="h3">
                {record.model}
              </MDTypography>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <CustomViewItem
                label={i18n('entities.facing.fields.type')}
                value={[record.type]}
                render={(values) =>
                  values.map((value) => (
                    <FacingTypeViewItem
                      key={value}
                      value={value}
                    />
                  ))
                }
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <MDTypography variant="h5">
                {record.sn}
              </MDTypography>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <UserViewItem
                label={i18n('entities.shop.fields.manager')}
                value={record.manager}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <ShopViewItem
                label={i18n('entities.facing.fields.shop')}
                value={record.shop}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <DepartmentViewItem
                label={i18n(
                  'entities.facing.fields.department',
                )}
                value={record.department}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <SectionViewItem
                label={i18n(
                  'entities.facing.fields.section',
                )}
                value={record.section}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <ShelfViewItem
                label={i18n('entities.facing.fields.shelf')}
                value={record.shelf}
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

export default FacingView;
