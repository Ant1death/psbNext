import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import style from '../../styles/LinkToBuyVpn.module.scss';

const LinkToBuyVpn = ({ page }) => {
  const { t } = useTranslation();

  return (
    <>
      <ul className={`${style['about__wrapper-icons']} ${page === 'vpn' ? style['about__wrapper-icons-hidden'] : ''}`}>
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
      <button className={`${style['about__wrapper-btn']} ${page === 'vpn' ? style['about__wrapper-btn-vpn'] : ''}`}>
        <Link href="/account/shop/vpn">{t('button-buy')}</Link>
      </button>
    </>
  );
}

export default LinkToBuyVpn;