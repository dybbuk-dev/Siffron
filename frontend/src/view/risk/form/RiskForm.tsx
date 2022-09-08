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
import riskEnumerators from 'src/modules/risk/riskEnumerators';
import { selectMuiSettings } from 'src/modules/mui/muiSelectors';
import MDButton from 'src/mui/components/MDButton';
import MDTypography from 'src/mui/components/MDTypography';
import MDBox from 'src/mui/components/MDBox';
import EditRiskLayout from 'src/view/risk/form/EditRiskLayout';
import NewRiskLayout from 'src/view/risk/form/NewRiskLayout';

const schema = yup.object().shape({
  title: yupFormSchemas.string(
    i18n('entities.risk.fields.title'),
    {
      required: true,
      min: 1,
      max: 250,
    },
  ),
  description: yupFormSchemas.string(
    i18n('entities.risk.fields.description'),
    {
      max: 2500,
      min: 1,
    },
  ),
  category: yupFormSchemas.relationToOne(
    i18n('entities.risk.fields.category'),
    {
      required: true,
    },
  ),
  status: yupFormSchemas.enumerator(
    i18n('entities.risk.fields.status'),
    {
      required: true,
      options: riskEnumerators.status,
    },
  ),
  owner: yupFormSchemas.relationToOne(
    i18n('entities.risk.fields.owner'),
    {},
  ),
  likelihood: yupFormSchemas.enumerator(
    i18n('entities.risk.fields.likelihood'),
    {
      required: true,
      options: riskEnumerators.likelihood,
    },
  ),
  impact: yupFormSchemas.enumerator(
    i18n('entities.risk.fields.impact'),
    {
      required: true,
      options: riskEnumerators.impact,
    },
  ),
  inherentScore: yupFormSchemas.enumerator(
    i18n('entities.risk.fields.inherentScore'),
    {
      required: true,
      options: riskEnumerators.inherentScore,
    },
  ),
  residualScore: yupFormSchemas.integer(
    i18n('entities.risk.fields.residualScore'),
    {
      required: true,
    },
  ),
  cost: yupFormSchemas.decimal(
    i18n('entities.risk.fields.cost'),
    {
      required: true,
    },
  ),
  mitigationPlan: yupFormSchemas.string(
    i18n('entities.risk.fields.mitigationPlan'),
    {
      min: 1,
      max: 5000,
    },
  ),
  tasks: yupFormSchemas.relationToMany(
    i18n('entities.risk.fields.tasks'),
    {},
  ),
});

function RiskForm(props) {
  const { sidenavColor } = selectMuiSettings();
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      reference: record.reference,
      title: record.title,
      description: record.description,
      category: record.category,
      status: record.status,
      owner: record.owner,
      likelihood: record.likelihood,
      impact: record.impact,
      inherentScore: record.inherentScore,
      residualScore: record.residualScore,
      cost: record.cost,
      mitigationPlan: record.mitigationPlan,
      tasks: record.tasks || [],
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

  const { saveLoading, modal, isEditing } = props;

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
              <NewRiskLayout modal />
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
                      <NewRiskLayout modal />
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
                {i18n('entities.risk.edit.title')}
              </MDTypography>
              {makeFormButtons(true)}
            </MDBox>
          )}
          {!isEditing && modal && makeFormButtons(modal)}
          {isEditing && (
            <EditRiskLayout
              initialValues={{ ...initialValues }}
              modal
            />
          )}
        </form>
      </FormProvider>
    </FormWrapper>
  );
}

export default RiskForm;
