import { Grid } from '@mui/material';
import { i18n } from 'src/i18n';
import { selectMuiSettings } from 'src/modules/mui/muiSelectors';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';
import Storage from 'src/security/storage';
import ProductCategoryAutocompleteFormItem from 'src/view/productCategory/autocomplete/ProductCategoryAutocompleteFormItem';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import LogoFormItem from 'src/view/shared/form/items/LogoFormItem';
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';

function NewProductLayout(props) {
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
              {title ?? i18n('entities.product.new.title')}
            </MDTypography>
          </MDBox>
          <MDBox mb={6}></MDBox>
        </Grid>
        <Grid item md={8} xs={12}>
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <InputFormItem
                name="title"
                label={i18n(
                  'entities.product.fields.title',
                )}
                variant="standard"
                required={true}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <ProductCategoryAutocompleteFormItem
                name="category"
                label={i18n(
                  'entities.product.fields.category',
                )}
                variant="standard"
                fullWidth
                required={true}
                showCreate={true}
              />
            </Grid>
            <Grid item xs={12}>
              <TextAreaFormItem
                name="description"
                label={i18n(
                  'entities.product.fields.description',
                )}
                variant="standard"
                required={true}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <InputFormItem
                name="website"
                label={i18n(
                  'entities.product.fields.website',
                )}
                variant="standard"
                required={true}
              />
            </Grid>
            <Grid item xs={12}>
              <InputFormItem
                name="rating"
                label={i18n(
                  'entities.product.fields.rating',
                )}
                variant="standard"
                required={false}
              />
            </Grid>
            <Grid item xs={12}>
              <InputNumberFormItem
                name="popularity"
                label={i18n(
                  'entities.product.fields.popularity',
                )}
                variant="standard"
                required={false}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4} xs={12}>
          <MDBox pt={5}>
            <LogoFormItem
              name="logo"
              label={i18n('entities.product.fields.logo')}
              required={true}
              storage={Storage.values.productLogo}
              max={1}
            />
          </MDBox>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default NewProductLayout;
