import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import MaterialLink from '@mui/material/Link';

import { useSelector } from 'react-redux';
import selectors from 'src/modules/taskPriority/taskPrioritySelectors';
import taskPriorityEnumerators from 'src/modules/taskPriority/taskPriorityEnumerators';
import ColorBadge from 'src/view/shared/components/ColorBadge';

function TaskPriorityListItem(props) {
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
        <div key={record.id}>
          <MaterialLink
            component={Link}
            to={`/task-priority/${record.id}`}
            underline="hover"
          >
            {renderPriority(record.priority)}
          </MaterialLink>
        </div>
      );
    }

    return (
      <div key={record.id}>
        {renderPriority(record.priority)}
      </div>
    );
  };

  if (!valueAsArray().length) {
    return null;
  }

  return (
    <>
      {valueAsArray().map((value) =>
        displayableRecord(value),
      )}
    </>
  );
}

TaskPriorityListItem.propTypes = {
  value: PropTypes.any,
};

export default TaskPriorityListItem;
