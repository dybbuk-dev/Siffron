import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import FilesUploader from 'src/view/shared/uploaders/FilesUploader';
import {
  FormControl,
  FormLabel,
  FormHelperText,
} from '@mui/material';
import { useFormContext } from 'react-hook-form';
import FormErrors from 'src/view/shared/form/formErrors';
import MDTypography from 'src/mui/components/MDTypography';

function FilesFormItem(props) {
  const {
    label,
    name,
    hint,
    storage,
    formats,
    max,
    required,
    externalErrorMessage,
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

  const formHelperText = errorMessage || hint;

  return (
    <FormControl
      fullWidth
      required={required}
      error={Boolean(errorMessage)}
      component="fieldset"
      size="small"
    >
      <MDTypography
        variant="caption"
        sx={{
          fontWeight: 400,
        }}
      >
        {label}
      </MDTypography>

      <FilesUploader
        storage={storage}
        formats={formats}
        value={watch(name)}
        onChange={(value) => {
          setValue(name, value, {
            shouldValidate: true,
            shouldDirty: true,
          });
          props.onChange && props.onChange(value);
        }}
        max={max}
      />

      {formHelperText && (
        <FormHelperText style={{ marginTop: 0 }}>
          {formHelperText}
        </FormHelperText>
      )}
    </FormControl>
  );
}

FilesFormItem.defaultProps = {
  max: undefined,
  required: false,
};

FilesFormItem.propTypes = {
  storage: PropTypes.object.isRequired,
  formats: PropTypes.any,

  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  formItemProps: PropTypes.object,
  max: PropTypes.number,
};

export default FilesFormItem;
