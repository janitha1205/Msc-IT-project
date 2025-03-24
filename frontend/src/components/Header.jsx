import React from 'react';

const Header = ({ userName , page }) => {
  const headerStyles = {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '283px',
    height: '79px',
    justifyContent: 'center',
    padding: '10px',
  };

  const titleStyles = {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '20px',
    fontWeight: 700,
    color: '#000000',
    margin: 0,
    lineHeight: '1.2',
  };

  const userNameStyles = {
    ...titleStyles,
    fontSize: '18px',
    marginTop: '4px',
  };

  return (
    <div style={headerStyles}>
      <h1 style={titleStyles}>{page}</h1>
      <p style={userNameStyles}>{userName}</p>
    </div>
  );
};

export default Header;

