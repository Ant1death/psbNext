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
    </>
  );
}