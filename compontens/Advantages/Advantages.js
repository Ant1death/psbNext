import { useTranslation } from 'react-i18next';

import style from '../../styles/Advantages.module.scss';

export const Advantages = ({ sectionTitle }) => {
  const { t } = useTranslation();

  return (
    <section className={style['advantages']}>
        <div className={style['section-title']}>
          <h2 className={`${['h2-title']}`}>{sectionTitle}</h2>
        </div>
        <ul className={style['advantages__list']}>
          <li className={style['advantages__list-item']}>
            <iconify-icon icon="ic:twotone-shield" height="100"></iconify-icon>
            <h4 className={`${['h4-title']} ${style['advantages__title']}`}>
              {t('advantages-one')}
            </h4>
            <p className={style['advantages__description']}>
              {t('advantages-one-about')}
            </p>
          </li>
          <li className={style['advantages__list-item']}>
            <iconify-icon icon="mdi:server-shield" height="100"></iconify-icon>
            <h4 className={`${['h4-title']} ${style['advantages__title']}`}>
              {t('advantages-two')}
            </h4>
            <p className={style['advantages__description']}>
              {t('advantages-two-about')}
            </p>
          </li>
          <li className={style['advantages__list-item']}>
            <iconify-icon icon="ion:document-lock" height="100"></iconify-icon>
            <h4 className={`${['h4-title']} ${style['advantages__title']}`}>
              {t('advantages-three')}
            </h4>
            <p className={style['advantages__description']}>
              {t('advantages-three-about')}
            </p>
          </li>
          <li className={style['advantages__list-item']}>
            <iconify-icon icon="streamline:money-currency-bitcoin-circle-1-crypto-circle-payment-blockchain-finance-bitcoin-currency-money" height="100"></iconify-icon>
            <h4 className={`${['h4-title']} ${style['advantages__title']}`}>
              {t('advantages-four')}
            </h4>
            <p className={style['advantages__description']}>
              {t('advantages-four-about')}
            </p>
          </li>
          <li className={style['advantages__list-item']}>
            <iconify-icon icon="gis:search-country" height="100"></iconify-icon>
            <h4 className={`${['h4-title']} ${style['advantages__title']}`}>
              {t('advantages-five')}
            </h4>
            <p className={style['advantages__description']}>
              {t('advantages-five-about')}
            </p>
          </li>
          <li className={style['advantages__list-item']}>
            <iconify-icon icon="clarity:ssd-line" height="100"></iconify-icon>
            <h4 className={`${['h4-title']} ${style['advantages__title']}`}>
              {t('advantages-six')}
            </h4>
            <p className={style['advantages__description']}>
              {t('advantages-six-about')}
            </p>
          </li>
          <li className={style['advantages__list-item']}>
            <iconify-icon icon="iconoir:private-wifi" height="100"></iconify-icon>
            <h4 className={`${['h4-title']} ${style['advantages__title']}`}>
              {t('advantages-seven')}
            </h4>
            <p className={style['advantages__description']}>
              {t('advantages-seven-about')}
            </p>
          </li>
          <li className={style['advantages__list-item']}>
            <iconify-icon icon="bx:support" height="100"></iconify-icon>
            <h4 className={`${['h4-title']} ${style['advantages__title']}`}>
              {t('advantages-eight')}
            </h4>
            <p className={style['advantages__description']}>
              {t('advantages-eight-about')}
            </p>
          </li>
        </ul>
      </section>
  );
}