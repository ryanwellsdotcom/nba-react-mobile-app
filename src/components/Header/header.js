import React from 'react';
import { Link } from 'react-router-dom';

import SideNav from './SideNav/sideNav';

import FontAwesome from 'react-fontawesome';
import styles from './header.css';

const Header = (props) => { // get props from header tag within layout component

  const navBars = () => (
    <div className={styles.bars}>
      <FontAwesome name="bars"
        onClick={props.onShowNav}
        className={styles.hamburger} />
    </div>
  )

  const logo = () => (
    <Link to="/" className={styles.logo}>
      <img src="/images/nba_logo.svg" alt="NBA logo" />
    </Link>
  )

  return (
    <header className={styles.header}>
      {/* pass in props obj */}
      <SideNav {...props} />
      <div className={styles.headerOptions}>
        {navBars()}
        {logo()}
      </div>
    </header>
  )
}

export default Header;