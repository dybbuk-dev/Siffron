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

import {
  useRef,
  useState,
  useMemo,
  useEffect,
} from 'react';

// react-chartjs-2 components
import { Line } from 'react-chartjs-2';

// @mui material components
import Card from '@mui/material/Card';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Icon from '@mui/material/Icon';

// Material Dashboard 2 PRO React TS components
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';

// Chart configurations
import configs from 'src/mui/layouts/applications/calendar/components/ProductivityChart/configs';

// Material Dashboard 2 PRO React TS Base Styles
import typography from 'src/mui/assets/theme/base/typography';

function ProductivityChart(): JSX.Element {
  const { size } = typography;
  const chartRef = useRef<HTMLDivElement>(null);
  const [openMenu, setOpenMenu] = useState(null);
  const [chart, setChart] = useState([]);
  const { data, options }: any = chart;

  const handleOpenMenu = ({
    currentTarget,
  }: {
    currentTarget: HTMLSpanElement;
  }) => setOpenMenu(currentTarget);
  const handleCloseMenu = () => setOpenMenu(null);

  useEffect(() => setChart(configs()), []);

  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      keepMounted
    >
      <MenuItem onClick={handleCloseMenu}>Action</MenuItem>
      <MenuItem onClick={handleCloseMenu}>
        Anoter action
      </MenuItem>
      <MenuItem onClick={handleCloseMenu}>
        Something else here
      </MenuItem>
    </Menu>
  );

  return (
    <Card sx={{ overflow: 'hidden' }}>
      <MDBox bgColor="dark" variant="gradient">
        <MDBox p={2}>
          <MDBox
            display="flex"
            justifyContent="space-between"
          >
            <MDBox>
              <MDTypography
                variant="h6"
                fontWeight="medium"
                color="white"
              >
                Productivity
              </MDTypography>
              <MDBox display="flex" alignItems="center">
                <MDBox
                  fontSize={size.lg}
                  color="success"
                  mb={0.3}
                  mr={0.5}
                  lineHeight={0}
                >
                  <Icon sx={{ fontWeight: 'bold' }}>
                    arrow_upward
                  </Icon>
                </MDBox>
                <MDTypography
                  variant="button"
                  color="white"
                  fontWeight="medium"
                >
                  4% more{' '}
                  <MDTypography
                    variant="button"
                    color="white"
                  >
                    in 2021
                  </MDTypography>
                </MDTypography>
              </MDBox>
            </MDBox>
            <MDTypography
              color="white"
              onClick={handleOpenMenu}
            >
              <Icon sx={{ cursor: 'pointer' }}>
                more_horiz
              </Icon>
            </MDTypography>
            {renderMenu()}
          </MDBox>
        </MDBox>
        {useMemo(
          () => (
            <MDBox
              ref={chartRef}
              sx={{ height: '6.25rem' }}
            >
              <Line data={data} options={options} />
            </MDBox>
          ),
          [chart],
        )}
      </MDBox>
    </Card>
  );
}

export default ProductivityChart;
