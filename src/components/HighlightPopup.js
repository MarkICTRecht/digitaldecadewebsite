import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#__docusaurus');

const HighlightPopup = ({ children, color, page }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <span
        onClick={() => setModalIsOpen(true)}
        style={{
          backgroundColor: color,
          borderRadius: '15px',
          color: '#fff',
          padding: '5px 10px',
          fontSize: '0.9rem',
          cursor: 'pointer',
          display: 'inline-block',
          textAlign: 'center',
          fontWeight: 'bold',
          textDecoration: 'none',
        }}
      >
        {children}
      </span>

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
          src={page}
          width="100%"
          height="400px"
          style={{ border: 'none' }}
        ></iframe>
      </Modal>
    </>
  );
};

export default HighlightPopup;
