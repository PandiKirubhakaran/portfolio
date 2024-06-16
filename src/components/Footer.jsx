import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import classes from '../assets/styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.copyright}>
        Copyright <FontAwesomeIcon icon={faCopyright} /> 2024
        <a href="/" className={classes.homeLink}>Kirubha</a>
      </div>
      <div className={classes.socialMedia}>
        <a href="https://www.instagram.com/pandi_kirubhakaran_eswaran?igsh=MTF1NWswc2s2Z2J4bQ==" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com/in/pandi-kirubhakaran-eswaran-21837b1a5/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/PandiKirubhakaran" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
