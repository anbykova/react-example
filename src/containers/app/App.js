import React, { Component } from 'react';
//import logo from './logo.svg';
import photo1 from '../../images/1.jpg';
import './App.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuActions from '../../actions/menuActions';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    }
  }

  showMenu() {
    console.log(this.props);
    this.props.menuActions.openMenu();
    // this.setState({
    //   isMenuOpen: true
    // })
  }

  hideMenu() {
    this.props.menuActions.closeMenu();
    // this.setState({
    //   isMenuOpen: false
    // })
  }

  render() {
    return (
      <div className="App">
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
        <header className="App-header">
          <div className="header-container">
            <div className="App-title">
              Savchuk family
            </div>
            <div className="header-menu App-title"
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
    return {isMenuOpen: state.isMenuOpen};
  },
  (dispatch) => {
    return {
      menuActions: bindActionCreators(menuActions, dispatch)
    }
  }
)(App);;
