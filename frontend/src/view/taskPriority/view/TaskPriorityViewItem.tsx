import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MaterialLink from '@mui/material/Link';
import selectors from 'src/modules/taskPriority/taskPrioritySelectors';
import { selectMuiSettings } from 'src/modules/mui/muiSelectors';
import MDBox from 'src/mui/components/MDBox';
import MDButton from 'src/mui/components/MDButton';
import MDTypography from 'src/mui/components/MDTypography';
import NoViewItem from 'src/view/shared/view/NoViewItem';
import ColorBadge, {
  getColorBadgeBack,
  getColorBadgeFore,
} from 'src/view/shared/components/ColorBadge';
import taskPriorityEnumerators from 'src/modules/taskPriority/taskPriorityEnumerators';

function TaskPriorityViewItem(props) {
  const { sidenavColor, darkMode } = selectMuiSettings();
  const hasPermissionToRead = useSelector(
    selectors.selectPermissionToRead,
  );

  const valueAsArray = () => {
    const { value } = props;

    if (!value) {
      return [];
    }

    if (Array.isArray(value)) {
      return value;
    }

    return [value];
  };

  const colorFn = (priority) =>
    taskPriorityEnumerators.priorityColor[
      taskPriorityEnumerators.priority.indexOf(priority)
    ];

  const renderPriority = (priority) => {
    const color = colorFn(priority);
    return <ColorBadge label={priority} color={color} />;
  };

  const displayableRecord = (record) => {
    if (hasPermissionToRead) {
      return (
        <MDBox key={record.id} mr={1}>
          <MaterialLink
            component={Link}
            to={`/task-priority/${record.id}`}
            underline="hover"
          >
            {renderPriority(record.priority)}
          </MaterialLink>
        </MDBox>
      );
    }

    return (
      <MDBox key={record.id} mr={1}>
        {renderPriority(record.priority)}
      </MDBox>
    );
  };

  if (!valueAsArray().length) {
    return <NoViewItem {...props} />;
  }

  return (
    <MDBox
      pt={props.hiddenLabel ? 0 : 2}
      sx={{
        position: 'relative',
      }}
    >
      {!props.hiddenLabel && (
        <MDTypography
          variant="caption"
          color={darkMode ? 'text' : 'secondary'}
          fontWeight="regular"
          sx={{
            lineHeight: 1,
            position: 'absolute',
            fontWeight: 400,
            top: 0,
          }}
        >
          {props.label}
        </MDTypography>
      )}
      <MDBox display="flex">
        {valueAsArray().map((value) =>
          displayableRecord(value),
        )}
      </MDBox>
    </MDBox>
  );
}

TaskPriorityViewItem.defaultProps = {
  hiddenLabel: false,
};

TaskPriorityViewItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  hiddenLabel: PropTypes.bool,
};

export default TaskPriorityViewItem;
