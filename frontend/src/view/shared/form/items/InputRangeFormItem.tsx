import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { i18n } from 'src/i18n';
import { useFormContext } from 'react-hook-form';
import FormErrors from 'src/view/shared/form/formErrors';
import MDInput from 'src/mui/components/MDInput';
import MDTypography from 'src/mui/components/MDTypography';
import MDBox from 'src/mui/components/MDBox';

function InputRangeFormItem(props) {
  const {
    label,
    name,
    hint,
    placeholder,
    autoFocus,
    autoComplete,
    required,
    externalErrorMessage,
    id,
    type,
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
    setValue,
    watch,
  } = useFormContext();

  const errorMessage = FormErrors.errorMessage(
    name,
    errors,
    touched,
    isSubmitted,
    externalErrorMessage,
  );

  const originalValue = watch(name);

  useEffect(() => {
    register({ name });
  }, [register, name]);

  const handleStartChanged = (value) => {
    setValue(name, [value, endValue()], {
      shouldValidate: true,
      shouldDirty: true,
    });
    props.onChange && props.onChange([value, endValue()]);
  };

  const handleEndChanged = (value) => {
    setValue(name, [startValue(), value], {
      shouldValidate: true,
      shouldDirty: true,
    });
    props.onChange && props.onChange([value, startValue()]);
  };

  const startValue = () => {
    if (!originalValue) {
      return '';
    }

    if (Array.isArray(!originalValue)) {
      return '';
    }

    if (!originalValue.length) {
      return '';
    }

    return originalValue[0];
  };

  const endValue = () => {
    if (!originalValue) {
      return '';
    }

    if (Array.isArray(!originalValue)) {
      return '';
    }

    if (originalValue.length < 2) {
      return '';
    }

    return originalValue[1];
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexWrap: 'nowrap',
          alignItems: 'baseline',
        }}
      >
        <MDInput
          fullWidth
          label={`${label} ${i18n('common.start')}`}
          variant={variant}
          size={size}
          margin={margin}
          type={props.type}
          id={`${name}Start`}
          name={`${name}Start`}
          onChange={(event) =>
            handleStartChanged(event.target.value)
          }
          value={startValue()}
          placeholder={placeholder || undefined}
          autoFocus={autoFocus || undefined}
          autoComplete={autoComplete || undefined}
          InputLabelProps={{
            shrink: shrink,
          }}
          error={Boolean(errorMessage)}
          helperText={hint}
          onBlur={(event) => {
            props.onBlur && props.onBlur(event);
          }}
        />

        <div
          style={{
            flexShrink: 1,
            marginLeft: '8px',
            marginRight: '8px',
          }}
        >
          <MDTypography color="secondary">~</MDTypography>
        </div>

        <MDInput
          type={props.type}
          label={`${label} ${i18n('common.end')}`}
          id={`${name}End`}
          name={`${name}End`}
          required={required}
          margin={margin}
          fullWidth
          variant={variant}
          size={size}
          onChange={(event) =>
            handleEndChanged(event.target.value)
          }
          value={endValue()}
          placeholder={placeholder || undefined}
          autoFocus={autoFocus || undefined}
          autoComplete={autoComplete || undefined}
          InputLabelProps={{
            shrink: shrink,
          }}
          error={Boolean(errorMessage)}
          helperText={hint}
          onBlur={(event) => {
            props.onBlur && props.onBlur(event);
          }}
        />
      </div>
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

InputRangeFormItem.defaultProps = {
  required: false,
  type: 'text',
};

InputRangeFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  required: PropTypes.bool,
  prefix: PropTypes.string,
  placeholder: PropTypes.string,
  externalErrorMessage: PropTypes.string,
  formItemProps: PropTypes.object,
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

export default InputRangeFormItem;
