import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <h1>facebook-like</h1>
      <div className="header-right">
        <div style={{ paddingRight: '5px' }}>Meu Perfil</div>
        <FaUserCircle size={24} />
      </div>
    </header>
  );
};

export default Header;
