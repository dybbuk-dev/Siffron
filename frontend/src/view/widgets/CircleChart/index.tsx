import React from 'react';
import { Card, Grid } from '@mui/material';
import { i18n } from 'src/i18n';
import MDBox from 'src/mui/components/MDBox';
import PieChart from 'src/mui/examples/Charts/PieChart';
import MDTypography from 'src/mui/components/MDTypography';

function CircleChart() {
  return (
    <Card sx={{ height: '100%' }}>
      <MDBox>
        <MDBox pt={3} px={2}>
          <MDTypography variant="h6" fontWeight="medium">
            {'Pie Chart'}
          </MDTypography>
        </MDBox>
        <MDBox p={2}>
          <PieChart
            chart={{
              labels: [
                'Facebook',
                'Direct',
                'Organic',
                'Referral',
              ],
              datasets: {
                label: 'Projects',
                backgroundColors: [
                  'info',
                  'primary',
                  'dark',
                  'secondary',
                  'primary',
                ],
                data: [15, 20, 12, 60],
              },
            }}
          />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default CircleChart;
