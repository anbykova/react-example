import React, { Component } from 'react';
import './menu.scss';
import { NavLink } from 'react-router-dom'

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
          <nav className="menu-container">
            <div className="menu-item">
              Photos
            </div>
            <div className="menu-item">
                <NavLink to='/about' exact onClick={this.hideMenu.bind(this)}>About</NavLink>
            </div>
            <div className="menu-item">
              Contact
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Menu;
