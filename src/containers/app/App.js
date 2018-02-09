import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Menu from '../menu/Menu';
import { Route, Switch, NavLink, withRouter } from 'react-router-dom'
import Home from '../home/Home';
import Articles from '../articles/Articles';
import Photos from '../photos/Photos';
import Authors from '../authors/Authors';

class App extends Component {

  constructor(props) {
    super(props);
  }

  showMenu() {
    this.setState(
      {
        isMenuOpen: true
      }
    );
  }

  hideMenu() {
    this.setState(
      {
        isMenuOpen: false
      }
    );
  }

  render() {
    return (
      <div className="app">
        <Menu close={this.hideMenu.bind(this)} isMenuOpen={this.state && this.state.isMenuOpen}/>
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
            <Route path='/articles' component={Articles} />
            <Route path='/photos' component={Photos} />
            <Route path='/authors' component={Authors} />
          </Switch>
        </main>
        <footer>

        </footer>
      </div>
    );
  }
}

export default withRouter(App);
