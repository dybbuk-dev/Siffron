import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import ImagesUploader from 'src/view/shared/uploaders/ImagesUploader';
import {
  FormControl,
  FormLabel,
  FormHelperText,
} from '@mui/material';
import { useFormContext } from 'react-hook-form';
import FormErrors from 'src/view/shared/form/formErrors';
import MDTypography from 'src/mui/components/MDTypography';
import MDBox from 'src/mui/components/MDBox';

function LogoFormItem(props) {
  const {
    label,
    name,
    hint,
    storage,
    max,
    required,
    externalErrorMessage,
  } = props;

  const {
    errors,
    formState: { touched, isSubmitted },
    setValue,
    watch,
    register,
  } = useFormContext();

  useEffect(() => {
    register({ name });
  }, [register, name]);

  const errorMessage = FormErrors.errorMessage(
    name,
    errors,
    touched,
    isSubmitted,
    externalErrorMessage,
  );

  const formHelperText = errorMessage || hint;

  return (
    <MDBox textAlign="center" my={3}>
      <FormControl
        fullWidth
        required={required}
        error={Boolean(errorMessage)}
        component="fieldset"
        size="small"
      >
        <ImagesUploader
          storage={storage}
          value={watch(name)}
          onChange={(value) => {
            setValue(name, value, {
              shouldValidate: true,
              shouldDirty: true,
            });
            props.onChange && props.onChange(value);
          }}
          max={max}
        />

        {formHelperText && (
          <FormHelperText
            sx={{ textAlign: 'center', fontWeight: 400 }}
          >
            {formHelperText}
          </FormHelperText>
        )}
        <MDBox textAlign="center" px={3}>
          <MDTypography variant="h5" fontWeight="regular">
            {label}
          </MDTypography>
        </MDBox>
      </FormControl>
    </MDBox>
  );
}

LogoFormItem.defaultProps = {
  max: 1,
  required: false,
};

LogoFormItem.propTypes = {
  storage: PropTypes.object.isRequired,
  max: PropTypes.number,
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  formItemProps: PropTypes.object,
};

export default LogoFormItem;
