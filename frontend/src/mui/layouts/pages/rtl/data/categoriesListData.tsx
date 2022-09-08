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
    name: 'الأجهزة',
    description: (
      <>
        250 في المخزن,{' '}
        <MDTypography
          variant="caption"
          color="text"
          fontWeight="medium"
        >
          346+ تم البيع
        </MDTypography>
      </>
    ),
    route: '/',
  },
  {
    color: 'dark',
    icon: 'book_online',
    name: 'تذاكر',
    description: (
      <>
        123 مغلق,{' '}
        <MDTypography
          variant="caption"
          color="text"
          fontWeight="medium"
        >
          15 افتح
        </MDTypography>
      </>
    ),
    route: '/',
  },
  {
    color: 'dark',
    icon: 'priority_high',
    name: 'سجلات الخطأ',
    description: (
      <>
        1 is نشيط,{' '}
        <MDTypography
          variant="caption"
          color="text"
          fontWeight="medium"
        >
          40 مغلق
        </MDTypography>
      </>
    ),
    route: '/',
  },
  {
    color: 'dark',
    icon: 'insert_emoticon',
    name: 'المستخدمين السعداء',
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
