import React from 'react';
import { Link } from 'react-router-dom';
import { CURRENT_YEAR } from '../../config';
import styles from './footer.css';

const Footer = () => (
  <div className={styles.footer}>
    <Link to="/" className={styles.logo}>
      <img src="/images/nba_logo.svg" alt="NBA logo" />
    </Link>
    <div className={styles.copyright}>
      &copy; {CURRENT_YEAR} NBA all rights reserved
    </div>
  </div>
)

export default Footer;