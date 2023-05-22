import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { INDENT_POPUP_NOTIFICATION } from '../../utils/constants';

import style from '../../styles/PopupNotification.module.scss';

const PopupNotification = ({ isOpen, right, windowWidth }) => {
  const popup = useRef();
  const { t } = useTranslation();

  useEffect(() => {
    if (right !== 0) {
      const x = windowWidth - right - INDENT_POPUP_NOTIFICATION;
      popup.current.style.right = `${x}px`;
    }
  }, [right, windowWidth]);

  return (
    <section className={`${style['popup']} ${isOpen ? style['popup_opened'] : ''}`}>
      <div className={style['popup__container']} ref={popup}>
        <h6 className={style['popup__notification-title']}>
          {t('popup-notice')}
        </h6>
        <div className={style['popup__notification-nemu']}></div>
      </div>
    </section>
  );
}

export default PopupNotification;