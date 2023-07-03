import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { VPN_COUNTRIES } from '../../utils/constants';

import style from '../../styles/ItemCard.module.scss';

const VpnCard = ({ vpnItem, classFirstRow }) => {
  const { t } = useTranslation();

  return (
    <li className={style['card']}>
      <div className={style.title}>
        {VPN_COUNTRIES.map(item => {
          return (
            item.country === vpnItem.country &&
              <img key={vpnItem.id} src={item.flag.slice(1)} alt={vpnItem.country} className={style['card__img']} />
          )
        })}
        <h3 className={style['card__title']}>
          {vpnItem.country}
        </h3>
      </div>
      <p className={style.price}>
        {`$${vpnItem.price}/мес.`}
      </p>
      <table className={style.table}>
        <thead>
          <tr>
            <th className={classFirstRow}>Порт:</th>
            <th className={style.tableVps}>Трафик:</th>
            <th>Подключение:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 ГБ/с</td>
            <td>Безлимитный</td>
            <td>1 устройство</td>
          </tr>
        </tbody>
      </table>
      <ul className={style.caracters}>
        <li>
          <span>Порт:</span>
          <span>1 ГБ/с</span>
        </li>
        <li>
          <span>Трафик:</span>
          <span>Безлимитный</span>
        </li>
        <li>
          <span>Подключение:</span>
          <span>1 устройство</span>
        </li>
      </ul>
      <div className={style['card__order']}>
        <p className={style['card__price']}>
          {`$${vpnItem.price}/мес.`}
        </p>
        <Link href={`/account/shop/vpn/${vpnItem.id}`}>
          {t('button-buy-item')}
        </Link>
      </div>





      {/* <div className={style['card__title']}>
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
      </Link> */}
    </li>
  );
}

export default VpnCard;