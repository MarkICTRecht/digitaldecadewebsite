import React, { useState } from 'react';

const Arnoud = ({ popupText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closePopup = () => setIsOpen(false);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* Klikbare afbeelding */}
      <span
        onClick={() => setIsOpen(true)}
        style={{
          backgroundImage: "url(/img/arnoud.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "40px",
          height: "40px",
          display: "inline-block",
          borderRadius: "50%",
          cursor: "pointer",
          verticalAlign: "middle",
        }}
      ></span>

      {/* Overlay om buiten de popup te klikken en te sluiten */}
      {isOpen && (
        <div
          onClick={closePopup} // Klik buiten de popup om deze te sluiten
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.2)', // Lichte dimming
            zIndex: 999,
          }}
        >
          {/* Spraakwolk popup */}
          <div
            onClick={(e) => e.stopPropagation()} // Voorkomt sluiten bij klikken binnen de popup
            style={{
              position: 'absolute',
              bottom: '50px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'white',
              color: 'black',
              padding: '15px 20px',
              borderRadius: '10px',
              boxShadow: '0px 4px 6px rgba(0,0,0,0.2)',
              width: '380px',
              maxWidth: '90vw',
              maxHeight: '260px',
              overflowY: 'auto',
              textAlign: 'center',
              zIndex: 1000,
            }}
          >
            {/* Sluitknop */}
            <button
              onClick={closePopup}
              style={{
                position: 'absolute',
                top: '5px',
                right: '10px',
                fontSize: '1.5rem',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                padding: '5px',
                lineHeight: '1',
                color: 'black',
              }}
            >
              &times;
            </button>

            <p style={{ margin: 0, fontSize: '1rem', lineHeight: '1.5' }}>{popupText}</p>

            {/* Pijl onderaan het spraakwolkje */}
            <div
              style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '0',
                height: '0',
                borderLeft: '15px solid transparent',
                borderRight: '15px solid transparent',
                borderTop: '15px solid white',
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Arnoud;
