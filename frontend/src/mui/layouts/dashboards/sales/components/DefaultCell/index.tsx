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

// Material Dashboard 2 PRO React TS components
import MDTypography from 'src/mui/components/MDTypography';

function DefaultCell({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <MDTypography
      variant="button"
      fontWeight="regular"
      color="text"
    >
      {children}
    </MDTypography>
  );
}

export default DefaultCell;
