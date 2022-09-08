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

import { ReactNode } from 'react';

// @mui material components
import Icon from '@mui/material/Icon';
import { Theme } from '@mui/material/styles';

// Material Dashboard 2 PRO React TS components
import MDBox from 'src/mui/components/MDBox';
import MDBadge from 'src/mui/components/MDBadge';
import MDTypography from 'src/mui/components/MDTypography';
import MDAvatar from 'src/mui/components/MDAvatar';
import MDProgress from 'src/mui/components/MDProgress';

// Declaring props types for Card
interface Props {
  image?: string;
  badge: {
    color:
      | 'primary'
      | 'secondary'
      | 'info'
      | 'success'
      | 'warning'
      | 'error'
      | 'dark'
      | 'light';
    label: string;
  };
  content: ReactNode;
  progress?: number;
  attachedFiles?: string | number;
  members: string[];
}

function Card({
  image,
  badge,
  content,
  progress,
  attachedFiles,
  members,
}: Props): JSX.Element {
  const renderMembers = members.map((member, key) => {
    const imageAlt = `image-${key}`;

    return (
      <MDAvatar
        key={imageAlt}
        src={member}
        alt={imageAlt}
        size="xs"
        sx={{
          border: ({
            borders: { borderWidth },
            palette: { white },
          }: Theme) =>
            `${borderWidth[2]} solid ${white.main}`,
          cursor: 'pointer',
          position: 'relative',
          ml: -1,
          mr: 0,

          '&:hover, &:focus': {
            zIndex: '10',
          },
        }}
      />
    );
  });

  return (
    <>
      {image && (
        <MDBox
          component="img"
          src={image}
          width="100%"
          borderRadius="lg"
          mb={1}
        />
      )}
      <MDBadge
        size="xs"
        color={badge.color}
        badgeContent={badge.label}
        container
      />
      <MDBox mt={1} mb={2}>
        <MDTypography variant="body2" color="text">
          {content}
        </MDTypography>
        {progress > 0 && (
          <MDBox mt={0.25}>
            <MDProgress
              variant="gradient"
              value={progress}
              color={badge.color}
            />
          </MDBox>
        )}
      </MDBox>
      <MDBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <MDBox
          display="flex"
          alignItems="center"
          color="text"
        >
          {attachedFiles && (
            <>
              <MDTypography
                variant="body2"
                color="text"
                sx={{ lineHeight: 0 }}
              >
                <Icon sx={{ fontWeight: 'bold' }}>
                  attach_file
                </Icon>
              </MDTypography>
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
              >
                &nbsp;{attachedFiles}
              </MDTypography>
            </>
          )}
        </MDBox>
        <MDBox display="flex">{renderMembers}</MDBox>
      </MDBox>
    </>
  );
}

// Declaring default props for Card
Card.defaultProps = {
  image: '',
  progress: 0,
  attachedFiles: '',
};

export default Card;
