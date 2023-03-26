import style from '../styles/Main.module.scss'

export default function Home() {
  return (
    <>
      <section className={style.hero}>
          <div className={style.hero__info}>
            <h2 className={`${['h2-title']} ${style.hero__title}`}>PSB HOSTING</h2>
            <p className={style.hero__text}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente assumenda repudiandae, voluptas fugit obcaecati iusto facere harum, nam minus, ab animi tempora saepe aliquid ratione reprehenderit deserunt officia quidem esse.
            </p>
            <p className={style.hero__text}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente assumenda repudiandae, voluptas fugit obcaecati iusto facere harum, nam minus, ab animi tempora saepe aliquid ratione reprehenderit deserunt officia quidem esse.
            </p>
            <p className={style.hero__text}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente assumenda repudiandae, voluptas fugit obcaecati iusto facere harum, nam minus, ab animi tempora saepe aliquid ratione reprehenderit deserunt officia quidem esse.
            </p>
            <button className={style.hero__btn}>
              <a href="/company">О компании</a>
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
                <img src="/nl.svg" alt="netherlands" className={style['country__item-img']}/>
                <h4 className={`${['h4-title']} ${style['country__item-title']}`}>Netherlands</h4>
                <div className={style['country__item-info']}>
                  <p>DMCA 100% ignored</p>
                  <p>DMCA 100% ignored</p>
                  <p>DMCA 100% ignored</p>
                </div>
                <a href="/vds" className={style['country__item-btn']}>Show Plans</a>
            </div>
            <div className={style.country__item}>
                <img src="/nl.svg" alt="netherlands" className={style['country__item-img']}/>
                <h4 className={`${['h4-title']} ${style['country__item-title']}`}>Netherlands</h4>
                <div className={style['country__item-info']}>
                  <p>DMCA 100% ignored</p>
                  <p>DMCA 100% ignored</p>
                  <p>DMCA 100% ignored</p>
                </div>
                <a href="/vds" className={style['country__item-btn']}>Show Plans</a>
            </div>
            <div className={style.country__item}>
                <img src="/nl.svg" alt="netherlands" className={style['country__item-img']}/>
                <h4 className={`${['h4-title']} ${style['country__item-title']}`}>Netherlands</h4>
                <div className={style['country__item-info']}>
                  <p>DMCA 100% ignored</p>
                  <p>DMCA 100% ignored</p>
                  <p>DMCA 100% ignored</p>
                </div>
                <a href="/vds" className={style['country__item-btn']}>Show Plans</a>
            </div>
            <div className={style.country__item}>
                <img src="/nl.svg" alt="netherlands" className={style['country__item-img']}/>
                <h4 className={`${['h4-title']} ${style['country__item-title']}`}>Netherlands</h4>
                <div className={style['country__item-info']}>
                  <p>DMCA 100% ignored</p>
                  <p>DMCA 100% ignored</p>
                  <p>DMCA 100% ignored</p>
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
                <a href="#">
                  <img src="/android.svg" alt="icon" />
                </a>
              </li>
              <li className={style['about__wrapper-icon']}>
                <a href="#">
                  <img src="/android.svg" alt="icon" />
                </a>
              </li>
              <li className={style['about__wrapper-icon']}>
                <a href="#">
                  <img src="/android.svg" alt="icon" />
                </a>
              </li>
              <li className={style['about__wrapper-icon']}>
                <a href="#">
                  <img src="/android.svg" alt="icon" />
                </a>
              </li>
            </ul>
            <button className={style['about__wrapper-btn']}>
              <a href="#">Купить VPN</a>
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
            <li>Netherlands</li>
            <li>Netherlands</li>
            <li>Netherlands</li>
            <li>Netherlands</li>
            <li>Netherlands</li>
            <li>Netherlands</li>
            <li>Netherlands</li>
            <li>Netherlands</li>
            <li>Netherlands</li>
            <li>Netherlands</li>
            <li>Netherlands</li>
            <li>Netherlands</li>
            <li>Netherlands</li>
            <li>Netherlands</li>
            <li>Netherlands</li>
            <li>Netherlands</li>
            <li>Netherlands</li>
            <li>Netherlands</li>
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

