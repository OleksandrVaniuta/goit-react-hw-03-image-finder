import PropTypes from 'prop-types';
import React, { Component } from 'react';
import PopupWindow from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  static propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  };

  state = {
    showModal: false,
  };

  togleModal = () => {
    this.setState(state => ({ showModal: !state.showModal }));
  };

  render() {
    const { webformatURL, largeImageURL } = this.props;
    return (
      <li className={css.ImageGalleryItem} onClick={this.togleModal}>
        <img
          src={webformatURL}
          alt="big photo"
          className={css.ImageGalleryItemImage}
        />
        {this.state.showModal && (
          <PopupWindow
            largeImageURL={largeImageURL}
            closeModal={this.togleModal}
          />
        )}
      </li>
    );
  }
}

export default ImageGalleryItem;
