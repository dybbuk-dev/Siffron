import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import FormErrors from 'src/view/shared/form/formErrors';
import MDInput from 'src/mui/components/MDInput';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';

function TextAreaFormItem(props) {
  const {
    id,
    label,
    name,
    hint,
    placeholder,
    autoFocus,
    autoComplete,
    externalErrorMessage,
    disabled,
    endAdornment,
    required,
    margin,
    variant,
    size,
    shrink,
    fullWidth,
    value,
    rows,
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
        label={label}
        required={required}
        inputRef={register}
        onChange={(event) => {
          props.onChange &&
            props.onChange(event.target.value);
        }}
        onBlur={(event) => {
          props.onBlur && props.onBlur(event);
        }}
        margin={margin}
        fullWidth={fullWidth}
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
        multiline
        rows={rows ?? 4}
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

TextAreaFormItem.defaultProps = {
  type: 'text',
  required: false,
};

TextAreaFormItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  label: PropTypes.string,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  prefix: PropTypes.string,
  placeholder: PropTypes.string,
  externalErrorMessage: PropTypes.string,
  onChange: PropTypes.func,
  endAdornment: PropTypes.any,
  margin: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  shrink: PropTypes.bool,
  fullWidth: PropTypes.bool,
  value: PropTypes.string,
  rows: PropTypes.number,
};

export default TextAreaFormItem;
