import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#__docusaurus'); // Nodig voor toegankelijkheid

const Popup = ({ children, title, content }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

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

        <h2>{title}</h2>
        <div>{content}</div>
      </Modal>
    </>
  );
};

export default Popup;
