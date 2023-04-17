import { useState, useEffect } from 'react';
import { IBM_Plex_Sans } from '@next/font/google';
import useWindowWidth from '../../hooks/useWindowWidth';
import AccountHeader from '../AccountHeader/AccountHeader';
import AccountFooter from '../AccountFooter/AccountFooter';
import AccountSidebar from '../AccountSidebar/AccountSidebar';
import PopupLanguage from '../PopupLanguage/PopupLanguage';
import PopupNotification from '../PopupNotification/PopupNotification';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
});

const LayoutAccount = ({ children }) => {
  const [isOpenPopupLanguage, setIsOpenPopupLanguage] = useState(false);
  const [isOpenPopupNotification, setIsOpenPopupNotification] = useState(false);
  const [xCoordPopupNotification, setXCoordPopupNotification] = useState(0);
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
    ) {
      closePopupLanguage();
      closePopupNotification();
    }
  }

  const openPopupNotification = (right) => {
    setXCoordPopupNotification(right);
    setIsOpenPopupNotification(true);
  }

  const closePopupNotification = () => {
    setIsOpenPopupNotification(false);
  }

  useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === 'Escape') {
        closePopupLanguage();
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
        <AccountSidebar />
        <AccountHeader
          chooseLanquage={chooseLanquage}
          openPopupNotification={openPopupNotification}
          setXCoordPopupNotification={setXCoordPopupNotification}
          windowWidth={windowWidth}
        />
          { children }
        <AccountFooter />
        <PopupLanguage
          isOpen={isOpenPopupLanguage}
          closePopup={closePopupLanguage}
        />
        <PopupNotification
          isOpen={isOpenPopupNotification}
          right={xCoordPopupNotification}
          windowWidth={windowWidth}
        />
      </div>
    </div>
  );
}

export default LayoutAccount;