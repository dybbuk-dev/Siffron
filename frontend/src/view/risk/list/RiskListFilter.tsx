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
import actions from 'src/modules/risk/list/riskListActions';
import selectors from 'src/modules/risk/list/riskListSelectors';
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
import InputRangeFormItem from 'src/view/shared/form/items/InputRangeFormItem';
import InputNumberRangeFormItem from 'src/view/shared/form/items/InputNumberRangeFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import riskEnumerators from 'src/modules/risk/riskEnumerators';
import RiskCategoryAutocompleteFormItem from 'src/view/riskCategory/autocomplete/RiskCategoryAutocompleteFormItem';
import { selectMuiSettings } from 'src/modules/mui/muiSelectors';
import MDButton from 'src/mui/components/MDButton';
import ColorBadgeSelectFormItem, {
  generateColorBadgeSelectOptions,
} from 'src/view/shared/form/items/ColorBadgeSelectFormItem';

const schema = yup.object().shape({
  referenceRange: yupFilterSchemas.integerRange(
    i18n('entities.risk.fields.referenceRange'),
  ),
  title: yupFilterSchemas.string(
    i18n('entities.risk.fields.title'),
  ),
  category: yupFilterSchemas.relationToOne(
    i18n('entities.risk.fields.category'),
  ),
  status: yupFilterSchemas.enumerator(
    i18n('entities.risk.fields.status'),
  ),
  owner: yupFilterSchemas.relationToOne(
    i18n('entities.risk.fields.owner'),
  ),
  likelihood: yupFilterSchemas.enumerator(
    i18n('entities.risk.fields.likelihood'),
  ),
  impact: yupFilterSchemas.enumerator(
    i18n('entities.risk.fields.impact'),
  ),
  inherentScore: yupFilterSchemas.enumerator(
    i18n('entities.risk.fields.inherentScore'),
  ),
  residualScoreRange: yupFilterSchemas.integerRange(
    i18n('entities.risk.fields.residualScoreRange'),
  ),
  costRange: yupFilterSchemas.decimalRange(
    i18n('entities.risk.fields.costRange'),
  ),
});

const emptyValues = {
  referenceRange: [],
  title: null,
  category: null,
  status: null,
  owner: null,
  likelihood: null,
  impact: null,
  inherentScore: null,
  residualScoreRange: [],
  costRange: [],
};

const previewRenders = {
  referenceRange: {
    label: i18n('entities.risk.fields.referenceRange'),
    render: filterRenders.range(),
  },
  title: {
    label: i18n('entities.risk.fields.title'),
    render: filterRenders.generic(),
  },
  category: {
    label: i18n('entities.risk.fields.category'),
    render: filterRenders.relationToOne(),
  },
  status: {
    label: i18n('entities.risk.fields.status'),
    render: filterRenders.enumerator(
      'entities.risk.enumerators.status',
    ),
  },
  owner: {
    label: i18n('entities.risk.fields.owner'),
    render: filterRenders.relationToOne(),
  },
  likelihood: {
    label: i18n('entities.risk.fields.likelihood'),
    render: filterRenders.enumerator(
      'entities.risk.enumerators.likelihood',
    ),
  },
  impact: {
    label: i18n('entities.risk.fields.impact'),
    render: filterRenders.enumerator(
      'entities.risk.enumerators.impact',
    ),
  },
  inherentScore: {
    label: i18n('entities.risk.fields.inherentScore'),
    render: filterRenders.enumerator(
      'entities.risk.enumerators.inherentScore',
    ),
  },
  residualScoreRange: {
    label: i18n('entities.risk.fields.residualScoreRange'),
    render: filterRenders.range(),
  },
  costRange: {
    label: i18n('entities.risk.fields.costRange'),
    render: filterRenders.decimalRange(),
  },
};

function RiskListFilter(props) {
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
                      'entities.risk.fields.referenceRange',
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="title"
                    label={i18n(
                      'entities.risk.fields.title',
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <RiskCategoryAutocompleteFormItem
                    name="category"
                    label={i18n(
                      'entities.risk.fields.category',
                    )}
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <ColorBadgeSelectFormItem
                    name="status"
                    label={i18n(
                      'entities.risk.fields.status',
                    )}
                    options={generateColorBadgeSelectOptions(
                      riskEnumerators.status,
                      riskEnumerators.statusColor,
                      'entities.risk.enumerators.status',
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <UserAutocompleteFormItem
                    name="owner"
                    label={i18n(
                      'entities.risk.fields.owner',
                    )}
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <ColorBadgeSelectFormItem
                    name="likelihood"
                    label={i18n(
                      'entities.risk.fields.likelihood',
                    )}
                    options={generateColorBadgeSelectOptions(
                      riskEnumerators.likelihood,
                      riskEnumerators.likelihoodColor,
                      'entities.risk.enumerators.likelihood',
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <ColorBadgeSelectFormItem
                    name="impact"
                    label={i18n(
                      'entities.risk.fields.impact',
                    )}
                    options={generateColorBadgeSelectOptions(
                      riskEnumerators.impact,
                      riskEnumerators.impactColor,
                      'entities.risk.enumerators.impact',
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <ColorBadgeSelectFormItem
                    name="inherentScore"
                    label={i18n(
                      'entities.risk.fields.inherentScore',
                    )}
                    options={generateColorBadgeSelectOptions(
                      riskEnumerators.inherentScore,
                      riskEnumerators.inherentScoreColor,
                      'entities.risk.enumerators.inherentScore',
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputNumberRangeFormItem
                    name="residualScoreRange"
                    label={i18n(
                      'entities.risk.fields.residualScoreRange',
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputRangeFormItem
                    name="costRange"
                    label={i18n(
                      'entities.risk.fields.costRange',
                    )}
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

export default RiskListFilter;
