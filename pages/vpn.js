import Link from 'next/link';
import LinkToBuyVpn from '../compontens/LinkToBuyVpn/LinkToBuyVpn';
import VpnCard from '../compontens/VpnCard/VpnCard';
import style from '../styles/Vpn.module.scss';
// ToDo: delete after connecting with API
import { vpnCountries } from '../utils/data/vpnCountries';

export default function Vpn() {
  return (
    <>
      <section className={style.about}>
        <div className={style['about__wrap']}>
          <img src='/vpn.jpg' alt='vpn' className={style['about__img']} />
        </div>
        <div className={style['about__wrap']}>
          <h2 className={style['main-title']}>
            Приватный VPN WireGuard
          </h2>
          <p>
            Современный протокол VPN, использующий надёжные алгоритмы шифрования.
            Наш VPN предназначен для создания защищенных соединений и ориентирован
            на высокую производительность, простоту настройки и безопасность ваших данных.
          </p>
          <LinkToBuyVpn
            page='vpn'
          />
        </div>
      </section>
      <section className={style.vpn}>
        <h2 className={style['main-title']}>
          Выберете страну VPN
        </h2>
        <ul className={style['vpn__wrapper']}>
          {vpnCountries.map(el => {
            return (
              <VpnCard
                key={el.id}
                vpnItem={el}
              />
            );
          })}
        </ul>
      </section>
      <section className={style['instructions']}>
        <h2 className={`${style['main-title']} ${style['instructions__title']}`}>
          Инструкция по использованию VPN
        </h2>
        <ul className={style['instructions__list']}>
          <li className={style['instructions__list-item']}>
            <img alt='icon' src='/icon-one.png' className={style['instructions__icon']} />
            <p className={style['instructions__text']}>
              Оплатите тариф
            </p>
          </li>
          <li className={style['instructions__list-item']}>
            <img alt='icon' src='/icon-two.png' className={style['instructions__icon']} />
            <p className={style['instructions__text']}>
              Загрузите приложения для вашего устройства&nbsp;
              <Link href='https://www.wireguard.com/install/'>
                Wireguard
              </Link>
            </p>
          </li>
          <li className={style['instructions__list-item']}>
            <img alt='icon' src='/icon-three.png' className={style['instructions__icon']} />
            <p className={style['instructions__text']}>
              Используйте данные для подключения, которые мы предоставили вам при покупке тарифного плана
            </p>
          </li>
        </ul>
      </section>
    </>
  );
}