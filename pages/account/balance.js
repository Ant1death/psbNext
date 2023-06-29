import { useEffect, useState } from 'react';
import 'iconify-icon';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import LayoutAccount from '../../compontens/LayoutAccount/LayoutAccount';
import RowTableHistory from '../../compontens/RowTableHistory/RowTableHistory';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { topUpBalance } from '../../api/topUpBalance';
import MessagePopup from '../../compontens/MessagePopup/MessagePopup';
import { formatDateRu } from '../../utils/formatDateRu';
import { formatDateEn } from '../../utils/formatDateEn';
import { getPaymentHistory } from '../../api/getPaymentHistory';
import { fetchPaymentHistory } from '../../store/slices/paymentHystory';

import style from '../../styles/Balance.module.scss';

const Balance = () => {
  const { t } = useTranslation();
  const user = useAppSelector(store => store.user.user);
  const { errors, values, handleChange, isValid } = useFormAndValidation();
  const paymentHistory = useAppSelector(store => store.paymentHistory.paymentHistory);
  const dispatch = useAppDispatch();

  const [message, setMessage] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isActiveButton, setIsActiveButton] = useState(true);
  
  const handleTopUpBalance = async (evt) => {
    evt.preventDefault();

    setIsActiveButton(false);

    const token = typeof window !== undefined && localStorage.getItem('token');
    const queries = `user_id=${user.id}&amount=${values.amount}`;
    const res = await topUpBalance(token, queries);

    if (res && res.pay_url) {
      window.open(res.pay_url, '_blank');
      setIsActiveButton(true);
    } else {
      setMessage(t('error'));
      setIsPopupOpen(true);
    }
  }

  const fetchData = async (token) => {
    const data = await getPaymentHistory(token);
    if (data) dispatch(fetchPaymentHistory(data.reverse()));
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && !paymentHistory) fetchData(token);
  }, []);

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
              disabled={!isValid && !isActiveButton}
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
                {paymentHistory && paymentHistory.length > 0 && paymentHistory.map(el => {
                  return (
                    <RowTableHistory
                      id={el.id}
                      type={el.type}
                      date={t('faq-lang') === 'ru' ? formatDateRu(el.date) : formatDateEn(el.date)}
                      sum={el.amount}
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
