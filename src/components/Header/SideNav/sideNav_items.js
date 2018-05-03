import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import styles from './SideNav.css';

const SideNavItems = () => {
  const items = [
    {
      type: styles.option,
      icon: 'home',
      text: 'Home',
      link: '/'
    },
    {
      type: styles.option,
      icon: 'file-text-o',
      text: 'News',
      link: '/news'
    },
    {
      type: styles.option,
      icon: 'play',
      text: 'Videos',
      link: '/videos'
    },
    {
      type: styles.option,
      icon: 'sign-in',
      text: 'Sign in',
      link: '/sign-in'
    },
    {
      type: styles.option,
      icon: 'sign-out',
      text: 'Sign out',
      link: '/sign-out'
    }
  ]

  const showItems = () => {
    return items.map((item, i) => {
      return (
        <div key={i} className={item.type}>
          <Link to={item.link}>
            <FontAwesome name={item.icon} />
            {item.text}
          </Link>
        </div>
      )
    })
  }

  return (
    <div className={styles.options}>
      {showItems()}
    </div>
  )
}

export default SideNavItems;