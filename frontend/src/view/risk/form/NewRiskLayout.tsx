import { Grid } from '@mui/material';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { i18n } from 'src/i18n';
import { selectMuiSettings } from 'src/modules/mui/muiSelectors';
import riskEnumerators from 'src/modules/risk/riskEnumerators';
import { getInherentScore } from 'src/modules/risk/riskUtils';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';
import RiskCategoryAutocompleteFormItem from 'src/view/riskCategory/autocomplete/RiskCategoryAutocompleteFormItem';
import ColorBadgeSelectFormItem, {
  generateColorBadgeSelectOptions,
} from 'src/view/shared/form/items/ColorBadgeSelectFormItem';
import EnumColorBadgeFormItem from 'src/view/shared/form/items/EnumColorBadgeFormItem';
import EnumSliderFormItem from 'src/view/shared/form/items/EnumSliderFormItem';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import EnumColorBadgeViewItem from 'src/view/shared/view/EnumColorBadgeViewItem';
import TaskAutocompleteFormItem from 'src/view/task/autocomplete/TaskAutocompleteFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';

function NewRiskLayout(props) {
  const { sidenavColor } = selectMuiSettings();
  const { title, hiddenImpossibleFields } = props;
  const { setValue } = useFormContext();
  const defaultLiklihood = 'Very Unlikely 1-10%';
  const defaultImpact = 'Negligible';
  const [inherentScore, setInherentScore] = useState(
    getInherentScore(defaultLiklihood, defaultImpact),
  );
  const [likelihood, setLikelihood] = useState(
    defaultLiklihood,
  );
  const [impact, setImpact] = useState(defaultImpact);
  const onChangeLikelihoodOrImpact = (
    likelihoodVal,
    impactVal,
  ) => {
    const score = getInherentScore(
      likelihoodVal,
      impactVal,
    );
    setValue('inherentScore', score, {
      shouldValidate: true,
      shouldDirty: true,
    });
    setInherentScore(score);
    setLikelihood(likelihoodVal);
    setImpact(impactVal);
  };
  return (
    <MDBox px={1}>
      <Grid spacing={2} container>
        <Grid item xs={12}>
          <MDBox
            variant="gradient"
            bgColor={sidenavColor}
            borderRadius="lg"
            coloredShadow={sidenavColor}
            py={2}
            style={{
              position: 'absolute',
              left: '1rem',
              right: '1rem',
              top: '-1rem',
              zIndex: 2,
            }}
          >
            <MDTypography
              variant="h3"
              color="white"
              textAlign="center"
            >
              {title ?? i18n('entities.risk.new.title')}
            </MDTypography>
          </MDBox>
          <MDBox mb={6}></MDBox>
        </Grid>
        <Grid item md={6} xs={12}>
          <InputFormItem
            name="title"
            label={i18n('entities.risk.fields.title')}
            required={true}
            variant="standard"
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <RiskCategoryAutocompleteFormItem
            name="category"
            label={i18n('entities.risk.fields.category')}
            required={true}
            showCreate={true}
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextAreaFormItem
            name="description"
            label={i18n('entities.risk.fields.description')}
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <ColorBadgeSelectFormItem
            name="status"
            label={i18n('entities.risk.fields.status')}
            options={generateColorBadgeSelectOptions(
              riskEnumerators.status,
              riskEnumerators.statusColor,
              'entities.risk.enumerators.status',
            )}
            required={true}
            variant="standard"
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <UserAutocompleteFormItem
            name="owner"
            label={i18n('entities.risk.fields.owner')}
            required={false}
            showCreate={true}
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <EnumSliderFormItem
            name="likelihood"
            label={i18n('entities.risk.fields.likelihood')}
            value={likelihood}
            i18nPrefix="entities.risk.enumerators.likelihood"
            renderValue={(props) => (
              <EnumColorBadgeViewItem {...props} />
            )}
            enums={riskEnumerators.likelihood}
            colors={riskEnumerators.likelihoodColor}
            onChange={(likelihoodVal) => {
              onChangeLikelihoodOrImpact(
                likelihoodVal,
                impact,
              );
            }}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <EnumSliderFormItem
            name="impact"
            label={i18n('entities.risk.fields.impact')}
            value={impact}
            i18nPrefix="entities.risk.enumerators.impact"
            renderValue={(props) => (
              <EnumColorBadgeViewItem {...props} />
            )}
            enums={riskEnumerators.impact}
            colors={riskEnumerators.impactColor}
            onChange={(impactVal) => {
              onChangeLikelihoodOrImpact(
                likelihood,
                impactVal,
              );
            }}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <EnumColorBadgeFormItem
            name="inherentScore"
            value={inherentScore}
            enums={riskEnumerators.inherentScore}
            colors={riskEnumerators.inherentScoreColor}
            i18nPrefix="entities.risk.enumerators.inherentScore"
            label={i18n(
              'entities.risk.fields.inherentScore',
            )}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <InputNumberFormItem
            name="residualScore"
            label={i18n(
              'entities.risk.fields.residualScore',
            )}
            required={true}
            variant="standard"
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <InputFormItem
            name="cost"
            label={i18n('entities.risk.fields.cost')}
            required={true}
            variant="standard"
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <InputFormItem
            name="mitigationPlan"
            label={i18n(
              'entities.risk.fields.mitigationPlan',
            )}
            required={false}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TaskAutocompleteFormItem
            name="tasks"
            label={i18n('entities.risk.fields.tasks')}
            required={false}
            showCreate={true}
            mode="multiple"
            variant="standard"
            fullWidth
          />
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default NewRiskLayout;
