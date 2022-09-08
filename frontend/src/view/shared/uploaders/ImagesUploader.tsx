import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import FileUploader from 'src/modules/shared/fileUpload/fileUploader';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import ImageModal from 'src/view/shared/modals/ImageModal';
import { Button, Box, CardMedia } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { selectMuiSettings } from 'src/modules/mui/muiSelectors';
import MDButton from 'src/mui/components/MDButton';
import MDAvatar from 'src/mui/components/MDAvatar';
import MDBox from 'src/mui/components/MDBox';

function ImagesUploader(props) {
  const { sidenavColor } = selectMuiSettings();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<any>(null);
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
        image: true,
      });

      setLoading(true);

      file = await FileUploader.upload(file, {
        storage: props.storage,
        image: true,
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

  const doPreviewImage = (image) => {
    setImage({
      src: image.downloadUrl,
      alt: image.name,
    });
  };

  const doCloseImageModal = () => {
    setImage(null);
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
        accept="image/*"
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
        <MDBox display="flex" justifyContent="center">
          {value().map((item) => {
            return (
              <MDBox
                key={item.id}
                sx={{
                  '&:hover .card-header': {
                    transform: 'translate3d(0, -50px, 0)',
                  },
                }}
              >
                <MDBox
                  position="relative"
                  borderRadius="lg"
                  mt={-6}
                  mx={2}
                  className="card-header"
                  sx={{
                    transition:
                      'transform 300ms cubic-bezier(0.34, 1.61, 0.7, 1)',
                  }}
                  zIndex={2}
                >
                  <CardMedia
                    alt={item.name}
                    component="img"
                    src={item.downloadUrl}
                    sx={{
                      maxWidth: '100%',
                      margin: 0,
                      boxShadow: ({ boxShadows: { md } }) =>
                        md,
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                </MDBox>

                <MDBox textAlign="center" pt={2} px={3}>
                  <MDBox
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    mt={-8}
                    position="relative"
                    zIndex={1}
                  >
                    <MDBox
                      display="flex"
                      justifyContent="center"
                      gap={1}
                      mt={1}
                    >
                      <MDButton
                        onClick={() => doPreviewImage(item)}
                        size="small"
                        color={sidenavColor}
                        iconOnly
                      >
                        <SearchIcon />
                      </MDButton>

                      {!readonly && (
                        <MDButton
                          onClick={() =>
                            handleRemove(item.id)
                          }
                          size="small"
                          color={sidenavColor}
                          iconOnly
                        >
                          <CloseIcon />
                        </MDButton>
                      )}
                    </MDBox>
                  </MDBox>
                </MDBox>
              </MDBox>
            );
          })}
        </MDBox>
      ) : null}

      {image && (
        <ImageModal
          src={image.src}
          alt={image.alt}
          onClose={() => doCloseImageModal()}
        />
      )}
    </div>
  );
}

ImagesUploader.propTypes = {
  readonly: PropTypes.bool,
  max: PropTypes.number,
  storage: PropTypes.object,
  value: PropTypes.any,
  onChange: PropTypes.func,
};

export default ImagesUploader;
