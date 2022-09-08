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

const defaultLineChartData: Types = {
  labels: [
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  datasets: [
    {
      label: 'Organic Search',
      color: 'info',
      data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
    },
    {
      label: 'Referral',
      color: 'dark',
      data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
    },
    {
      label: 'Direct',
      color: 'primary',
      data: [40, 80, 70, 90, 30, 90, 140, 130, 200],
    },
  ],
};

export default defaultLineChartData;
