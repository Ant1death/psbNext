import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import 'iconify-icon';

import style from '../../styles/FaqItem.module.scss';

const FaqItem = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);
  const { t }= useTranslation();

  const handleClickQuestion = () => {
    isActive ? setIsActive(false) : setIsActive(true);
  }

  return (
    <li className={style['faq__item']}>
      <div className={style['faq__question']} onClick={handleClickQuestion}>
        <p className={style['faq__title']}>
          {question}
        </p>
        <button
          type='button'
          aria-label='кнопка показать ответ'
          className={`${style['faq__button']} ${isActive ? style['faq__button_open'] : ''}`}
        ></button>
      </div>
      <p className={`${style['faq__answer']} ${isActive ? style['faq__answer_active'] : ''}`}>
        {answer}
      </p>
    </li>
  );
}

export default FaqItem;