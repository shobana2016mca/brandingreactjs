import Modal from 'react-responsive-modal';
import EnquiryForm from './HomePage/EnquiryForm';

type EnquiryModalProps = {
  isOpen: boolean;
  onToogleEnquiryModal: () => void;
};

export default function EnquiryModal({
  isOpen,
  onToogleEnquiryModal,
}: EnquiryModalProps) {
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={onToogleEnquiryModal}
        center
        classNames={{
          overlay: 'customOverlay',
          modal: 'customModal',
        }}>
        <h2 className={'text-3xl font-bold'}>Enquiry Form</h2>

        <EnquiryForm onToggle={onToogleEnquiryModal} />
      </Modal>
    </div>
  );
}
