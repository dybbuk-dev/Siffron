import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TaskPriorityListItem from 'src/view/taskPriority/list/TaskPriorityListItem';
import CustomViewItem from 'src/view/shared/view/CustomViewItem';

function TaskPriorityView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <CustomViewItem
          label={i18n(
            'entities.taskPriority.fields.priority',
          )}
          value={[record]}
          render={(values) =>
            values.map((value) => (
              <TaskPriorityListItem
                key={value}
                value={value}
              />
            ))
          }
        />
      </div>
    );
  };

  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return renderView();
}

export default TaskPriorityView;
