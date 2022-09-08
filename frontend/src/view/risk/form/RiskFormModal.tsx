import { useState } from 'react';
import ReactDOM from 'react-dom';
import RiskForm from 'src/view/risk/form/RiskForm';
import RiskService from 'src/modules/risk/riskService';
import Errors from 'src/modules/shared/error/errors';
import { Dialog, DialogContent } from '@mui/material';

function RiskFormModal(props) {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await RiskService.create(data);
      const record = await RiskService.find(id);
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
        <RiskForm
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

export default RiskFormModal;
