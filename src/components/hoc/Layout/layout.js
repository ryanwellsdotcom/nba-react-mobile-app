import React, { Component } from 'react';
import './layout.css';

import Header from '../../Header/header';

class Layout extends Component {
  state = {
    showNav: false
  }

  toggleSideNav = (action) => {
    this.setState({
      showNav: action
    })
  }

  render() {
    return (
      <div>
        <Header
          // sending props to header component
          showNav={this.state.showNav}
          onHideNav={() => this.toggleSideNav(false)}
          onShowNav={() => this.toggleSideNav(true)}
        />
        {this.props.children}
        Footer
      </div>
    );
  }
}

export default Layout;