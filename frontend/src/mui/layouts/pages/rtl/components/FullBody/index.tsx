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
import Card from '@mui/material/Card';

// Material Dashboard 2 PRO React TS components
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';
import MDBadge from 'src/mui/components/MDBadge';

function FullBody(): JSX.Element {
  return (
    <Card sx={{ height: '100%' }}>
      <MDBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pt={3}
        mb={2}
        px={3}
      >
        <MDTypography variant="body2" color="text">
          جسم كامل
        </MDTypography>
        <MDBadge
          variant="contained"
          color="info"
          badgeContent="معتدل"
          container
        />
      </MDBox>
      <MDBox pb={3} px={3}>
        <MDTypography variant="body2" color="text">
          ما يهم هو الأشخاص الذين أوقدوه. والناس الذين
          يشبهونهم مستاءون منه.
        </MDTypography>
      </MDBox>
    </Card>
  );
}

export default FullBody;
