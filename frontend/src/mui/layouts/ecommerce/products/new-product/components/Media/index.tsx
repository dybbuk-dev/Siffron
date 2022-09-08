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

import { useMemo } from 'react';

// Material Dashboard 2 PRO React TS components
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';
import MDDropzone from 'src/mui/components/MDDropzone';

function Media(): JSX.Element {
  return (
    <MDBox>
      <MDTypography variant="h5">Media</MDTypography>
      <MDBox mt={3}>
        <MDBox
          mb={1}
          ml={0.5}
          lineHeight={0}
          display="inline-block"
        >
          <MDTypography
            component="label"
            variant="button"
            fontWeight="regular"
            color="text"
          >
            Product Image
          </MDTypography>
        </MDBox>
        {useMemo(
          () => (
            <MDDropzone
              options={{ addRemoveLinks: true }}
            />
          ),
          [],
        )}
      </MDBox>
    </MDBox>
  );
}

export default Media;
