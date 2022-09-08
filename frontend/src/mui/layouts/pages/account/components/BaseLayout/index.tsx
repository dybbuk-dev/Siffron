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

import { useState, useEffect, ReactNode } from 'react';

// @mui material components
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

// Material Dashboard 2 PRO React TS components
import MDBox from 'src/mui/components/MDBox';

// Material Dashboard 2 PRO React TS Base Styles
import breakpoints from 'src/mui/assets/theme/base/breakpoints';

// Material Dashboard 2 PRO React TS examples components
import DashboardLayout from 'src/mui/examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'src/mui/examples/Navbars/DashboardNavbar';
import Footer from 'src/mui/examples/Footer';

// Declaring props types for BaseLayout
interface Props {
  stickyNavbar?: boolean;
  children: ReactNode;
}

function BaseLayout({
  stickyNavbar,
  children,
}: Props): JSX.Element {
  const [tabsOrientation, setTabsOrientation] = useState<
    'horizontal' | 'vertical'
  >('horizontal');
  const [tabValue, setTabValue] = useState<number>(0);

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation('vertical')
        : setTabsOrientation('horizontal');
    }

    /**
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener(
      'resize',
      handleTabsOrientation,
    );

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () =>
      window.removeEventListener(
        'resize',
        handleTabsOrientation,
      );
  }, [tabsOrientation]);

  const handleSetTabValue = (
    event: any,
    newValue: number,
  ) => setTabValue(newValue);

  return (
    <DashboardLayout>
      <DashboardNavbar absolute={!stickyNavbar} isMini />
      <MDBox mt={stickyNavbar ? 3 : 10}>
        <Grid container>
          <Grid item xs={12} sm={8} lg={4}>
            <AppBar position="static">
              <Tabs
                orientation={tabsOrientation}
                value={tabValue}
                onChange={handleSetTabValue}
              >
                <Tab label="Messages" />
                <Tab label="Social" />
                <Tab label="Notifications" />
                <Tab label="Backup" />
              </Tabs>
            </AppBar>
          </Grid>
        </Grid>
        {children}
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

// Declaring default props for BaseLayout
BaseLayout.defaultProps = {
  stickyNavbar: false,
};

export default BaseLayout;
