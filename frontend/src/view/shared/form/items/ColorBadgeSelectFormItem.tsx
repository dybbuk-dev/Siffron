import $ from 'jquery';
import PropTypes from 'prop-types';
import { i18n } from 'src/i18n';
import { Box } from '@mui/material';
import ColorBadge, {
  getColorBadgeBack,
  getColorBadgeFore,
} from 'src/view/shared/components/ColorBadge';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import MDInput from 'src/mui/components/MDInput';
import { useRef } from 'react';
import MDBox from 'src/mui/components/MDBox';

export function generateColorBadgeSelectOptions(
  values,
  colors,
  i18nPrefix,
) {
  if (!values || !Array.isArray(values)) {
    return null;
  }
  return values.map((value, index) => {
    const label = i18nPrefix
      ? i18n(`${i18nPrefix}.${value}`)
      : null;
    const color = Array.isArray(colors)
      ? colors[index]
      : null;
    return {
      value,
      label,
      color,
    };
  });
}

export function colorBadgeSelectFormItemRenderOption(
  props,
  option,
) {
  return (
    <Box component="li" {...props}>
      <ColorBadge
        label={option.label}
        color={option.color}
      />
    </Box>
  );
}

function ColorBadgeSelectFormItem(props) {
  const {
    options,
    label,
    required,
    size,
    shrink,
    margin,
    variant,
    onChange,
  } = props;

  const renderInput = (params) => {
    const option = options.find(
      (option) =>
        option.label === params?.inputProps?.value,
    );
    return (
      <>
        {option && (
          <MDBox
            display="block"
            position="absolute"
            mt={2.2}
          >
            <ColorBadge
              label={option.label}
              color={option.color}
            />
          </MDBox>
        )}
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
          sx={{
            '& input': {
              padding: `${
                option ? '6px' : '4px'
              } 10px !important`,
              color: option
                ? 'transparent !important'
                : null,
              fontSize: option ? '0.75rem' : null,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              fontWeight: 500,
              borderRadius: '4px',
            },
          }}
        />
      </>
    );
  };

  return (
    <SelectFormItem
      {...props}
      renderOption={colorBadgeSelectFormItemRenderOption}
      renderInput={renderInput}
      onChange={onChange}
    />
  );
}

ColorBadgeSelectFormItem.defaultProps = {
  required: false,
  isClearable: true,
};

ColorBadgeSelectFormItem.propTypes = {
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
  onChange: PropTypes.func,
};

export default ColorBadgeSelectFormItem;
