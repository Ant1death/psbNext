import { useState, useEffect } from 'react';
import { IBM_Plex_Sans } from '@next/font/google';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

import useWindowWidth from '../../hooks/useWindowWidth';
import AccountHeader from '../AccountHeader/AccountHeader';
import AccountFooter from '../AccountFooter/AccountFooter';
import AccountSidebar from '../AccountSidebar/AccountSidebar';
import PopupLanguage from '../PopupLanguage/PopupLanguage';
import PopupProfile from '../PopupProfile/PopupProfile';
import Breadcrumbs from '../../compontens/Breadcrumbs/Breadcrumbs';
import ButtonToTop from '../../compontens/ButtonToTop/ButtonToTop';
import ButtonTelegram from '../../compontens/ButtonTelegram/ButtonTelegram';
import Preloader from '../../compontens/Preloader/Preloader';

import { checkAuth } from '../../api/checkAuth';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500'],
});

const LayoutAccount = ({ children }) => {
  const [isOpenPopupLanguage, setIsOpenPopupLanguage] = useState(false);
  const [isOpenPopupProfile, setIsOpenPopupProfile] = useState(false);
  const [xCoordPopupProfile, setXCoordPopupProfile] = useState(0);
  const [isButtonSidebarMiniHidden, setIsButtonSidebarMiniHidden] = useState(false);
  const [isSidebarMini, setIsSideBarMini] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isHeaderNamenuVisible, setIsHeaderNamenuVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const windowWidth = useWindowWidth();
  const router = useRouter();
  const { t } = useTranslation();

  const checkName = async (token) => {
    const username = localStorage.getItem('username');

    const name = await checkAuth(token);

    if (!name || !username || name.username !== username) {
      router.push('/login');
    } else {
      setIsLoading(true);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    token ? checkName(token) : router.push('/login');
  }, []);

  const chooseLanquage = () => {
    setIsOpenPopupLanguage(true);
  }

  const closePopupLanguage = () => {
    setIsOpenPopupLanguage(false);
  }

  const handleBackgroundClose = (evt) => {
    if (evt.target.classList.value.toString().includes('popup_opened')
      || evt.target.classList.value.toString().includes('popup__container')
      || evt.target.classList.value.toString().includes('popup__notification-nemu')
      || evt.target.classList.value.toString().includes('popup__profile-heading')
      || evt.target.classList.value.toString().includes('popup__profile-link')
      || evt.target.classList.value.toString().includes('popup__profile-button-exit')
    ) {
      closeAllPopup();
    }
  }

  const openPopupProfile = (right) => {
    setXCoordPopupProfile(right);
    setIsOpenPopupProfile(true);
  }

  const closePopupProfile = () => {
    setIsOpenPopupProfile(false);
  }

  const closeAllPopup = () => {
    closePopupLanguage();
    closePopupProfile();
  }

  const toggleSidebar = () => {
    if (windowWidth > 991) {
      if (isSidebarMini) {
        setIsSideBarMini(false);
        setIsButtonSidebarMiniHidden(false);
      } else {
        setIsSideBarMini(true);
        setIsButtonSidebarMiniHidden(true);
      }
    } else {
      setIsSideBarMini(false);
      setIsButtonSidebarMiniHidden(false);
      isSidebarVisible ? setIsSidebarVisible(false) : setIsSidebarVisible(true);
    }
  }

  const mouseEnterSidebar = () => {
    if (isSidebarMini) setIsSideBarMini(false);
  }

  const mouseLeaveSidebar = () => {
    if (!isSidebarMini && isButtonSidebarMiniHidden) setIsSideBarMini(true);
  }

  const toggleHeaderNavmenu = () => {
    isHeaderNamenuVisible ? setIsHeaderNamenuVisible(false) : setIsHeaderNamenuVisible(true);
  }

  useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === 'Escape') {
        closeAllPopup();
      }
    };
    document.addEventListener('keydown', handleEscClose);

    return () => document.removeEventListener('keydown', handleEscClose);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="PSB Hosting" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>{`${t('account-page')}`}</title>
        <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.ico" />
      </Head>
      <div className={ibmPlexSans.className}>
        {!isLoading && <Preloader />}
        {isLoading &&
          <div className='page-account'
            onClick={handleBackgroundClose}
          >
            <AccountSidebar
              isSidebarMini={isSidebarMini}
              mouseEnterSidebar={mouseEnterSidebar}
              mouseLeaveSidebar={mouseLeaveSidebar}
              isSidebarVisible={isSidebarVisible}
              windowWidth={windowWidth}
            />
            <AccountHeader
              chooseLanquage={chooseLanquage}
              openPopupProfile={openPopupProfile}
              setXCoordPopupProfile={setXCoordPopupProfile}
              windowWidth={windowWidth}
              toggleSidebar={toggleSidebar}
              isButtonSidebarMiniHidden={isButtonSidebarMiniHidden}
              isHeaderNamenuVisible={isHeaderNamenuVisible}
              toggleHeaderNavmenu={toggleHeaderNavmenu}
            />
              <main className={`account-main ${isSidebarMini ? 'account-main_sidebar-mini' : ''}`}>
                <Breadcrumbs />
                { children }
              </main>
            <AccountFooter
              isSidebarMini={isSidebarMini}
              windowWidth={windowWidth}
            />
            <PopupLanguage
              isOpen={isOpenPopupLanguage}
              closePopup={closePopupLanguage}
            />
            <PopupProfile
              isOpen={isOpenPopupProfile}
              right={xCoordPopupProfile}
              windowWidth={windowWidth}
            />
            <ButtonToTop />
            <ButtonTelegram />
          </div>
        }
      </div>
    </>
  );
}

export default LayoutAccount;