import { useTranslation } from 'react-i18next';

import style from '../../styles/PopupLanguage.module.scss';

const PopupLanguage = ({ isOpen, closePopup }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (evt) => {
    const el = evt.currentTarget;

    if (el.id === 'RU') {
      window.localStorage.setItem('MY_LANGUAGE', 'ru');
      i18n.changeLanguage('ru');
    } else if (el.id = 'EN') {
      window.localStorage.setItem('MY_LANGUAGE', 'en');
      i18n.changeLanguage('en');
    }
    closePopup();
  }

  return (
    <section className={`${style['popup']} ${isOpen ? style['popup_opened'] : ''}`}>
      <div className={style['popup__container']}>
        <div className={style['popup__content']}>
          <div className={style['popup__header']}>
            <h6 className={style['popup__title']}>{t('lang')}</h6>
            <button
              type='bitton'
              className={style['popup__button-close']}
              onClick={closePopup}
            >x</button>
          </div>
          <ul className={style['popup__body']}>
            <li className={style['popup__item']}>
              <button
                className={`${style['popup__button-country']}
                ${style['popup__button-country_us']}`}
                id='EN'
                onClick={changeLanguage}
              >
                English
              </button>
            </li>
            <li className={style['popup__item']}>
              <button
                className={`${style['popup__button-country']}
                ${style['popup__button-country_ru']}`}
                id='RU'
                onClick={changeLanguage}
              >
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