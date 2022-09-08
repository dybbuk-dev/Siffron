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

// types
interface Types {
  labels: any;
  datasets: any;
}

const defaultDoughnutChartData: Types = {
  labels: [
    'Creative Tim',
    'Github',
    'Bootsnipp',
    'Dev.to',
    'Codeinwp',
  ],
  datasets: {
    label: 'Projects',
    backgroundColors: [
      'info',
      'dark',
      'error',
      'secondary',
      'primary',
    ],
    data: [15, 20, 12, 60, 20],
  },
};

export default defaultDoughnutChartData;
