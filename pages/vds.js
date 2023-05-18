import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import 'iconify-icon';

import Layout from '../compontens/Layout/Layout';
import FaqItem from '../compontens/FaqItem/FaqItem';
import AvailableSystems from '../compontens/AvailableSystems/AvailableSystems';
import VpsCard from '../compontens/VpsCard/VpsCard';
import { FAQ_LIST_VPS_RU, FAQ_LIST_VPS_EN, VPS_COUNTRY_LIST } from '../utils/constants';
import { Advantages } from '../compontens/Advantages/Advantages';
import { getProducts } from '../api/getProducts';

import style from '../styles/Vps.module.scss';
// ToDo: delete after connecting with API
import { vpsCountries } from '../utils/data/vpsCountries';

Vps.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  );
}

function Vps() {
  const { t } = useTranslation();
  const router = useRouter();

  const [activeCountry, setActiveCountry] = useState(VPS_COUNTRY_LIST[0].country);

  const handleCountryClick = (evt) => {
    const el = evt.currentTarget;
    setActiveCountry(el.id);
  }

  useEffect(() => {
    const country = router.asPath.slice(router.asPath.indexOf('#') + 1);

    for (let i = 0; i < VPS_COUNTRY_LIST.length; i++) {
      if (country.includes(VPS_COUNTRY_LIST[i].country.slice(0, 4))) {
        setActiveCountry(VPS_COUNTRY_LIST[i].country);
        break;
      }
    }
  }, []);

/*   useEffect(() => {
    getProducts().then(res => console.log(res))
  }, []) */

  return (
    <>
      <section className={style.vps}>
        <div>
          <h2 className={`${['h2-title']}`}>VPS/VDS</h2>
          <p>{t('vds-list')}</p>
        </div>
        {/* ToDo: fix with API */}
        <ul className={style['offer__list-country']}>
          {VPS_COUNTRY_LIST.map(el => {
            return (
              <li
                key={el.id}
                className={`${style['offer__country']} ${activeCountry === el.country ? style['offer__country_active'] : ''}`}
                onClick={handleCountryClick}
                id={el.country}
              >
                <img src={el.flag} alt={el.country} className={style['offer__flag']} />
                <span>{el.country}</span>
              </li>
            );
          })}
        </ul>
        <ul className={style['offer__wrapper']}>
          {/* ToDo: fix with API */}
          {vpsCountries.map(el => {
            return (
              <VpsCard
                key={el.id}
                vpsItem={el}
              />
            );
          })}
        </ul>
      </section>
      <AvailableSystems />
      <Advantages />
      <section className={style['faq']}>
      <h2 className={`${['h2-title']}`}>{t('faq')}</h2>
      <ul className={style['faq__items']}>
        {t('faq-lang') === 'ru' && FAQ_LIST_VPS_RU.map(el => {
          return (
            <FaqItem
              key={el.id}
              question={el.question}
              answer={el.answer}
            />
          );
        })}
        {t('faq-lang') === 'en' && FAQ_LIST_VPS_EN.map(el => {
          return (
            <FaqItem
              key={el.id}
              question={el.question}
              answer={el.answer}
            />
          );
        })}
      </ul>
      </section>
    </>
  );
}

export default Vps;