import Grid from '@mui/material/Grid';
import RisksSummary from 'src/view/widgets/RisksSummary';
import TasksSummary from 'src/view/widgets/TasksSummary';
import VendorsSummary from 'src/view/widgets/VendorsSummary';

function DashboardPage(props) {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <TasksSummary />
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <RisksSummary />
                </Grid>
                <Grid item xs={12}>
                  <VendorsSummary />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default DashboardPage;
