import PropTypes from 'prop-types';
import { Slider, styled } from '@mui/material';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import colors from 'src/mui/assets/theme/base/colors';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import { selectMuiSettings } from 'src/modules/mui/muiSelectors';
import { i18n } from 'src/i18n';

export function generateSliderMarks(
  values,
  i18nPrefix = null,
  colors = null,
) {
  if (!values || !Array.isArray(values)) {
    return null;
  }
  return values.map((value, index) => {
    const title = i18nPrefix
      ? i18n(`${i18nPrefix}.${value}`)
      : null;
    const color = Array.isArray(colors)
      ? colors[index]
      : null;
    return {
      value: index,
      key: value,
      title,
      color,
    };
  });
}

const CustomColorSlider = styled(Slider)(
  ({ marks, value, color }) => {
    const newColor =
      marks[Number(value)]?.color ?? colors[color].main;
    return {
      color: newColor,
      '& .MuiSlider-thumb': {
        backgroundColor: colors.white.main,
        border: `1px solid ${newColor}`,
      },
    };
  },
);

function SliderFormItem(props) {
  const {
    name,
    label,
    marks,
    valuetext,
    step,
    defaultValue,
    renderValue,
    ...rest
  } = props;

  const { setValue } = useFormContext();

  const { sidenavColor } = selectMuiSettings();

  const [sliderValue, setSliderValue] = useState(
    rest.value,
  );

  const safeValue = (value) => {
    return (marks && marks[value]?.key) ?? value;
  };

  const safeTitle = (value) => {
    return (
      (marks &&
        (marks[sliderValue]?.title ??
          marks[sliderValue]?.key)) ??
      sliderValue
    );
  };

  const onChange = (
    event: Event,
    newValue: number | number[],
  ) => {
    if (typeof newValue === 'number') {
      setSliderValue(newValue);
      setValue(name, safeValue(newValue), {
        shouldValidate: false,
        shouldDirty: true,
      });
      props.onChange && props.onChange(safeValue(newValue));
    }
  };

  return (
    <MDBox
      pt={1}
      sx={{
        position: 'relative',
      }}
    >
      <MDBox
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
      >
        <MDTypography
          variant="button"
          fontWeight="regular"
          color="text"
          mr={1}
        >
          {`${label}:`}
        </MDTypography>
        {renderValue ? (
          renderValue(safeValue(sliderValue))
        ) : (
          <MDTypography
            variant="button"
            fontWeight="regular"
          >
            {safeTitle(sliderValue)}
          </MDTypography>
        )}
      </MDBox>
      <CustomColorSlider
        defaultValue={defaultValue}
        getAriaValueText={valuetext}
        color={sidenavColor}
        step={step}
        valueLabelDisplay="off"
        {...rest}
        value={sliderValue}
        onChange={onChange}
        marks={marks}
      />
      <MDBox display="none">
        <InputFormItem name={name} label={label} />
      </MDBox>
    </MDBox>
  );
}

SliderFormItem.propTypes = {
  label: PropTypes.string.isRequired,
  marks: PropTypes.array,
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  renderValue: PropTypes.func,
  step: PropTypes.number,
  track: PropTypes.any,
  value: PropTypes.number,
  valuetext: PropTypes.func,
};

export default SliderFormItem;
