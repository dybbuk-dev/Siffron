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
import actions from 'src/modules/vendor/list/vendorListActions';
import selectors from 'src/modules/vendor/list/vendorListSelectors';
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
import vendorEnumerators from 'src/modules/vendor/vendorEnumerators';
import VendorCategoryAutocompleteFormItem from 'src/view/vendorCategory/autocomplete/VendorCategoryAutocompleteFormItem';
import { selectMuiSettings } from 'src/modules/mui/muiSelectors';
import MDButton from 'src/mui/components/MDButton';
import ColorBadgeSelectFormItem, {
  generateColorBadgeSelectOptions,
} from 'src/view/shared/form/items/ColorBadgeSelectFormItem';

const schema = yup.object().shape({
  referenceRange: yupFilterSchemas.integerRange(
    i18n('entities.vendor.fields.referenceRange'),
  ),
  name: yupFilterSchemas.string(
    i18n('entities.vendor.fields.name'),
  ),
  status: yupFilterSchemas.enumerator(
    i18n('entities.vendor.fields.status'),
  ),
  category: yupFilterSchemas.relationToOne(
    i18n('entities.vendor.fields.category'),
  ),
  rating: yupFilterSchemas.enumerator(
    i18n('entities.vendor.fields.rating'),
  ),
  primaryContactName: yupFilterSchemas.string(
    i18n('entities.vendor.fields.primaryContactName'),
  ),
  primaryContactEmail: yupFilterSchemas.string(
    i18n('entities.vendor.fields.primaryContactEmail'),
  ),
  countryOfIncorporation: yupFilterSchemas.enumerator(
    i18n('entities.vendor.fields.countryOfIncorporation'),
  ),
  dataProcessed: yupFilterSchemas.stringArray(
    i18n('entities.vendor.fields.dataProcessed'),
  ),
  industry: yupFilterSchemas.enumerator(
    i18n('entities.vendor.fields.industry'),
  ),
  internalBusinessSponsor: yupFilterSchemas.string(
    i18n('entities.vendor.fields.internalBusinessSponsor'),
  ),
  website: yupFilterSchemas.string(
    i18n('entities.vendor.fields.website'),
  ),
});

const emptyValues = {
  referenceRange: [],
  name: null,
  status: null,
  category: null,
  rating: null,
  primaryContactName: null,
  primaryContactEmail: null,
  countryOfIncorporation: null,
  dataProcessed: [],
  industry: null,
  internalBusinessSponsor: null,
  website: null,
};

const previewRenders = {
  referenceRange: {
    label: i18n('entities.vendor.fields.referenceRange'),
    render: filterRenders.range(),
  },
  name: {
    label: i18n('entities.vendor.fields.name'),
    render: filterRenders.generic(),
  },
  status: {
    label: i18n('entities.vendor.fields.status'),
    render: filterRenders.enumerator(
      'entities.vendor.enumerators.status',
    ),
  },
  category: {
    label: i18n('entities.vendor.fields.category'),
    render: filterRenders.relationToOne(),
  },
  rating: {
    label: i18n('entities.vendor.fields.rating'),
    render: filterRenders.enumerator(
      'entities.vendor.enumerators.rating',
    ),
  },
  primaryContactName: {
    label: i18n(
      'entities.vendor.fields.primaryContactName',
    ),
    render: filterRenders.generic(),
  },
  primaryContactEmail: {
    label: i18n(
      'entities.vendor.fields.primaryContactEmail',
    ),
    render: filterRenders.generic(),
  },
  countryOfIncorporation: {
    label: i18n(
      'entities.vendor.fields.countryOfIncorporation',
    ),
    render: filterRenders.enumerator(
      'entities.vendor.enumerators.countryOfIncorporation',
    ),
  },
  dataProcessed: {
    label: i18n('entities.vendor.fields.dataProcessed'),
    render: filterRenders.enumeratorMultiple(
      'entities.vendor.enumerators.dataProcessed',
    ),
  },
  industry: {
    label: i18n('entities.vendor.fields.industry'),
    render: filterRenders.enumerator(
      'entities.vendor.enumerators.industry',
    ),
  },
  internalBusinessSponsor: {
    label: i18n(
      'entities.vendor.fields.internalBusinessSponsor',
    ),
    render: filterRenders.generic(),
  },
  website: {
    label: i18n('entities.vendor.fields.website'),
    render: filterRenders.generic(),
  },
};

function VendorListFilter(props) {
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
                      'entities.vendor.fields.referenceRange',
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="name"
                    label={i18n(
                      'entities.vendor.fields.name',
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <ColorBadgeSelectFormItem
                    name="status"
                    label={i18n(
                      'entities.vendor.fields.status',
                    )}
                    options={generateColorBadgeSelectOptions(
                      vendorEnumerators.status,
                      vendorEnumerators.statusColor,
                      'entities.vendor.enumerators.status',
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <VendorCategoryAutocompleteFormItem
                    name="category"
                    label={i18n(
                      'entities.vendor.fields.category',
                    )}
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <ColorBadgeSelectFormItem
                    name="rating"
                    label={i18n(
                      'entities.vendor.fields.rating',
                    )}
                    options={generateColorBadgeSelectOptions(
                      vendorEnumerators.rating,
                      vendorEnumerators.ratingColor,
                      'entities.vendor.enumerators.rating',
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="primaryContactName"
                    label={i18n(
                      'entities.vendor.fields.primaryContactName',
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="primaryContactEmail"
                    label={i18n(
                      'entities.vendor.fields.primaryContactEmail',
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="countryOfIncorporation"
                    label={i18n(
                      'entities.vendor.fields.countryOfIncorporation',
                    )}
                    options={vendorEnumerators.countryOfIncorporation.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.vendor.enumerators.countryOfIncorporation.${value}`,
                        ),
                      }),
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="dataProcessed"
                    label={i18n(
                      'entities.vendor.fields.dataProcessed',
                    )}
                    options={vendorEnumerators.dataProcessed.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.vendor.enumerators.dataProcessed.${value}`,
                        ),
                      }),
                    )}
                    variant="standard"
                    mode="multiple"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SelectFormItem
                    name="industry"
                    label={i18n(
                      'entities.vendor.fields.industry',
                    )}
                    options={vendorEnumerators.industry.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.vendor.enumerators.industry.${value}`,
                        ),
                      }),
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="internalBusinessSponsor"
                    label={i18n(
                      'entities.vendor.fields.internalBusinessSponsor',
                    )}
                    variant="standard"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <InputFormItem
                    name="website"
                    label={i18n(
                      'entities.vendor.fields.website',
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

export default VendorListFilter;
