import Grid from '@mui/material/Grid';
import VerticalChart from 'src/view/widgets/VerticalChart';
import HorizontalChart from 'src/view/widgets/HorizontalChart';
import CircleChart from 'src/view/widgets/CircleChart';

function DashboardPage(props) {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <VerticalChart />
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <HorizontalChart />
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <CircleChart />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default DashboardPage;
