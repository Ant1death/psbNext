import LinkToBuyVpn from '../compontens/LinkToBuyVpn/LinkToBuyVpn';
import style from '../styles/Vpn.module.scss';

export default function Vpn() {
  return (
    <>
      <section className={style.about}>
        <div className={style['about__wrap']}>
          <img src='/vpn.jpg' alt='vpn' className={style['about__img']} />
        </div>
        <div className={style['about__wrap']}>
          <h2 className={style['about__main-title']}>
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
    </>
  );
}