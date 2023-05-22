import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import 'iconify-icon';

import style from '../../styles/OrderCard.module.scss';

const OrderCardSuccess = ({ status, price, name, autoRenewal, deadline, id }) => {
  const { t } = useTranslation();

  return (
    <li className={style['card']}>
      {/* ToDo: fix link */}
      <Link href='#' className={style['card__header-link']}>
        <img src='/server.png' alt='icon server' className={style['card__img']} />
      </Link>
      <div className={style['card__body']}>
        <h3 className={style['card__title']}>
          <Link href='#' className={style['card__link']}>{name}</Link>
        </h3>
        <ul className={style['card__list']}>
          <li className={style['card__item']}>
            {t('order-status')}&nbsp;
            <span className={`${style['card__status']} ${style['card__status_blue']}`}>{status}</span>
          </li>
          <li className={style['card__item']}>
            {`${t('order-price')} ${price}`}
          </li>
          <li className={style['card__item']}>
            {`${t('order-name')} ${name}`}
          </li>
          <li className={style['card__item']}>
            {t('order-renewal')}&nbsp;
            <span className={style['card__text-denger']}>{autoRenewal}</span>
          </li>
          <li className={style['card__item']}>
            {`${t('order-date')} ${deadline}`}
          </li>
        </ul>
      </div>
      <div className={style['card__footer']}>
        <Link className={style['card__button-link']} href={`/account/profile/order/${id}`}>
          <iconify-icon icon="simple-line-icons:key"></iconify-icon>
          &nbsp;{t('order-link')}
        </Link>
        <p className={style['card__message']}>
          {t('order-text')}
        </p>
      </div>
    </li>
  );
}

export default OrderCardSuccess;