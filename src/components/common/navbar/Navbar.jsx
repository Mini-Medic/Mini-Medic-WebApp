import React from 'react';

import './Navbar.css';

function Navbar () {

  return (
    <section className="navbar">
    <a href="/" className = "navbar-item">Home</a>
    <a href="/about" className = "navbar-item">About</a>
    <a href="/portfolio" className = "navbar-item">Portfolio</a>
    <a href="/contact" className = "navbar-item">Contact</a>
    <a href ="/login" title = "Login" class="external">Login</a>
</section>
  )

}

export default Navbar;