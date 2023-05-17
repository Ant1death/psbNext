import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import style from '../../styles/Language.module.scss';

const Language = () => {
  const [language, setLanguage] = useState({ lang: 'Русский', img: '/ru.svg' });
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const { i18n } = useTranslation();

  const openLanguageMenu = () => {
    isLanguageMenuOpen ? setIsLanguageMenuOpen(false) : setIsLanguageMenuOpen(true);
  }

  const changeLanguage = (evt) => {
    const el = evt.currentTarget;

    if (el.id === 'ru') {
      setLanguage({ lang: 'Русский', img: '/ru.svg' });
    } else if (el.id = 'en') {
      setLanguage({ lang: 'English', img: '/us.svg' });
    }

    window.localStorage.setItem('MY_LANGUAGE', el.id);
    setIsLanguageMenuOpen(false);
    i18n.changeLanguage(el.id);
  }

  useEffect(() => {
    const lang = localStorage.getItem('MY_LANGUAGE');

    if (lang === 'en') {
      setLanguage({ lang: 'English', img: '/us.svg' });
      i18n.changeLanguage('en');
    } else {
      setLanguage({ lang: 'Русский', img: '/ru.svg' });
      i18n.changeLanguage('ru');
    }
  }, []);

  return (
    <div className={style['language-wrapper']}>
      <p className={style['language__input']} onClick={openLanguageMenu}>
        <img src={language.img} alt="country" />
        <span>{language.lang}</span>
      </p>
      <ul className={`${style['language__list']} ${isLanguageMenuOpen ? style['language__list_visible'] : ''} ${language.lang === 'English' ? style['language__list_reverse'] : ''}`}>
        <li className={style['language__input']} id='ru' onClick={changeLanguage}>
          <img src='/ru.svg' alt="country" />
          <span>Русский</span>
        </li>
        <li className={style['language__input']} id='en' onClick={changeLanguage}>
          <img src='/us.svg' alt="country" />
          <span>English</span>
        </li>
      </ul>
      <button
        src="/caret.svg"
        alt="caret"
        className={`${style['language-caret']} ${isLanguageMenuOpen ? style['language-caret_open'] : ''}`}
        aria-label='button open list languages'
        onClick={openLanguageMenu}
      ></button>
    </div>
  );
}

export default Language;