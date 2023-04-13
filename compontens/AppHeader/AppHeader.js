import Link from 'next/link';
import style from '../../styles/AppHeader.module.scss';

function appHeader() {
  return(
    <header className={style.header}>
      <div className={style.logo}>
        <Link href="/" className={style.header__logo}>
          <img src="/logo.png" alt="logo" />
        </Link>
      </div>
      <nav className={style.navbar}>
        <ul>
          <li>
            <Link href="/" className={style.navbar__link}>Главная</Link>
          </li>
          <li>
            <Link href="/vps" className={style.navbar__link}>VPS/VDS</Link>
          </li>
          <li>
            <Link href="/vpn" className={style.navbar__link}>VPN</Link>
          </li>
          <li>
            <Link href="/abuse" className={style.navbar__link}>Bulletproof VPS</Link>
          </li>
          <li>
            <Link href="/company" className={style.navbar__link}>О компании</Link>
          </li>
          <li>
            <div className={style['language-wrapper']}>
              <div className={style['language-input']}>
                <img src="/ru.svg" alt="country" />
                <span className="selected">Русский</span>
                <div className={style['language-caret']}>
                  <img src="/caret.svg" alt="caret" />
                </div>
                <ul className="language-menu">
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <Link href="/accounts" className={style.header__login}>Личный кабинет</Link>
          </li>
        </ul>
      </nav>
      <div className={style.hamburger}></div>
    </header>
  )
}

export default appHeader;