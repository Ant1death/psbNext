import Link from 'next/link';
import style from '../styles/Main.module.scss';

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
        <h2 className={`${['h2-title']} ${style.country__title}`}>Оффшорные VPS/VDS</h2>
        <p className={style.country__title}>
          PSB Hosting предлагает анонимные сервера по всему миру, выберите подходящий тарифный план для ваших задач
        </p>
        <div className={style.country__wrapper}>
          <div className={style.country__item}>
            <img src="/nl.svg" alt="Netherlands" className={style['country__item-img']}/>
            <h4 className={`${['h4-title']} ${style['country__item-title']}`}>Netherlands</h4>
            <div className={style['country__item-info']}>
              <p>DMCA 100% ignored</p>
              <p>Offshore hosting</p>
              <p>Linux & Windows</p>
            </div>
            <Link href="/vds" className={style['country__item-btn']}>Show Plans</Link>
          </div>
          <div className={style.country__item}>
            <img src="/md.svg" alt="Moldowa" className={style['country__item-img']}/>
            <h4 className={`${['h4-title']} ${style['country__item-title']}`}>Moldowa</h4>
            <div className={style['country__item-info']}>
              <p>DMCA 100% ignored</p>
              <p>Offshore hosting</p>
              <p>Linux & Windows</p>
            </div>
            <a href="/vds" className={style['country__item-btn']}>Show Plans</a>
          </div>
          <div className={style.country__item}>
            <img src="/us.svg" alt="USA" className={style['country__item-img']}/>
            <h4 className={`${['h4-title']} ${style['country__item-title']}`}>USA</h4>
            <div className={style['country__item-info']}>
              <p>Offshore hosting</p>
              <p>Linux & Windows</p>
            </div>
            <a href="/vds" className={style['country__item-btn']}>Show Plans</a>
          </div>
          <div className={style.country__item}>
            <img src="/nl.svg" alt="Hong Kong" className={style['country__item-img']}/>
            <h4 className={`${['h4-title']} ${style['country__item-title']}`}>Hong Kong</h4>
            <div className={style['country__item-info']}>
              <p>Offshore hosting</p>
              <p>Linux & Windows</p>
            </div>
            <a href="/vds" className={style['country__item-btn']}>Show Plans</a>
          </div>
        </div>
      </section>
      <section className={style['about']}>
        <div className={style['about__wrapper']}>
          <div className={style['about__wrapper-text']}>
            <h2 className={`${['h2-title']}`}>Приватный VPN с быстрой настройкой WireGuard</h2>
            <p className={style['about__wrapper-info']}>
              Современный и не требовательный к ресурсам протокол VPN-туннелей, использующий надёжные алгоритмы шифрования. WireGuard VPN предназначен для создания защищенных соединений и ориентирован на высокую производительность, безопасность и простоту в настройке.
            </p>
            <ul className={style['about__wrapper-icons']}>
              <li className={style['about__wrapper-icon']}>
                <Link href="#">
                  <img src="/windows-icon.svg" alt="icon" />
                </Link>
              </li>
              <li className={style['about__wrapper-icon']}>
                <Link href="#">
                  <img src="/linux-icon.svg" alt="icon" />
                </Link>
              </li>
              <li className={style['about__wrapper-icon']}>
                <Link href="#">
                  <img src="/apple-icon.svg" alt="icon" />
                </Link>
              </li>
              <li className={style['about__wrapper-icon']}>
                <Link href="#">
                  <img src="/android.svg" alt="icon" />
                </Link>
              </li>
            </ul>
            <button className={style['about__wrapper-btn']}>
              <Link href="/accounts/vpn">Купить VPN</Link>
            </button>
          </div>
          <div className={style['about__wrapper-img']}>
            <img src="/phone2.png" alt="phone" />
          </div>
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
              <img src="/Bitcoin.png" alt="bitcoin" />
            </div>
            <div className={style["payment__wrapper-text"]}>Bitcoin</div>
          </div>
          <div className={style['payment__wrapper-item']}>
            <div className={style["payment__wrapper-img"]}>
              <img src="/Bitcoin.png" alt="bitcoin" />
            </div>
            <div className={style["payment__wrapper-text"]}>Bitcoin</div>
          </div>
          <div className={style['payment__wrapper-item']}>
            <div className={style["payment__wrapper-img"]}>
              <img src="/Bitcoin.png" alt="bitcoin" />
            </div>
            <div className={style["payment__wrapper-text"]}>Bitcoin</div>
          </div>
          <div className={style['payment__wrapper-item']}>
            <div className={style["payment__wrapper-img"]}>
              <img src="/Bitcoin.png" alt="bitcoin" />
            </div>
            <div className={style["payment__wrapper-text"]}>Bitcoin</div>
          </div>
        </div>
      </section>
    </>
  )
}

