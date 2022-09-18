import React, { useState } from 'react';
import { i18n } from 'src/i18n';
import FormWrapper, {
  FormButtons,
} from 'src/view/shared/styles/FormWrapper';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import SectionLayout from 'src/view/section/form/SectionLayout';
import { yupResolver } from '@hookform/resolvers/yup';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import UndoIcon from '@mui/icons-material/Undo';
import MDButton from 'src/mui/components/MDButton';
import { selectMuiSettings } from 'src/modules/mui/muiSelectors';
import MDBox from 'src/mui/components/MDBox';
import { Card, Grid } from '@mui/material';

const schema = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('entities.section.fields.name'),
    {
      required: true,
      max: 200,
      min: 1,
    },
  ),
  department: yupFormSchemas.relationToOne(
    i18n('entities.section.fields.department'),
    {
      required: true,
    },
  ),
  shop: yupFormSchemas.relationToOne(
    i18n('entities.section.fields.shop'),
    {
      required: true,
    },
  ),
});

function SectionForm(props) {
  const { sidenavColor } = selectMuiSettings();
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      name: record.name,
      department: record.department,
      shop: record.shop,
    };
  });
  const [shop, setShop] = useState(null);

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    defaultValues: initialValues as any,
  });

  const onSubmit = (values) => {
    props.onSubmit(props.record?.id, values);
  };

  const onChange = (value) => {
    setShop(value.id);
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
              <SectionLayout
                onChange={onChange}
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
                    <SectionLayout
                      onChange={onChange}
                      title={title}
                      shop={shop}
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

export default SectionForm;
