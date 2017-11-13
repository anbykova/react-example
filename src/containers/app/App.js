import React, { Component } from 'react';
//import logo from './logo.svg';
import photo1 from '../../images/1.jpg';
import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    }
  }

  showMenu() {
    this.setState({
      isMenuOpen: true
    })
  }

  hideMenu() {
    this.setState({
      isMenuOpen: false
    })
  }

  render() {
    return (
      <div className="App">
        <div className= { 'App-menu ' + (this.state.isMenuOpen ? 'App-menu-open' : '')}>
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

  mapStateToProps = (state) => {
    return state.play;
  };

  mapDispatchToProps = (dispatch) => {
      return {
          togglePlay: () => {
              dispatch(togglePlay());
          }
      }
  };

  AppContainer = connect(
      mapStateToProps,
      mapDispatchToProps
  )(App);
}

export default App;
