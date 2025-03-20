import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#__docusaurus'); // Nodig voor toegankelijkheid

const StyledPopup = ({ children, title, content }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setModalIsOpen(true)}
        style={{
          backgroundColor: '#217A7D',
          color: 'white',
          border: 'none',
          padding: '5px 10px',
          borderRadius: '12px',
          cursor: 'pointer',
          fontSize: '0.9rem',
          transition: 'background-color 0.2s ease-in-out',
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#1b6c6f')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#217A7D')}
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
            width: '50%', // ✅ Kleiner maken
            maxHeight: '60vh', // ✅ Hoogte beperken tot 60% van de viewport
            overflowY: 'auto',
            padding: '15px',
            borderRadius: '12px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            border: '1px solid #ddd',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // ✅ Inhoud centreren
            justifyContent: 'center',
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
            color: '#444',
            transition: 'color 0.2s ease-in-out',
          }}
          onMouseOver={(e) => (e.target.style.color = '#000')}
          onMouseOut={(e) => (e.target.style.color = '#444')}
        >
          &times;
        </button>

        <h2 style={{ color: '#217A7D', textAlign: 'center', marginBottom: '10px' }}>{title}</h2>
        <div style={{ textAlign: 'center', maxWidth: '90%' }}>{content}</div>
      </Modal>
    </>
  );
};

export default StyledPopup;
