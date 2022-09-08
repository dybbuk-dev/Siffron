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

// Material Dashboard 2 PRO React TS examples components
import DashboardLayout from 'src/mui/examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'src/mui/examples/Navbars/DashboardNavbar';
import Footer from 'src/mui/examples/Footer';
import DefaultLineChart from 'src/mui/examples/Charts/LineCharts/DefaultLineChart';
import GradientLineChart from 'src/mui/examples/Charts/LineCharts/GradientLineChart';
import VerticalBarChart from 'src/mui/examples/Charts/BarCharts/VerticalBarChart';
import HorizontalBarChart from 'src/mui/examples/Charts/BarCharts/HorizontalBarChart';
import MixedChart from 'src/mui/examples/Charts/MixedChart';
import BubbleChart from 'src/mui/examples/Charts/BubbleChart';
import DefaultDoughnutChart from 'src/mui/examples/Charts/DoughnutCharts/DefaultDoughnutChart';
import PieChart from 'src/mui/examples/Charts/PieChart';
import RadarChart from 'src/mui/examples/Charts/RadarChart';
import PolarChart from 'src/mui/examples/Charts/PolarChart';

// Data
import defaultLineChartData from 'src/mui/layouts/pages/charts/data/defaultLineChartData';
import gradientLineChartData from 'src/mui/layouts/pages/charts/data/gradientLineChartData';
import verticalBarChartData from 'src/mui/layouts/pages/charts/data/verticalBarChartData';
import horizontalBarChartData from 'src/mui/layouts/pages/charts/data/horizontalBarChartData';
import mixedChartData from 'src/mui/layouts/pages/charts/data/mixedChartData';
import bubbleChartData from 'src/mui/layouts/pages/charts/data/bubbleChartData';
import defaultDoughnutChartData from 'src/mui/layouts/pages/charts/data/defaultDoughnutChartData';
import pieChartData from 'src/mui/layouts/pages/charts/data/pieChartData';
import radarChartData from 'src/mui/layouts/pages/charts/data/radarChartData';
import polarChartData from 'src/mui/layouts/pages/charts/data/polarChartData';

function Charts(): JSX.Element {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox my={3}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ lineHeight: 0 }}
            >
              <MDTypography variant="h5">
                Charts
              </MDTypography>
              <MDTypography variant="button" color="text">
                Charts on this page use Chart.js - Simple
                yet flexible JavaScript charting for
                designers & developers.
              </MDTypography>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={6}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <DefaultLineChart
                icon={{ component: 'insights' }}
                title="Line chart"
                description="Product insights"
                chart={defaultLineChartData}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <GradientLineChart
                icon={{ component: 'show_chart' }}
                title="Line chart with gradient"
                description="Visits from devices"
                chart={gradientLineChartData}
              />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={6}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <VerticalBarChart
                icon={{
                  color: 'dark',
                  component: 'leaderboard',
                }}
                title="Bar chart"
                description="Sales related to age average"
                chart={verticalBarChartData}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <HorizontalBarChart
                icon={{
                  color: 'dark',
                  component: 'splitscreen',
                }}
                title="Bar chart horizontal"
                description="Sales related to age average"
                chart={horizontalBarChartData}
              />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={6}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <MixedChart
                icon={{
                  color: 'primary',
                  component: 'auto_graph',
                }}
                title="Mixed chart"
                description="Analytics Insights"
                height="19.75rem"
                chart={mixedChartData}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <BubbleChart
                icon={{
                  color: 'primary',
                  component: 'multiline_chart',
                }}
                title="Bubble chart"
                description="Users divided by regions"
                chart={bubbleChartData}
              />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={6}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <DefaultDoughnutChart
                icon={{
                  color: 'success',
                  component: 'donut_small',
                }}
                title="Doughnut chart"
                description="Affiliates program"
                chart={defaultDoughnutChartData}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <PieChart
                icon={{
                  color: 'success',
                  component: 'donut_small',
                }}
                title="Pie chart"
                description="Analytics Insights"
                chart={pieChartData}
              />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <RadarChart
                icon={{
                  color: 'warning',
                  component: 'data_saver_on',
                }}
                title="Radar chart"
                description="Sciences score"
                chart={radarChartData}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <PolarChart
                icon={{
                  color: 'warning',
                  component: 'scatter_plot',
                }}
                title="Polar chart"
                description="Analytics Insights"
                chart={polarChartData}
              />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Charts;
