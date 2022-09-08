import { Card, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import UndoIcon from '@mui/icons-material/Undo';
import { useState } from 'react';
import { i18n } from 'src/i18n';
import FormWrapper, {
  FormButtons,
} from 'src/view/shared/styles/FormWrapper';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { selectMuiSettings } from 'src/modules/mui/muiSelectors';
import MDButton from 'src/mui/components/MDButton';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';
import EditProductLayout from 'src/view/product/form/EditProductLayout';
import NewProductLayout from 'src/view/product/form/NewProductLayout';

const schema = yup.object().shape({
  title: yupFormSchemas.string(
    i18n('entities.product.fields.title'),
    {
      required: true,
      min: 1,
      max: 200,
    },
  ),
  description: yupFormSchemas.string(
    i18n('entities.product.fields.description'),
    {
      required: true,
      min: 1,
      max: 1000,
    },
  ),
  category: yupFormSchemas.relationToOne(
    i18n('entities.product.fields.category'),
    {
      required: true,
    },
  ),
  website: yupFormSchemas.string(
    i18n('entities.product.fields.website'),
    {
      required: true,
      max: 100,
      min: 1,
    },
  ),
  logo: yupFormSchemas.images(
    i18n('entities.product.fields.logo'),
    {
      required: true,
    },
  ),
  rating: yupFormSchemas.decimal(
    i18n('entities.product.fields.rating'),
    {
      max: 5,
      min: 0,
    },
  ),
  popularity: yupFormSchemas.integer(
    i18n('entities.product.fields.popularity'),
    {
      min: 0,
      max: 100,
    },
  ),
});

function ProductForm(props) {
  const { sidenavColor } = selectMuiSettings();
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      reference: record.reference,
      title: record.title,
      description: record.description,
      category: record.category,
      website: record.website,
      logo: record.logo || [],
      rating: record.rating,
      popularity: record.popularity,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    defaultValues: initialValues as any,
  });

  const onSubmit = (values) => {
    props.onSubmit(props.record?.id, values);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  const { saveLoading, modal, isEditing, title } = props;

  const makeFormButtons = (modal = false) => {
    return (
      <FormButtons
        style={{
          flexDirection: modal ? 'row-reverse' : undefined,
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
          {!isEditing &&
            (modal ? (
              <NewProductLayout title={title} modal />
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
                      <NewProductLayout
                        title={title}
                        modal
                      />
                      <MDBox px={1}>
                        {makeFormButtons(true)}
                      </MDBox>
                    </MDBox>
                  </Card>
                </Grid>
              </Grid>
            ))}
          {isEditing && (
            <MDBox
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <MDTypography variant="h4">
                {i18n('entities.product.edit.title')}
              </MDTypography>
              {makeFormButtons(true)}
            </MDBox>
          )}
          {!isEditing && modal && makeFormButtons(modal)}
          {isEditing && (
            <EditProductLayout
              initialValues={{ ...initialValues }}
              title={title}
              modal
            />
          )}
        </form>
      </FormProvider>
    </FormWrapper>
  );
}

export default ProductForm;
