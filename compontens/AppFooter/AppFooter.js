import Link from 'next/link';
import style from '../../styles/AppFooter.module.scss'

function appFooter() {
  return (
    <footer className={style.footer}>
      <p className={style.footer__copyright}>© PSB Hosting. All Rights Reserved</p>
      <div className={style.footer__wrapper}>
        <nav>
          <Link href="/company" className={style.navbar__link}>О компании</Link>
          <Link href="/vps" className={style.navbar__link}>VPS</Link>
          <Link href="/abuse" className={style.navbar__link}>Bulletproof VPS</Link>
          <Link href="/vpn" className={style.navbar__link}>VPN</Link>
        </nav>
      </div>
    </footer>
  );
}

export default appFooter;