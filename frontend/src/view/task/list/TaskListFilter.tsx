import {
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import UndoIcon from '@mui/icons-material/Undo';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/task/list/taskListActions';
import selectors from 'src/modules/task/list/taskListSelectors';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import FilterWrapper, {
  FilterButtons,
} from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import FilterAccordion from 'src/view/shared/filter/FilterAccordion';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import InputNumberRangeFormItem from 'src/view/shared/form/items/InputNumberRangeFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import taskEnumerators from 'src/modules/task/taskEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import TaskPriorityAutocompleteFormItem from 'src/view/taskPriority/autocomplete/TaskPriorityAutocompleteFormItem';
import MDButton from 'src/mui/components/MDButton';
import { selectMuiSettings } from 'src/modules/mui/muiSelectors';
import ColorBadgeSelectFormItem, {
  generateColorBadgeSelectOptions,
} from 'src/view/shared/form/items/ColorBadgeSelectFormItem';

const schema = yup.object().shape({
  referenceRange: yupFilterSchemas.integerRange(
    i18n('entities.task.fields.referenceRange'),
  ),
  title: yupFilterSchemas.string(
    i18n('entities.task.fields.title'),
  ),
  priority: yupFilterSchemas.relationToOne(
    i18n('entities.task.fields.priority'),
  ),
  repeat: yupFilterSchemas.enumerator(
    i18n('entities.task.fields.repeat'),
  ),
  status: yupFilterSchemas.enumerator(
    i18n('entities.task.fields.status'),
  ),
  owner: yupFilterSchemas.relationToOne(
    i18n('entities.task.fields.owner'),
  ),
  approver: yupFilterSchemas.relationToOne(
    i18n('entities.task.fields.approver'),
  ),
  dueDateRange: yupFilterSchemas.datetimeRange(
    i18n('entities.task.fields.dueDateRange'),
  ),
  completedDateRange: yupFilterSchemas.datetimeRange(
    i18n('entities.task.fields.completedDateRange'),
  ),
});

const emptyValues = {
  referenceRange: [],
  title: null,
  priority: null,
  repeat: null,
  status: null,
  owner: null,
  approver: null,
  dueDateRange: [],
  completedDateRange: [],
};

const previewRenders = {
  referenceRange: {
    label: i18n('entities.task.fields.referenceRange'),
    render: filterRenders.range(),
  },
  title: {
    label: i18n('entities.task.fields.title'),
    render: filterRenders.generic(),
  },
  priority: {
    label: i18n('entities.task.fields.priority'),
    render: filterRenders.relationToOne(),
  },
  repeat: {
    label: i18n('entities.task.fields.repeat'),
    render: filterRenders.enumerator(
      'entities.task.enumerators.repeat',
    ),
  },
  status: {
    label: i18n('entities.task.fields.status'),
    render: filterRenders.enumerator(
      'entities.task.enumerators.status',
    ),
  },
  owner: {
    label: i18n('entities.task.fields.owner'),
    render: filterRenders.relationToOne(),
  },
  approver: {
    label: i18n('entities.task.fields.approver'),
    render: filterRenders.relationToOne(),
  },
  dueDateRange: {
    label: i18n('entities.task.fields.dueDateRange'),
    render: filterRenders.datetimeRange(),
  },
  completedDateRange: {
    label: i18n('entities.task.fields.completedDateRange'),
    render: filterRenders.datetimeRange(),
  },
};

function TaskListFilter(props) {
  const { sidenavColor } = selectMuiSettings();
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
      ...rawFilter,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
    mode: 'onSubmit',
  });

  useEffect(() => {
    dispatch(
      actions.doFetch(
        schema.cast(initialValues),
        rawFilter,
      ),
    );
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues));
    setExpanded(false);
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key, emptyValues[key]);
    });
    dispatch(actions.doReset());
    setExpanded(false);
  };

  const onRemove = (key) => {
    form.setValue(key, emptyValues[key]);
    return form.handleSubmit(onSubmit)();
  };

  return (
    <FilterWrapper>
      <FilterAccordion
        expanded={expanded}
        onChange={(event, isExpanded) =>
          setExpanded(isExpanded)
        }
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="secondary" />}
        >
          <FilterPreview
            values={rawFilter}
            renders={previewRenders}
            expanded={expanded}
            onRemove={onRemove}
          />
        </AccordionSummary>
        <AccordionDetails>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item lg={6} xs={12}>
                  <InputNumberRangeFormItem
                    name="referenceRange"
                    label={i18n(
                      'entities.task.fields.referenceRange',
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="title"
                    label={i18n(
                      'entities.task.fields.title',
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <TaskPriorityAutocompleteFormItem
                    name="priority"
                    label={i18n(
                      'entities.task.fields.priority',
                    )}
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="repeat"
                    label={i18n(
                      'entities.task.fields.repeat',
                    )}
                    options={taskEnumerators.repeat.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.task.enumerators.repeat.${value}`,
                        ),
                      }),
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <ColorBadgeSelectFormItem
                    name="status"
                    label={i18n(
                      'entities.task.fields.status',
                    )}
                    options={generateColorBadgeSelectOptions(
                      taskEnumerators.status,
                      taskEnumerators.statusColor,
                      'entities.task.enumerators.status',
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <UserAutocompleteFormItem
                    name="owner"
                    label={i18n(
                      'entities.task.fields.owner',
                    )}
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <UserAutocompleteFormItem
                    name="approver"
                    label={i18n(
                      'entities.task.fields.approver',
                    )}
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <DatePickerRangeFormItem
                    name="dueDateRange"
                    label={i18n(
                      'entities.task.fields.dueDateRange',
                    )}
                    variant="standard"
                    showTime
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <DatePickerRangeFormItem
                    name="completedDateRange"
                    label={i18n(
                      'entities.task.fields.completedDateRange',
                    )}
                    variant="standard"
                    showTime
                  />
                </Grid>
              </Grid>

              <FilterButtons>
                <MDButton
                  variant="gradient"
                  color={sidenavColor}
                  type="submit"
                  disabled={props.loading}
                  startIcon={<SearchIcon />}
                  size="small"
                >
                  {i18n('common.search')}
                </MDButton>

                <MDButton
                  variant="outlined"
                  color={sidenavColor}
                  type="button"
                  onClick={onReset}
                  disabled={props.loading}
                  startIcon={<UndoIcon />}
                  size="small"
                >
                  {i18n('common.reset')}
                </MDButton>
              </FilterButtons>
            </form>
          </FormProvider>
        </AccordionDetails>
      </FilterAccordion>
    </FilterWrapper>
  );
}

export default TaskListFilter;
