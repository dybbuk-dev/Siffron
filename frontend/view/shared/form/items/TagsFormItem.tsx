import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { i18n } from 'src/i18n';
import { useFormContext } from 'react-hook-form';
import FormErrors from 'src/view/shared/form/formErrors';
import {
  Autocomplete,
  createFilterOptions,
} from '@mui/material';
import MDInput from 'src/mui/components/MDInput';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';

interface Option {
  value: string;
  label: string;
}

const filter = createFilterOptions<Option>();

function TagsFormItem(props) {
  const {
    label,
    name,
    hint,
    externalErrorMessage,
    variant,
    required,
    placeholder,
    isClearable,
    notFoundContent = i18n('autocomplete.noOptions'),
    size,
    shrink,
    margin,
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

  useEffect(() => {
    register({ name });
  }, [register, name]);

  const originalValue = watch(name);

  const handleChange = (data) => {
    if (!data || !data.length) {
      setValue(name, null, {
        shouldValidate: false,
        shouldDirty: true,
      });
      props.onChange && props.onChange(null);
      return;
    }

    const commaSplittedValues = data
      .map((item) => item.value)
      .join(',')
      .split(',');

    setValue(name, commaSplittedValues, {
      shouldValidate: false,
      shouldDirty: true,
    });
    props.onChange && props.onChange(commaSplittedValues);
  };

  const value = () => {
    if (!originalValue || !originalValue.length) {
      return [];
    }

    return originalValue.map((item) => ({
      value: item,
      label: item,
    }));
  };

  const [options, setOptions] = React.useState<
    Array<Option>
  >(value());

  return (
    <>
      <Autocomplete
        multiple
        isOptionEqualToValue={(option, value) =>
          option.value === value.value
        }
        value={value()}
        options={options}
        selectOnFocus
        clearOnBlur
        onChange={(event: any, newValue: any) => {
          handleChange(newValue);
          setOptions(newValue);
        }}
        renderInput={(params) => (
          <MDInput
            {...params}
            margin={margin}
            variant={variant}
            size={size}
            required={required}
            InputLabelProps={{
              shrink: shrink,
            }}
            label={label}
          />
        )}
        filterOptions={(options, params) => {
          const filtered = filter(options, params).map(
            (option) => ({
              value: option.value,
              label: option.value,
            }),
          );

          const { inputValue } = params;

          inputValue
            .split(/[ ]*,[ ]*/g)
            .forEach((value) => {
              if (
                value.trim() === '' ||
                filtered.some(
                  (option) => option.value === value,
                )
              ) {
                return;
              }
              filtered.push({
                value: value,
                label: `Add "${value}"`,
              });
            });

          return filtered;
        }}
        loadingText={i18n('autocomplete.loading')}
        noOptionsText={notFoundContent}
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

TagsFormItem.defaultProps = {
  required: false,
  isClearable: true,
};

TagsFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  required: PropTypes.bool,
  errorMessage: PropTypes.string,
  mode: PropTypes.string,
  isClearable: PropTypes.bool,
  notFoundContent: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  shrink: PropTypes.bool,
  margin: PropTypes.string,
};

export default TagsFormItem;
