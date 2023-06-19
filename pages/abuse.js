import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import 'iconify-icon';

import Layout from '../compontens/Layout/Layout';
import AbuseCard from '../compontens/AbuseCard/AbuseCard';
import AvailableSystems from '../compontens/AvailableSystems/AvailableSystems';
import FaqItem from '../compontens/FaqItem/FaqItem';
import HostingCard from '../compontens/HostingCard/HostingCard';
import { Advantages } from '../compontens/Advantages/Advantages';
import { sortHostings } from '../utils/sortHostings';
import { sortVps } from '../utils/sortVps';

import { getProducts } from '../api/getProducts';
import { fetchVdsVpsBulletproof } from '../store/slices/vdsVpsBulletproof';
import { fetchHosting } from '../store/slices/hosting';
import { wrapper } from '../store/store';
import { AbusePage } from '../compontens/AbusePage/AbusePage';
import { HostingPage } from '../compontens/HostingPage/HostingPage';

import style from '../styles/Abuse.module.scss';

export const getStaticProps = wrapper.getStaticProps(store => async (context) => {
  const dispatch = store.dispatch;

  const vpsData = await getProducts('Bulletproof VDS', `${process.env.BASE_URL}/products/all`);
  const vps = vpsData && vpsData.products ? vpsData.products : [];
  const vdsData = await getProducts('Bulletproof VPS', `${process.env.BASE_URL}/products/all`);
  const vds = vdsData && vdsData.products ? vdsData.products : [];
  dispatch(fetchVdsVpsBulletproof(sortVps(vds.concat(vps))));

  const hostings = await getProducts('Hosting', `${process.env.BASE_URL}/products/all`);
  const hosting = hostings && hostings.products ? hostings.products : [];

  dispatch(fetchHosting(sortHostings(hosting)));

  return {
    props: { }
  }
});

const Abuse = () => {
  const { t } = useTranslation();

  const [activeBlock, setActiveBlock] = useState('Bulletproof VPS/VDS');

  const changePage = (evt) => {
    setActiveBlock(evt.currentTarget.textContent);
  }

  return (
    <main className={`${['main']} ${style.main}`}>
      <div className={`${style.vpsTitle} ${activeBlock === 'Bulletproof VPS/VDS' ? style.visible : ''}`}>
        <h2 className={`${['h2-title']} ${style.title}`}>
          Bulletproof
        </h2>
        <p className={style.subtitle}>
          {t('bulletproof-subtitle')}
        </p>
      </div>
      <div className={`${style.vpsTitle} ${activeBlock === 'Bulletproof Hosting' ? style.visible : ''}`}>
        <h2 className={`${['h2-title']} ${style.title}`}>
          Bulletproof Hosting
        </h2>
        <p className={style.subtitle}>
          {t('abuse-hosting-about')}
        </p>
      </div>

      <ul className={style.pageList}>
        <li
          onClick={changePage}
          className={`${style.pageItem} ${activeBlock === 'Bulletproof VPS/VDS' ? style.pageItemActive : ''}`}
        >
          Bulletproof VPS/VDS
        </li>
        <li
          onClick={changePage}
          className={`${style.pageItem} ${activeBlock === 'Bulletproof Hosting' ? style.pageItemActive : ''}`}
        >
          Bulletproof Hosting
        </li>
      </ul>

      {activeBlock === 'Bulletproof VPS/VDS' && <AbusePage />}
      {activeBlock === 'Bulletproof Hosting'&& <HostingPage />}

       {/*  <section className={style['abuse']}>
       <ul className={style['abuse__list']}>
          {vdsVpsBulletproof && vdsVpsBulletproof.map((el, ind) => {
            return (
              <AbuseCard
                key={ind}
                abuseItem={el}
              />
            );
          })}
        </ul>
      </section>
      <section className={style['abuse']}>
        <div>
          <h2 className={`${['h2-title']} ${style['abuse__title']}`} id='hosting'>
            {t('abuse-hosting')}
          </h2>
          <p>{t('abuse-hosting-about')}</p>
        </div>
        <ul className={style['abuse__list']}>
          {hosting && hosting.map(el => {
            return (
              <HostingCard
                key={el.id}
                hostingItem={el}
              />
            );
          })}
        </ul>
      </section>
      <AvailableSystems />
      <Advantages sectionTitle='' />*/}
    </main>
  );
}

Abuse.getLayout = function getLayout(page) {
  return (
    <Layout title='- VPS/VDS'>
      {page}
    </Layout>
  );
}

export default connect(state => state)(Abuse);