import style from '../../styles/PopupLanguage.module.scss';

const PopupLanguage = ({ isOpen, closePopup }) => {
  return (
    <section className={`${style['popup']} ${isOpen ? style['popup_opened'] : ''}`}>
      <div className={style['popup__container']}>
        <div className={style['popup__content']}>
          <div className={style['popup__header']}>
            <h6 className={style['popup__title']}>Выберите язык</h6>
            <button
              type='bitton'
              className={style['popup__button-close']}
              onClick={closePopup}
            >x</button>
          </div>
          <ul className={style['popup__body']}>
            <li className={style['popup__item']}>
              <button className={`${style['popup__button-country']} ${style['popup__button-country_us']}`}>
                English
              </button>
            </li>
            <li className={style['popup__item']}>
              <button className={`${style['popup__button-country']} ${style['popup__button-country_ru']}`}>
                Русский
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default PopupLanguage;