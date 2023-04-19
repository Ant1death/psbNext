import Link from 'next/link';
import 'iconify-icon';
import style from '../../styles/OrderCard.module.scss';

const OrderCardPending = ({ status, number, name, autoRenewal }) => {
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
            Статус:&nbsp;
            <span className={`${style['card__status']} ${style['card__status_orange']}`}>{status}</span>
          </li>
          <li className={style['card__item']}>
            {`Номер заказа: ${number}`}
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
        </ul>
      </div>
      <div className={style['card__footer']}>
        <Link className={style['card__button-link']} href='https://t.me/psbhosting'>
          <iconify-icon icon="ion:rocket-outline"></iconify-icon>
          &nbsp;Тех-поддержка
        </Link>
        <p className={style['card__message']}>
          Заказ обрабатывается до 24-х часов, в случае возникновения
          вопросов просим Вас, обратится в тех-поддержку
        </p>
      </div>
    </li>
  );
}

export default OrderCardPending;