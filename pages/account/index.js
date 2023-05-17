import { useTranslation } from 'react-i18next';
import 'iconify-icon';

import LayoutAccount from '../../compontens/LayoutAccount/LayoutAccount';
import OrderCardPending from '../../compontens/OrderCardPending/OrderCardPending';
import OrderCardSuccess from '../../compontens/OrderCardSuccess/OrderCardSuccess';

import style from '../../styles/Account.module.scss';
// ToDo: delete after connecting API
import { orders } from '../../utils/data/orders';

Account.getLayout = function getLayout(page) {
  return (
    <LayoutAccount>
      {page}
    </LayoutAccount>
  );
}

export default function Account() {
  const { t } = useTranslation();

  return (
    <>
      <section className={style['report']}>
        <ul className={style['report__list']}>
          <li className={style['report__card']}>
            <div className={`${style['report__card-img']} ${style['report__card-img_balance']}`}>
              <img src='/circle.svg' alt='icon circle' className={style['report__card-icon-circle']} />
              <iconify-icon icon="fa-solid:credit-card"></iconify-icon>
            </div>
            <div className={style['report__card-text']}>
              <h2 className={style['report__card-title']}>0,0$</h2>
              <h4 className={style['report__card-description']}>
                {t('balance')}
              </h4>
            </div>
          </li>
          <li className={style['report__card']}>
            <div className={`${style['report__card-img']} ${style['report__card-img_services']}`}>
              <img src='/circle.svg' alt='icon circle' className={style['report__card-icon-circle']} />
              <iconify-icon icon="ph:suitcase-simple-bold"></iconify-icon>
            </div>
            <div className={style['report__card-text']}>
              <h2 className={style['report__card-title']}>0</h2>
              <h4 className={style['report__card-description']}>
                {t('active-servises')}
              </h4>
            </div>
          </li>
          <li className={style['report__card']}>
            <div className={`${style['report__card-img']} ${style['report__card-img_expense']}`}>
              <img src='/circle.svg' alt='icon circle' className={style['report__card-icon-circle']} />
              <iconify-icon icon="ph:suitcase-simple-bold"></iconify-icon>
            </div>
            <div className={style['report__card-text']}>
              <h2 className={style['report__card-title']}>0$</h2>
              <h4 className={style['report__card-description']}>
                {t('expense')}
              </h4>
            </div>
          </li>
        </ul>
      </section>
      <section className={style['goods']}>
        <h2 className={style['goods__title']}>
          {t('active-products')}
        </h2>
        <ul className={style['goods__list']}>
          {orders.map(el => {
            if (el.status === 'Заказ в обработке') {
              return (
                <OrderCardPending
                  key={el.id}
                  status={el.status}
                  number={el.number}
                  name={el.name}
                  autoRenewal={el.autoRenewal}
                />
              );
            }
            if (el.status === 'Запущен') {
              return (
                <OrderCardSuccess
                  key={el.id}
                  status={el.status}
                  price={el.price}
                  name={el.name}
                  autoRenewal={el.autoRenewal}
                  deadline={el.deadline}
                  id={el.id}
                />
              );
            }
          })}
        </ul>
      </section>
    </>
  );
}