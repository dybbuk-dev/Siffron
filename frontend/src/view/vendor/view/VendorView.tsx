import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import CustomViewItem from 'src/view/shared/view/CustomViewItem';
import FilesViewItem from 'src/view/shared/view/FilesViewItem';
import VendorCategoryViewItem from 'src/view/vendorCategory/view/VendorCategoryViewItem';
import RiskViewItem from 'src/view/risk/view/RiskViewItem';
import TaskViewItem from 'src/view/task/view/TaskViewItem';
import { Grid } from '@mui/material';
import MDBadgeDot from 'src/mui/components/MDBadgeDot';
import { selectMuiSettings } from 'src/modules/mui/muiSelectors';
import CheckboxViewItem from 'src/view/shared/view/CheckboxViewItem';
import MDTypography from 'src/mui/components/MDTypography';
import LogoViewItem from 'src/view/shared/view/LogoViewItem';
import MDBox from 'src/mui/components/MDBox';
import VendorStatusViewItem from 'src/view/vendor/view/VendorStatusViewItem';
import VendorRatingViewItem from 'src/view/vendor/view/VendorRatingViewItem';

function VendorView(props) {
  const { sidenavColor } = selectMuiSettings();
  const renderView = () => {
    const { record } = props;

    return (
      <Grid spacing={3} container>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <MDBox p={3} pt={5}>
            <LogoViewItem
              label={i18n('entities.vendor.fields.logo')}
              value={record.logo}
            />
          </MDBox>
        </Grid>
        <Grid item lg={8} md={8} sm={12} xs={12}>
          <MDBox p={3}>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <MDTypography variant="h3">
                  {record.name}
                </MDTypography>
              </Grid>
              <Grid item md={6} xs={12}>
                <VendorCategoryViewItem
                  label={i18n(
                    'entities.vendor.fields.category',
                  )}
                  value={record.category}
                />
              </Grid>
              <Grid item xs={12}>
                <TextViewItem
                  label={i18n(
                    'entities.vendor.fields.descriptionOfServices',
                  )}
                  value={record.descriptionOfServices}
                  multiline
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <CustomViewItem
                  label={i18n(
                    'entities.vendor.fields.status',
                  )}
                  value={[record.status]}
                  render={(values) =>
                    values.map((value) => (
                      <VendorStatusViewItem
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
                    'entities.vendor.fields.rating',
                  )}
                  value={[record.rating]}
                  render={(values) =>
                    values.map((value) => (
                      <VendorRatingViewItem
                        key={value}
                        value={value}
                      />
                    ))
                  }
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextViewItem
                  label={i18n(
                    'entities.vendor.fields.industry',
                  )}
                  value={
                    record.industry &&
                    i18n(
                      `entities.vendor.enumerators.industry.${record.industry}`,
                    )
                  }
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <CustomViewItem
                  label={i18n(
                    'entities.vendor.fields.dataProcessed',
                  )}
                  value={record.dataProcessed}
                  render={(values) =>
                    (values || []).map((value) => (
                      <MDBadgeDot
                        key={value}
                        badgeContent={
                          value
                            ? i18n(
                                `entities.vendor.enumerators.dataProcessed.${value}`,
                              )
                            : null
                        }
                        color={sidenavColor}
                        variant="contained"
                        size="md"
                        container
                      />
                    ))
                  }
                />
              </Grid>
            </Grid>
          </MDBox>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <MDBox p={3}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <MDTypography variant="h5">
                  {i18n(
                    'entities.vendor.sections.contractInformation',
                  )}
                </MDTypography>
              </Grid>
              <Grid item xs={12}>
                <TextViewItem
                  label={i18n(
                    'entities.vendor.fields.primaryContactName',
                  )}
                  value={record.primaryContactName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextViewItem
                  label={i18n(
                    'entities.vendor.fields.primaryContactEmail',
                  )}
                  value={record.primaryContactEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <TextViewItem
                  label={i18n(
                    'entities.vendor.fields.primaryContactPhoneNumber',
                  )}
                  value={record.primaryContactPhoneNumber}
                />
              </Grid>
              <Grid item xs={12}>
                <TextViewItem
                  label={i18n(
                    'entities.vendor.fields.supportEmail',
                  )}
                  value={record.supportEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <TextViewItem
                  label={i18n(
                    'entities.vendor.fields.supportPhoneNumber',
                  )}
                  value={record.supportPhoneNumber}
                />
              </Grid>
              <Grid item xs={12}>
                <TextViewItem
                  label={i18n(
                    'entities.vendor.fields.website',
                  )}
                  value={record.website}
                />
              </Grid>
              <Grid item xs={12}>
                <TextViewItem
                  label={i18n(
                    'entities.vendor.fields.address',
                  )}
                  value={record.address}
                  multiline
                />
              </Grid>
            </Grid>
          </MDBox>
        </Grid>
        <Grid item lg={8} md={8} sm={12} xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <MDBox p={3}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <MDTypography variant="h5">
                      {i18n(
                        'entities.vendor.sections.business',
                      )}
                    </MDTypography>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <TextViewItem
                      label={i18n(
                        'entities.vendor.fields.internalBusinessSponsor',
                      )}
                      value={record.internalBusinessSponsor}
                    />
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <TextViewItem
                      label={i18n(
                        'entities.vendor.fields.countryOfIncorporation',
                      )}
                      value={
                        record.countryOfIncorporation &&
                        i18n(
                          `entities.vendor.enumerators.countryOfIncorporation.${record.countryOfIncorporation}`,
                        )
                      }
                    />
                  </Grid>
                  <Grid
                    item
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                  >
                    <FilesViewItem
                      label={i18n(
                        'entities.vendor.fields.contract',
                      )}
                      value={record.contract}
                    />
                  </Grid>
                </Grid>
              </MDBox>
            </Grid>
            <Grid item xs={12}>
              <MDBox p={3}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <MDTypography variant="h5">
                      {i18n(
                        'entities.vendor.sections.compliance',
                      )}
                    </MDTypography>
                  </Grid>
                  <Grid
                    item
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                  >
                    <FilesViewItem
                      label={i18n(
                        'entities.vendor.fields.documentation',
                      )}
                      value={record.documentation}
                    />
                  </Grid>
                  <Grid item lg={4} md={4} sm={6} xs={12}>
                    <CheckboxViewItem
                      label={i18n(
                        'entities.vendor.fields.dpiaCompleted',
                      )}
                      checked={record.dpiaCompleted}
                    />
                  </Grid>
                  <Grid item lg={4} md={4} sm={6} xs={12}>
                    <CheckboxViewItem
                      label={i18n(
                        'entities.vendor.fields.dtiaCompleted',
                      )}
                      checked={record.dtiaCompleted}
                    />
                  </Grid>
                  <Grid item lg={4} md={4} sm={6} xs={12}>
                    <CheckboxViewItem
                      label={i18n(
                        'entities.vendor.fields.iso27001',
                      )}
                      checked={record.iso27001}
                    />
                  </Grid>
                  <Grid item lg={4} md={4} sm={6} xs={12}>
                    <CheckboxViewItem
                      label={i18n(
                        'entities.vendor.fields.soc1',
                      )}
                      checked={record.soc1}
                    />
                  </Grid>
                  <Grid item lg={4} md={4} sm={6} xs={12}>
                    <CheckboxViewItem
                      label={i18n(
                        'entities.vendor.fields.soc2',
                      )}
                      checked={record.soc2}
                    />
                  </Grid>
                  <Grid item lg={4} md={4} sm={6} xs={12}>
                    <CheckboxViewItem
                      label={i18n(
                        'entities.vendor.fields.hippa',
                      )}
                      checked={record.hippa}
                    />
                  </Grid>
                  <Grid item lg={4} md={4} sm={6} xs={12}>
                    <CheckboxViewItem
                      label={i18n(
                        'entities.vendor.fields.pcidss',
                      )}
                      checked={record.pcidss}
                    />
                  </Grid>
                  <Grid item lg={4} md={4} sm={6} xs={12}>
                    <CheckboxViewItem
                      label={i18n(
                        'entities.vendor.fields.fedramp',
                      )}
                      checked={record.fedramp}
                    />
                  </Grid>
                  <Grid item lg={4} md={4} sm={6} xs={12}>
                    <CheckboxViewItem
                      label={i18n(
                        'entities.vendor.fields.gdpr',
                      )}
                      checked={record.gdpr}
                    />
                  </Grid>
                  <Grid item lg={4} md={4} sm={6} xs={12}>
                    <CheckboxViewItem
                      label={i18n(
                        'entities.vendor.fields.ccpa',
                      )}
                      checked={record.ccpa}
                    />
                  </Grid>
                  <Grid item lg={4} md={4} sm={6} xs={12}>
                    <CheckboxViewItem
                      label={i18n(
                        'entities.vendor.fields.sox',
                      )}
                      checked={record.sox}
                    />
                  </Grid>
                  <Grid item lg={4} md={4} sm={6} xs={12}>
                    <CheckboxViewItem
                      label={i18n(
                        'entities.vendor.fields.cobit',
                      )}
                      checked={record.cobit}
                    />
                  </Grid>
                </Grid>
              </MDBox>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <MDBox p={3}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <MDTypography variant="h5">
                  {i18n('entities.vendor.sections.risks')}
                </MDTypography>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <RiskViewItem
                  label={i18n(
                    'entities.vendor.fields.risks',
                  )}
                  value={record.risks}
                  hiddenLabel
                />
              </Grid>
            </Grid>
          </MDBox>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <MDBox p={3}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <MDTypography variant="h5">
                  {i18n('entities.vendor.sections.tasks')}
                </MDTypography>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <TaskViewItem
                  label={i18n(
                    'entities.vendor.fields.tasks',
                  )}
                  value={record.tasks}
                  hiddenLabel
                />
              </Grid>
            </Grid>
          </MDBox>
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

export default VendorView;
