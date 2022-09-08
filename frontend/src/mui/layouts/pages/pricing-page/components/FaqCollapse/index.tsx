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

import { ReactNode } from 'react';

// @mui material components
import Icon from '@mui/material/Icon';
import Collapse from '@mui/material/Collapse';

// Material Dashboard 2 PRO React TS components
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';

// Material Dashboard 2 PRO React TS components
import borders from 'src/mui/assets/theme/base/borders';

// Declaring props types for FaqCollapse
interface Props {
  title: string;
  open: boolean;
  children: ReactNode;
  [key: string]: any;
}

function FaqCollapse({
  title,
  open,
  children,
  ...rest
}: Props): JSX.Element {
  const { borderWidth, borderColor } = borders;

  return (
    <MDBox mb={2}>
      <MDBox
        {...rest}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={2}
        borderBottom={`${borderWidth[1]} solid ${borderColor}`}
        sx={{ cursor: 'pointer' }}
      >
        <MDTypography
          variant="h5"
          color={open ? 'dark' : 'text'}
          sx={{ userSelect: 'none' }}
        >
          {title}
        </MDTypography>
        <MDBox color={open ? 'dark' : 'text'}>
          <Icon
            sx={{ fontWeight: 'bold' }}
            fontSize="small"
          >
            {open ? 'remove' : 'add'}
          </Icon>
        </MDBox>
      </MDBox>
      <Collapse timeout={400} in={open}>
        <MDBox p={2} lineHeight={1}>
          <MDTypography
            variant="button"
            color="text"
            opacity={0.8}
            fontWeight="regular"
          >
            {children}
          </MDTypography>
        </MDBox>
      </Collapse>
    </MDBox>
  );
}

export default FaqCollapse;
