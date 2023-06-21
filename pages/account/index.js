import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import 'iconify-icon';

import LayoutAccount from '../../compontens/LayoutAccount/LayoutAccount';
import OrderCardPending from '../../compontens/OrderCardPending/OrderCardPending';
import OrderCardSuccess from '../../compontens/OrderCardSuccess/OrderCardSuccess';
import { fetchOrders } from '../../store/slices/orders';
import { getOrders } from '../../api/getOrders';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import style from '../../styles/Account.module.scss';

const Account = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const orders = useAppSelector(store => store.orders.orders);
  const user = useAppSelector(store => store.user.user);

  const [activeServises, setActiveServises] = useState(0);
  const [cost, setCost] = useState(0);

  const fetchDataOrders = async (token) => {
    const data = await getOrders(token);
    if (data) dispatch(fetchOrders(data));
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && !orders) fetchDataOrders(token);
  }, []);

  useEffect(() => {
    if (orders && orders.length > 0) {
      const activeOrders = orders.filter(el => el.status === 'Заказ выдан');
      setActiveServises(activeOrders.length);
    }
  }, [orders]);

  useEffect(() => {
    if (orders) {
      const amount = orders.reduce((sum, el) => {
        if (el.status === 'Заказ выдан') sum = sum + Number(el.price);
        return sum;
      }, 0);

      setCost(amount);
  }
  }, [orders]);

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
              <h2 className={style['report__card-title']}>
                {user && `${user.balance}$`}
              </h2>
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
              <h2 className={style['report__card-title']}>
                {activeServises}
              </h2>
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
              <h2 className={style['report__card-title']}>{`${cost}$`}</h2>
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
          {orders && orders.map(el => {
            if (el.status === 'Обработка заказа') {
              return (
                <OrderCardPending
                  key={el.id}
                  order={el}
                />
              );
            }
            if (el.status === 'Заказ выдан') {
              return (
                <OrderCardSuccess
                  key={el.id}
                  order={el}
                />
              );
            }
          })}
        </ul>
      </section>
    </>
  );
}

Account.getLayout = function getLayout(page) {
  return (
    <LayoutAccount>
      {page}
    </LayoutAccount>
  );
}

export default connect(state => state)(Account);