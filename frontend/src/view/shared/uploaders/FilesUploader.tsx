import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import FileUploader from 'src/modules/shared/fileUpload/fileUploader';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import AddIcon from '@mui/icons-material/Add';
import LinkIcon from '@mui/icons-material/Link';
import ClearIcon from '@mui/icons-material/Clear';
import {
  Button,
  Link as MaterialLink,
  Box,
} from '@mui/material';
import MDButton from 'src/mui/components/MDButton';
import { selectMuiSettings } from 'src/modules/mui/muiSelectors';
import MDTypography from 'src/mui/components/MDTypography';

function FilesUploader(props) {
  const { sidenavColor } = selectMuiSettings();
  const [loading, setLoading] = useState(false);
  const input = useRef<any>();

  const value = () => {
    const { value } = props;

    if (!value) {
      return [];
    }

    return Array.isArray(value) ? value : [value];
  };

  const fileList = () => {
    return value().map((item) => ({
      uid: item.id || undefined,
      name: item.name,
      status: 'done',
      url: item.downloadUrl,
    }));
  };

  const handleRemove = (id) => {
    props.onChange(
      value().filter((item) => item.id !== id),
    );
  };

  const handleChange = async (event) => {
    try {
      const files = event.target.files;

      if (!files || !files.length) {
        return;
      }

      let file = files[0];

      FileUploader.validate(file, {
        storage: props.storage,
        formats: props.formats,
      });

      setLoading(true);

      file = await FileUploader.upload(file, {
        storage: props.storage,
        formats: props.formats,
      });

      input.current.value = '';

      setLoading(false);
      props.onChange([...value(), file]);
    } catch (error) {
      input.current.value = '';
      console.error(error);
      setLoading(false);
      Errors.showMessage(error);
    }
  };

  const formats = () => {
    const { schema } = props;

    if (schema && schema.formats) {
      return schema.formats
        .map((format) => `.${format}`)
        .join(',');
    }

    return undefined;
  };

  const { max, readonly } = props;

  const uploadButton = (
    <>
      <MDButton
        component="label"
        disabled={loading}
        startIcon={<AddIcon />}
        variant="outlined"
        color={sidenavColor}
        size="small"
        onClick={() => input.current.click()}
      >
        {i18n('fileUploader.upload')}
      </MDButton>
      <input
        style={{ display: 'none' }}
        disabled={loading || readonly}
        accept={formats()}
        type="file"
        onChange={handleChange}
        ref={input}
      />
    </>
  );

  return (
    <div>
      {readonly || (max && fileList().length >= max)
        ? null
        : uploadButton}

      {value() && value().length ? (
        <div>
          {value().map((item) => {
            return (
              <Box
                display="flex"
                alignItems="center"
                key={item.id}
              >
                <MaterialLink
                  href={item.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  underline="hover"
                >
                  <MDTypography
                    variant="button"
                    fontWeight="regular"
                  >
                    <LinkIcon color={sidenavColor} />
                    {item.name}
                  </MDTypography>
                </MaterialLink>

                {!readonly && (
                  <MaterialLink
                    component="button"
                    color="secondary"
                    onClick={() => handleRemove(item.id)}
                    underline="hover"
                  >
                    <ClearIcon fontSize="small" />
                  </MaterialLink>
                )}
              </Box>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

FilesUploader.propTypes = {
  readonly: PropTypes.bool,
  max: PropTypes.number,
  formats: PropTypes.arrayOf(PropTypes.string),
  storage: PropTypes.object,
  value: PropTypes.any,
  onChange: PropTypes.func,
};

export default FilesUploader;
