import { TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { i18n } from 'src/i18n';
import FormErrors from 'src/view/shared/form/formErrors';
import MDInput from 'src/mui/components/MDInput';
import MDTypography from 'src/mui/components/MDTypography';
import {
  DEFAULT_PICKER_FORMAT,
  DEFAULT_PICKER_FORMAT_DATE_ONLY,
} from 'src/config/common';

function DatePickerRangeFormItem(props) {
  const {
    label,
    name,
    hint,
    placeholder,
    autoFocus,
    autoComplete,
    // required,
    showTime,
    externalErrorMessage,
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
      shouldValidate: false,
      shouldDirty: true,
    });
  };

  const handleEndChanged = (value) => {
    setValue(name, [startValue(), value], {
      shouldValidate: false,
      shouldDirty: true,
    });
  };

  const startValue = () => {
    if (!originalValue) {
      return null;
    }

    if (Array.isArray(!originalValue)) {
      return null;
    }

    if (!originalValue.length) {
      return null;
    }

    return originalValue[0] || null;
  };

  const endValue = () => {
    if (!originalValue) {
      return null;
    }

    if (Array.isArray(!originalValue)) {
      return null;
    }

    if (originalValue.length < 2) {
      return null;
    }

    return originalValue[1] || null;
  };

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
      <div
        style={{
          display: 'flex',
          flexWrap: 'nowrap',
          alignItems: 'baseline',
        }}
      >
        <DTPicker
          renderInput={(props) => (
            <MDInput
              {...props}
              id={`${name}Start`}
              name={`${name}Start`}
              label={`${label} ${i18n('common.start')}`}
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
          showToolbar={true}
          toolbarTitle={`${label} ${i18n('common.start')}`}
          onAccept={(value) => handleStartChanged(value)}
          onChange={(value) =>
            props.onChange &&
            props.onChange([value, endValue()])
          }
          value={startValue()}
          inputFormat={format}
        />

        <div
          style={{
            flexShrink: 1,
            marginLeft: '6.4px',
            marginRight: '6.4px',
          }}
        >
          <MDTypography color="secondary">~</MDTypography>
        </div>

        <DTPicker
          renderInput={(props) => (
            <MDInput
              {...props}
              id={`${name}End`}
              name={`${name}End`}
              label={`${label} ${i18n('common.end')}`}
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
          showToolbar={true}
          toolbarTitle={`${label} ${i18n('common.end')}`}
          onAccept={(value) => handleEndChanged(value)}
          onChange={(value) =>
            props.onChange &&
            props.onChange([startValue(), value])
          }
          value={endValue()}
          inputFormat={format}
        />
      </div>
    </LocalizationProvider>
  );
}

DatePickerRangeFormItem.defaultProps = {
  required: false,
};

DatePickerRangeFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  required: PropTypes.bool,
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

export default DatePickerRangeFormItem;
