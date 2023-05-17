import { useTranslation } from 'react-i18next';
import 'iconify-icon';

import Layout from '../compontens/Layout/Layout';
import AbuseCard from '../compontens/AbuseCard/AbuseCard';
import AvailableSystems from '../compontens/AvailableSystems/AvailableSystems';
import FaqItem from '../compontens/FaqItem/FaqItem';
import HostingCard from '../compontens/HostingCard/HostingCard';
import { FAQ_LIST_ABUSE_EN, FAQ_LIST_ABUSE_RU } from '../utils/constants';
import { Advantages } from '../compontens/Advantages/Advantages';

import style from '../styles/Abuse.module.scss';

// ToDo: delete after connecting with API
import { abuseList } from '../utils/data/abuseList';
import { hostings } from '../utils/data/hostings';

Abuse.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  );
}

export default function Abuse() {
  const { t } = useTranslation();

  return (
    <>
      <section className={style['abuse']}>
        <div>
          <h2 className={`${['h2-title']} ${style['abuse__title']}`}>
            {t('abuse-page')}
          </h2>
          <p>{t('abuse-page-about')}</p>
        </div>
        <ul className={style['abuse__list']}>
          {abuseList.map(el => {
            return (
              <AbuseCard
                key={el.id}
                abuseItem={el}
              />
            );
          })}
        </ul>
      </section>
      <section className={style['abuse']}>
        <div>
          <h2 className={`${['h2-title']} ${style['abuse__title']}`}>
            {t('abuse-hosting')}
          </h2>
          <p>{t('abuse-hosting-about')}</p>
        </div>
        <ul className={style['abuse__list']}>
          {hostings.map(el => {
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
      <Advantages />
      <section className={style['faq']}>
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
      </section>
    </>
  );
}