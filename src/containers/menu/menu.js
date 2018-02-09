import React, { Component } from 'react';
import './menu.scss';
import { NavLink } from 'react-router-dom';

const Menu = (props) => {
  return (
    <div className={'menu ' + (props.isMenuOpen ? 'menu--cond_opened' : 'menu--cond_closed')}>
      <div className="menu-wrapper">
        <header className="menu-header">
          <div className="menu-action app-action"
            onClick={props.close}>
            Close
          </div>
        </header>
        <nav className="menu-container">
          <div className="menu-item">
            <NavLink to='/photos' className="menu-title" exact onClick={props.close}>Photos</NavLink>
          </div>
          <div className="menu-item">
            <NavLink to='/articles' className="menu-title" exact onClick={props.close}>Articles</NavLink>
          </div>
          <div className="menu-item">
            <NavLink to='/authors' className="menu-title" exact onClick={props.close}>Authors</NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Menu;


