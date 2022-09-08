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

// @mui material components
import Grid from '@mui/material/Grid';

// Material Dashboard 2 PRO React TS components
import MDBox from 'src/mui/components/MDBox';

// Material Dashboard 2 PRO React TS examples components
import DefaultPricingCard from 'src/mui/examples/Cards/PricingCards/DefaultPricingCard';

// for MUI 2 Dashboard
import muiActions from 'src/modules/mui/muiActions';
import { selectMuiSettings } from 'src/modules/mui/muiSelectors';

function PricingCards({
  prices,
}: {
  prices: string[];
}): JSX.Element {
  const { darkMode } = selectMuiSettings();
  const [starter, premium, enterprise] = prices;
  return (
    <MDBox
      position="relative"
      zIndex={10}
      mt={8}
      px={{ xs: 1, sm: 0 }}
    >
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} lg={4}>
          <DefaultPricingCard
            color={darkMode ? 'dark' : 'white'}
            badge={{
              color: darkMode ? 'warning' : 'light',
              label: 'starter',
            }}
            price={{
              currency: '$',
              value: starter,
              type: 'mo',
            }}
            specifications={[
              { label: '2 team members', includes: true },
              {
                label: '20GB Cloud storage',
                includes: true,
              },
              {
                label: 'Integration help',
                includes: false,
              },
              { label: 'Sketch Files', includes: false },
              { label: 'API Access', includes: false },
              {
                label: 'Complete documentation',
                includes: false,
              },
            ]}
            action={{
              type: 'internal',
              route: '/',
              color: darkMode ? 'warning' : 'dark',
              label: 'join',
            }}
            shadow={darkMode}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <DefaultPricingCard
            color="dark"
            badge={{ color: 'info', label: 'premium' }}
            price={{
              currency: '$',
              value: premium,
              type: 'mo',
            }}
            specifications={[
              { label: '10 team members', includes: true },
              {
                label: '40GB Cloud storage',
                includes: true,
              },
              { label: 'Integration help', includes: true },
              { label: 'Sketch Files', includes: true },
              { label: 'API Access', includes: false },
              {
                label: 'Complete documentation',
                includes: false,
              },
            ]}
            action={{
              type: 'internal',
              route: '/',
              color: 'info',
              label: 'try premium',
            }}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <DefaultPricingCard
            color={darkMode ? 'dark' : 'white'}
            badge={{
              color: darkMode ? 'warning' : 'light',
              label: 'enterprise',
            }}
            price={{
              currency: '$',
              value: enterprise,
              type: 'mo',
            }}
            specifications={[
              {
                label: 'Unlimited team members',
                includes: true,
              },
              {
                label: '100GB Cloud storage',
                includes: true,
              },
              { label: 'Integration help', includes: true },
              { label: 'Sketch Files', includes: true },
              { label: 'API Access', includes: true },
              {
                label: 'Complete documentation',
                includes: true,
              },
            ]}
            action={{
              type: 'internal',
              route: '/',
              color: darkMode ? 'warning' : 'dark',
              label: 'join',
            }}
            shadow={darkMode}
          />
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default PricingCards;
