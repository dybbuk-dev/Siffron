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
import MDButton from 'src/mui/components/MDButton';
import MDAvatar from 'src/mui/components/MDAvatar';
import MDBadge from 'src/mui/components/MDBadge';

// Images
import orderImage from 'src/mui/assets/images/product-12.jpg';

function OrderInfo(): JSX.Element {
  return (
    <Grid container spacing={3} alignItems="center">
      <Grid item xs={12} md={6}>
        <MDBox display="flex" alignItems="center">
          <MDBox mr={2}>
            <MDAvatar
              size="xxl"
              src={orderImage}
              alt="Gold Glasses"
            />
          </MDBox>
          <MDBox lineHeight={1}>
            <MDTypography variant="h6" fontWeight="medium">
              Gold Glasses
            </MDTypography>
            <MDBox mb={2}>
              <MDTypography variant="button" color="text">
                Order was delivered 2 days ago.
              </MDTypography>
            </MDBox>
            <MDBadge
              variant="gradient"
              color="success"
              size="xs"
              badgeContent="delivered"
              container
            />
          </MDBox>
        </MDBox>
      </Grid>
      <Grid item xs={12} md={6} sx={{ textAlign: 'right' }}>
        <MDButton
          variant="gradient"
          color="dark"
          size="small"
        >
          contact us
        </MDButton>
        <MDBox mt={0.5}>
          <MDTypography variant="button" color="text">
            Do you like the product? Leave us a review{' '}
            <MDTypography
              component="a"
              href="#"
              variant="button"
              color="text"
              fontWeight="regular"
            >
              here
            </MDTypography>
            .
          </MDTypography>
        </MDBox>
      </Grid>
    </Grid>
  );
}

export default OrderInfo;
