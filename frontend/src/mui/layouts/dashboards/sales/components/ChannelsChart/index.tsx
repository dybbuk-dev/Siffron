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
import Tooltip from '@mui/material/Tooltip';
import Icon from '@mui/material/Icon';
import Grid from '@mui/material/Grid';

// Material Dashboard 2 PRO React TS components
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';
import MDButton from 'src/mui/components/MDButton';
import MDBadgeDot from 'src/mui/components/MDBadgeDot';
import PieChart from 'src/mui/examples/Charts/PieChart';

// Data
import channelChartData from 'src/mui/layouts/dashboards/sales/components/ChannelsChart/data';

// for MUI 2 Dashboard
import muiActions from 'src/modules/mui/muiActions';
import { selectMuiSettings } from 'src/modules/mui/muiSelectors';

function ChannelsChart(): JSX.Element {
  const { darkMode } = selectMuiSettings();

  return (
    <Card sx={{ height: '100%' }}>
      <MDBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pt={2}
        px={2}
      >
        <MDTypography variant="h6">Channels</MDTypography>
        <Tooltip
          title="See traffic channels"
          placement="bottom"
          arrow
        >
          <MDButton
            variant="outlined"
            color="secondary"
            size="small"
            circular
            iconOnly
          >
            <Icon>priority_high</Icon>
          </MDButton>
        </Tooltip>
      </MDBox>
      <MDBox mt={3}>
        <Grid container alignItems="center">
          <Grid item xs={7}>
            <PieChart
              chart={channelChartData}
              height="12.5rem"
            />
          </Grid>
          <Grid item xs={5}>
            <MDBox pr={1}>
              <MDBox mb={1}>
                <MDBadgeDot
                  color="info"
                  size="sm"
                  badgeContent="Facebook"
                />
              </MDBox>
              <MDBox mb={1}>
                <MDBadgeDot
                  color="primary"
                  size="sm"
                  badgeContent="Direct"
                />
              </MDBox>
              <MDBox mb={1}>
                <MDBadgeDot
                  color="dark"
                  size="sm"
                  badgeContent="Organic"
                />
              </MDBox>
              <MDBox mb={1}>
                <MDBadgeDot
                  color="secondary"
                  size="sm"
                  badgeContent="Referral"
                />
              </MDBox>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox
        pt={4}
        pb={2}
        px={2}
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        mt="auto"
      >
        <MDBox
          width={{ xs: '100%', sm: '60%' }}
          lineHeight={1}
        >
          <MDTypography
            variant="button"
            color="text"
            fontWeight="light"
          >
            More than <strong>1,200,000</strong> sales are
            made using referral marketing, and{' '}
            <strong>700,000</strong> are from social media.
          </MDTypography>
        </MDBox>
        <MDBox
          width={{ xs: '100%', sm: '40%' }}
          textAlign="right"
          mt={{ xs: 2, sm: 'auto' }}
        >
          <MDButton color={darkMode ? 'white' : 'light'}>
            read more
          </MDButton>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default ChannelsChart;
