import PropTypes from 'prop-types';
import Color from 'color';
import MDTypography from 'src/mui/components/MDTypography';
import MDBox from 'src/mui/components/MDBox';

export function getColorBadgeFore(color) {
  if (!color) {
    return null;
  }
  return Color(color).mix(Color('black'), 0.3).hex();
}

export function getColorBadgeBack(color) {
  if (!color) {
    return null;
  }
  return Color(color).mix(Color('white'), 0.75).hex();
}

function ColorBadge(props) {
  const { color, label } = props;
  return (
    <MDBox lineHeight={1}>
      <MDTypography
        display="inline-block"
        variant="caption"
        backgroundColor={getColorBadgeBack(color)}
        px={1}
        py={0.75}
        fontWeight="bold"
        borderRadius={1}
        m={0}
        textTransform="uppercase"
        letterSpacing={1}
        sx={{
          color: getColorBadgeFore(color),
        }}
      >
        {label}
      </MDTypography>
    </MDBox>
  );
}

ColorBadge.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default ColorBadge;
