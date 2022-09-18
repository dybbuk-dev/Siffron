import PropTypes from 'prop-types';
import facingEnumerators from 'src/modules/facing/facingEnumerators';
import EnumColorBadgeViewItem from 'src/view/shared/view/EnumColorBadgeViewItem';

function FacingTypeViewItem(props) {
  const { value, label } = props;
  return (
    <EnumColorBadgeViewItem
      value={value}
      label={label}
      enums={facingEnumerators.type}
      colors={facingEnumerators.typeColor}
      i18nPrefix="entities.facing.enumerators.type"
    />
  );
}

FacingTypeViewItem.propsType = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default FacingTypeViewItem;
