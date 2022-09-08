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
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';
import MDAvatar from 'src/mui/components/MDAvatar';

// Declaring props types for CustomerCell
interface Props {
  image?: string;
  name: string;
  color?:
    | 'transparent'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'light'
    | 'dark';
}

function CustomerCell({
  image,
  name,
  color,
}: Props): JSX.Element {
  return (
    <MDBox display="flex" alignItems="center">
      <MDBox mr={1}>
        <MDAvatar
          bgColor={color}
          src={image}
          alt={name}
          size="xs"
        />
      </MDBox>
      <MDTypography
        variant="caption"
        fontWeight="medium"
        color="text"
        sx={{ lineHeight: 0 }}
      >
        {name}
      </MDTypography>
    </MDBox>
  );
}

// Declaring default props for CustomerCell
CustomerCell.defaultProps = {
  image: '',
  color: 'dark',
};

export default CustomerCell;
