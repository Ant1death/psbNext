import 'iconify-icon';
import { useTranslation } from 'react-i18next';

import LayoutAccount from '../../compontens/LayoutAccount/LayoutAccount';
import RowTableHistory from '../../compontens/RowTableHistory/RowTableHistory';

import style from '../../styles/Balance.module.scss';
// ToDo: delete after connecting API
import { payments } from '../../utils/data/paymentHistory';

Balance.getLayout = function getLayout(page) {
  return (
    <LayoutAccount>
      {page}
    </LayoutAccount>
  );
}

export default function Balance() {
  const { t } = useTranslation();

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
              {`${t('balance-current')} 0,0$`}
            </p>
          </div>
          <form className={style['section__form']}>
            <input
              type='text'
              name='amount'
              placeholder={t('balance-sum')}
            />
            <button type='submit' className={style['section__button-submit']}>
              {t('balance-button')}
            </button>
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
    </>
  );
}