import { useState, useEffect } from 'react';
import { IBM_Plex_Sans } from '@next/font/google';
import useWindowWidth from '../../hooks/useWindowWidth';
import AccountHeader from '../AccountHeader/AccountHeader';
import AccountFooter from '../AccountFooter/AccountFooter';
import AccountSidebar from '../AccountSidebar/AccountSidebar';
import PopupLanguage from '../PopupLanguage/PopupLanguage';
import PopupNotification from '../PopupNotification/PopupNotification';
import PopupProfile from '../PopupProfile/PopupProfile';
import Breadcrumbs from '../../compontens/Breadcrumbs/Breadcrumbs';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
});

const LayoutAccount = ({ children }) => {
  const [isOpenPopupLanguage, setIsOpenPopupLanguage] = useState(false);
  const [isOpenPopupNotification, setIsOpenPopupNotification] = useState(false);
  const [isOpenPopupProfile, setIsOpenPopupProfile] = useState(false);
  const [xCoordPopupNotification, setXCoordPopupNotification] = useState(0);
  const [xCoordPopupProfile, setXCoordPopupProfile] = useState(0);
  const [isButtonSidebarMiniHidden, setIsButtonSidebarMiniHidden] = useState(false);
  const [isSidebarMini, setIsSideBarMini] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isHeaderNamenuVisible, setIsHeaderNamenuVisible] = useState(false);
  const windowWidth = useWindowWidth();

  const chooseLanquage = () => {
    setIsOpenPopupLanguage(true);
  }

  const closePopupLanguage = () => {
    setIsOpenPopupLanguage(false);
  }

  const handleBackgroundClose = (evt) => {
    if (evt.target.classList.value.toString().includes('popup_opened')
      || evt.target.classList.value.toString().includes('popup__container')
      || evt.target.classList.value.toString().includes('popup__notification-title')
      || evt.target.classList.value.toString().includes('popup__notification-nemu')
      || evt.target.classList.value.toString().includes('popup__profile-heading')
      || evt.target.classList.value.toString().includes('popup__profile-link')
      || evt.target.classList.value.toString().includes('popup__profile-button-exit')
    ) {
      closeAllPopup();
    }
  }

  const openPopupNotification = (right) => {
    setXCoordPopupNotification(right);
    setIsOpenPopupNotification(true);
  }

  const openPopupProfile = (right) => {
    setXCoordPopupProfile(right);
    setIsOpenPopupProfile(true);
  }

  const closePopupNotification = () => {
    setIsOpenPopupNotification(false);
  }

  const closePopupProfile = () => {
    setIsOpenPopupProfile(false);
  }

  const closeAllPopup = () => {
    closePopupLanguage();
    closePopupNotification();
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

  useEffect(() => {
    if (windowWidth <= 991) {
      setXCoordPopupNotification(0);
    }
  }, [windowWidth]);

  return (
    <div className={ibmPlexSans.className}>
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
          openPopupNotification={openPopupNotification}
          setXCoordPopupNotification={setXCoordPopupNotification}
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
        <PopupNotification
          isOpen={isOpenPopupNotification}
          right={xCoordPopupNotification}
          windowWidth={windowWidth}
        />
        <PopupProfile
          isOpen={isOpenPopupProfile}
          right={xCoordPopupProfile}
          windowWidth={windowWidth}
        />
      </div>
    </div>
  );
}

export default LayoutAccount;