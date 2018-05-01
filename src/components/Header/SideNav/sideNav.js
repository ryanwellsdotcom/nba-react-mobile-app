import React from 'react';
import SideNav from 'react-simple-sidenav';
import SideNavItems from './sideNav_items';

const sideNavigation = (props) => { // get props from SideNav tag in header
  return (
    <div>
      <SideNav
        // get props from layout
        showNav={props.showNav}
        onHideNav={props.onHideNav}
        onShowNav={props.onShowNav}
        navStyle={{
          background: '#242424',
          maxWidth: '220px'
        }}
      >
        <SideNavItems />
      </SideNav>
    </div>
  )
}

export default sideNavigation;