import { useState } from 'react';
import Link from 'next/link';
import style from '../../styles/FaqItem.module.scss';

const FaqItem = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClickQuestion = () => {
    isActive ? setIsActive(false) : setIsActive(true);
  }

  return (
    <li className={style['faq__item']}>
      <div className={style['faq__question']} onClick={handleClickQuestion}>
        <h4 className={`${['h4-title']} ${style['faq__title']}`}>
          {question}
        </h4>
        <iconify-icon icon="material-symbols:keyboard-arrow-down-rounded"></iconify-icon>
      </div>
      <p className={`${style['faq__answer']} ${isActive ? style['faq__answer_active'] : ''}`}>
        {answer.includes('https') &&
          <>
            На официальном сайте&nbsp;
            <Link href="https://www.wireguard.com/install/">https://www.wireguard.com/install/</Link>.
          </>
        }
        {!answer.includes('https') &&
          answer
        }
      </p>
    </li>
  );
}

export default FaqItem;