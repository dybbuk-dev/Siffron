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
import Checkbox from '@mui/material/Checkbox';

// Material Dashboard 2 PRO React TS components
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';

// Declaring props types for IdCell
interface Props {
  id: string;
  checked?: boolean;
}

function IdCell({ id, checked }: Props): JSX.Element {
  return (
    <MDBox display="flex" alignItems="center">
      <Checkbox defaultChecked={checked} />
      <MDBox ml={1}>
        <MDTypography
          variant="caption"
          fontWeight="medium"
          color="text"
        >
          {id}
        </MDTypography>
      </MDBox>
    </MDBox>
  );
}

// Declaring default props for IdCell
IdCell.defaultProps = {
  checked: false,
};

export default IdCell;
