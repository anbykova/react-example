import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuActions from '../../actions/menuActions';
import Menu from '../menu/Menu';
import { Route, Switch, NavLink } from 'react-router-dom'
import Home from '../home/Home';
import About from '../about/About';

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
        <Menu close={this.hideMenu.bind(this)} isMenuOpen={this.props.isMenuOpen}/>
        <header className="App-header">
          <div className="header-container">
            <div className="App-title">
              <NavLink to='/'>Just Nastya</NavLink>
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
            <Route path='/about' exact component={About} />
          </Switch>
        </main>
        <footer>

        </footer>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {isMenuOpen: state.menu.isMenuOpen};
  },
  (dispatch) => {
    return {
      openMenu: bindActionCreators(menuActions.openMenu, dispatch),
      closeMenu: bindActionCreators(menuActions.closeMenu, dispatch),
    }
  }
)(App);
