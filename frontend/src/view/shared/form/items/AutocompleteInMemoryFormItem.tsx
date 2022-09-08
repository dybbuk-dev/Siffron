import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import FormErrors from 'src/view/shared/form/formErrors';
import Select from 'react-select';
import { i18n } from 'src/i18n';
import {
  components as materialUiComponents,
  styles as materialUiStyles,
} from 'src/view/shared/form/items/shared/reactSelectMaterialUi';
import makeStyles from '@mui/styles/makeStyles';
import { Autocomplete, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useFormContext } from 'react-hook-form';
import _uniqBy from 'lodash/uniqBy';
import MDBox from 'src/mui/components/MDBox';
import MDInput from 'src/mui/components/MDInput';
import { selectMuiSettings } from 'src/modules/mui/muiSelectors';
import MDButton from 'src/mui/components/MDButton';
import MDTypography from 'src/mui/components/MDTypography';

function AutocompleteInMemoryFormItem(props) {
  const { sidenavColor } = selectMuiSettings();
  const {
    errors,
    watch,
    setValue,
    register,
    formState: { touched, isSubmitted },
  } = useFormContext();

  const {
    label,
    name,
    hint,
    placeholder,
    autoFocus,
    externalErrorMessage,
    mode,
    required,
    isClearable,
    mapper,
    fetchFn,
    margin,
    shrink,
    size,
    variant,
    fullWidth,
    renderOption,
    renderInput,
  } = props;

  const originalValue = watch(name);

  const [fullDataSource, setFullDataSource] = useState<
    Array<any>
  >([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    register({ name });
  }, [register, name]);

  useEffect(() => {
    const fetchAllResults = async () => {
      setLoading(true);

      try {
        let fullDataSource = await fetchFn();

        fullDataSource = fullDataSource.map((data) =>
          mapper.toAutocomplete(data),
        );

        setFullDataSource(fullDataSource);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setFullDataSource([]);
        setLoading(false);
        return [];
      }
    };

    fetchAllResults().then(() => {});
    // eslint-disable-next-line
  }, []);

  const prioritizeFromDataSource = (selected) => {
    return (
      (fullDataSource || []).find(
        (item) => item.value === selected.value,
      ) || selected
    );
  };

  const value = () => {
    if (mode === 'multiple') {
      return valueMultiple();
    } else {
      return valueOne();
    }
  };

  const valueMultiple = () => {
    if (originalValue) {
      return originalValue.map((value) =>
        prioritizeFromDataSource(
          mapper.toAutocomplete(value),
        ),
      );
    }

    return [];
  };

  const valueOne = () => {
    if (originalValue) {
      return prioritizeFromDataSource(
        mapper.toAutocomplete(originalValue),
      );
    }

    return null;
  };

  const handleSelect = (value) => {
    if (mode === 'multiple') {
      return handleSelectMultiple(value);
    } else {
      return handleSelectOne(value);
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

    const newValue = values.map((value) =>
      mapper.toValue(value),
    );
    setValue(name, newValue, {
      shouldValidate: true,
      shouldDirty: true,
    });
    props.onChange && props.onChange(newValue);
  };

  const handleSelectOne = (value) => {
    if (!value) {
      setValue(name, null, {
        shouldValidate: true,
        shouldDirty: true,
      });
      props.onChange && props.onChange(null);
      return;
    }

    const newValue = mapper.toValue(value);
    setValue(name, newValue, {
      shouldValidate: true,
      shouldDirty: true,
    });
    props.onChange && props.onChange(newValue);
  };

  const options = () => {
    const { mode } = props;

    if (!fullDataSource) {
      return [];
    }

    // Includes the selected value on the options
    if (value()) {
      if (mode === 'multiple') {
        return _uniqBy(
          [...fullDataSource, ...value()],
          'value',
        );
      } else {
        return _uniqBy(
          [...fullDataSource, value()],
          'value',
        );
      }
    }

    return fullDataSource;
  };

  const hintOrLoading = loading
    ? i18n('autocomplete.loading')
    : hint;

  const errorMessage = FormErrors.errorMessage(
    name,
    errors,
    touched,
    isSubmitted,
    externalErrorMessage,
  );

  const fnRenderInput = renderInput
    ? renderInput
    : (params) => (
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
          autoFocus={autoFocus || undefined}
        />
      );

  useEffect(() => {
    if (props.onChange) {
      props.onChange(
        prioritizeFromDataSource(value() ?? {}),
      );
    }
  }, [fullDataSource]);

  return (
    <>
      <MDBox
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Autocomplete
          multiple={mode === 'multiple'}
          isOptionEqualToValue={(option, value) => {
            return option.value === value.value;
          }}
          disablePortal={mode !== 'multiple'}
          value={value()}
          options={options()}
          onChange={(event: any, newValue: any) => {
            handleSelect(newValue);
          }}
          getOptionLabel={(option) => option.label ?? ''}
          renderOption={renderOption}
          renderInput={fnRenderInput}
          loadingText={i18n('autocomplete.loading')}
          noOptionsText={i18n('autocomplete.noOptions')}
          onBlur={() => props.onBlur && props.onBlur(null)}
          fullWidth={fullWidth}
        />

        {props.showCreate && props.hasPermissionToCreate ? (
          <MDButton
            variant="contained"
            color={sidenavColor}
            onClick={props.onOpenModal}
            size="small"
            sx={{
              marginLeft: '16px',
              marginTop: '16px',
              marginBottom: '8px',
              flexShrink: 0,
            }}
            circular
            iconOnly
          >
            <AddIcon />
          </MDButton>
        ) : null}
      </MDBox>
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

AutocompleteInMemoryFormItem.defaultProps = {
  isClearable: true,
  mode: 'default',
  required: false,
};

AutocompleteInMemoryFormItem.propTypes = {
  fetchFn: PropTypes.func.isRequired,
  mapper: PropTypes.object.isRequired,
  required: PropTypes.bool,
  mode: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  placeholder: PropTypes.string,
  externalErrorMessage: PropTypes.string,
  isClearable: PropTypes.bool,
  showCreate: PropTypes.bool,
  hasPermissionToCreate: PropTypes.bool,
  variant: PropTypes.string,
  size: PropTypes.string,
  shrink: PropTypes.bool,
  margin: PropTypes.string,
  fullWidth: PropTypes.bool,
  renderOption: PropTypes.func,
  renderInput: PropTypes.func,
};

export default AutocompleteInMemoryFormItem;
