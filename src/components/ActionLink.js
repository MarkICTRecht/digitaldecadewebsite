import React from 'react';
import { useHistory } from '@docusaurus/router';

const ActionLink = ({ children, to, color = "#25c2a0" }) => {
  const history = useHistory();

  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: '20px',
        color: '#fff',
        padding: '10px',
        cursor: 'pointer',
        display: 'inline-block',
        textAlign: 'center',
        fontWeight: 'bold',
        textDecoration: 'none',
      }}
      onClick={() => history.push(to)}
    >
      {children}
    </span>
  );
};

export default ActionLink;
