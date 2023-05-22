import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import style from '../../styles/LinkToBuyVpn.module.scss';

const LinkToBuyVpn = ({ page }) => {
  const { t } = useTranslation();

  return (
    <>
      <ul className={`${style['about__wrapper-icons']} ${page === 'vpn' ? style['about__wrapper-icons-hidden'] : ''}`}>
        <li className={`${style['about__wrapper-icon']} ${page === 'vpn' ? style['about__wrapper-icon_vpn'] : ''}`}>
          <Link target="_blank" href="https://download.wireguard.com/windows-client/wireguard-installer.exe">
            <img src="/windows-icon.svg" alt="icon" />
          </Link>
        </li>
        <li className={`${style['about__wrapper-icon']} ${page === 'vpn' ? style['about__wrapper-icon_vpn'] : ''}`}>
          <Link href="#">
            <img src="/linux-icon.svg" alt="icon" />
          </Link>
        </li>
        <li className={`${style['about__wrapper-icon']} ${page === 'vpn' ? style['about__wrapper-icon_vpn'] : ''}`}>
          <Link href="https://itunes.apple.com/us/app/wireguard/id1451685025" target="_blank">
            <img src="/apple-icon.svg" alt="icon" />
          </Link>
        </li>
        <li className={`${style['about__wrapper-icon']} ${page === 'vpn' ? style['about__wrapper-icon_vpn'] : ''}`}>
          <Link href="https://play.google.com/store/apps/details?id=com.wireguard.android" target="_blank">
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