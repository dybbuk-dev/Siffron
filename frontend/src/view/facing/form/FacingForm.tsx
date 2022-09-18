import React, { useState } from 'react';
import { i18n } from 'src/i18n';
import FormWrapper, {
  FormButtons,
} from 'src/view/shared/styles/FormWrapper';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import FacingLayout from 'src/view/facing/form/FacingLayout';
import facingEnumerators from 'src/modules/facing/facingEnumerators';
import { yupResolver } from '@hookform/resolvers/yup';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import UndoIcon from '@mui/icons-material/Undo';
import MDButton from 'src/mui/components/MDButton';
import { selectMuiSettings } from 'src/modules/mui/muiSelectors';
import MDBox from 'src/mui/components/MDBox';
import { Card, Grid } from '@mui/material';

const schema = yup.object().shape({
  model: yupFormSchemas.string(
    i18n('entities.facing.fields.model'),
    {
      required: true,
      max: 200,
      min: 1,
    },
  ),
  type: yupFormSchemas.enumerator(
    i18n('entities.facing.fields.type'),
    {
      required: true,
      options: facingEnumerators.type,
    },
  ),
  sn: yupFormSchemas.string(
    i18n('entities.facing.fields.sn'),
    {
      required: true,
      max: 200,
      min: 1,
    },
  ),
  manager: yupFormSchemas.relationToOne(
    i18n('entities.facing.fields.manager'),
    {
      required: true,
    },
  ),
  shop: yupFormSchemas.relationToOne(
    i18n('entities.facing.fields.shop'),
    {
      required: true,
    },
  ),
  department: yupFormSchemas.relationToOne(
    i18n('entities.facing.fields.department'),
    {
      required: true,
    },
  ),
  section: yupFormSchemas.relationToOne(
    i18n('entities.facing.fields.section'),
    {
      required: true,
    },
  ),
  shelf: yupFormSchemas.relationToOne(
    i18n('entities.facing.fields.shelf'),
    {
      required: true,
    },
  ),
});

function FacingForm(props) {
  const { sidenavColor } = selectMuiSettings();
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      model: record.model,
      type: record.type,
      sn: record.sn,
      manager: record.manager,
      shop: record.shop,
      department: record.department,
      section: record.section,
      shelf: record.shelf,
    };
  });
  const [shop, setShop] = useState(null);
  const [department, setDepartment] = useState(null);
  const [section, setSection] = useState(null);

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    defaultValues: initialValues as any,
  });

  const onSubmit = (values) => {
    props.onSubmit(props.record?.id, values);
  };

  const onChangeShop = (value) => {
    setShop(value.id);
  };

  const onChangeDepartment = (value) => {
    setDepartment(value.id);
  };

  const onChangeSection = (value) => {
    setSection(value.id);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  const { saveLoading, title, modal } = props;

  const makeFormButtons = () => {
    return (
      <FormButtons
        style={{
          flexDirection: 'row-reverse',
        }}
      >
        <MDButton
          variant="gradient"
          color={sidenavColor}
          disabled={saveLoading}
          type="submit"
          onClick={form.handleSubmit(onSubmit)}
          startIcon={<SaveIcon />}
          size="small"
        >
          {i18n('common.save')}
        </MDButton>

        <MDButton
          variant="outlined"
          color={sidenavColor}
          disabled={saveLoading}
          onClick={onReset}
          type="button"
          startIcon={<UndoIcon />}
          size="small"
        >
          {i18n('common.reset')}
        </MDButton>

        {props.onCancel ? (
          <MDButton
            variant="outlined"
            color={sidenavColor}
            disabled={saveLoading}
            onClick={() => props.onCancel()}
            type="button"
            startIcon={<CloseIcon />}
            size="small"
          >
            {i18n('common.cancel')}
          </MDButton>
        ) : null}
      </FormButtons>
    );
  };

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {modal ? (
            <>
              <FacingLayout
                onChangeShop={onChangeShop}
                onChangeDepartment={onChangeDepartment}
                onChangeSection={onChangeSection}
                shop={shop}
                department={department}
                section={section}
                title={title}
              />
              <MDBox px={1}>{makeFormButtons()}</MDBox>
            </>
          ) : (
            <Grid
              container
              spacing={2}
              justifyContent="center"
              mt={1}
            >
              <Grid item lg={9} md={8} sm={12} xs={12}>
                <Card>
                  <MDBox px={2} py={2}>
                    <FacingLayout
                      onChangeShop={onChangeShop}
                      onChangeDepartment={
                        onChangeDepartment
                      }
                      onChangeSection={onChangeSection}
                      title={title}
                      shop={shop}
                      section={section}
                      department={department}
                    />
                    <MDBox px={1}>
                      {makeFormButtons()}
                    </MDBox>
                  </MDBox>
                </Card>
              </Grid>
            </Grid>
          )}
        </form>
      </FormProvider>
    </FormWrapper>
  );
}

export default FacingForm;
