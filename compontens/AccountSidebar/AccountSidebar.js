import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import 'iconify-icon';

import style from '../../styles/AccountSidebar.module.scss';

const AccountSidebar = ({
  isSidebarMini,
  mouseEnterSidebar,
  mouseLeaveSidebar,
  isSidebarVisible,
  windowWidth,
}) => {
  const { t } = useTranslation();

  return (
    <aside
      className={`${style['sidebar']} ${isSidebarMini ? style['sidebar_mini'] : ''} ${(isSidebarVisible && windowWidth <= 991) ? style['sidebar_visible'] : ''}`}
      onMouseEnter={mouseEnterSidebar}
      onMouseLeave={mouseLeaveSidebar}
    >
      <div className={style['sidebar__header']}>
        <Link href='/account'>
          <img src='/logo.png' alt='logo' />
        </Link>
      </div>
      <nav className={`${style['sidebar__nav-menu']} ${isSidebarMini ? style['sidebar__nav-menu_mini'] : ''}`}>
        <ul className={`${style['sidebar__nav-menu-list']} ${isSidebarMini ? style['sidebar__nav-menu-list_hidden'] : ''}`}>
          <li className={style['sidebar__item']} >
            <h3 className={style['sidebar__subtitle']}>
              {t('home-page')}
            </h3>
            <Link href='/account'>
              <iconify-icon icon="mi:grid"></iconify-icon>
              {t('account-page')}
            </Link>
          </li>
          <li className={style['sidebar__item']} >
            <h3 className={style['sidebar__subtitle']}>
              {t('category-store')}
            </h3>
            <ul>
              <li>
                <Link href='/account/shop'>
                  <iconify-icon icon="lucide:server"></iconify-icon>
                  {t('link-vps')}
                </Link>
              </li>
              <li>
                <Link href='/account/shop/bulletproof'>
                  <iconify-icon icon="ph:text-b-bold"></iconify-icon>
                  {t('link-abuse')}
                </Link>
              </li>
              <li>
                <Link href='/account/shop/hosting'>
                  <iconify-icon icon="fa:plug"></iconify-icon>
                  {t('link-hosting')}
                </Link>
              </li>
              <li>
                <Link href='/account/shop/vpn'>
                  <iconify-icon icon="fa6-solid:rocket"></iconify-icon>
                  {t('link-vpn')}
                </Link>
              </li>
            </ul>
          </li>
          <li className={style['sidebar__item']} >
            <h3 className={style['sidebar__subtitle']}>
              {t('category-finances')}
            </h3>
            <Link href='/account/balance'>
              <iconify-icon icon="lucide:credit-card"></iconify-icon>
              {t('link-wallet')}
            </Link>
          </li>
          <li className={style['sidebar__item']} >
            <h3 className={style['sidebar__subtitle']}>
              {t('category-support')}
            </h3>
            <ul>
              <li>
                <Link href='https://psb-hosting-pro.gitbook.io/documentations/'>
                  <iconify-icon icon="ci:book-open"></iconify-icon>
                  {t('link-doc')}
                </Link>
              </li>
              <li>
                <Link href='/account/rules'>
                  <iconify-icon icon="material-symbols:help-outline-rounded"></iconify-icon>
                  {t('link-service')}
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <ul className={`${style['sidebar__nav-menu-mini']} ${isSidebarMini ? style['sidebar__nav-menu-mini_show'] : ''}`}>
          <li className={style['sidebar__item']} >
            <Link href='/account'>
              <iconify-icon icon="mi:grid"></iconify-icon>
            </Link>
          </li>
          <li className={style['sidebar__item']} >
            <Link href='/account/shop'>
              <iconify-icon icon="lucide:server"></iconify-icon>
            </Link>
          </li>
          <li className={style['sidebar__item']}>
            <Link href='/account/shop/bulletproof'>
              <iconify-icon icon="ph:text-b-bold"></iconify-icon>
            </Link>
          </li>
          <li className={style['sidebar__item']}>
            <Link href='/account/shop/hosting'>
              <iconify-icon icon="fa:plug"></iconify-icon>
            </Link>
          </li>
          <li className={style['sidebar__item']}>
            <Link href='/account/vpn'>
              <iconify-icon icon="fa6-solid:rocket"></iconify-icon>
            </Link>
          </li>
          <li className={style['sidebar__item']} >
            <Link href='/account/balance'>
              <iconify-icon icon="lucide:credit-card"></iconify-icon>
            </Link>
          </li>
          <li className={style['sidebar__item']} >
            <Link href='https://psb-hosting-pro.gitbook.io/documentations/'>
              <iconify-icon icon="ci:book-open"></iconify-icon>
            </Link>
          </li>
          <li className={style['sidebar__item']}>
            <Link href='/account/rules'>
              <iconify-icon icon="material-symbols:help-outline-rounded"></iconify-icon>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default AccountSidebar;