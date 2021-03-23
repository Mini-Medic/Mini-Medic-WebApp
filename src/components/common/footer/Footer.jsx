import React from 'react';
import './Footer.css'
function Footer() {
  return (
      <div className={'footer_container'}>
        <div className={'footer_links'}>
          <div className={'footer_links-wrapper'}>
            <div className={'footer_links-text'}>
              <h3>A description about Mini Medic Website at here</h3>
            </div>
          </div>
          <div className={'footer_links-wrapper'}>
            <div className={'footer_links-items'}>
              <h2>INFORMATION</h2>
              <a href="/">balabala</a>
              <a href="/">balabala</a>
              <a href="/">balabala</a>
              <a href="/">balabala</a>
            </div>
          </div>
          <div className={'footer_links-wrapper'}>
            <div className={'footer_links-items'}>
              <h2>SUPPORT</h2>
              <a href="/">balabala</a>
              <a href="/">balabala</a>
              <a href="/">balabala</a>
              <a href="/">balabala</a>
            </div>
          </div>
        </div>
        <section className="social_media">
          <div className="social_media-wrap">
            <div className="footer_logo">
              <a href="/" id="footer_logo">Mini Medic</a>
            </div>
            <p className="website_rights">Mini Medic 2021. All rights reserved</p>
            <div className="social_icons">
              <a href="/" className="social_icon-link"><i className="fab fa-twitter"/></a>
              <a href="/" className="social_icon-link"><i className="fab fa-facebook"/></a>
              <a href="/" className="social_icon-link"><i className="fab fa-instagram"/></a>
              <a href="/" className="social_icon-link"><i className="fab fa-linkedin"/></a>
            </div>
          </div>
        </section>
      </div>
  );
}
export default Footer;