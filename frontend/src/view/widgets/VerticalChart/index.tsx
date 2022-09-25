import React from 'react';
import { Card, Grid } from '@mui/material';
import { i18n } from 'src/i18n';
import MDBox from 'src/mui/components/MDBox';
import VerticalBarChart from 'src/mui/examples/Charts/BarCharts/VerticalBarChart';
import MDTypography from 'src/mui/components/MDTypography';

function VerticalChart() {
  return (
    <Card sx={{ height: '100%' }}>
      <MDBox>
        <MDBox pt={3} px={2}>
          <MDTypography variant="h6" fontWeight="medium">
            {'Vertical Chart'}
          </MDTypography>
        </MDBox>
        <MDBox p={2}>
          <VerticalBarChart
            chart={{
              labels: [
                '16-20',
                '21-25',
                '26-30',
                '31-36',
                '36-42',
                '42+',
              ],
              datasets: [
                {
                  label: 'Sales by age',
                  color: 'dark',
                  data: [15, 20, 12, 60, 20, 15],
                },
              ],
            }}
          />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default VerticalChart;
