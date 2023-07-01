import css from './ImageGalleryItem.module.css';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ src, alt, largeImage }) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const showModal = () => {
    setIsShowModal(true);
  };

  const hideModal = () => {
    setIsShowModal(false);
  };

  return (
    <li className={css.imageGalleryItem}>
      <img
        className={css.imageGalleryItem_image}
        src={src}
        alt={alt}
        onClick={showModal}
      />
      {isShowModal && <Modal largeImage={largeImage} onClick={hideModal} />}
    </li>
  );
};

ImageGalleryItem.propTypes = {
  images: PropTypes.array,
};
