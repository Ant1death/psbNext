import style from '../../styles/MessageError.module.scss';

export default function MessageError({ message, isOpen }) {
  return (
    <section className={`${style.popup} ${isOpen ? style['popup_open'] : ''}`}>
      <p className={style['popup__message']}>
        {message}
      </p>
    </section>
  );
}