import style from '../../styles/NewServise.module.scss';

const NewServise = ({ children }) => {

  const handleChangePayment = () => {}

  const handleChangeBalance = () => {}

  return (
    <section className={style['card']}>
      <h2 className={style['card__title']}>
        Выберите конфигурации
      </h2>
      <form className={style['card__form']}>
        {children}
        <fieldset className={style['card__form-fildset']}>
          <legend className={style['card__form-legend']}>
            Способ оплаты
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
              С баланса
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
              С платежной системы
            </span>
          </label>
        </fieldset>
        <button type='submit' className={style['card__button-cta']}>
          Создать заказ
        </button>
      </form>
    </section>
  );
}

export default NewServise;