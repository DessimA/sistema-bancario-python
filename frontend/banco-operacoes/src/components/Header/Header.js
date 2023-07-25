import React from 'react';
import './Header.css';

const Header = ({ modoEscuro, onToggleModoEscuro }) => {
  return (
    <header className="header">
      <h1>Banco React</h1>
      <button className="modo-escuro-button" onClick={onToggleModoEscuro}>
        {modoEscuro ? '🌞' : '🌜'}
      </button>
    </header>
  );
};

export default Header;
