import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuActions from '../../actions/menuActions';
import Menu from '../../components/menu/Menu';
import { Route, Switch, NavLink, withRouter } from 'react-router-dom'
import Home from '../home/Home';
import About from '../about/About';
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
      <div className="App">
        {Menu ({close:this.hideMenu.bind(this), isMenuOpen:this.props.isMenuOpen})}
        <header className="App-header">
          <div className="header-container">
            <div className="App-title">
              <NavLink to='/' className="App-name">B and S</NavLink>
            </div>
            <div className="header-menu-action App-title"
                 onClick={this.showMenu.bind(this)}>
              Menu
            </div>
          </div>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/about' component={About} />
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
