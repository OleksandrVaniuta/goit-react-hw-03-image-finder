import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './Modal.module.css';

class PopupWindow extends Component {
  static propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleClick = e => {
    if (e.currentTarget !== e.target) {
      this.props.closeModal();
    }
  };

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    return createPortal(
      <div className={css.Overlay} onClick={this.handleClick}>
        <div className={css.Modal}>
          <img src={this.props.largeImageURL} alt="big photo" />
        </div>
      </div>,
      document.querySelector('#popup-root')
    );
  }
}

export default PopupWindow;
