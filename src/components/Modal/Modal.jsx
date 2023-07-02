import css from './Modal.module.css';
import { useEffect } from 'react';

export const Modal = ({ largeImage, alt, id, onClick }) => {
  const closeModal = e => {
    if (e.code === 'Escape' || e.target === e.currentTarget) {
      onClick();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', closeModal);
    return () => {
      window.removeEventListener('keydown', closeModal);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className={css.overlay} onClick={closeModal}>
      <div className={css.modal}>
        <img src={largeImage} alt={alt} id={id} />
      </div>
    </div>
  );
};
