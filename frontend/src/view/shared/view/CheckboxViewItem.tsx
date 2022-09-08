import PropTypes from 'prop-types';
import MDTypography from 'src/mui/components/MDTypography';
import MDBox from 'src/mui/components/MDBox';
import { Icon } from '@mui/material';
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';

function CheckboxViewItem(props) {
  const label = `${props.prefix ? `${props.prefix} ` : ''}${
    props.label
  }`;

  return (
    <MDBox display="flex" justifyContent="flex-start">
      <MDTypography variant="button">
        {props.checked ? (
          <CheckSharpIcon
            fontSize="medium"
            fontWeight="regular"
          />
        ) : (
          <RemoveSharpIcon
            fontSize="medium"
            color="secondary"
            fontWeight="regular"
          />
        )}
      </MDTypography>
      <MDTypography
        variant="button"
        fontWeight="regular"
        ml={1}
      >
        {label}
      </MDTypography>
    </MDBox>
  );
}

CheckboxViewItem.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  prefix: PropTypes.string,
};

export default CheckboxViewItem;
