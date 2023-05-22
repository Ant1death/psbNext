import { useTranslation } from 'react-i18next';

import style from '../../styles/NewServise.module.scss';

const NewServise = ({ children, handleFormSubmit }) => {
  const { t } = useTranslation();

  const handleChangePayment = () => {}

  const handleChangeBalance = () => {}

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
              name='bill'
              id='balance'
              value='balance'
              checked={true}
              onChange={handleChangeBalance}
            />
            <span className={style['card__form-span']}>
              {t('new-service-balance')}
            </span>
          </label>
          <label htmlFor='payment' className={style['card__form-label-radio']}>
            <input
              type='radio'
              className={style['card__form-input-radio']}
              name='bill'
              id='payment'
              value='payment'
              onChange={handleChangePayment}
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