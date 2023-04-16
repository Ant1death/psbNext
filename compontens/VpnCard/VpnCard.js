import Link from 'next/link';
import style from '../../styles/ItemCard.module.scss';

const VpnCard = ({ vpnItem }) => {
  return (
    <li className={style['card']}>
      <div className={style['card__title']}>
        <h3 className={style['card__h3-title']}>
          <img src={vpnItem.img} alt={vpnItem.country} className={style['card__img']} />
          {vpnItem.country}
        </h3>
        <p className={style['card__price']}>
          {vpnItem.price}
        </p>
      </div>
      <ul className={style['card__list']}>
        <li>{vpnItem.port}</li>
        <li>{vpnItem.encryption}</li>
        <li>{vpnItem.support}</li>
        <li>{vpnItem.traffic}</li>
        <li>{vpnItem.device}</li>
      </ul>
      <Link href={`/account/vpn/new/${vpnItem.id}`}>
        Заказать VPN
      </Link>
    </li>
  );
}

export default VpnCard;