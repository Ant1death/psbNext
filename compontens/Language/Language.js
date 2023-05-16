import { useState } from 'react';

import style from '../../styles/Language.module.scss';

const Language = () => {
  const [language, setLanguage] = useState({ lang: 'Русский', img: '/ru.svg' });
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

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
    setIsLanguageMenuOpen(false);
  }

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