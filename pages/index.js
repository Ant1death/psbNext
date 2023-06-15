import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import Layout from '../compontens/Layout/Layout';
import FaqItem from '../compontens/FaqItem/FaqItem';


import LinkToBuyVpn from '../compontens/LinkToBuyVpn/LinkToBuyVpn';
import CardVpsOnMainPage from '../compontens/CardVpsOnMainPage/CardVpsOnMainPage';
import { VPS_COUNTRY_LIST, PAYMENTS, FAQ_LIST_RU, FAQ_LIST_EN } from '../utils/constants';

import style from '../styles/Main.module.scss';
import styleAdvantages from '../styles/Advantages.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  );
}

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className={style.main}>
      <section className={style.hero}>
        <div className={style.hero__info}>
          <h2 className={`${['h2-title']} ${style.hero__title}`}>
            PSB HOSTING
          </h2>
          <p className={style.hero__text}>{t('hero-one')}</p>
          <p className={style.hero__text}>{t('hero-two')}</p>
          <button className={style.hero__btn}>
            <Link href="/company">{t('company')}</Link>
          </button>
        </div>
        <div className={style.hero__img}>
          <Image
            src="/main_img.png"
            alt="PSB hosting image"
            width={522}
            height={472}
            className={style.img}
          />
        </div>
      </section>

      <section className={styleAdvantages['advantages']}>
        <h2 className={`${['h2-title']} ${styleAdvantages['section-title']}`}>
          {t('advantages-title-main')}
        </h2>
        <Swiper
          modules={[ Pagination ]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            660: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1350: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          pagination={{
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>';
            },
            clickable: true,
          }}
          className='mySwiper'
        >
          <SwiperSlide>
            <div className={styleAdvantages['advantages__list-item']}>
              <Image
                src='./equipment.svg'
                alt='icon equipment'
                width={81}
                height={77}
                className={styleAdvantages.icon}
              />
              <h4 className={`${['h4-title']} ${styleAdvantages['advantages__title']}`}>
                {t('advantages-fix-one')}
              </h4>
              <p className={styleAdvantages['advantages__description']}>
                {t('advantages-fix-one-about')}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styleAdvantages['advantages__list-item']}>
              <Image
                src='./abuse.svg'
                alt='icon Bulletproof'
                width={81}
                height={77}
                className={styleAdvantages.icon}
              />
              <h4 className={`${['h4-title']} ${styleAdvantages['advantages__title']}`}>
                {t('advantages-two')}
              </h4>
              <p className={styleAdvantages['advantages__description']}>
                {t('advantages-two-about')}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styleAdvantages['advantages__list-item']}>
              <Image
                src='./security.svg'
                alt='icon security'
                width={81}
                height={77}
                className={styleAdvantages.icon}
              />
              <h4 className={`${['h4-title']} ${styleAdvantages['advantages__title']}`}>
                {t('advantages-one')}
              </h4>
              <p className={styleAdvantages['advantages__description']}>
                {t('advantages-one-about')}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styleAdvantages['advantages__list-item']}>
              <Image
                src='./vpn_adv.svg'
                alt='icon vpn'
                width={81}
                height={77}
                className={styleAdvantages.icon}
              />
              <h4 className={`${['h4-title']} ${styleAdvantages['advantages__title']}`}>
                {t('advantages-seven')}
              </h4>
              <p className={styleAdvantages['advantages__description']}>
                {t('advantages-seven-about')}
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className={style.servises}>
        <h2 className={`${['h2-title']} ${style.servises__title}`}>
          {t('servises')}
        </h2>
        <ul className={style.servises__wrapper}>
          <li>
            <Link className={`${style.servises__item} ${style.servises__vps}`} href='/vps'>
              <h3 className={style['servises__item-title']}>
                VPS
              </h3>
              <p className={style.servises__text}>
                {t('servises-vps')}
              </p>
            </Link>
          </li>
          <li>
            <Link className={`${style.servises__item} ${style.servises__abuse}`} href='/abuse'>
            <h3 className={style['servises__item-title']}>
                Bulletproof
              </h3>
              <p className={style.servises__text}>
                {t('servises-bulletproof')}
              </p>
            </Link>
          </li>
          <li>
            <Link className={`${style.servises__item} ${style.servises__vpn}`} href='/vpn'>
              <h3 className={style['servises__item-title']}>
                VPN
              </h3>
              <p className={style.servises__text}>
                {t('servises-vpn')}
              </p>
            </Link>
          </li>
        </ul>
      </section>
      <section className={style['payment']}>
        <h2 className={`${['h2-title']}`}>
          {t('payment')}
        </h2>
        <ul className={style.payment__wrapper}>
          {PAYMENTS.map((el, ind) => {
            return (
              <li key={ind} className={style['payment__wrapper-item']}>
                <Image
                  className={style["payment__wrapper-img"]}
                  src={el.img}
                  alt={el.name}
                  width={160}
                  height={160}
                />
                <p className={style["payment__wrapper-text"]}>{el.name}</p>
              </li>
            );
          })}
        </ul>
      </section>

      <section className={style['faq']}>
        <h2 className={`${['h2-title']}  ${style['faq__title']}`}>
          {t('faq')}
        </h2>
        <ul className={style['faq__list']}>
          {t('faq-lang') === 'ru' && FAQ_LIST_RU.map((el, ind) => {
            return (
              <FaqItem
                key={ind}
                answer={el.answer}
                question={el.question}
              />
            );
          })}
          {t('faq-lang') === 'en' && FAQ_LIST_EN.map(el => {
            return (
              <FaqItem
                key={ind}
                answer={el.answer}
                question={el.question}
              />
            );
          })}
        </ul>
      </section>

      <section className={style['review']}>
        <h2 className={`${['h2-title']}  ${style['faq__title']}`}>
          {t('faq')}
        </h2>
        <ul className={style['faq__list']}>
          {t('faq-lang') === 'ru' && FAQ_LIST_RU.map((el, ind) => {
            return (
              <FaqItem
                key={ind}
                answer={el.answer}
                question={el.question}
              />
            );
          })}
          {t('faq-lang') === 'en' && FAQ_LIST_EN.map(el => {
            return (
              <FaqItem
                key={ind}
                answer={el.answer}
                question={el.question}
              />
            );
          })}
        </ul>
      </section>



      <section className={style.country}>
        <h2 className={`${['h2-title']} ${style.country__title}`}>
          {t('rental')}
        </h2>
        <p className={style.country__title}>
          {t('rental-about')}
        </p>
        <ul className={style.country__wrapper}>
          {VPS_COUNTRY_LIST.map(el => {
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
        <h2 className={`${['h2-title']}`}>
          {t('servers')}
        </h2>
        <p className={style['ads__subtitle']}>
          {t('servers-about')}
        </p>
        <ul className={style['ads__list']}>
          <li className={style['ads__item']}>
            <h3 className={style['ads__card-title']}>
              Bulletproof VPS
            </h3>
            <ul className={style['ads__card-list']}>
              <li>{t('vps-one')}</li>
              <li>{t('vps-two')}</li>
              <li>{t('vps-three')}</li>
              <li>Linux &amp; Windows</li>
            </ul>
            <Link href='/abuse/#servers' className={style['ads__link']}>
              {t('button-more')}
            </Link>
          </li>
          <li className={style['ads__item']}>
            <h3 className={style['ads__card-title']}>
              Bulletproof hosting
            </h3>
            <ul className={style['ads__card-list']}>
              <li>{t('hosting-one')}</li>
              <li>{t('hosting-two')}</li>
              <li>{t('hosting-three')}</li>
              <li>{t('hosting-four')}</li>
            </ul>
            <Link href='/abuse/#hosting' className={style['ads__link']}>
              {t('button-more')}
            </Link>
          </li>
        </ul>
      </section>
      <section className={style['about']}>
        <div className={style['about__wrapper']}>
          <div className={style['about__wrapper-text']}>
            <h2 className={`${['h2-title']}`}>
              {t('vpn-title')}
            </h2>
            <p className={style['about__wrapper-info']}>
              {t('vpn-about')}
            </p>
            <LinkToBuyVpn
              page='home'
            />
          </div>
          <img className={style['about__img']} src="/about_main.jpg" alt="picture about vpn" />
        </div>
      </section>
      <section className={style["map"]}>
        <h3 className={`${['h3-title']} ${style.map__title}`}>
          {t('map')}
        </h3>
        <h4 className={`${['h4-title']} ${style.map__subtitle}`}>
          {t('map-about')}
        </h4>
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

    </main>
  );
}

