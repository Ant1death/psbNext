import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import Layout from '../compontens/Layout/Layout';

import style from '../styles/Company.module.scss';

Company.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  );
}

export default function Company() {
  const { t } = useTranslation();

  return (
    <section className={style['about']}>
      <img alt='picture company' src='/about.jpg' className={style['about__img']} />
      <div className={style['about__text']}>
        <h2 className={`${['h2-title']}`}>{t('company')}</h2>
        <p>{t('company-about')}</p>
        <ul className={style['about__list']}>
          <li>{t('company-one')}</li>
          <li>{t('company-two')}</li>
          <li>{t('company-three')}</li>
          <li>{t('company-four')}</li>
          <li>{t('company-five')}</li>
          <li>{t('company-six')}</li>
          <li>{t('company-seven')}</li>
          <li>{t('company-eigth')}</li>
        </ul>
        <p className={style['about__telegram']}>
          {t('more')}&nbsp;
          <Link href='https://psb-offshore.pro/'>
            {t('site')}
          </Link>
          &nbsp;{t('and')}&nbsp;
          <Link href='https://telegram.me/PSB_Wallet_Bot'>
            {t('tg')}
          </Link>
        </p>
      </div>
    </section>
  );
}