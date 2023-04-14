import Link from 'next/link';
import style from '../../styles/VpnCard.module.scss';

const VpnCard = ({ vpnItem }) => {
  return (
    <li className={style['vpn-card']}>
      <div className={style['vpn-card__title']}>
        <h3 className={style['vpn-card__h3-title']}>
          <img src={vpnItem.img} alt={vpnItem.country} className={style['vpn-card__img']} />
          {vpnItem.country}
        </h3>
        <p className={style['vpn-card__price']}>
          {vpnItem.price}
        </p>
      </div>
      <ul className={style['vpn-card__list']}>
        <li>{vpnItem.port}</li>
        <li>{vpnItem.encryption}</li>
        <li>{vpnItem.support}</li>
        <li>{vpnItem.traffic}</li>
        <li>{vpnItem.device}</li>
      </ul>
      <Link href={`/accounts/vpn/new/${vpnItem.id}`}>
        Заказать VPN
      </Link>
    </li>
  );
}

export default VpnCard;