import css from './ImageGalleryItem.module.css';
import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    isShowModal: false,
  };

  showModal = () => {
    this.setState({ isShowModal: true });
  };

  hideModal = () => {
    this.setState({ isShowModal: false });
  };

  render() {
    const { src, alt, largeImage } = this.props;
    const { isShowModal } = this.state;
    return (
      <li className={css.imageGalleryItem}>
        <img
          className={css.imageGalleryItem_image}
          src={src}
          alt={alt}
          onClick={this.showModal}
        />
        {isShowModal && (
          <Modal largeImage={largeImage} onClick={this.hideModal} />
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  images: PropTypes.array,
};
