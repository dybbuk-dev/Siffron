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

// Wizard application components
import FormField from 'src/mui/layouts/applications/wizard/components/FormField';

function Address(): JSX.Element {
  return (
    <MDBox>
      <MDBox
        width="80%"
        textAlign="center"
        mx="auto"
        my={4}
      >
        <MDBox mb={1}>
          <MDTypography variant="h5" fontWeight="regular">
            Are you living in a nice area?
          </MDTypography>
        </MDBox>
        <MDTypography variant="body2" color="text">
          One thing I love about the later sunsets is the
          chance to go for a walk through the neighborhood
          woods before dinner
        </MDTypography>
      </MDBox>
      <MDBox mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <FormField
              type="text"
              label="Street Name"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormField
              type="number"
              label="Street Number"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <FormField
              type="text"
              label="City"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <FormField
              type="text"
              label="Country"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

export default Address;
