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
import MDInput from 'src/mui/components/MDInput';

function FormField({
  label,
  ...rest
}: {
  label: string;
  [key: string]: any;
}): JSX.Element {
  return (
    <MDInput
      variant="standard"
      label={label}
      fullWidth
      {...rest}
    />
  );
}

export default FormField;
