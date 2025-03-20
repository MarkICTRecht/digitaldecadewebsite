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
            width: 'auto',
            maxWidth: '80%',
            height: 'auto',
            maxHeight: '80%',
            padding: '10px',
            borderRadius: '10px',
            overflow: 'hidden',
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
            top: '5px',
            right: '5px',
            fontSize: '0.8rem',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            padding: '0',
            lineHeight: '1',
            zIndex: 10,
          }}
        >
          &times;
        </button>
        
        <div style={{ 
          padding: '5px',
          margin: '5px 0',
        }}>
          {type === 'iframe' && (
            <iframe
              src={content}
              width="100%"
              height="400px"
              style={{ border: 'none' }}
            />
          )}
          
          {type === 'text' && (
            <div>{content}</div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default HighlightPopup;