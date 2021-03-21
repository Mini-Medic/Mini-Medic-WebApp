import React from 'react';
import { Navbar } from '../../common';

import './Header.css';

function Header () {

  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top__logo">
          <a href="/" className="header-logo">Logo</a>
        </section>
        <section className="header-top__navbar">
            <Navbar />
          <section className="header-top__navigation">

          </section>
          <hr className="header-top__seperator" />
        </section>
      </section>
    </section>
  )
}

export default Header;