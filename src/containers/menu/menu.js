import React, { Component } from 'react';
import './menu.scss';

class Menu extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className= { 'App-menu ' + (this.props.isMenuOpen ? 'App-menu-open' : '')}>
          <div className="menu-wrapper">
            <div className="menu-container">
              <div>
              </div>
              <div className="header-menu App-title"
                  onClick={this.hideMenu.bind(this)}>
                Close
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Menu;
