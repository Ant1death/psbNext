import 'iconify-icon';
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
  return (
    <>
      <section className={style['section']}>
        <h3 className={style['section__title']}>
          Пополнение баланса
        </h3>
        <div className={style['section__body']}>
          <div className={style['section__balance']}>
            <h4 className={style['section__balance-title']}>
              <iconify-icon icon="simple-line-icons:wallet"></iconify-icon>
              &nbsp;Баланс кошелька:
            </h4>
            <p className={style['section__balance-count']}>
              Текущий баланс: 0,0$
            </p>
          </div>
          <form className={style['section__form']}>
            <input
              type='text'
              name='amount'
              placeholder='Сумма пополнения'
            />
            <button type='submit' className={style['section__button-submit']}>
              Пополнить
            </button>
          </form>
        </div>
      </section>
      <section className={style['section']}>
        <h3 className={style['section__title']}>
          История платежей
        </h3>
        <div className={style['section__table-wrap']}>
          <div className={style['section__table-responsive']}>
            <table className={style['section__table-result']}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Тип</th>
                  <th>Дата</th>
                  <th>Сумма</th>
                  <th>Статус</th>
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