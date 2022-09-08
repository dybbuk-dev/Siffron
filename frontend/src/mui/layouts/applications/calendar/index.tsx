/**
=========================================================
* Material Dashboard 2 PRO React TS - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-2-pro-react-ts
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { useMemo } from 'react';

// @mui material components
import Grid from '@mui/material/Grid';

// Material Dashboard 2 PRO React TS components
import MDBox from 'src/mui/components/MDBox';

// Material Dashboard 2 PRO React TS examples components
import DashboardLayout from 'src/mui/examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'src/mui/examples/Navbars/DashboardNavbar';
import Footer from 'src/mui/examples/Footer';
import EventCalendar from 'src/mui/examples/Calendar';

// Calendar application components
import Header from 'src/mui/layouts/applications/calendar/components/Header';
import NextEvents from 'src/mui/layouts/applications/calendar/components/NextEvents';
import ProductivityChart from 'src/mui/layouts/applications/calendar/components/ProductivityChart';

// Data
import calendarEventsData from 'src/mui/layouts/applications/calendar/data/calendarEventsData';

function Calendar(): JSX.Element {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={3}>
        <MDBox
          display="flex"
          justifyContent="flex-end"
          mt={1}
          mb={4}
          mx={2}
        >
          <Header />
        </MDBox>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            xl={9}
            sx={{ height: 'max-content' }}
          >
            {useMemo(
              () => (
                <EventCalendar
                  initialView="dayGridMonth"
                  initialDate="2021-08-10"
                  events={calendarEventsData}
                  selectable
                  editable
                />
              ),
              [calendarEventsData],
            )}
          </Grid>
          <Grid item xs={12} xl={3}>
            <MDBox mb={3}>
              <NextEvents />
            </MDBox>
            <MDBox mb={3}>
              <ProductivityChart />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Calendar;
