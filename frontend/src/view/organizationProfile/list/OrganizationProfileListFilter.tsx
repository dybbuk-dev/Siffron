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
import actions from 'src/modules/organizationProfile/list/organizationProfileListActions';
import selectors from 'src/modules/organizationProfile/list/organizationProfileListSelectors';
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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import organizationProfileEnumerators from 'src/modules/organizationProfile/organizationProfileEnumerators';
import MDButton from 'src/mui/components/MDButton';
import { selectMuiSettings } from 'src/modules/mui/muiSelectors';

const schema = yup.object().shape({
  companyName: yupFilterSchemas.string(
    i18n('entities.organizationProfile.fields.companyName'),
  ),
  industry: yupFilterSchemas.enumerator(
    i18n('entities.organizationProfile.fields.industry'),
  ),
  employee: yupFilterSchemas.enumerator(
    i18n('entities.organizationProfile.fields.employee'),
  ),
  thirdParties: yupFilterSchemas.enumerator(
    i18n(
      'entities.organizationProfile.fields.thirdParties',
    ),
  ),
  locationRange: yupFilterSchemas.integerRange(
    i18n(
      'entities.organizationProfile.fields.locationRange',
    ),
  ),
  regulatoryCompliance: yupFilterSchemas.stringArray(
    i18n(
      'entities.organizationProfile.fields.regulatoryCompliance',
    ),
  ),
  technologyStack: yupFilterSchemas.enumerator(
    i18n(
      'entities.organizationProfile.fields.technologyStack',
    ),
  ),
  outsourcedIT: yupFilterSchemas.boolean(
    i18n(
      'entities.organizationProfile.fields.outsourcedIT',
    ),
  ),
  outsourcedSecurityOperations: yupFilterSchemas.boolean(
    i18n(
      'entities.organizationProfile.fields.outsourcedSecurityOperations',
    ),
  ),
  pastIncidents: yupFilterSchemas.string(
    i18n(
      'entities.organizationProfile.fields.pastIncidents',
    ),
  ),
  cspSecurityPolicies: yupFilterSchemas.boolean(
    i18n(
      'entities.organizationProfile.fields.cspSecurityPolicies',
    ),
  ),
  cspListITAssets: yupFilterSchemas.boolean(
    i18n(
      'entities.organizationProfile.fields.cspListITAssets',
    ),
  ),
  cspJobRoleInfoSecTraining: yupFilterSchemas.boolean(
    i18n(
      'entities.organizationProfile.fields.cspJobRoleInfoSecTraining',
    ),
  ),
  cspIncidentMgmtPlan: yupFilterSchemas.boolean(
    i18n(
      'entities.organizationProfile.fields.cspIncidentMgmtPlan',
    ),
  ),
  cspIncidentVendorNotification: yupFilterSchemas.boolean(
    i18n(
      'entities.organizationProfile.fields.cspIncidentVendorNotification',
    ),
  ),
  cspCyberInsurance: yupFilterSchemas.boolean(
    i18n(
      'entities.organizationProfile.fields.cspCyberInsurance',
    ),
  ),
  cspLatestCyberAwarenessThreats: yupFilterSchemas.boolean(
    i18n(
      'entities.organizationProfile.fields.cspLatestCyberAwarenessThreats',
    ),
  ),
  cspMFAUtilized: yupFilterSchemas.boolean(
    i18n(
      'entities.organizationProfile.fields.cspMFAUtilized',
    ),
  ),
  cspSecurityTesting: yupFilterSchemas.boolean(
    i18n(
      'entities.organizationProfile.fields.cspSecurityTesting',
    ),
  ),
  cspBackupStrategy: yupFilterSchemas.boolean(
    i18n(
      'entities.organizationProfile.fields.cspBackupStrategy',
    ),
  ),
});

const emptyValues = {
  companyName: null,
  industry: null,
  employee: null,
  thirdParties: null,
  locationRange: [],
  regulatoryCompliance: [],
  technologyStack: null,
  outsourcedIT: null,
  outsourcedSecurityOperations: null,
  pastIncidents: null,
  cspSecurityPolicies: null,
  cspListITAssets: null,
  cspJobRoleInfoSecTraining: null,
  cspIncidentMgmtPlan: null,
  cspIncidentVendorNotification: null,
  cspCyberInsurance: null,
  cspLatestCyberAwarenessThreats: null,
  cspMFAUtilized: null,
  cspSecurityTesting: null,
  cspBackupStrategy: null,
};

const previewRenders = {
  companyName: {
    label: i18n(
      'entities.organizationProfile.fields.companyName',
    ),
    render: filterRenders.generic(),
  },
  industry: {
    label: i18n(
      'entities.organizationProfile.fields.industry',
    ),
    render: filterRenders.enumerator(
      'entities.organizationProfile.enumerators.industry',
    ),
  },
  employee: {
    label: i18n(
      'entities.organizationProfile.fields.employee',
    ),
    render: filterRenders.enumerator(
      'entities.organizationProfile.enumerators.employee',
    ),
  },
  thirdParties: {
    label: i18n(
      'entities.organizationProfile.fields.thirdParties',
    ),
    render: filterRenders.enumerator(
      'entities.organizationProfile.enumerators.thirdParties',
    ),
  },
  locationRange: {
    label: i18n(
      'entities.organizationProfile.fields.locationRange',
    ),
    render: filterRenders.range(),
  },
  regulatoryCompliance: {
    label: i18n(
      'entities.organizationProfile.fields.regulatoryCompliance',
    ),
    render: filterRenders.enumeratorMultiple(
      'entities.organizationProfile.enumerators.regulatoryCompliance',
    ),
  },
  technologyStack: {
    label: i18n(
      'entities.organizationProfile.fields.technologyStack',
    ),
    render: filterRenders.enumerator(
      'entities.organizationProfile.enumerators.technologyStack',
    ),
  },
  outsourcedIT: {
    label: i18n(
      'entities.organizationProfile.fields.outsourcedIT',
    ),
    render: filterRenders.boolean(),
  },
  outsourcedSecurityOperations: {
    label: i18n(
      'entities.organizationProfile.fields.outsourcedSecurityOperations',
    ),
    render: filterRenders.boolean(),
  },
  pastIncidents: {
    label: i18n(
      'entities.organizationProfile.fields.pastIncidents',
    ),
    render: filterRenders.generic(),
  },
  cspSecurityPolicies: {
    label: i18n(
      'entities.organizationProfile.fields.cspSecurityPolicies',
    ),
    render: filterRenders.boolean(),
  },
  cspListITAssets: {
    label: i18n(
      'entities.organizationProfile.fields.cspListITAssets',
    ),
    render: filterRenders.boolean(),
  },
  cspJobRoleInfoSecTraining: {
    label: i18n(
      'entities.organizationProfile.fields.cspJobRoleInfoSecTraining',
    ),
    render: filterRenders.boolean(),
  },
  cspIncidentMgmtPlan: {
    label: i18n(
      'entities.organizationProfile.fields.cspIncidentMgmtPlan',
    ),
    render: filterRenders.boolean(),
  },
  cspIncidentVendorNotification: {
    label: i18n(
      'entities.organizationProfile.fields.cspIncidentVendorNotification',
    ),
    render: filterRenders.boolean(),
  },
  cspCyberInsurance: {
    label: i18n(
      'entities.organizationProfile.fields.cspCyberInsurance',
    ),
    render: filterRenders.boolean(),
  },
  cspLatestCyberAwarenessThreats: {
    label: i18n(
      'entities.organizationProfile.fields.cspLatestCyberAwarenessThreats',
    ),
    render: filterRenders.boolean(),
  },
  cspMFAUtilized: {
    label: i18n(
      'entities.organizationProfile.fields.cspMFAUtilized',
    ),
    render: filterRenders.boolean(),
  },
  cspSecurityTesting: {
    label: i18n(
      'entities.organizationProfile.fields.cspSecurityTesting',
    ),
    render: filterRenders.boolean(),
  },
  cspBackupStrategy: {
    label: i18n(
      'entities.organizationProfile.fields.cspBackupStrategy',
    ),
    render: filterRenders.boolean(),
  },
};

function OrganizationProfileListFilter(props) {
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
                  <InputFormItem
                    name="companyName"
                    label={i18n(
                      'entities.organizationProfile.fields.companyName',
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="industry"
                    label={i18n(
                      'entities.organizationProfile.fields.industry',
                    )}
                    options={organizationProfileEnumerators.industry.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.organizationProfile.enumerators.industry.${value}`,
                        ),
                      }),
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="employee"
                    label={i18n(
                      'entities.organizationProfile.fields.employee',
                    )}
                    options={organizationProfileEnumerators.employee.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.organizationProfile.enumerators.employee.${value}`,
                        ),
                      }),
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="thirdParties"
                    label={i18n(
                      'entities.organizationProfile.fields.thirdParties',
                    )}
                    options={organizationProfileEnumerators.thirdParties.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.organizationProfile.enumerators.thirdParties.${value}`,
                        ),
                      }),
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputNumberRangeFormItem
                    name="locationRange"
                    label={i18n(
                      'entities.organizationProfile.fields.locationRange',
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="regulatoryCompliance"
                    label={i18n(
                      'entities.organizationProfile.fields.regulatoryCompliance',
                    )}
                    options={organizationProfileEnumerators.regulatoryCompliance.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.organizationProfile.enumerators.regulatoryCompliance.${value}`,
                        ),
                      }),
                    )}
                    mode="multiple"
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="technologyStack"
                    label={i18n(
                      'entities.organizationProfile.fields.technologyStack',
                    )}
                    options={organizationProfileEnumerators.technologyStack.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.organizationProfile.enumerators.technologyStack.${value}`,
                        ),
                      }),
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="outsourcedIT"
                    label={i18n(
                      'entities.organizationProfile.fields.outsourcedIT',
                    )}
                    options={[
                      {
                        value: true,
                        label: i18n('common.yes'),
                      },
                      {
                        value: false,
                        label: i18n('common.no'),
                      },
                    ]}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="outsourcedSecurityOperations"
                    label={i18n(
                      'entities.organizationProfile.fields.outsourcedSecurityOperations',
                    )}
                    options={[
                      {
                        value: true,
                        label: i18n('common.yes'),
                      },
                      {
                        value: false,
                        label: i18n('common.no'),
                      },
                    ]}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="pastIncidents"
                    label={i18n(
                      'entities.organizationProfile.fields.pastIncidents',
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="cspSecurityPolicies"
                    label={i18n(
                      'entities.organizationProfile.fields.cspSecurityPolicies',
                    )}
                    options={[
                      {
                        value: true,
                        label: i18n('common.yes'),
                      },
                      {
                        value: false,
                        label: i18n('common.no'),
                      },
                    ]}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="cspListITAssets"
                    label={i18n(
                      'entities.organizationProfile.fields.cspListITAssets',
                    )}
                    options={[
                      {
                        value: true,
                        label: i18n('common.yes'),
                      },
                      {
                        value: false,
                        label: i18n('common.no'),
                      },
                    ]}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="cspJobRoleInfoSecTraining"
                    label={i18n(
                      'entities.organizationProfile.fields.cspJobRoleInfoSecTraining',
                    )}
                    options={[
                      {
                        value: true,
                        label: i18n('common.yes'),
                      },
                      {
                        value: false,
                        label: i18n('common.no'),
                      },
                    ]}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="cspIncidentMgmtPlan"
                    label={i18n(
                      'entities.organizationProfile.fields.cspIncidentMgmtPlan',
                    )}
                    options={[
                      {
                        value: true,
                        label: i18n('common.yes'),
                      },
                      {
                        value: false,
                        label: i18n('common.no'),
                      },
                    ]}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="cspIncidentVendorNotification"
                    label={i18n(
                      'entities.organizationProfile.fields.cspIncidentVendorNotification',
                    )}
                    options={[
                      {
                        value: true,
                        label: i18n('common.yes'),
                      },
                      {
                        value: false,
                        label: i18n('common.no'),
                      },
                    ]}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="cspCyberInsurance"
                    label={i18n(
                      'entities.organizationProfile.fields.cspCyberInsurance',
                    )}
                    options={[
                      {
                        value: true,
                        label: i18n('common.yes'),
                      },
                      {
                        value: false,
                        label: i18n('common.no'),
                      },
                    ]}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="cspLatestCyberAwarenessThreats"
                    label={i18n(
                      'entities.organizationProfile.fields.cspLatestCyberAwarenessThreats',
                    )}
                    options={[
                      {
                        value: true,
                        label: i18n('common.yes'),
                      },
                      {
                        value: false,
                        label: i18n('common.no'),
                      },
                    ]}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="cspMFAUtilized"
                    label={i18n(
                      'entities.organizationProfile.fields.cspMFAUtilized',
                    )}
                    options={[
                      {
                        value: true,
                        label: i18n('common.yes'),
                      },
                      {
                        value: false,
                        label: i18n('common.no'),
                      },
                    ]}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="cspSecurityTesting"
                    label={i18n(
                      'entities.organizationProfile.fields.cspSecurityTesting',
                    )}
                    options={[
                      {
                        value: true,
                        label: i18n('common.yes'),
                      },
                      {
                        value: false,
                        label: i18n('common.no'),
                      },
                    ]}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="cspBackupStrategy"
                    label={i18n(
                      'entities.organizationProfile.fields.cspBackupStrategy',
                    )}
                    options={[
                      {
                        value: true,
                        label: i18n('common.yes'),
                      },
                      {
                        value: false,
                        label: i18n('common.no'),
                      },
                    ]}
                    variant="standard"
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

export default OrganizationProfileListFilter;
