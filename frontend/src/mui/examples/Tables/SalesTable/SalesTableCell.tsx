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
import TableCell from '@mui/material/TableCell';

// Material Dashboard 2 PRO React TS components
import MDTypography from 'src/mui/components/MDTypography';
import MDBox from 'src/mui/components/MDBox';

// Declaring prop types for SalesTableCell
interface Props {
  title: string;
  content?: string | number;
  image?: string;
  noBorder?: boolean;
  [key: string]: any;
}

function SalesTableCell({
  title,
  content,
  image,
  noBorder,
  ...rest
}: Props): JSX.Element {
  let template;

  if (image) {
    template = (
      <TableCell
        {...rest}
        align="left"
        width="30%"
        sx={{ border: noBorder && 0 }}
      >
        <MDBox
          display="flex"
          alignItems="center"
          width="max-content"
        >
          <MDBox
            component="img"
            src={image}
            alt={content.toString()}
            width="1.5rem"
            height="auto"
          />{' '}
          <MDBox
            display="flex"
            flexDirection="column"
            ml={3}
          >
            <MDTypography
              variant="caption"
              color="text"
              fontWeight="medium"
              textTransform="capitalize"
            >
              {title}:
            </MDTypography>
            <MDTypography
              variant="button"
              fontWeight="regular"
              textTransform="capitalize"
            >
              {content}
            </MDTypography>
          </MDBox>
        </MDBox>
      </TableCell>
    );
  } else {
    template = (
      <TableCell
        {...rest}
        align="center"
        sx={{ border: noBorder && 0 }}
      >
        <MDBox display="flex" flexDirection="column">
          <MDTypography
            variant="caption"
            color="text"
            fontWeight="medium"
            textTransform="capitalize"
          >
            {title}:
          </MDTypography>
          <MDTypography
            variant="button"
            fontWeight="regular"
            textTransform="capitalize"
          >
            {content}
          </MDTypography>
        </MDBox>
      </TableCell>
    );
  }

  return template;
}

// Declaring default props for SalesTableCell
SalesTableCell.defaultProps = {
  image: '',
  noBorder: false,
};

export default SalesTableCell;
