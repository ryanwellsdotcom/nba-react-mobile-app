import React from 'react';
import { Link } from 'react-router-dom';
import { CURRENT_YEAR } from '../../config';
import style from './footer.css';

const Footer = () => (
  <div className={style.footer}>
    <Link to="/" className={style.logo}>
      <img src="/images/nba_logo.svg" alt="NBA logo" />
    </Link>
    <div className={style.copyright}>
      &copy; {CURRENT_YEAR} NBA all rights reserved
    </div>
  </div>
)

export default Footer;