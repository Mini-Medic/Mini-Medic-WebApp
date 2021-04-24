import React from 'react';
import './Footer.css'
function Footer() {
  return (
      <div className={'footer_container'}>
        <section className="social_media">
          <div className="social_media-wrap">
            <div className="footer_logo">
              <a href="/" id="footer_logo">Mini Medic</a>
            </div>
            <p className="website_rights">Mini Medic 2021. All rights reserved</p>
          </div>
        </section>
      </div>
  );
}
export default Footer;