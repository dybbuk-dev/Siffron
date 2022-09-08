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

const polarChartData: Types = {
  labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
  datasets: {
    label: 'My First Dataset',
    data: [11, 16, 7, 3, 14],
    backgroundColors: [
      'info',
      'primary',
      'dark',
      'secondary',
      'success',
    ],
  },
};

export default polarChartData;
