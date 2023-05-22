import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import style from '../../styles/AppFooter.module.scss'

function appFooter() {
  const { t } = useTranslation();

  return (
    <footer className={style.footer}>
      <p className={style.footer__copyright}>© PSB Hosting. All Rights Reserved</p>
      <nav className={style.footer__wrapper}>
        <ul>
          <li>
            <Link href='/company' className={style.navbar__link}>
              {t('company')}
            </Link>
          </li>
          <li>
            <Link href='/vds' className={style.navbar__link}>
              VPS
            </Link>
          </li>
          <li>
            <Link href='/abuse' className={style.navbar__link}>
              Bulletproof VPS
            </Link>
          </li>
          <li>
            <Link href='/vpn' className={style.navbar__link}>
              VPN
            </Link>
          </li>
        </ul>
      </nav>
      <ul className={style.footer__reviews}>
        <li>
          <Link
            href='https://ru.hostings.info/psb-hosting-pro.html'
            target='_blank'
            title={t('reviews')}
          >
            <img alt={t('reviews')} src='/hostinginfo.png' />
          </Link>
        </li>
        <li>
          <Link
            href='https://hosting101.ru/psb-hosting'
            target='_blank'
            title={t('reviews')}
          >
            <img alt={t('reviews')} src='/hosting101.png' />
          </Link>
        </li>
        <li>
          <Link
            href='https://hostinghub.ru/psb-hosting'
            target='_blank'
            title={t('reviews')}
          >
            <img alt={t('reviews')} src='/hostinghub.png' />
          </Link>
        </li>
        <li>
          <Link
            href='https://vpsup.ru/reviews/psb-hosting.pro.html'
            target='_blank'
            title={t('reviews')}
          >
            <img alt={t('reviews')} src='/vpsup.png' />
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default appFooter;