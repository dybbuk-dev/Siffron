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

import {
  useRef,
  useEffect,
  useState,
  useMemo,
  ReactNode,
} from 'react';

// react-chartjs-2 components
import { Line } from 'react-chartjs-2';

// @mui material components
import Card from '@mui/material/Card';

// Material Dashboard 2 PRO React TS components
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';

// Material Dashboard 2 PRO React TS Helper Functions
import gradientChartLine from 'src/mui/assets/theme/functions/gradientChartLine';

// Chart configurations
import configs from 'src/mui/layouts/pages/widgets/components/Chart/configs';

// Material Dashboard 2 PRO React TS Base Styles
import colors from 'src/mui/assets/theme/base/colors';

// Declaring props types for Chart
interface Props {
  title: string;
  count: number | ReactNode;
  percentage: {
    color:
      | 'primary'
      | 'secondary'
      | 'info'
      | 'success'
      | 'warning'
      | 'error'
      | 'dark';
    label: string | ReactNode;
  };
  chart: {
    labels: string[];
    datasets: {
      label: string;
      color:
        | 'primary'
        | 'secondary'
        | 'info'
        | 'success'
        | 'warning'
        | 'error'
        | 'light'
        | 'dark';
      data: number[];
    }[];
  };
}

function Chart({
  title,
  count,
  percentage,
  chart,
}: Props): JSX.Element {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({});
  const { data, options }: any = chartData;

  useEffect(() => {
    const chartDatasets = chart.datasets.map((dataset) => ({
      ...dataset,
      tension: 0.4,
      pointRadius: 0,
      borderWidth: 2,
      borderColor: colors[dataset.color].main,
      fill: true,
      maxBarThickness: 6,
      backgroundColor: gradientChartLine(
        chartRef.current.children[0],
        colors[dataset.color].main,
        0.02,
      ),
    }));

    setChartData(configs(chart.labels, chartDatasets));
  }, [chart]);

  return (
    <Card>
      <MDBox p={2} lineHeight={1}>
        <MDTypography
          variant="button"
          textTransform="capitalize"
          fontWeight="medium"
          color="text"
        >
          {title}
        </MDTypography>
        <MDTypography
          variant="h5"
          fontWeight="bold"
          color="dark"
        >
          {count}&nbsp;
          <MDTypography
            variant="button"
            fontWeight="bold"
            color={percentage.color}
          >
            {percentage.label}
          </MDTypography>
        </MDTypography>
      </MDBox>
      {useMemo(
        () => (
          <MDBox ref={chartRef} sx={{ height: '5.375rem' }}>
            <Line data={data} options={options} />
          </MDBox>
        ),
        [chartData],
      )}
    </Card>
  );
}

export default Chart;
