import React, { Component } from 'react';
import './menu.scss';

class Menu extends Component {

  constructor(props) {
    super(props);
  }

  hideMenu() {
    this.props.close();
  }

  render() {
    return (
      <div className= { 'App-menu ' + (this.props.isMenuOpen ? 'App-menu-open' : '')}>
        <div className="menu-wrapper">
          <div className="menu-header">
            <div className="menu-action App-title"
                  onClick={this.hideMenu.bind(this)}>
                Close
            </div>
          </div>
          <div className="menu-container">
            <div className="menu-item">
              Photos
            </div>
            <div className="menu-item">
              About us
            </div>
            <div className="menu-item">
              Contact
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
