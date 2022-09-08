import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { useFormContext } from 'react-hook-form';
import FormErrors from 'src/view/shared/form/formErrors';
import MDInput from 'src/mui/components/MDInput';

export function DatePickerFormItem(props) {
  const {
    label,
    name,
    hint,
    placeholder,
    autoFocus,
    autoComplete,
    externalErrorMessage,
    // required,
    showTime,
    size,
    margin,
    variant,
    shrink,
  } = props;

  const {
    register,
    errors,
    formState: { touched, isSubmitted },
    setValue,
    watch,
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

  const DTPicker = (props) => {
    return (
      <>
        {showTime ? (
          <MobileDateTimePicker {...props} />
        ) : (
          <MobileDatePicker {...props} />
        )}
      </>
    );
  };

  const format = showTime
    ? 'yyyy-MM-dd HH:mm'
    : 'yyyy-MM-dd';

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DTPicker
        inputFormat={format}
        showToolbar={true}
        toolbarTitle={label}
        onAccept={(value) =>
          setValue(name, value, {
            shouldValidate: true,
            shouldDirty: true,
          })
        }
        onChange={(value) => {
          props.onChange && props.onChange(value);
        }}
        renderInput={(props) => (
          <MDInput
            {...props}
            id={name}
            name={name}
            label={label}
            onBlur={(event) => {
              props.onBlur && props.onBlur(event);
            }}
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
            helperText={errorMessage || hint}
          />
        )}
        value={watch(name)}
      />
    </LocalizationProvider>
  );
}

DatePickerFormItem.defaultProps = {
  required: false,
};

DatePickerFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  label: PropTypes.string,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  size: PropTypes.string,
  prefix: PropTypes.string,
  placeholder: PropTypes.string,
  externalErrorMessage: PropTypes.string,
  formItemProps: PropTypes.object,
  showTime: PropTypes.bool,
  margin: PropTypes.string,
  shrink: PropTypes.bool,
  variant: PropTypes.string,
};

export default DatePickerFormItem;
