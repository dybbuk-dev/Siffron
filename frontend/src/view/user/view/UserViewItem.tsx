import { Avatar, Typography } from '@mui/material';
import MaterialLink from '@mui/material/Link';
import selectors from 'src/modules/user/userSelectors';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MDBox from 'src/mui/components/MDBox';
import MDButton from 'src/mui/components/MDButton';
import { selectMuiSettings } from 'src/modules/mui/muiSelectors';
import MDTypography from 'src/mui/components/MDTypography';
import {
  getUserAvatar,
  getUserNameOrEmailPrefix,
} from 'src/modules/utils';
import { i18n } from 'src/i18n';

function UserViewItem(props) {
  const { sidenavColor, darkMode } = selectMuiSettings();
  const hasPermissionToRead = useSelector(
    selectors.selectPermissionToRead,
  );

  const valueAsArray = () => {
    const { value } = props;

    if (!value) {
      return [];
    }

    if (Array.isArray(value)) {
      return value;
    }

    return [value];
  };

  const values = valueAsArray();

  const label = (record) =>
    getUserNameOrEmailPrefix(record);

  const avatar = (record) => {
    return (
      <Avatar
        src={getUserAvatar(record)}
        sx={{ mr: 1, width: 24, height: 24 }}
      />
    );
  };

  const readOnly = (record, italic = false) => {
    return (
      <MDBox key={record.id} mr={1}>
        <MDTypography
          display="flex"
          variant="button"
          fontWeight="regular"
          fontStyle={italic ? 'italic' : null}
          textTransform="capitalize"
          alignItems="center"
          mr={1}
        >
          {avatar(record)}
          {label(record)}
        </MDTypography>
      </MDBox>
    );
  };

  const displayableRecord = (record) => {
    if (hasPermissionToRead) {
      return (
        <MDBox key={record.id} mr={1}>
          <MDButton
            component={Link}
            variant="contained"
            color={sidenavColor}
            to={`/user/${record.id}`}
            underline="hover"
            sx={{
              py: 0,
            }}
          >
            {avatar(record)}
            {label(record)}
          </MDButton>
        </MDBox>
      );
    }

    return readOnly(record);
  };

  return (
    <MDBox
      pt={2}
      sx={{
        position: 'relative',
      }}
    >
      <MDTypography
        variant="caption"
        color={darkMode ? 'text' : 'secondary'}
        fontWeight="regular"
        sx={{
          lineHeight: 1,
          position: 'absolute',
          fontWeight: 400,
          top: 0,
        }}
      >
        {props.label}
      </MDTypography>
      <MDBox display="flex">
        {!!values.length &&
          values.map((value) => displayableRecord(value))}
        {!values.length &&
          readOnly(
            {
              email: i18n(
                'customViewer.noData',
                props.label,
              ),
            },
            true,
          )}
      </MDBox>
    </MDBox>
  );
}

UserViewItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
};

export default UserViewItem;
