import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import { Grid } from '@mui/material';

function TaskListView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <Grid spacing={2} container>
        <Grid item xs={12}>
          <TextViewItem
            label={i18n('entities.taskList.fields.name')}
            value={record.name}
          />
        </Grid>
        <Grid item xs={12}>
          <TextViewItem
            label={i18n(
              'entities.taskList.fields.taskdisplaycolor',
            )}
            value={
              record.taskdisplaycolor &&
              i18n(
                `entities.taskList.enumerators.taskdisplaycolor.${record.taskdisplaycolor}`,
              )
            }
          />
        </Grid>
      </Grid>
    );
  };

  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return renderView();
}

export default TaskListView;
