import React from 'react';
import { Link } from 'react-router-dom';

import SideNav from './SideNav/sideNav';

import FontAwesome from 'react-fontawesome';
import style from './header.css';

const Header = (props) => { // get props from header tag within layout component

  const navBars = () => (
    <div className={style.bars}>
      <FontAwesome name="bars"
        onClick={props.onShowNav}
        style={{
          color: '#eee',
          padding: '10px',
          cursor: 'pointer'
        }} />
    </div>
  )

  const logo = () => (
    <Link to="/" className={style.logo}>
      <img src="/images/nba_logo.png" alt="NBA logo" />>
      </Link>
  )

  return (
    <header className={style.header}>
      {/* pass in props obj */}
      <SideNav {...props} />
      <div className={style.headerOptions}>
        {navBars()}
        {logo()}
      </div>
    </header>
  )
}

export default Header;