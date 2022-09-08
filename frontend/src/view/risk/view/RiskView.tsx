import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import RiskCategoryViewItem from 'src/view/riskCategory/view/RiskCategoryViewItem';
import TaskViewItem from 'src/view/task/view/TaskViewItem';
import { Grid } from '@mui/material';
import MDTypography from 'src/mui/components/MDTypography';
import CustomViewItem from 'src/view/shared/view/CustomViewItem';
import RiskInherentScoreViewItem from 'src/view/risk/view/RiskInherentScoreViewItem';
import RiskStatusViewItem from 'src/view/risk/view/RiskStatusViewItem';
import RiskLikelihoodViewItem from 'src/view/risk/view/RiskLikelihoodViewItem';
import RiskImpactViewItem from 'src/view/risk/view/RiskImpactViewItem';

function RiskView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
          <Grid spacing={2} container>
            <Grid item md={6} xs={12}>
              <MDTypography variant="h3">
                {record.title}
              </MDTypography>
            </Grid>
            <Grid item md={6} xs={12}>
              <RiskCategoryViewItem
                label={i18n(
                  'entities.risk.fields.category',
                )}
                value={record.category}
              />
            </Grid>
            <Grid item xs={12}>
              <TextViewItem
                label={i18n(
                  'entities.risk.fields.description',
                )}
                value={record.description}
                multiline
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <CustomViewItem
                label={i18n('entities.risk.fields.status')}
                value={[record.status]}
                render={(values) =>
                  values.map((value) => (
                    <RiskStatusViewItem
                      key={value}
                      value={value}
                    />
                  ))
                }
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <UserViewItem
                label={i18n('entities.risk.fields.owner')}
                value={record.owner}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <CustomViewItem
                label={i18n(
                  'entities.risk.fields.likelihood',
                )}
                value={[record.likelihood]}
                render={(values) =>
                  values.map((value) => (
                    <RiskLikelihoodViewItem
                      key={value}
                      value={value}
                    />
                  ))
                }
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <CustomViewItem
                label={i18n('entities.risk.fields.impact')}
                value={[record.impact]}
                render={(values) =>
                  values.map((value) => (
                    <RiskImpactViewItem
                      key={value}
                      value={value}
                    />
                  ))
                }
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <CustomViewItem
                label={i18n(
                  'entities.risk.fields.inherentScore',
                )}
                value={[record.inherentScore]}
                render={(value) =>
                  value.map((score) => (
                    <RiskInherentScoreViewItem
                      key={score}
                      value={score}
                    />
                  ))
                }
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextViewItem
                label={i18n(
                  'entities.risk.fields.residualScore',
                )}
                value={record.residualScore}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextViewItem
                label={i18n('entities.risk.fields.cost')}
                value={record.cost}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextViewItem
                label={i18n(
                  'entities.risk.fields.mitigationPlan',
                )}
                value={record.mitigationPlan}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4} xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TaskViewItem
                label={i18n('entities.risk.fields.tasks')}
                value={record.tasks}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return renderView();
}

export default RiskView;
