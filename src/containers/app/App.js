import React, { Component } from 'react';
//import logo from './logo.svg';
import photo1 from '../../images/1.jpg';
import './App.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuActions from '../../actions/menuActions';
import Menu from '../menu/Menu';

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
              Just Nastya
            </div>
            <div className="header-menu-action App-title"
                 onClick={this.showMenu.bind(this)}>
              Menu
            </div>
          </div>
        </header>
        <main>
          <img src={photo1} className="App-photo" alt="logo" />
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
