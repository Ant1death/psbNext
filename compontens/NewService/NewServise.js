import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

import style from '../../styles/NewServise.module.scss';

const NewServise = ({ children, sentDataToOrder }) => {
  const { t } = useTranslation();

  const [payment, setPayment] = useState('0');

  const handleChoosePayment = (evt) => {
    setPayment(evt.target.value);
  }

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    sentDataToOrder(payment);
  }

  return (
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
              value='0'
              checked={payment === '0' && true}
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
              value='1'
              onChange={handleChoosePayment}
              checked={payment === '1' && true}
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
  );
}

export default NewServise;