import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import MDBox from 'src/mui/components/MDBox';
import MDInput from 'src/mui/components/MDInput';
import MDTypography from 'src/mui/components/MDTypography';
import FormErrors from 'src/view/shared/form/formErrors';

export function InputNumberFormItem(props) {
  const {
    label,
    name,
    hint,
    type,
    placeholder,
    autoFocus,
    autoComplete,
    required,
    externalErrorMessage,
    id,
    disabled,
    endAdornment,
    margin,
    variant,
    size,
    shrink,
    fullWidth,
    value,
  } = props;

  const {
    register,
    errors,
    formState: { touched, isSubmitted },
  } = useFormContext();

  const errorMessage = FormErrors.errorMessage(
    name,
    errors,
    touched,
    isSubmitted,
    externalErrorMessage,
  );

  return (
    <>
      <MDInput
        id={name}
        name={name}
        type={type}
        label={label}
        required={required}
        onChange={(event) => {
          props.onChange &&
            props.onChange(event.target.value);
        }}
        onBlur={(event) => {
          props.onBlur && props.onBlur(event);
        }}
        inputRef={register}
        margin={margin}
        fullWidth
        variant={variant}
        size={size}
        placeholder={placeholder || undefined}
        autoFocus={autoFocus || undefined}
        autoComplete={autoComplete || undefined}
        InputLabelProps={{
          shrink: shrink,
        }}
        error={Boolean(errorMessage)}
        helperText={hint}
        InputProps={{ endAdornment }}
        inputProps={{
          name,
        }}
        disabled={disabled}
      />
      {errorMessage && (
        <MDBox mt={0.75}>
          <MDTypography
            component="div"
            variant="caption"
            color="error"
            fontWeight="regular"
          >
            {errorMessage}
          </MDTypography>
        </MDBox>
      )}
    </>
  );
}

InputNumberFormItem.defaultProps = {
  type: 'number',
  required: false,
};

InputNumberFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  prefix: PropTypes.string,
  placeholder: PropTypes.string,
  externalErrorMessage: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  autoComplete: PropTypes.string,
  onChange: PropTypes.func,
  endAdornment: PropTypes.any,
  margin: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  shrink: PropTypes.bool,
  fullWidth: PropTypes.bool,
  value: PropTypes.string,
};

export default InputNumberFormItem;
