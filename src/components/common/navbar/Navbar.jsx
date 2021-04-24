import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import {NavButton} from './Button';
import './Navbar.css';

function Navbar(){
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false)
    } else {
      setButton(true)
    }
  };

  useEffect(() => {
    showButton();
  },[])
  window.addEventListener('resize', showButton)
  return (
      <>
        <nav className="navbar">

          <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <i className="fas fa-briefcase-medical fa-2x" />
              <div className={'logo-text'}>
                <h6>Mini</h6>
                <h3>Medic</h3>
              </div>
              <div className={'logo-Oahu'}>Oahu</div>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times':'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active':'nav-menu'}>
              <li className={'nav-item'}>
                <Link to='/' className={'nav-links'} onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className={'nav-item'}>
                <Link to='/illness' className={'nav-links'} onClick={closeMobileMenu}>
                  Illness
                </Link>
              </li>
              <li className={'nav-item'}>
                <Link to='/record' className={'nav-links'} onClick={closeMobileMenu}>
                  Record
                </Link>
              </li>
              <li className={'nav-item'}>
                  <Link to='/services' className={'nav-links'} onClick={closeMobileMenu}>
                      Services
                  </Link>
              </li>




              <li className={'nav-item'}>
                <Link to='/LandingUser' className={'nav-links-mobile'} onClick={closeMobileMenu}>
                  SIGN IN
                </Link>
              </li>
            </ul>
            {button && <Link to={'/LandingUser'}><NavButton buttonStyle='btn--outline'> SIGN IN</NavButton></Link>}
          </div>
        </nav>
      </>
  )
}

export default Navbar;