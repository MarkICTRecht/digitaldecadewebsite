import React, { useState } from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#__docusaurus');

const HighlightPopup = ({ children, color, content, type = 'text' }) => {
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
            width: '90vw', // Groter breedte
            maxWidth: '1200px', // Maximum breedte voor grote schermen
            height: '80vh', // Meer hoogte
            maxHeight: '90vh',
            padding: '10px',
            borderRadius: '10px',
            overflow: 'hidden', // Voorkomt onnodige scrollbars
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        <button
          onClick={() => setModalIsOpen(false)}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            fontSize: '1.5rem', // Groter kruisje
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            padding: '5px',
            lineHeight: '1',
            zIndex: 10,
          }}
        >
          &times;
        </button>
        
        <div style={{ 
          padding: '10px',
          margin: '5px 0',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}>
          {type === 'iframe' && (
            <iframe
              src={content}
              width="100%"
              height="600px" // Grotere hoogte voor betere zichtbaarheid
              style={{ border: 'none', flexGrow: 1 }}
            />
          )}
          
          {type === 'text' && (
            <div style={{ overflowY: 'auto', flexGrow: 1 }}>{content}</div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default HighlightPopup;
