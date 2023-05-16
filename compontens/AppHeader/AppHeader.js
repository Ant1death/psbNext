import { useState } from 'react';
import Link from 'next/link';
import 'iconify-icon';
import { useTranslation } from 'react-i18next';

import Language from '../../compontens/Language/Language';

import style from '../../styles/AppHeader.module.scss';

function appHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { t } = useTranslation();

  const handleHamburgerClick = () => {
    isMobileMenuOpen ? setIsMobileMenuOpen(false) : setIsMobileMenuOpen(true);
  }

  const handleClickLink = () => {
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  }

  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Link href="/" className={style.header__logo}>
          <img src="/logo.png" alt="logo" />
        </Link>
      </div>
      <nav className={style.navbar}>
        <ul className={`${style['navbar__list']} ${isMobileMenuOpen ? style.navbar__list_show : ''}`}>
          <li>
            <Link href="/" className={style.navbar__link} onClick={handleClickLink}>
              {t('home')}
            </Link>
          </li>
          <li>
            <Link href="/vds" className={style.navbar__link} onClick={handleClickLink}>
              VPS/VDS
            </Link>
          </li>
          <li>
            <Link href="/vpn" className={style.navbar__link} onClick={handleClickLink}>
              VPN
            </Link>
          </li>
          <li>
            <Link href="/abuse" className={style.navbar__link} onClick={handleClickLink}>
              Bulletproof VPS
            </Link>
          </li>
          <li>
            <Link href="/company" className={style.navbar__link} onClick={handleClickLink}>
              {t('company')}
            </Link>
          </li>
          <li>
            <Language />
          </li>
          <li>
            <Link href="/account" className={style.header__login}>
              {t('account')}
            </Link>
          </li>
        </ul>
      </nav>
      <div className={style.hamburger} onClick={handleHamburgerClick}>
        <iconify-icon icon="charm:menu-hamburger" width="40" heigth="40"></iconify-icon>
      </div>
    </header>
  )
}

export default appHeader;