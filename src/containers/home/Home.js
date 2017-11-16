import React, { Component } from 'react';
import photo1 from '../../images/1.jpg';

class Home extends Component {

  render() {
    return (
        <img src={photo1} className="App-photo" alt="logo" />
    );
  }
}

export default Home;
