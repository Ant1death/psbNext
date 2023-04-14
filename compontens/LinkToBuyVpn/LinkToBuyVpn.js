import Link from 'next/link';
import style from '../../styles/LinkToBuyVpn.module.scss';

const LinkToBuyVpn = ({ page }) => {
  return (
    <>
      <ul className={style['about__wrapper-icons']}>
        <li className={`${style['about__wrapper-icon']} ${page === 'vpn' ? style['about__wrapper-icon_vpn'] : ''}`}>
          <Link href="#">
            <img src="/windows-icon.svg" alt="icon" />
          </Link>
        </li>
        <li className={`${style['about__wrapper-icon']} ${page === 'vpn' ? style['about__wrapper-icon_vpn'] : ''}`}>
          <Link href="#">
            <img src="/linux-icon.svg" alt="icon" />
          </Link>
        </li>
        <li className={`${style['about__wrapper-icon']} ${page === 'vpn' ? style['about__wrapper-icon_vpn'] : ''}`}>
          <Link href="#">
            <img src="/apple-icon.svg" alt="icon" />
          </Link>
        </li>
        <li className={`${style['about__wrapper-icon']} ${page === 'vpn' ? style['about__wrapper-icon_vpn'] : ''}`}>
          <Link href="#">
            <img src="/android.svg" alt="icon" />
          </Link>
        </li>
      </ul>
      <button className={style['about__wrapper-btn']}>
        <Link href="/accounts/vpn">Купить VPN</Link>
      </button>
    </>
  );
}

export default LinkToBuyVpn;