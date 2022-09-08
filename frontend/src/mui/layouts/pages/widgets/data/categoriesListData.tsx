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

// Material Dashboard 2 PRO React TS components
import MDTypography from 'src/mui/components/MDTypography';

// types
type Types = any;

const categoriesListData: Types = [
  {
    color: 'dark',
    icon: 'launch',
    name: 'Devices',
    description: (
      <>
        250 in stock,{' '}
        <MDTypography
          variant="caption"
          color="text"
          fontWeight="medium"
        >
          346+ sold
        </MDTypography>
      </>
    ),
    route: '/',
  },
  {
    color: 'dark',
    icon: 'book_online',
    name: 'Tickets',
    description: (
      <>
        123 closed,{' '}
        <MDTypography
          variant="caption"
          color="text"
          fontWeight="medium"
        >
          15 open
        </MDTypography>
      </>
    ),
    route: '/',
  },
  {
    color: 'dark',
    icon: 'priority_high',
    name: 'Error logs',
    description: (
      <>
        1 is active,{' '}
        <MDTypography
          variant="caption"
          color="text"
          fontWeight="medium"
        >
          40 closed
        </MDTypography>
      </>
    ),
    route: '/',
  },
  {
    color: 'dark',
    icon: 'insert_emoticon',
    name: 'Happy users',
    description: (
      <MDTypography
        variant="caption"
        color="text"
        fontWeight="medium"
      >
        + 430
      </MDTypography>
    ),
    route: '/',
  },
];

export default categoriesListData;
