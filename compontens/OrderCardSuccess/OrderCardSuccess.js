import Link from 'next/link';
import 'iconify-icon';
import style from '../../styles/OrderCard.module.scss';

const OrderCardSuccess = ({ status, price, name, autoRenewal, deadline, id }) => {
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
            Статус:&nbsp;
            <span className={`${style['card__status']} ${style['card__status_blue']}`}>{status}</span>
          </li>
          <li className={style['card__item']}>
            {`Цена: ${price}`}
          </li>
          <li className={style['card__item']}>
            {`Статус: ${status}`}
          </li>
          <li className={style['card__item']}>
            {`Наименование услуги: ${name}`}
          </li>
          <li className={style['card__item']}>
            Авто-продление:&nbsp;
            <span className={style['card__text-denger']}>{autoRenewal}</span>
          </li>
          <li className={style['card__item']}>
            {`Дата блокировки: ${deadline}`}
          </li>
        </ul>
      </div>
      <div className={style['card__footer']}>
        <Link className={style['card__button-link']} href={`/account/profile/order/${id}`}>
          <iconify-icon icon="simple-line-icons:key"></iconify-icon>
          &nbsp;Перейти в заказ
        </Link>
        <p className={style['card__message']}>
          Заказ обработан и готов к работе, для ознакомления с данными,
          пожалуйста, перейдите в заказ.
        </p>
      </div>
    </li>
  );
}

export default OrderCardSuccess;