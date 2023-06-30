import css from './Modal.module.css';
import { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  closeModal = ({ target, currentTarget, code }) => {
    if (code === 'Escape' || target === currentTarget) {
      this.props.onClick();
    }
  };

  render() {
    const { largeImage, alt, id } = this.props;
    return (
      <div className={css.overlay} onClick={this.closeModal}>
        <div className={css.modal}>
          <img src={largeImage} alt={alt} id={id} />
        </div>
      </div>
    );
  }
}
