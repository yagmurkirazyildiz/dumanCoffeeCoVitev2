import React from 'react';
import './Footer.css'; // CSS dosyasını ayrı tutmayı tercih ettim
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="sb-new-footer">
      <div className="foot-top">
        <div className="menu-list">
          <div className="menu-item">
            <div className="menu-head">
              <div className="left">
                <span className="title">Hakkımızda</span>
              </div>
              <div className="right">
                <div className="icon-wrapper">
                  <span className="icon button-icon">&#9660;</span>
                </div>
              </div>
            </div>
            <div className="sub-menu">
              <a className="sub-item" href="/tarihce">Tarihçe</a>
              <a className="sub-item" href="/bize-ulasin">Bize Ulaşın</a>
            </div>
          </div>

          <div className="menu-item">
            <div className="menu-head">
              <div className="left">
                <span className="title">Kahve</span>
              </div>
              <div className="right">
                <div className="icon-wrapper">
                  <span className="icon button-icon">&#9660;</span>
                </div>
              </div>
            </div>
            <div className="sub-menu">
              <a className="sub-item" href="#">Çekirdekler</a>
              <a className="sub-item" href="#">Demleme Yöntemleri</a>
            </div>
          </div>

          <div className="menu-item">
            <div className="menu-head">
              <div className="left">
                <span className="title">Sosyal Sorumluluk</span>
              </div>
              <div className="right">
                <div className="icon-wrapper">
                  <span className="icon button-icon">&#9660;</span>
                </div>
              </div>
            </div>
            <div className="sub-menu">
              <a className="sub-item" href="#">Projelerimiz</a>
              <a className="sub-item" href="#">Sürdürülebilirlik</a>
            </div>
          </div>
        </div>
      </div>

      <hr className="divider" />

      <div className="foot-bottom">
        <ul className="social-icons">
          <li>
            <a href="#" aria-label="facebook" className="social-icon facebook-icon">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/dumancoffeeco/" aria-label="instagram" className="social-icon instagram-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="#" aria-label="twitter" className="social-icon twitter-icon">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@DumanCoffeeCo" aria-label="youtube" className="social-icon youtube-icon">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
