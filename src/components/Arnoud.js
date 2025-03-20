import React, { useState } from 'react';

const Arnoud = ({ popupText }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* Klikbare afbeelding */}
      <span
        onClick={() => setIsOpen(!isOpen)}
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

      {/* Spraakwolk popup */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            bottom: '50px', // Zorgt dat de popup correct boven de afbeelding staat
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'white',
            color: 'black',
            padding: '15px 20px',
            borderRadius: '10px',
            boxShadow: '0px 4px 6px rgba(0,0,0,0.2)',
            width: '380px', // Breder formaat
            maxWidth: '90vw', // Zorgt dat het niet te breed wordt op kleine schermen
            maxHeight: '260px', // Grotere hoogte voor scrollbare content
            overflowY: 'auto', // Scrollen als er veel tekst is
            textAlign: 'center',
            zIndex: 1000,
          }}
        >
          <p style={{ margin: 0, fontSize: '1rem', lineHeight: '1.5' }}>{popupText}</p>

          {/* Pijl onderaan het spraakwolkje */}
          <div
            style={{
              position: 'absolute',
              top: '100%', // Dit plaatst de pijl ONDER de popup
              left: '50%',
              transform: 'translateX(-50%)',
              width: '0',
              height: '0',
              borderLeft: '15px solid transparent',
              borderRight: '15px solid transparent',
              borderTop: '15px solid white', // Pijl krijgt de kleur van de popup
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Arnoud;
