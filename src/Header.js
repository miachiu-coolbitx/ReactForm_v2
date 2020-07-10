import React from 'react';
import './styles/header.scss';

function Header() {
  return (
    <div id="header">
        <div className="container">
          <div className="logo">
            <a href="index.html">
              <img
                src="https://6tzs95ygc93ndarqhl8fkg-on.drv.tw/SYGNABridge_mail/images/logo.png"
                alt="SYGNA Bridge" />
            </a>
          </div>
        </div>
    </div>
  );
}

export default Header;
