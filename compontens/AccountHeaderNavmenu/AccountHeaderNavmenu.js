import { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import 'iconify-icon';

import style from '../../styles/AccountHeader.module.scss';

const AccountHeaderNavmenu = ({
  chooseLanquage,
  windowWidth,
  openPopupProfile,
  setXCoordPopupProfile,
}) => {
  const account = useRef();
  const { t } = useTranslation();

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
      const xAccount = account.current.getBoundingClientRect().right;
      setXCoordPopupProfile(xAccount);
    }
  }, [windowWidth]);

  return (
    <ul className={style['header__navbar']}>
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
      <li className={`${style['header__navbar-item']} ${style['header__navbar-item_avatar']}`}>
        <div ref={account} className={style['header__avatar']} onClick={sendCoordinatesProfile}>H</div>
      </li>
    </ul>
  );
}

export default AccountHeaderNavmenu;