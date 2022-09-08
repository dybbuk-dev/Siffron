import { useState } from 'react';
import TaskPriorityService from 'src/modules/taskPriority/taskPriorityService';
import TaskPriorityFormModal from 'src/view/taskPriority/form/TaskPriorityFormModal';
import AutocompleteInMemoryFormItem from 'src/view/shared/form/items/AutocompleteInMemoryFormItem';
import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';
import selectors from 'src/modules/taskPriority/taskPrioritySelectors';
import { colorBadgeSelectFormItemRenderOption } from 'src/view/shared/form/items/ColorBadgeSelectFormItem';
import MDInput from 'src/mui/components/MDInput';
import ColorBadge, {
  getColorBadgeBack,
  getColorBadgeFore,
} from 'src/view/shared/components/ColorBadge';
import taskPriorityEnumerators from 'src/modules/taskPriority/taskPriorityEnumerators';
import MDBox from 'src/mui/components/MDBox';

function TaskPriorityAutocompleteFormItem(props) {
  const { setValue, getValues } = useFormContext();

  const [modalVisible, setModalVisible] = useState(false);

  const hasPermissionToCreate = useSelector(
    selectors.selectPermissionToCreate,
  );

  const doCloseModal = () => {
    setModalVisible(false);
  };

  const doOpenModal = () => {
    setModalVisible(true);
  };

  const doCreateSuccess = (record) => {
    const { name, mode } = props;

    if (mode && mode === 'multiple') {
      setValue(
        name,
        [...(getValues()[name] || []), record],
        { shouldValidate: true, shouldDirty: true },
      );
    } else {
      setValue(name, record, {
        shouldValidate: true,
        shouldDirty: true,
      });
    }

    doCloseModal();
  };

  const fetchFn = (value, limit) => {
    return TaskPriorityService.listAutocomplete(
      value,
      limit,
    );
  };

  const colorFn = (label) =>
    taskPriorityEnumerators.priorityColor[
      taskPriorityEnumerators.priority.indexOf(label)
    ];

  const mapper = {
    toAutocomplete(originalValue) {
      if (!originalValue) {
        return null;
      }

      const value = originalValue.id;
      let label = originalValue.label;

      if (originalValue.priority) {
        label = originalValue.priority;
      }

      const color = colorFn(label);
      return {
        key: value,
        value,
        label,
        color,
      };
    },

    toValue(originalValue) {
      if (!originalValue) {
        return null;
      }

      return {
        id: originalValue.value,
        label: originalValue.label,
      };
    },
  };

  const {
    autoFocus,
    label,
    margin,
    required,
    shrink,
    size,
    variant,
  } = props;

  const renderInput = (params) => {
    const color = colorFn(params.inputProps.value);
    return (
      <>
        {color && (
          <MDBox
            display="block"
            position="absolute"
            mt={2.2}
          >
            <ColorBadge
              label={params.inputProps.value}
              color={color}
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
          autoFocus={autoFocus || undefined}
          sx={{
            '& input': {
              padding: `${
                color ? '6px' : '4px'
              } 10px !important`,
              color: color
                ? 'transparent !important'
                : null,
              fontSize: color ? '0.75rem' : null,
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
    <>
      <AutocompleteInMemoryFormItem
        {...props}
        fetchFn={fetchFn}
        mapper={mapper}
        renderOption={colorBadgeSelectFormItemRenderOption}
        renderInput={renderInput}
        onOpenModal={doOpenModal}
        hasPermissionToCreate={hasPermissionToCreate}
      />

      {modalVisible && (
        <TaskPriorityFormModal
          onClose={doCloseModal}
          onSuccess={doCreateSuccess}
        />
      )}
    </>
  );
}

export default TaskPriorityAutocompleteFormItem;
