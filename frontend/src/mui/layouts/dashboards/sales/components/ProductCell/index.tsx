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

// Declaring props types for ProductCell
interface Props {
  image: string;
  name: string;
  orders: string | number;
}

function ProductCell({
  image,
  name,
  orders,
}: Props): JSX.Element {
  return (
    <MDBox display="flex" alignItems="center" pr={2}>
      <MDBox mr={2}>
        <MDAvatar src={image} alt={name} />
      </MDBox>
      <MDBox display="flex" flexDirection="column">
        <MDTypography variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography
          variant="button"
          fontWeight="regular"
          color="secondary"
        >
          <MDTypography
            component="span"
            variant="button"
            fontWeight="regular"
            color="success"
          >
            {orders}
          </MDTypography>{' '}
          orders
        </MDTypography>
      </MDBox>
    </MDBox>
  );
}

export default ProductCell;
