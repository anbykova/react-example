import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './modalWindow.scss';

const modalRoot = document.getElementById('root');

class ModalWindow extends Component {

    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }
    
    render() {
        return ReactDOM.createPortal(
            <div className="modal_window" onClick={this.props.closeModal}>
                {this.props.text}
            </div>,
            this.el
          );
    }
}

export default ModalWindow;