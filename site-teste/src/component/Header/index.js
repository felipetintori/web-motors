import React from 'react';


function Header() {
  return (
    <header id="header" className="container">
        <img className="logo" src={require('./../../assets/logo.svg')} />
        <ul className="menu">
            <li><a className="active" href="">Carros</a></li>
            <li><a href="">Motos</a></li>

        </ul>
    </header>
  );
}

export default Header;