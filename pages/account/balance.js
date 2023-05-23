import { useState } from 'react';
import 'iconify-icon';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import LayoutAccount from '../../compontens/LayoutAccount/LayoutAccount';
import RowTableHistory from '../../compontens/RowTableHistory/RowTableHistory';
import { useAppSelector } from '../../store/hooks';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { topUpBalance } from '../../api/topUpBalance';
import MessagePopup from '../../compontens/MessagePopup/MessagePopup';

import style from '../../styles/Balance.module.scss';
// ToDo: delete after connecting API
import { payments } from '../../utils/data/paymentHistory';

const Balance = () => {
  const { t } = useTranslation();
  const user = useAppSelector(store => store.user.user);
  const { errors, values, handleChange, isValid } = useFormAndValidation();

  const [message, setMessage] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleTopUpBalance = async (evt) => {
    evt.preventDefault();

    const token = typeof window !== undefined && localStorage.getItem('token');
    const queries = `user_id=${user.id}&amount=${values.amount}`;
    const res = await topUpBalance(token, queries);

    if (res && res.pay_url) {
      window.open(res.pay_url, '_blank');
    } else {
      setMessage(t('error'));
      setIsPopupOpen(true);
    }
  }

  return (
    <>
      <section className='section-account'>
        <h3 className='section-account-title'>
          {t('balance-page')}
        </h3>
        <div className={style['section__body']}>
          <div className={style['section__balance']}>
            <h4 className={style['section__balance-title']}>
              <iconify-icon icon="simple-line-icons:wallet"></iconify-icon>
              &nbsp;{t('balance-section')}
            </h4>
            <p className={style['section__balance-count']}>
              {user && `${t('balance-current')} ${user.balance}$`}
            </p>
          </div>
          <form className={style['section__form']} onSubmit={handleTopUpBalance}>
            <input
              type='text'
              name='amount'
              placeholder={t('balance-sum')}
              value={values.amount || ''}
              onChange={handleChange}
              required
              pattern='^\d+$'
            />
            <button
              type='submit'
              className={style['section__button-submit']}
              disabled={!isValid}
            >
              {t('balance-button')}
            </button>
            <p className={`${style.error} ${!isValid ? style['error_active'] : ''}`}>
              {!isValid && errors.amount}
            </p>
          </form>
        </div>
      </section>
      <section className='section-account'>
        <h3 className='section-account-title'>
          {t('payment-history')}
        </h3>
        <div className={style['section__table-wrap']}>
          <div className={style['section__table-responsive']}>
            <table className={style['section__table-result']}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>{t('payment-type')}</th>
                  <th>{t('payment-date')}</th>
                  <th>{t('payment-sum')}</th>
                  <th>{t('payment-status')}</th>
                </tr>
              </thead>
              <tbody>
                {payments.map(el => {
                  return (
                    <RowTableHistory
                      id={el.id}
                      type={el.type}
                      date={el.date}
                      sum={el.sum}
                      status={el.status}
                      key={el.id}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <MessagePopup
        message={message}
        isOpen={isPopupOpen}
        setIsOpen={setIsPopupOpen}
      />
    </>
  );
}

Balance.getLayout = function getLayout(page) {
  return (
    <LayoutAccount>
      {page}
    </LayoutAccount>
  );
}

export default connect(state => state)(Balance);