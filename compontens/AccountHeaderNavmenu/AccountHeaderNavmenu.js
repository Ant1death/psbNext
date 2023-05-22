import { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import 'iconify-icon';

import style from '../../styles/AccountHeader.module.scss';

const AccountHeaderNavmenu = ({
  children,
  chooseLanquage,
  openPopupNotification,
  setXCoordPopupNotification,
  windowWidth,
  openPopupProfile,
  setXCoordPopupProfile,
}) => {
  const buttonBell = useRef();
  const account = useRef();
  const { t } = useTranslation();

  const sendCoordinates = (evt) => {
    if (windowWidth > 991) {
      const right = evt.target.getBoundingClientRect().right;
      openPopupNotification(right);
    } else {
      openPopupNotification(0);
    }
  }

  const sendCoordinatesProfile = (evt) => {
    if (windowWidth > 991) {
      const right = evt.target.getBoundingClientRect().right;
      openPopupProfile(right);
    } else {
      openPopupProfile(0);
    }
  }

  useEffect(() => {
    if (windowWidth > 991) {
      const x = buttonBell.current.getBoundingClientRect().right;
      setXCoordPopupNotification(x);

      const xAccount = account.current.getBoundingClientRect().right;
      setXCoordPopupProfile(xAccount);
    }
  }, [windowWidth]);

  return (
    <ul className={style['header__navbar']}>
      { children }
      <li className={style['header__navbar-item']}>
        <button
          className={`${style['header__button']} ${style['header__button_country']}`}
          type='button'
          onClick={chooseLanquage}
        >
          <iconify-icon icon="ph:globe"></iconify-icon>
          <span>{t('language')}</span>
        </button>
      </li>
      <li className={style['header__navbar-item']}>
        <button
          ref={buttonBell}
          className={`${style['header__button']} ${style['header__button_notifications']}`}
          type='button'
          onClick={sendCoordinates}
        >
          <iconify-icon icon="lucide:bell"></iconify-icon>
          <span className={style['header__pulse']}></span>
        </button>
      </li>
      <li className={`${style['header__navbar-item']} ${style['header__navbar-item_avatar']}`}>
        <div ref={account} className={style['header__avatar']} onClick={sendCoordinatesProfile}>H</div>
      </li>
    </ul>
  );
}

export default AccountHeaderNavmenu;