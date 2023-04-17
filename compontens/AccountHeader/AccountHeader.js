import 'iconify-icon';
import { useRef, useEffect } from 'react';
import style from '../../styles/AccountHeader.module.scss';

const AccountHeader = ({
  chooseLanquage,
  openPopupNotification,
  setXCoordPopupNotification,
  windowWidth,
  openPopupProfile,
  setXCoordPopupProfile,
}) => {
  const buttonBell = useRef();
  const account = useRef();

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
    <header className={style['header']}>
      <button className={style['header__toggle-sidebar']} type='button' aria-label='button toggle sidebar'></button>
      <ul className={style['header__navbar']}>
        <li className={style['header__navbar-item']}>
          <button className={style['header__country']} type='button' onClick={chooseLanquage}>
            <iconify-icon icon="ph:globe-light"></iconify-icon>
            <span>Язык</span>
          </button>
        </li>
        <li className={style['header__navbar-item']}>
          <button ref={buttonBell} className={style['header__notifications']} type='button' onClick={sendCoordinates}>
            <iconify-icon icon="lucide:bell"></iconify-icon>
            <span className={style['header__pulse']}></span>
          </button>
        </li>
        <li className={`${style['header__navbar-item']} ${style['header__navbar-item_avatar']}`}>
          <div ref={account} className={style['header__avatar']} onClick={sendCoordinatesProfile}>H</div>
        </li>
      </ul>
    </header>
  );
}

export default AccountHeader;