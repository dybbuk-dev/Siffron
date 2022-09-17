import { i18n } from 'src/i18n';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import FormErrors from 'src/view/shared/form/formErrors';
import MDBox from 'src/mui/components/MDBox';
import MDInput from 'src/mui/components/MDInput';
import MDTypography from 'src/mui/components/MDTypography';
import PropTypes from 'prop-types';

function InputNumberRangeFormItem(props) {
  const {
    autoComplete,
    autoFocus,
    disabled,
    endAdornment,
    externalErrorMessage,
    fullWidth,
    hint,
    id,
    label,
    margin,
    name,
    placeholder,
    required,
    shrink,
    size,
    type,
    value,
    variant,
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
    props.onChange && props.onChange([value, endValue()]);
  };

  const handleEndChanged = (value) => {
    setValue(name, [startValue(), value], {
      shouldValidate: false,
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
          type="number"
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
          type="number"
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

InputNumberRangeFormItem.defaultProps = {
  required: false,
};

InputNumberRangeFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  required: PropTypes.bool,
  prefix: PropTypes.string,
  placeholder: PropTypes.string,
  externalErrorMessage: PropTypes.string,
  formItemProps: PropTypes.object,
  id: PropTypes.string,
  type: PropTypes.string,
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

export default InputNumberRangeFormItem;
