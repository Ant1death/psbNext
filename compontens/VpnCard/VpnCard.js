import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { VPN_CHARACTERS_RU, VPN_CHARACTERS_EN, VPN_COUNTRIES } from '../../utils/constants';

import style from '../../styles/ItemCard.module.scss';

const VpnCard = ({ vpnItem }) => {
  const { t } = useTranslation();

  return (
    <li className={style['card']}>
      <div className={style['card__title']}>
        <h3 className={style['card__h3-title']}>
          {VPN_COUNTRIES.map(item => {
            return (
              item.country === vpnItem.country &&
                <img key={vpnItem.id} src={item.flag.slice(1)} alt={`icon ${vpnItem.title}`} className={style['card__img']} />
            )
          })}
          {vpnItem.title}
        </h3>
        <p className={style['card__price']}>
          {`$${vpnItem.price}`}
        </p>
      </div>
      <ul className={style['card__list']}>
        {t('faq-lang') === 'ru' && VPN_CHARACTERS_RU.map((el, ind) => {
          return (
            <li key={ind}>{el}</li>
          );
        })}
        {t('faq-lang') === 'en' && VPN_CHARACTERS_EN.map((el, ind) => {
          return (
            <li key={ind}>{el}</li>
          );
        })}
      </ul>
      <Link href={`/account/shop/vpn/${vpnItem.id}`}>
        {t('button-order-vpn')}
      </Link>
    </li>
  );
}

export default VpnCard;