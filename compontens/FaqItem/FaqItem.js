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
      {typeof(answer) !== 'string' && answer.length === 3 &&
        <>
          <p
            className={`${style['faq__answer']} ${style['faq__answer-list']} ${isActive ? style['faq__answer_active'] : ''}`}
          >
            <span>
              {answer[0]}
            </span>
            <span>
              {answer[1]}
              <Link className={style['faq__link']} href="https://www.wireguard.com/install/" target='_blank'>
                Wireguard
              </Link>
              ,&nbsp;
            </span>
            <span>
              {answer[2]}
            </span>
          </p>
          <ul
            className={`${style['faq__answer']} ${style['faq__list']} ${isActive ? style['faq__list_active'] : ''}`}
          >
            <li>
              {answer[0]}
            </li>
            <li>
              {answer[1]}
              <Link className={style['faq__link']} href="https://www.wireguard.com/install/" target='_blank'>
                Wireguard
              </Link>
              <span>,&nbsp;</span>
            </li>
            <li>
              {answer[2]}
            </li>
          </ul>
        </>
      }
      {typeof(answer) !== 'string' && answer.length === 4 &&
        <p className={`${style['faq__answer']} ${isActive ? style['faq__answer_active'] : ''}`}>
          {answer.map((el, ind) => {
            return (
              <span className={style['faq__span']} key={ind}>
                {el}
              </span>
            );
          })}
        </p>
      }
      {typeof(answer) === 'string' && answer.includes('https') &&
        <p className={`${style['faq__answer']} ${isActive ? style['faq__answer_active'] : ''}`}>
          {`${t('faq-link')}`}
          <span>{' '}</span>
          <Link className={style['faq__link']} href={answer} target='_blank'>
            {answer}
          </Link>
        </p>
      }
      {typeof(answer) === 'string' && !answer.includes('https') &&
        <p className={`${style['faq__answer']} ${isActive ? style['faq__answer_active'] : ''}`}>
          {answer}
        </p>
      }
    </li>
  );
}

export default FaqItem;
