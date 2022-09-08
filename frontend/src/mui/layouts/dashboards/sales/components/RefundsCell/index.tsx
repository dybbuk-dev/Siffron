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
import Icon from '@mui/material/Icon';

// Material Dashboard 2 PRO React TS components
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';

// Declaring props types for RefundsCell
interface Props {
  value: string | number;
  icon: {
    color: 'info' | 'success' | 'warning' | 'error';
    name: string;
  };
}

function RefundsCell({ value, icon }: Props): JSX.Element {
  return (
    <MDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      px={2}
    >
      <MDTypography
        variant="button"
        fontWeight="regular"
        color="text"
      >
        {value}
      </MDTypography>
      <MDBox color={icon.color} lineHeight={0}>
        <Icon sx={{ fontWeight: 'bold' }} fontSize="small">
          {icon.name}
        </Icon>
      </MDBox>
    </MDBox>
  );
}

export default RefundsCell;
