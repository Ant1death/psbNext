import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import MessagePopup from '../MessagePopup/MessagePopup';

import style from '../../styles/NewServise.module.scss';

const NewServise = ({
  children,
  sentDataToOrder,
  message,
  isPopupOpen,
  setIsPopupOpen,
  isSuccess,
  setIsSuccess,
}) => {
  const { t } = useTranslation();

  const [payment, setPayment] = useState('1');

  const handleChoosePayment = (evt) => {
    setPayment(evt.target.value);
  }

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    sentDataToOrder(payment);
  }

  return (
    <>
      <section className={style['card']}>
        <h2 className={style['card__title']}>
          {t('new-service-config')}
        </h2>
        <form className={style['card__form']} onSubmit={handleFormSubmit}>
          {children}
          <fieldset className={style['card__form-fildset']}>
            <legend className={style['card__form-legend']}>
              {t('new-service-payment')}
            </legend>
            <label htmlFor='balance' className={style['card__form-label-radio']}>
              <input
                type='radio'
                className={style['card__form-input-radio']}
                name='payment'
                id='balance'
                value='1'
                checked={payment === '1' && true}
                onChange={handleChoosePayment}
              />
              <span className={style['card__form-span']}>
                {t('new-service-balance')}
              </span>
            </label>
            <label htmlFor='card' className={style['card__form-label-radio']}>
              <input
                type='radio'
                className={style['card__form-input-radio']}
                name='payment'
                id='card'
                value='2'
                onChange={handleChoosePayment}
                checked={payment === '2' && true}
              />
              <span className={style['card__form-span']}>
                {t('new-service-card')}
              </span>
            </label>
          </fieldset>
          <button type='submit' className={style['card__button-cta']}>
            {t('new-service-button')}
          </button>
        </form>
      </section>
      <MessagePopup
        message={message}
        isOpen={isPopupOpen}
        setIsOpen={setIsPopupOpen}
        isSuccess={isSuccess}
        setIsSuccess={setIsSuccess}
      />
    </>
  );
}

export default NewServise;