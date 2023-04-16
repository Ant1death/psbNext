import Link from 'next/link';
import style from '../../styles/ItemCard.module.scss';

const AbuseCard = ({ abuseItem }) => {
  return (
    <li className={style['card']}>
      <div className={style['card__title']}>
        <h3 className={style['card__h3-title']}>
          {abuseItem.title}
        </h3>
        <p className={style['card__price']}>
          {abuseItem.price}
        </p>
      </div>
      <ul className={style['card__list']}>
        <li>{abuseItem.vCPU}</li>
        <li>{abuseItem.RAM}</li>
        <li>{abuseItem.SSD}</li>
      </ul>
      <Link href={`/account/shop/new/${abuseItem.id}`}>
        Заказать VPN
      </Link>
    </li>
  );
}

export default AbuseCard;