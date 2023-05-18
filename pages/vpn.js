import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import 'iconify-icon';

import Layout from '../compontens/Layout/Layout';
import LinkToBuyVpn from '../compontens/LinkToBuyVpn/LinkToBuyVpn';
import VpnCard from '../compontens/VpnCard/VpnCard';
import FaqItem from '../compontens/FaqItem/FaqItem';

import { wrapper } from '../store/store';
import { getProducts } from '../api/getProducts';
import { fetchVpn } from '../store/slices/vpn';
import { useAppSelector } from '../store/hooks';

import { FAQ_LIST_VPN_RU, FAQ_LIST_VPN_EN } from '../utils/constants';

import style from '../styles/Vpn.module.scss';
import styleAdvantages from '../styles/Advantages.module.scss';

export const getStaticProps = wrapper.getStaticProps(store => async (context) => {
  const dispatch = store.dispatch;

  const { products } = await getProducts('VPN');
  dispatch(fetchVpn(products));
});

const Vpn = () => {
  const { t } = useTranslation();
  const vpnList = useAppSelector(store => store.vpn.vpn);

  return (
    <>
      <section className={style.about}>
        <div className={style['about__wrap']}>
          <img src='/vpn.jpg' alt='vpn' className={style['about__img']} />
        </div>
        <div className={style['about__wrap']}>
          <h2 className={style['main-title']}>
            {t('vpn-page')}
          </h2>
          <p>{t('vpn-page-about')}</p>
          <LinkToBuyVpn
            page='vpn'
          />
        </div>
      </section>
      <section className={style.vpn}>
        <h2 className={style['main-title']}>
          {t('choose-country')}
        </h2>
        <ul className={style['vpn__wrapper']}>
          {vpnList && vpnList.map(el => {
            return (
              <VpnCard
                key={el.id}
                vpnItem={el}
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
              {t('instructionn-three')}
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
      </section>
      <section className={style['faq']}>
        <h2 className={style['main-title']}>
          {t('faq')}
        </h2>
        <ul className={style['faq__list']}>
          {t('faq-lang') === 'ru' && FAQ_LIST_VPN_RU.map(el => {
            return (
              <FaqItem
                key={el.id}
                answer={el.answer}
                question={el.question}
              />
            );
          })}
          {t('faq-lang') === 'en' && FAQ_LIST_VPN_EN.map(el => {
            return (
              <FaqItem
                key={el.id}
                answer={el.answer}
                question={el.question}
              />
            );
          })}
        </ul>
      </section>
    </>
  );
}

Vpn.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  );
}

export default connect(state => state)(Vpn);