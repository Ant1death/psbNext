import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import 'iconify-icon';

import style from '../../styles/OrderCard.module.scss';

const OrderCardPending = ({ order }) => {
  const { t } = useTranslation();
  const { id, order_id, status, auto_refresh, title } = order;

  return (
    <li className={style['card']}>
      <Link href={`/account/profile/order/${id}`} className={style['card__header-link']}>
        <img src='/server.png' alt='icon server' className={style['card__img']} />
      </Link>
      <div className={style['card__body']}>
        <h3 className={style['card__title']}>
          <Link href={`/account/profile/order/${id}`} className={style['card__link']}>
            {status}
          </Link>
        </h3>
        <ul className={style['card__list']}>
          <li className={style['card__item']}>
            {t('order-status')}&nbsp;
            <span className={`${style['card__status']} ${style['card__status_orange']}`}>
              {status}
            </span>
          </li>
          <li className={style['card__item']}>
            {`${t('order-number')} ${order_id}`}
          </li>
          <li className={style['card__item']}>
            {`${t('order-name')} ${title}`}
          </li>
          <li className={style['card__item']}>
            {t('order-renewal')}&nbsp;
            <span className={auto_refresh ? style['card__text-success'] : style['card__text-denger']}>
              {auto_refresh ? t('auto-refresh-true') : t('auto-refresh-false')}
            </span>
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