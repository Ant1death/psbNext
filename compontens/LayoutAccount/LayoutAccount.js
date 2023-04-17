import { useState } from 'react';
import { IBM_Plex_Sans } from '@next/font/google';
import AccountHeader from '../AccountHeader/AccountHeader';
import AccountFooter from '../AccountFooter/AccountFooter';
import AccountSidebar from '../AccountSidebar/AccountSidebar';
import PopupLanguage from '../PopupLanguage/PopupLanguage';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
});

const LayoutAccount = ({ children }) => {
  const [isOpenPopupLanguage, setIsOpenPopupLanguage] = useState(false);

  const chooseLanquage = () => {
    setIsOpenPopupLanguage(true);
  }

  const closePopupLanguage = () => {
    setIsOpenPopupLanguage(false);
  }

  const handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      closePopupLanguage();
    }
  }

  const handleBackgroundClose = (evt) => {
    if (evt.target.classList.value.toString().includes('popup_opened') ||
      evt.target.classList.value.toString().includes('popup__container')) {
        closePopupLanguage();
    }
  }

  return (
    <div className={ibmPlexSans.className}>
      <div className='page-account'
        onClick={handleBackgroundClose}
        onKeyDown={handleEscClose}
      >
        <AccountSidebar />
        <AccountHeader
          chooseLanquage={chooseLanquage}
        />
          { children }
        <AccountFooter />
        <PopupLanguage
          isOpen={isOpenPopupLanguage}
          closePopup={closePopupLanguage}
        />
      </div>
    </div>
  );
}

export default LayoutAccount;