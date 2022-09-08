import { Card, Grid } from '@mui/material';
import { i18n } from 'src/i18n';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';
import Storage from 'src/security/storage';
import ProductCategoryAutocompleteFormItem from 'src/view/productCategory/autocomplete/ProductCategoryAutocompleteFormItem';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import LogoFormItem from 'src/view/shared/form/items/LogoFormItem';
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';

function EditProductLayout(props) {
  const { initialValues } = props;
  return (
    <MDBox mt={3}>
      <Grid spacing={2} container>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Card>
            <LogoFormItem
              name="logo"
              label={i18n('entities.product.fields.logo')}
              required={true}
              storage={Storage.values.productLogo}
              max={1}
            />
          </Card>
        </Grid>
        <Grid item lg={8} md={8} sm={12} xs={12}>
          <Card>
            <MDBox px={3} py={3}>
              <Grid spacing={2} container>
                <Grid item xs={12}>
                  <MDBox
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <MDTypography variant="h5">
                      {i18n('entities.product.info')}
                    </MDTypography>
                    <MDTypography
                      variant="button"
                      color="text"
                      fontWeight="bold"
                    >
                      {`# ${initialValues.reference}`}
                    </MDTypography>
                  </MDBox>
                </Grid>
                <Grid item xs={12}>
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
              </Grid>
            </MDBox>
          </Card>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default EditProductLayout;
