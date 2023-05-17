import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import style from '../../styles/ItemCard.module.scss';

const VpnCard = ({ vpnItem }) => {
  const { t } = useTranslation();

  return (
    <li className={style['card']}>
      <div className={style['card__title']}>
        <h3 className={style['card__h3-title']}>
          <img src={vpnItem.img} alt={vpnItem.title} className={style['card__img']} />
          {vpnItem.title}
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
      <Link href={`/account/shop/vpn/${vpnItem.id}`}>
        {t('button-order-vpn')}
      </Link>
    </li>
  );
}

export default VpnCard;