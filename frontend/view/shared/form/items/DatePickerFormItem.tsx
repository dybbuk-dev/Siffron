import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import FormErrors from 'src/view/shared/form/formErrors';
import MDInput from 'src/mui/components/MDInput';
import PropTypes from 'prop-types';
import {
  DEFAULT_PICKER_FORMAT,
  DEFAULT_PICKER_FORMAT_DATE_ONLY,
} from 'src/config/common';
import moment from 'moment';

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
    value,
    forceValue,
  } = props;

  const {
    register,
    errors,
    formState: { touched, isSubmitted },
    setValue,
    control: { defaultValuesRef },
    getValues,
  } = useFormContext();

  const defaultValues = defaultValuesRef.current || {};

  const formValue = getValues(name);

  const [curValue, setCurValue] = useState(
    formValue || value || defaultValues[name] || '',
  );

  if (forceValue) {
    setValue(name, moment(value), {
      shouldValidate: false,
      shouldDirty: true,
    });
  }

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
    ? DEFAULT_PICKER_FORMAT
    : DEFAULT_PICKER_FORMAT_DATE_ONLY;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DTPicker
        clearable
        disableCloseOnSelect={false}
        inputFormat={format}
        showToolbar={true}
        toolbarTitle={label}
        onAccept={(value) => {
          if (props.onAccept) {
            props.onAccept(value);
            return;
          }
          setCurValue(value);
          setValue(name, moment(value), {
            shouldValidate: false,
            shouldDirty: true,
          });
        }}
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
        value={forceValue ? value : formValue || curValue}
      />
    </LocalizationProvider>
  );
}

DatePickerFormItem.defaultProps = {
  required: false,
  forceValue: false,
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
  onAccept: PropTypes.func,
  value: PropTypes.string,
  forceValue: PropTypes.bool,
};

export default DatePickerFormItem;
