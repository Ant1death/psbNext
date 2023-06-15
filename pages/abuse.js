import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import 'iconify-icon';

import Layout from '../compontens/Layout/Layout';
import AbuseCard from '../compontens/AbuseCard/AbuseCard';
import AvailableSystems from '../compontens/AvailableSystems/AvailableSystems';
import FaqItem from '../compontens/FaqItem/FaqItem';
import HostingCard from '../compontens/HostingCard/HostingCard';
/* import { FAQ_LIST_ABUSE_EN, FAQ_LIST_ABUSE_RU } from '../utils/constants'; */
import { Advantages } from '../compontens/Advantages/Advantages';
import { sortHostings } from '../utils/sortHostings';
import { sortVps } from '../utils/sortVps';

import { getProducts } from '../api/getProducts';
import { fetchVdsVpsBulletproof } from '../store/slices/vdsVpsBulletproof';
import { fetchHosting } from '../store/slices/hosting';
import { wrapper } from '../store/store';
import { useAppSelector } from '../store/hooks';

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
    props: {
      hostingList: hosting,
    }
  }
});

const Abuse = (hostingList) => {
  const { t } = useTranslation();
  const vdsVpsBulletproof = useAppSelector(store => store.vdsVpsBulletproof.vdsVpsBulletproof);
  const hosting = useAppSelector(store => store.hosting.hosting);

  return (
    <>
      <section className={style['abuse']}>
        <div>
          <h2 className={`${['h2-title']} ${style['abuse__title']}`} id='servers'>
            {t('abuse-page')}
          </h2>
          <p>{t('abuse-page-about')}</p>
        </div>
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
      <Advantages sectionTitle='' />
     {/*  <section className={style['faq']}>
        <h2 className={`${['h2-title']}`}>{t('faq')}</h2>
        <ul>
          {t('faq-lang') === 'ru' && FAQ_LIST_ABUSE_RU.map(el => {
            return (
              <FaqItem
                key={el.id}
                answer={el.answer}
                question={el.question}
              />
            );
          })}
          {t('faq-lang') === 'en' && FAQ_LIST_ABUSE_EN.map(el => {
            return (
              <FaqItem
                key={el.id}
                answer={el.answer}
                question={el.question}
              />
            );
          })}
        </ul>
      </section> */}
    </>
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