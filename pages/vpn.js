import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
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
  }

  const closePopup = () => {
    setIsCountryListOpen(false);
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
          {currentVpnList && currentVpnList.map(el => {
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



      {/*
      <section className={style.vpn}>
        <h2 className={style['main-title']}>
          {t('choose-country')}
        </h2>

      </section>
      <section className={style['instructions']}>
        <h2 className={`${style['main-title']} ${style['instructions__title']}`}>
          {t('instructions')}
        </h2>
        <ul className={style['instructions__list']}>
          <li className={style['instructions__list-item']}>
            <img alt='icon' src='/icon-one.png' className={style['instructions__icon']} />
            <p className={style['instructions__text']}>
              {t('instruction-one')}
            </p>
          </li>
          <li className={style['instructions__list-item']}>
            <img alt='icon' src='/icon-two.png' className={style['instructions__icon']} />
            <p className={style['instructions__text']}>
              {t('instruction-two')}&nbsp;
              <Link href='https://www.wireguard.com/install/'>
                Wireguard
              </Link>
            </p>
          </li>
          <li className={style['instructions__list-item']}>
            <img alt='icon' src='/icon-three.png' className={style['instructions__icon']} />
            <p className={style['instructions__text']}>
              {t('instruction-three')}
            </p>
          </li>
        </ul>
      </section>
      <section className={styleAdvantages['advantages']}>
        <h2 className={style['main-title']}>
          {t('advantages')}
        </h2>
        <ul className={styleAdvantages['advantages__list']}>
          <li className={styleAdvantages['advantages__list-item']}>
            <iconify-icon icon="icon-park-twotone:speed-one" height="100"></iconify-icon>
            <h3 className={`${['h4-title']} ${styleAdvantages['advantages__title']}`}>
              {t('advantages-vpn-one')}
            </h3>
            <p className={styleAdvantages['advantages__description']}>
              {t('advantages-vpn-one-about')}
            </p>
          </li>
          <li className={styleAdvantages['advantages__list-item']}>
            <iconify-icon icon="uiw:setting-o" height="100"></iconify-icon>
            <h3 className={`${['h4-title']} ${styleAdvantages['advantages__title']}`}>
              {t('advantages-vpn-two')}
            </h3>
            <p className={styleAdvantages['advantages__description']}>
              {t('advantages-vpn-two-about')}
            </p>
          </li>
          <li className={styleAdvantages['advantages__list-item']}>
            <iconify-icon icon="mdi:shield-account" height="100"></iconify-icon>
            <h3 className={`${['h4-title']} ${styleAdvantages['advantages__title']}`}>
              {t('advantages-vpn-three')}
            </h3>
            <p className={styleAdvantages['advantages__description']}>
              {t('advantages-vpn-three-about')}
            </p>
          </li>
          <li className={styleAdvantages['advantages__list-item']}>
            <iconify-icon icon="ph:globe-hemisphere-west-fill" height="100"></iconify-icon>
            <h3 className={`${['h4-title']} ${styleAdvantages['advantages__title']}`}>
              {t('advantages-vpn-four')}
            </h3>
            <p className={styleAdvantages['advantages__description']}>
              {t('advantages-vpn-four-about')}
            </p>
          </li>
        </ul>
      </section> */}
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