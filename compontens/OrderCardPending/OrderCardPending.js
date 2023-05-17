import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import 'iconify-icon';

import style from '../../styles/OrderCard.module.scss';

const OrderCardPending = ({ status, number, name, autoRenewal }) => {
  const { t } = useTranslation();

  return (
    <li className={style['card']}>
      {/* ToDo: fix link */}
      <Link href='#' className={style['card__header-link']}>
        <img src='/server.png' alt='icon server' className={style['card__img']} />
      </Link>
      <div className={style['card__body']}>
        <h3 className={style['card__title']}>
          <Link href='#' className={style['card__link']}>{status}</Link>
        </h3>
        <ul className={style['card__list']}>
          <li className={style['card__item']}>
            {t('order-status')}&nbsp;
            <span className={`${style['card__status']} ${style['card__status_orange']}`}>{status}</span>
          </li>
          <li className={style['card__item']}>
            {`${t('order-number')} ${number}`}
          </li>
          <li className={style['card__item']}>
            {`${t('order-name')} ${name}`}
          </li>
          <li className={style['card__item']}>
            {t('order-renewal')}&nbsp;
            <span className={style['card__text-denger']}>{autoRenewal}</span>
          </li>
        </ul>
      </div>
      <div className={style['card__footer']}>
        <Link className={style['card__button-link']} href='https://t.me/psbhosting'>
          <iconify-icon icon="ion:rocket-outline"></iconify-icon>
          &nbsp;{t('order-support')}
        </Link>
        <p className={style['card__message']}>
          {t('order-pending-text')}
        </p>
      </div>
    </li>
  );
}

export default OrderCardPending;