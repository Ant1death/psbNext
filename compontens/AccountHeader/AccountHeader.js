import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import 'iconify-icon';

import AccountHeaderNavmenu from '../AccountHeaderNavmenu/AccountHeaderNavmenu';
import { getUser } from '../../api/getUser';
import { fetchUser } from '../../store/slices/user';
import { useAppDispatch } from '../../store/hooks';

import style from '../../styles/AccountHeader.module.scss';

const AccountHeader = ({
  chooseLanquage,
  openPopupNotification,
  setXCoordPopupNotification,
  windowWidth,
  openPopupProfile,
  setXCoordPopupProfile,
  toggleSidebar,
  isButtonSidebarMiniHidden,
  isHeaderNamenuVisible,
  toggleHeaderNavmenu,
}) => {
  const { i18n } = useTranslation();
  const dispatch = useAppDispatch();

  const fetchData = async (token) => {
    const data = await getUser(token);
    if (data) dispatch(fetchUser(data));
  }

  useEffect(() => {
    const lang = localStorage.getItem('MY_LANGUAGE');
    lang === 'en' ? i18n.changeLanguage('en') : i18n.changeLanguage('ru');
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) fetchData(token);
  }, []);

  return (
    <header className={`${style['header']} ${isButtonSidebarMiniHidden ? style['header_mini'] : ''}`}>
      <button
        className={style['header__toggle-sidebar']}
        type='button'
        aria-label='button toggle sidebar'
        onClick={toggleSidebar}
      ></button>
      <Link className={style['header__link-logo']} href='/account'>
        <img src='/logo.png' alt='logo' />
      </Link>
      <nav className={style['header__navbar-desktop']}>
        <AccountHeaderNavmenu
          chooseLanquage={chooseLanquage}
          openPopupNotification={openPopupNotification}
          setXCoordPopupNotification={setXCoordPopupNotification}
          windowWidth={windowWidth}
          openPopupProfile={openPopupProfile}
          setXCoordPopupProfile={setXCoordPopupProfile}
        />
      </nav>
      <button className={style['header__toggler-menu']} type='button' onClick={toggleHeaderNavmenu}>
        <iconify-icon icon="fluent:more-vertical-24-filled"></iconify-icon>
      </button>
      <nav className={`${style['header__mobile-menu']} ${isHeaderNamenuVisible ? style['header__mobile-menu_show'] : ''}`}>
        <AccountHeaderNavmenu
          chooseLanquage={chooseLanquage}
          openPopupNotification={openPopupNotification}
          setXCoordPopupNotification={setXCoordPopupNotification}
          windowWidth={windowWidth}
          openPopupProfile={openPopupProfile}
          setXCoordPopupProfile={setXCoordPopupProfile}
        >
          {/* ToDo: fix search */}
          <li className={style['header__navbar-item']}>
            <button
              className={`${style['header__button']} ${style['header__button_shearch']}`}
              type='button'
            >
              <iconify-icon icon="ion:search"></iconify-icon>
            </button>
          </li>
        </AccountHeaderNavmenu>
      </nav>
    </header>
  );
}

export default AccountHeader;