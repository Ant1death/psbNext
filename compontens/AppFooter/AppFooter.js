import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import useScrollToTop from '../../hooks/useScrollToTop';

import logo from '../../public/logo.png';
import style from '../../styles/AppFooter.module.scss';

function appFooter() {
  const { t } = useTranslation();
  const { goToTop } = useScrollToTop();

  return (
    <footer className={style.footer}>
      <div className={style.wrapper}>
        <p className={style.footer__copyright}>© PSB Hosting. All Rights Reserved</p>
        <Link href='/' className={style.link_logo}>
          <Image
            src={logo}
            alt='logo PSB'
            width='160'
            height='50'
            className={style.logo}
          />
        </Link>
        <nav className={style.footer__wrapper}>
          <ul className={style.navbar}>
            <li>
              <Link href='/' className={style.navbar__link}>
                {t('home')}
              </Link>
            </li>
            <li>
              <Link href='/vps' className={style.navbar__link}>
                VPS/VDS
              </Link>
            </li>
            <li>
              <Link href='/vpn' className={style.navbar__link}>
                VPN
              </Link>
            </li>
            <li>
              <Link href='/abuse' className={style.navbar__link}>
                Bulletproof
              </Link>
            </li>
            <li>
              <Link href='/company' className={style.navbar__link}>
                {t('company')}
              </Link>
            </li>
          </ul>
        </nav>
        <button
          type='button'
          aria-label='кнопка вверх'
          onClick={goToTop}
          className={style.buttonToTop}
        ></button>
      </div>
    </footer>
  );
}

export default appFooter;