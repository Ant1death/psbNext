import Link from 'next/link';
import Layout from '../compontens/Layout/Layout';
import LinkToBuyVpn from '../compontens/LinkToBuyVpn/LinkToBuyVpn';
import CardVpsOnMainPage from '../compontens/CardVpsOnMainPage/CardVpsOnMainPage';
import style from '../styles/Main.module.scss';
// ToDo: delete after connecting with API
import { vpsCountriesList } from '../utils/data/vpsOnMainPage';

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  );
}

export default function Home() {
  return (
    <>
      <section className={style.hero}>
        <div className={style.hero__info}>
          <h2 className={`${['h2-title']} ${style.hero__title}`}>PSB HOSTING</h2>
          <p className={style.hero__text}>
            Наш хостинг провайдер предоставляет анонимные VPS/VDS.
          </p>
          <p className={style.hero__text}>
            Благодаря серверам, расположенным в оффшорных юрисдикциях, всем нашим международным клиентам гарантируется полная конфиденциальность данных и широкий спектр приемлемого контента.
          </p>
          <p className={style.hero__text}>
            Наша основная задача это анонимность и стабильная работа вашего бизнеса.
          </p>
          <p className={style.hero__text}>
            Расположение наших серверов позволяет игнорировать запросы DCMA. Мы не храним логи и предоставляем качественную техническую поддержку 24/7.
          </p>
          <button className={style.hero__btn}>
            <Link href="/company">О компании</Link>
          </button>
        </div>
        <div className={style.hero__img}>
          <img src="/astronaut.jpg" alt="astronaut" />
        </div>
      </section>
      <section className={style.country}>
        <h2 className={`${['h2-title']} ${style.country__title}`}>Аренда сервера</h2>
        <p className={style.country__title}>
          PSB Hosting предлагает анонимные сервера по всему миру, выберите подходящий тарифный план для ваших задач
        </p>
        <ul className={style.country__wrapper}>
          {vpsCountriesList && vpsCountriesList.map(el => {
            return (
              <CardVpsOnMainPage
                key={el.id}
                country={el}
              />
            );
          })}
        </ul>
      </section>
      <section className={style['ads']}>
        <h2 className={`${['h2-title']}`}>Абузоустойчивые сервера</h2>
        <p className={style['ads__subtitle']}>
          Bulletproof VPS и Hosting по лучшим ценам
        </p>
        <ul className={style['ads__list']}>
          <li className={style['ads__item']}>
            <h3 className={style['ads__card-title']}>
              Bulletproof VPS
            </h3>
            <ul className={style['ads__card-list']}>
              <li>100% абузоустойчевые VPS</li>
              <li>Процессор Xeon Ryzen 9 и Intel i7</li>
              <li>NVMe диски</li>
              <li>Linux &amp; Windows</li>
            </ul>
            <Link href='/abuse' className={style['ads__link']}>
              Подробнее
            </Link>
          </li>
          <li className={style['ads__item']}>
            <h3 className={style['ads__card-title']}>
              Bulletproof hosting
            </h3>
            <ul className={style['ads__card-list']}>
              <li>100% абузоустойчевые VPS</li>
              <li>Защита от DDos атак</li>
              <li>Панель IPSmanagerr</li>
              <li>До 50 сайтов на одном хостинге</li>
            </ul>
            <Link href='/abuse' className={style['ads__link']}>
              Подробнее
            </Link>
          </li>
        </ul>
      </section>
      <section className={style['about']}>
        <div className={style['about__wrapper']}>
          <div className={style['about__wrapper-text']}>
            <h2 className={`${['h2-title']}`}>Приватный VPN с быстрой настройкой WireGuard</h2>
            <p className={style['about__wrapper-info']}>
              Современный и не требовательный к ресурсам протокол VPN-туннелей, использующий надёжные алгоритмы шифрования. WireGuard VPN предназначен для создания защищенных соединений и ориентирован на высокую производительность, безопасность и простоту в настройке.
            </p>
            <LinkToBuyVpn
              page='home'
            />
          </div>
          <img className={style['about__img']} src="/about_main.jpg" alt="picture about vpn" />
        </div>
      </section>
      <section className={style["map"]}>
        <h3 className={`${['h3-title']} ${style.map__title}`}>Наша сеть и центры обработки данных</h3>
        <h4 className={`${['h4-title']} ${style.map__subtitle}`}> Сервера нашей компании находятся по всему миру</h4>
        <div className={style["map-wrapper"]}>
          <ul>
            <li>Netherlands</li>
            <li>UK</li>
            <li>Germany</li>
            <li>Hong Kong</li>
            <li>Israel</li>
            <li>Canada</li>
            <li>Latvia</li>
            <li>Slovakia</li>
            <li>USA</li>
            <li>Czech</li>
            <li>Turkey</li>
            <li>Poland</li>
            <li>Bulgaria</li>
            <li>Romania</li>
            <li>Italy</li>
            <li>Finland</li>
            <li>Hungary</li>
            <li>Portugal</li>
            <li>Sweden</li>
            <li>Switzerland</li>
            <li>Serbia</li>
            <li>Irish</li>
            <li>France</li>
            <li>Spain</li>
          </ul>
        </div>
        <div className={style["map-img"]}>
          <img src="/map.jpg" alt="map" />
        </div>
      </section>
      <section className="payment">
        <h3 className={`${['h3-title']} ${style.payment__title}`}>Способы оплаты</h3>
        <div className={style.payment__wrapper}>
          <div className={style['payment__wrapper-item']}>
            <div className={style["payment__wrapper-img"]}>
              <img src="/Bitcoin.png" alt="bitcoin" />
            </div>
            <div className={style["payment__wrapper-text"]}>Bitcoin</div>
          </div>
          <div className={style['payment__wrapper-item']}>
            <div className={style["payment__wrapper-img"]}>
              <img src="/ethereum.png" alt="Ethereum" />
            </div>
            <div className={style["payment__wrapper-text"]}>Ethereum</div>
          </div>
          <div className={style['payment__wrapper-item']}>
            <div className={style["payment__wrapper-img"]}>
              <img src="/litecoin.svg" alt="Litecoin" />
            </div>
            <div className={style["payment__wrapper-text"]}>Litecoin</div>
          </div>
          <div className={style['payment__wrapper-item']}>
            <div className={style["payment__wrapper-img"]}>
              <img src="/usdt.svg" alt="USDT" />
            </div>
            <div className={style["payment__wrapper-text"]}>USDT</div>
          </div>
          <div className={style['payment__wrapper-item']}>
            <div className={style["payment__wrapper-img"]}>
              <img src="/qiwi.png" alt="Qiwi" />
            </div>
            <div className={style["payment__wrapper-text"]}>Qiwi</div>
          </div>
        </div>
      </section>
    </>
  );
}

