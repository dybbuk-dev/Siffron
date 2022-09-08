/**
=========================================================
* Material Dashboard 2 PRO React TS - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-2-pro-react-ts
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from '@mui/material/Grid';

// Material Dashboard 2 PRO React TS components
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';

// NewProduct page components
import FormField from 'src/mui/layouts/ecommerce/products/new-product/components/FormField';

function Socials(): JSX.Element {
  return (
    <MDBox>
      <MDTypography variant="h5" fontWeight="bold">
        Socials
      </MDTypography>
      <MDBox mt={2}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormField
              type="text"
              label="Shoppify Handle"
            />
          </Grid>
          <Grid item xs={12}>
            <FormField
              type="text"
              label="Facebook Account"
            />
          </Grid>
          <Grid item xs={12}>
            <FormField
              type="text"
              label="Instagram Account"
            />
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

export default Socials;
