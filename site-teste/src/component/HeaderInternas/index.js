import React from 'react';


function HeaderInternas() {
  return (
    <div id="headerInternas">
        <header  className="container">
            <div className="row">
                
                    <a href="/"><img className="logo" src={require('./../../assets/logo.svg')} /></a>
                
                
                    <ul className="menu">
                        <li><a className="active" href="">Carros</a></li>
                        <li><a href="">Motos</a></li>

                    </ul>
                
            </div>
        </header>
    </div>
  );
}

export default HeaderInternas;