import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import ShopAutocompleteFormItem from 'src/view/shop/autocomplete/ShopAutocompleteFormItem';
import { Grid } from '@mui/material';
import { i18n } from 'src/i18n';
import { selectMuiSettings } from 'src/modules/mui/muiSelectors';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';

function DepartmentLayout(props) {
  const { sidenavColor } = selectMuiSettings();
  const { title } = props;
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
              {title ??
                i18n('entities.department.new.title')}
            </MDTypography>
          </MDBox>
          <MDBox mb={6}></MDBox>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <InputFormItem
            name="name"
            label={i18n('entities.department.fields.name')}
            required={true}
            variant="standard"
          />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <ShopAutocompleteFormItem
            name="shop"
            label={i18n('entities.department.fields.shop')}
            required={false}
            showCreate={true}
            variant="standard"
            fullWidth
          />
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default DepartmentLayout;
