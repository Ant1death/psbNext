import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'iconify-icon';

import Layout from '../compontens/Layout/Layout';
import VpnCard from '../compontens/VpnCard/VpnCard';

import { wrapper } from '../store/store';
import { getProducts } from '../api/getProducts';
import { fetchVpn } from '../store/slices/vpn';
import { useAppSelector } from '../store/hooks';
import { VPN_COUNTRIES } from '../utils/constants';

import style from '../styles/Vpn.module.scss';
import styleAdvantages from '../styles/Advantages.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';

export const getStaticProps = wrapper.getStaticProps(store => async (context) => {
  const dispatch = store.dispatch;

  const data = await getProducts('VPN', `${process.env.BASE_URL}/products/all`);
  const vpn = data && data.products ? data.products : [];
  dispatch(fetchVpn(vpn));

  return {
    props: { }
  }
});

const Vpn = () => {
  const { t } = useTranslation();
  const vpnList = useAppSelector(store => store.vpn.vpn);

  const [searchCountry, setSearchCountry] = useState('');
  const [currentCountry, setCurrentCountry] = useState([]);
  const [isCountryListOpen, setIsCountryListOpen] = useState(false);
  const [currentFlag, setCurrentFlag] = useState('');
  const [currentVpnList, setCurrentVpsList] = useState([]);

  const handleSearch = (evt) => {
    setSearchCountry(evt.target.value);
  }

  const chooseCountry = (evt) => {
    const country = evt.currentTarget.id;
    setSearchCountry('');

    if (currentCountry.length > 0 && currentCountry.includes(country)) {
      const arr = currentCountry.filter(el => el !== country);
      setCurrentCountry(arr);
    } else {
      const arr = [country, ...currentCountry];
      setCurrentCountry(arr);
    }
  }

  const toggleCountryList = () => {
    isCountryListOpen ? setIsCountryListOpen(false) : setIsCountryListOpen(true);
  }

  const handleButtonReset = () => {
    setCurrentCountry([]);
    setSearchCountry('');
    setCurrentVpsList(vpnList);
  }

  const closePopup = () => {
    setIsCountryListOpen(false);
  }

  const filterBySelect = (countries) => {
    const arr = [];
    currentCountry.forEach(el => {
      const vpn = countries.find(item => item.country === el);
      if (vpn) arr.push(vpn);
    });
    setCurrentVpsList(arr);
  }

  useEffect(() => {
    if (currentCountry[0]) {
      VPN_COUNTRIES.forEach(el => {
        if (el.country === currentCountry[0]) setCurrentFlag(el.flag);
      })
    }
  }, [currentCountry[0]]);

  useEffect(() => {
    setCurrentVpsList(vpnList);
  }, [vpnList]);

  useEffect(() => {
    if (currentCountry.length > 0) {
      filterBySelect(vpnList);
    } else {
      setCurrentVpsList(vpnList);
    }
  }, [currentCountry]);

  useEffect(() => {
    if (searchCountry !== '') {
      const search = searchCountry.toLowerCase();
      const arr = vpnList.filter(el => el.country.toLowerCase().includes(search));
      if (currentCountry.length > 0) {
        filterBySelect(arr);
      } else {
        setCurrentVpsList(arr);
      }
    } else {
      if (currentCountry.length > 0) {
        filterBySelect(vpnList);
      } else {
        setCurrentVpsList(vpnList);
      }
    }
  }, [searchCountry]);

  return (
    <main className='main'>
      <div>
        <h2 className={`${['h2-title']} ${style.title}`}>
          {t('vpn-page')}
        </h2>
        <p className={style.subtitle}>
          {t('vpn-page-about')}
        </p>
      </div>

      <section className={style.products}>
        <div className={style.filters}>
          <p className={style.filtersTitle}>
            {t('vpn-countries')}
          </p>
          <div className={style.filtersContainer}>
            <input
              type='text'
              className={style.filtersSearch}
              placeholder={t('placeholder-search')}
              value={searchCountry || ''}
              onChange={handleSearch}
            />
          </div>
          <div className={`${style.filtersContainer}`} onClick={toggleCountryList}>
            {currentCountry && currentCountry.length === 0 &&
              <div className={`${style.countryList} ${isCountryListOpen ? style.countryListOpen : ''}`}>
                <Image
                  src='/nl.svg'
                  alt='Netherlands'
                  width='28'
                  height='20'
                  className={style.flag}
                />
                <span className={style.country}>
                  Netherlands
                </span>
              </div>
            }
            {currentCountry && currentCountry.length === 1 &&
              <div className={`${style.countryList} ${isCountryListOpen ? style.countryListOpen : ''}`}>
                <Image
                  src={currentFlag}
                  alt={currentCountry[0]}
                  width='28'
                  height='20'
                  className={style.flag}
                />
                <span className={style.country}>
                  {currentCountry[0]}
                </span>
              </div>
            }
            {currentCountry && currentCountry.length > 1 &&
              <div className={`${style.countryList} ${isCountryListOpen ? style.countryListOpen : ''}`}>
                <Image
                  src={currentFlag}
                  alt={currentCountry[0]}
                  width='28'
                  height='20'
                  className={style.flag}
                />
                <span className={style.country}>
                  {currentCountry[0]}
                </span>
                <span className={style.amount}>
                  {`& еще ${currentCountry.length - 1}`}
                </span>
              </div>
            }
          </div>
          <ul className={`${style.filtersList} ${isCountryListOpen ? style.filtersListOpen : ''}`}>
            {VPN_COUNTRIES.map((el, ind) => {
              return (
                <li
                  key={ind}
                  className={`${style.countryItem} ${currentCountry.length > 0 && currentCountry.includes(el.country) ? style.countryItemActive : ''}`}
                  onClick={chooseCountry}
                  id={el.country}
                >
                  <Image
                    src={el.flag}
                    alt={el.country}
                    width='28'
                    height='20'
                    className={style.flag}
                  />
                  <span className={style.country}>
                    {el.country}
                  </span>
                </li>
              );
            })}
            <button
              className={style.buttonClose}
              onClick={closePopup}
              aria-label='button close popup'
              type='button'
            ></button>
          </ul>
          <button type='button' className={style.button} onClick={handleButtonReset}>
            {t('filter-clear')}
          </button>
        </div>

        <ul className={style.vpnList}>
          {currentVpnList && currentVpnList.length > 0 && currentVpnList.map(el => {
            return (
              <VpnCard
                key={el.id}
                vpnItem={el}
                classFirstRow={style.rowTable}
              />
            );
          })}
        </ul>
      </section>

      <section className={style['instructions']}>
        <h2 className={`${style['main-title']} ${style['instructions__title']}`}>
          {t('instructions')}
        </h2>
        <ul className={style['instructions__list']}>
          <li className={style['instructions__list-item']}>
            <img alt='icon' src='/icon-one.svg' className={style['instructions__icon']} />
            <p className={`${style['instructions__text']} ${style.textOne}`}>
              {t('instruction-one')}
            </p>
          </li>
          <li className={style['instructions__list-item']}>
            <img alt='icon' src='/icon-two.svg' className={style['instructions__icon']} />
            <p className={`${style['instructions__text']}`}>
              {`${t('instruction-two')} `}
              <Link href='https://www.wireguard.com/install/'>
                Wireguard
              </Link>
            </p>
          </li>
          <li className={style['instructions__list-item']}>
            <img alt='icon' src='/icon-three.svg' className={style['instructions__icon']} />
            <p className={style['instructions__text']}>
              {t('instruction-three')}
            </p>
          </li>
        </ul>
      </section>

      <section className={styleAdvantages['advantages']}>
      <h2 className={`${['h2-title']} ${styleAdvantages['section-title']}`}>
        {t('advantages-title-vps')}
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
              src='./speed.svg'
              alt='icon speed'
              width={81}
              height={77}
              className={styleAdvantages.icon}
            />
            <h4 className={`${['h4-title']} ${styleAdvantages['advantages__title']}`}>
              {t('advantages-vpn-one')}
            </h4>
            <p className={styleAdvantages['advantages__description']}>
              {t('advantages-vpn-one-about')}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styleAdvantages['advantages__list-item']}>
            <Image
              src='./settings.svg'
              alt='icon settings'
              width={81}
              height={77}
              className={styleAdvantages.icon}
            />
            <h4 className={`${['h4-title']} ${styleAdvantages['advantages__title']}`}>
              {t('advantages-vpn-two')}
            </h4>
            <p className={styleAdvantages['advantages__description']}>
              {t('advantages-vpn-two-about')}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styleAdvantages['advantages__list-item']}>
            <Image
              src='./connect.svg'
              alt='icon connect'
              width={81}
              height={77}
              className={styleAdvantages.icon}
            />
            <h4 className={`${['h4-title']} ${styleAdvantages['advantages__title']}`}>
              {t('advantages-vpn-three')}
            </h4>
            <p className={styleAdvantages['advantages__description']}>
              {t('advantages-vpn-three-about')}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styleAdvantages['advantages__list-item']}>
            <Image
              src='./vpn_adv.svg'
              alt='icon countries'
              width={81}
              height={77}
              className={styleAdvantages.icon}
            />
            <h4 className={`${['h4-title']} ${styleAdvantages['advantages__title']}`}>
              {t('advantages-vpn-four')}
            </h4>
            <p className={styleAdvantages['advantages__description']}>
              {t('advantages-vpn-four-about')}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      </section>
      <div className={`${style.overlay} ${isCountryListOpen ? style.overlayVisible : '' }`}></div>
    </main>
  );
}

Vpn.getLayout = function getLayout(page) {
  return (
    <Layout title='- VPN'>
      {page}
    </Layout>
  );
}

export default connect(state => state)(Vpn);