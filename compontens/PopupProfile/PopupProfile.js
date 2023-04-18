import { useEffect, useRef } from 'react';
import Link from 'next/link';
import 'iconify-icon';
import { INDENT_POPUP_PROFILE } from '../../utils/constants';
import style from '../../styles/PopupProfile.module.scss';

const PopupProfile = ({ isOpen, right, windowWidth }) => {
  const popup = useRef();

  useEffect(() => {
    if (right !== 0) {
      const x = windowWidth - right - INDENT_POPUP_PROFILE;
      popup.current.style.right = `${x}px`;
    }
  }, [right, windowWidth]);

  return (
    <section className={`${style['popup']} ${isOpen ? style['popup_opened'] : ''}`}>
      <div className={style['popup__container']} ref={popup}>
        <div className={style['popup__profile-heading']}></div>
        <ul>
          <li>
          <Link className={style['popup__profile-link']} href='/account/profile'>
            <iconify-icon icon="mingcute:user-1-line"></iconify-icon>
            Изменить информацию
          </Link>
          </li>
          <li>
            <Link className={style['popup__profile-link']} href='/account/profile/change-password'>
              <iconify-icon icon="fa:cogs"></iconify-icon>
              Изменить пароль
            </Link>
          </li>
          <li>
            <Link className={style['popup__profile-link']} href='/account/logout'>
              <iconify-icon icon="mdi:alert-circle-outline"></iconify-icon>
              Выйти
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default PopupProfile;