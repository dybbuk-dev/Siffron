import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import SectionForm from 'src/view/section/form/SectionForm';
import SectionService from 'src/modules/section/sectionService';
import Errors from 'src/modules/shared/error/errors';
import { Dialog, DialogContent } from '@mui/material';

function SectionFormModal(props) {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await SectionService.create(data);
      const record = await SectionService.find(id);
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
        <SectionForm
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

export default SectionFormModal;
