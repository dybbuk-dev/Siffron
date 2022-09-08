/**
=========================================================
* Material Dashboard 2 PRO React TSUI Dashboard PRO React - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from '@mui/material/Grid';

// Material Dashboard 2 PRO React TSUI Dashboard PRO React components
import MDBox from 'src/mui/components/MDBox';

// Material Dashboard 2 PRO React TSUI Dashboard PRO React example components
import DashboardLayout from 'src/mui/examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'src/mui/examples/Navbars/DashboardNavbar';
import Footer from 'src/mui/examples/Footer';
import TimelineList from 'src/mui/examples/Timeline/TimelineList';
import TimelineItem from 'src/mui/examples/Timeline/TimelineItem';

// Data
import timelineData from 'src/mui/layouts/pages/projects/timeline/data/timelineData';

function Timeline(): JSX.Element {
  const renderTimelineItems = timelineData.map(
    ({
      color,
      icon,
      title,
      dateTime,
      description,
      lastItem,
    }) => (
      <TimelineItem
        key={title + color}
        color={color}
        icon={icon}
        title={title}
        dateTime={dateTime}
        description={description}
        lastItem={lastItem}
      />
    ),
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox my={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <TimelineList title="Timeline with dotted line">
              {renderTimelineItems}
            </TimelineList>
          </Grid>
          <Grid item xs={12} lg={6}>
            <TimelineList
              title="Timeline with dotted line"
              dark
            >
              {renderTimelineItems}
            </TimelineList>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Timeline;
