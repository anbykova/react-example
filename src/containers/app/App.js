import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuActions from '../../actions/menuActions';
import Menu from '../menu/Menu';
import { Route, Switch, NavLink, withRouter } from 'react-router-dom'
import Home from '../home/Home';
import News from '../news/News';
import Photos from '../photos/Photos';

class App extends Component {

  constructor(props) {
    super(props);
  }

  showMenu() {
    this.props.openMenu();
  }

  hideMenu() {
    this.props.closeMenu();
  }

  render() {
    return (
      <div className="app">
        { Menu ({close : this.hideMenu.bind(this), isMenuOpen : this.props.isMenuOpen}) }
        <header className="header">
          <div className="header-container">
            <div className="app-action">
              <NavLink to='/' className="app-name">B and S</NavLink>
            </div>
            <a className="app-action"
                 onClick={this.showMenu.bind(this)}>
              Menu
            </a>
          </div>
        </header>
        <main className="app-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/news' component={News} />
            <Route path='/photos' component={Photos} />
          </Switch>
        </main>
        <footer>

        </footer>
      </div>
    );
  }
}

export default withRouter(connect(
  (state) => {
    return {isMenuOpen: state.menu.isMenuOpen};
  },
  (dispatch) => {
    return {
      openMenu: bindActionCreators(menuActions.openMenu, dispatch),
      closeMenu: bindActionCreators(menuActions.closeMenu, dispatch),
    }
  }
)(App));
