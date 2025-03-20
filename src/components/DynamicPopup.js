import React, { useState } from 'react';
import Modal from 'react-modal';
import useBaseUrl from '@docusaurus/useBaseUrl';

Modal.setAppElement('#__docusaurus'); // Nodig voor toegankelijkheid

const DynamicPopup = ({ children, page }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const pageUrl = useBaseUrl(page);

  return (
    <>
      <button
        onClick={() => setModalIsOpen(true)}
        style={{
          backgroundColor: '#0073e6',
          color: 'white',
          border: 'none',
          padding: '8px 15px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '0.9rem',
        }}
      >
        {children}
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '60%',
            maxHeight: '80%',
            overflowY: 'auto',
            padding: '20px',
            borderRadius: '10px',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        <button
          onClick={() => setModalIsOpen(false)}
          style={{
            float: 'right',
            fontSize: '1.5rem',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
          }}
        >
          &times;
        </button>

        <iframe
          src={pageUrl}
          width="100%"
          height="400px"
          style={{ border: 'none' }}
        ></iframe>
      </Modal>
    </>
  );
};

export default DynamicPopup;
