import React, { Component } from 'react';
import './menu.scss';
import { NavLink } from 'react-router-dom';

const Menu = (props) => {
  return (
    <div className= { 'App-menu ' + (props.isMenuOpen ? 'App-menu-open' : '')}>
      <div className="menu-wrapper">
        <div className="menu-header">
          <div className="menu-action App-title"
                onClick={props.close}>
              Close
          </div>
        </div>
        <nav className="menu-container">
          <div className="menu-item">
              <NavLink to='/photos' className="item-title" exact onClick={props.close}>Photos</NavLink>
          </div>
          <div className="menu-item">
              <NavLink to='/about' className="item-title" exact onClick={props.close}>About</NavLink>
          </div>
          <div className="menu-item">
              <NavLink to='/contact' className="item-title" exact onClick={props.close}>Contact</NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Menu


