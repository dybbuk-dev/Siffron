import { FileUploader } from 'react-drag-drop-files';
import { i18n } from 'src/i18n';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import Errors from 'src/modules/shared/error/errors';
import filesize from 'filesize';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';
import PropTypes from 'prop-types';

function DragAndDropUploaderArea(props) {
  const {
    handleChange,
    hoverTitle,
    multiple,
    name,
    onTypeError,
    storage,
    types,
  } = props;

  const size = filesize.partial({
    base: 2,
    standard: 'jedec',
  });

  const fnOnTypeError = (err) => {
    Errors.showMessage(
      new Error(
        i18n('fileUploader.formats', types.join(', ')),
      ),
    );
  };

  return (
    <MDBox my={1}>
      <FileUploader
        handleChange={handleChange}
        hoverTitle={hoverTitle}
        multiple={multiple}
        name={name}
        onTypeError={onTypeError || fnOnTypeError}
        types={types}
      >
        <MDBox
          textAlign="center"
          sx={{
            background: 'rgba(0,0,0,.1)',
            border: '2px dashed #777777',
            cursor: 'pointer',
            padding: 2,
            color: '#777777',
          }}
        >
          <CloudUploadOutlinedIcon fontSize="large" />
          <MDTypography
            display="block"
            variant="button"
            fontWeight="regular"
            sx={{
              color: '#777777',
            }}
          >
            {i18n('fileUploader.placeholder.title')}
            {storage && storage.maxSizeInBytes && (
              <>
                <br />
                {i18n(
                  'fileUploader.placeholder.size',
                  size(storage.maxSizeInBytes),
                )}
              </>
            )}
          </MDTypography>
        </MDBox>
      </FileUploader>
    </MDBox>
  );
}

DragAndDropUploaderArea.defaultProps = {
  multiple: true,
  name: '~~~files',
};

DragAndDropUploaderArea.propTypes = {
  handleChange: PropTypes.func.isRequired,
  hoverTitle: PropTypes.string,
  multiple: PropTypes.bool,
  name: PropTypes.string,
  onTypeError: PropTypes.func,
  storage: PropTypes.any,
  types: PropTypes.arrayOf(PropTypes.string),
};

export default DragAndDropUploaderArea;
