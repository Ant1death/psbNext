import Link from 'next/link';
import style from '../../styles/AbuseCard.module.scss';

const AbuseCard = ({ abuseItem }) => {
  return (
    <li className={style['abuse-card']}>
      <div className={style['abuse-card__title']}>
        <h3 className={style['abuse-card__h3-title']}>
          {abuseItem.title}
        </h3>
        <p className={style['abuse-card__price']}>
          {abuseItem.price}
        </p>
      </div>
      <ul className={style['abuse-card__list']}>
        <li>{abuseItem.vCPU}</li>
        <li>{abuseItem.RAM}</li>
        <li>{abuseItem.SSD}</li>
      </ul>
      <Link href={`/accounts/vpn/new/${abuseItem.id}`}>
        Заказать VPN
      </Link>
    </li>
  );
}

export default AbuseCard;