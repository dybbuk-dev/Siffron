import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ProductCategoryViewItem from 'src/view/productCategory/view/ProductCategoryViewItem';
import { Grid } from '@mui/material';
import LogoViewItem from 'src/view/shared/view/LogoViewItem';
import MDTypography from 'src/mui/components/MDTypography';
import MDBox from 'src/mui/components/MDBox';

function ProductView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <Grid spacing={2} container>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <MDBox p={3} pt={5}>
            <LogoViewItem
              label={i18n('entities.product.fields.logo')}
              value={record.logo}
            />
          </MDBox>
        </Grid>
        <Grid item lg={8} md={8} sm={12} xs={12}>
          <MDBox p={3}>
            <Grid spacing={2} container>
              <Grid item md={6} xs={12}>
                <MDTypography variant="h3">
                  {record.title}
                </MDTypography>
              </Grid>
              <Grid item md={6} xs={12}>
                <ProductCategoryViewItem
                  label={i18n(
                    'entities.product.fields.category',
                  )}
                  value={record.category}
                />
              </Grid>
              <Grid item xs={12}>
                <TextViewItem
                  label={i18n(
                    'entities.product.fields.description',
                  )}
                  value={record.description}
                  multiline
                />
              </Grid>
              <Grid item xs={12}>
                <TextViewItem
                  label={i18n(
                    'entities.product.fields.website',
                  )}
                  value={record.website}
                />
              </Grid>
              <Grid item xs={12}>
                <TextViewItem
                  label={i18n(
                    'entities.product.fields.rating',
                  )}
                  value={record.rating}
                />
              </Grid>
              <Grid item xs={12}>
                <TextViewItem
                  label={i18n(
                    'entities.product.fields.popularity',
                  )}
                  value={record.popularity}
                />
              </Grid>
            </Grid>
          </MDBox>
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

export default ProductView;
