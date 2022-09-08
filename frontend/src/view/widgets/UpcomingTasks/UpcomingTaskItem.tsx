import { ReactNode } from 'react';

import Color from 'color';

import Icon from '@mui/material/Icon';

import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';

import { useTimeline } from 'src/mui/examples/Timeline/context';

import timelineItem from 'src/mui/examples/Timeline/TimelineItem/styles';
import { getTaskDisplayColor } from 'src/modules/utils';

// Declaring prop types for TimelineItem
interface Props {
  color?: string;
  icon?: ReactNode;
  title: string;
  dateTime: string;
  owner?: string;
  lastItem?: boolean;
  [key: string]: any;
}

function UpcomingTaskItem({
  color,
  icon,
  title,
  dateTime,
  owner,
  lastItem,
}: Props): JSX.Element {
  const isDark = useTimeline();

  const realColor = getTaskDisplayColor(color);

  return (
    <MDBox
      position="relative"
      mb={lastItem ? 0 : 3}
      sx={(theme: any) =>
        timelineItem(theme, { lastItem, isDark })
      }
    >
      <MDBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgColor={realColor}
        color="white"
        width="2rem"
        height="2rem"
        borderRadius="50%"
        position="absolute"
        top="8%"
        left="2px"
        zIndex={2}
        sx={{
          fontSize: ({ typography: { size } }: any) =>
            size.sm,
        }}
      >
        <Icon fontSize="inherit">{icon}</Icon>
      </MDBox>
      <MDBox ml={5.75} lineHeight={0} maxWidth="30rem">
        <MDTypography
          variant="button"
          fontWeight="medium"
          color={isDark ? 'white' : 'dark'}
          sx={{
            maxWidth: '100%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: 'inline-block',
            whiteSpace: 'nowrap',
          }}
        >
          {title}
        </MDTypography>
        <MDBox
          mt={0.5}
          display="flex"
          justifyContent="flex-start"
        >
          {owner && (
            <MDTypography
              variant="caption"
              fontWeight="bold"
              color="text"
              textTransform="capitalize"
              mr={1}
            >
              {owner}
            </MDTypography>
          )}
          <MDTypography
            variant="caption"
            color={isDark ? 'secondary' : 'text'}
            fontWeight="regular"
          >
            {dateTime}
          </MDTypography>
        </MDBox>
      </MDBox>
    </MDBox>
  );
}

// Declaring default props for UpcomingTaskItem
UpcomingTaskItem.defaultProps = {
  color: 'info',
  icon: <Icon>task</Icon>,
  lastItem: false,
};

export default UpcomingTaskItem;
