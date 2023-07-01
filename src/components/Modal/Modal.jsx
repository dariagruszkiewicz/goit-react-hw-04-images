import css from './Modal.module.css';
import { useEffect } from 'react';

export const Modal = ({ largeImage, alt, id, onClick }) => {
  // componentDidMount() {
  //   window.addEventListener('keydown', this.closeModal);
  // }

  useEffect(() => {
    window.addEventListener('keydown', closeModal);
    return () => {
      window.removeEventListener('keydown', this.closeModal);
    };
  }, []);

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.closeModal);
  // }

  const closeModal = ({ target, currentTarget, code }) => {
    if (code === 'Escape' || target === currentTarget) {
      onClick();
    }
  };

  return (
    <div className={css.overlay} onClick={closeModal}>
      <div className={css.modal}>
        <img src={largeImage} alt={alt} id={id} />
      </div>
    </div>
  );
};
