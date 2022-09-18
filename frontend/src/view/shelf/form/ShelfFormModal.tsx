import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ShelfForm from 'src/view/shelf/form/ShelfForm';
import ShelfService from 'src/modules/shelf/shelfService';
import Errors from 'src/modules/shared/error/errors';
import { Dialog, DialogContent } from '@mui/material';

function ShelfFormModal(props) {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await ShelfService.create(data);
      const record = await ShelfService.find(id);
      setSaveLoading(false);
      props.onSuccess(record);
    } catch (error) {
      Errors.handle(error);
    } finally {
      setSaveLoading(false);
    }
  };

  const doClose = () => {
    return props.onClose();
  };

  return ReactDOM.createPortal(
    <Dialog
      open={true}
      onClose={doClose}
      maxWidth="md"
      fullWidth={true}
    >
      <DialogContent>
        <ShelfForm
          saveLoading={saveLoading}
          onSubmit={doSubmit}
          onCancel={doClose}
          modal
        />
      </DialogContent>
    </Dialog>,
    (document as any).getElementById('modal-root'),
  );
}

export default ShelfFormModal;
