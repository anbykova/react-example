import React, { Component } from 'react';
import photo1 from '../../images/nature1.jpg';
import './home.scss';
import ModalWindow from '../../components/modalWindow/ModalWindow';

class Home extends Component {

  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.showModal = this.showModal.bind(this);
    this.checkClickOnModal = this.checkClickOnModal.bind(this);
  }

  showModal() {
    this.setState(
      {
        isModalShowing: true
      }
    );
  }

  closeModal() {
    this.setState(
      {
        isModalShowing: false
      }
    );
  }

  checkClickOnModal() {
    console.log('click');
  }

  render() {
    return (
        <div onClick={this.checkClickOnModal}>
          <img src={photo1} className="app-photo" alt="logo" />
          <button onClick={this.showModal} className="warning">
            Show Warning
          </button>
          {(this.state && this.state.isModalShowing) && <ModalWindow closeModal={this.closeModal}></ModalWindow>}
        </div>
    );
  }
}

export default Home;
