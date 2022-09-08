import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { i18n } from 'src/i18n';
import { useFormContext } from 'react-hook-form';
import FormErrors from 'src/view/shared/form/formErrors';
import { Autocomplete } from '@mui/material';
import MDInput from 'src/mui/components/MDInput';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';

function SelectFormItem(props) {
  const {
    label,
    name,
    hint,
    renderOption,
    renderInput,
    renderTags,
    options,
    required,
    mode,
    placeholder,
    isClearable,
    externalErrorMessage,
    size,
    shrink,
    margin,
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

  const value = () => {
    const { mode } = props;
    if (mode === 'multiple') {
      return valueMultiple();
    } else {
      return valueOne();
    }
  };

  const valueMultiple = () => {
    if (originalValue) {
      return originalValue.map((value) =>
        options.find((option) => option.value === value),
      );
    }

    return [];
  };

  const valueOne = () => {
    const { options } = props;

    if (originalValue != null) {
      return options.find(
        (option) => option.value === originalValue,
      );
    }

    return null;
  };

  const handleSelect = (data) => {
    const { mode } = props;
    if (mode === 'multiple') {
      return handleSelectMultiple(data);
    } else {
      return handleSelectOne(data);
    }
  };

  const handleSelectMultiple = (values) => {
    if (!values) {
      setValue(name, [], {
        shouldValidate: true,
        shouldDirty: true,
      });
      props.onChange && props.onChange([]);
      return;
    }

    const newValue = values
      .map((data) => (data ? data.value : data))
      .filter((value) => value != null);

    setValue(name, newValue, {
      shouldValidate: true,
      shouldDirty: true,
    });
    props.onChange && props.onChange(newValue);
  };

  const handleSelectOne = (data) => {
    if (!data) {
      setValue(name, null, {
        shouldValidate: true,
        shouldDirty: true,
      });
      props.onChange && props.onChange(null);
      return;
    }

    setValue(name, data.value, {
      shouldValidate: true,
      shouldDirty: true,
    });
    props.onChange && props.onChange(data.value);
  };

  const defaultRenderInput = (params) => (
    <MDInput
      {...params}
      required={required}
      margin={margin}
      variant={variant}
      size={size}
      InputLabelProps={{
        shrink: shrink,
      }}
      label={label}
    />
  );

  return (
    <>
      <Autocomplete
        multiple={mode === 'multiple'}
        isOptionEqualToValue={(option, value) =>
          option.value === value.value
        }
        disablePortal={mode !== 'multiple'}
        value={value()}
        options={options}
        onChange={(event: any, newValue: any) => {
          handleSelect(newValue);
        }}
        renderOption={renderOption}
        renderInput={renderInput ?? defaultRenderInput}
        renderTags={renderTags}
        loadingText={i18n('autocomplete.loading')}
        noOptionsText={i18n('autocomplete.noOptions')}
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

SelectFormItem.defaultProps = {
  required: false,
  isClearable: true,
};

SelectFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  required: PropTypes.bool,
  externalErrorMessage: PropTypes.string,
  mode: PropTypes.string,
  isClearable: PropTypes.bool,
  placeholder: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  shrink: PropTypes.bool,
  margin: PropTypes.string,
  renderOption: PropTypes.func,
  renderInput: PropTypes.func,
  renderTags: PropTypes.func,
  singleValue: PropTypes.bool,
};

export default SelectFormItem;
