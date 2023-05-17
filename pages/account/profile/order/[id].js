import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import LayoutAccount from '../../../../compontens/LayoutAccount/LayoutAccount';

import style from '../../../../styles/Order.module.scss';
// ToDo: delete after connecting API
import { orders } from '../../../../utils/data/orders';


Order.getLayout = function getLayout(page) {
  return (
    <LayoutAccount>
      {page}
    </LayoutAccount>
  );
}

export default function Order() {
  const [order, setOrder] = useState({});

  const { t } = useTranslation();
  const router = useRouter();

  const getItemWithId = () => {
    const { id } = router.query;
    return orders.find(el => el.id === +id);
  }

  useEffect(() => {
    setOrder(getItemWithId());
  }, [router]);

  return (
    <div className={style['order']}>
      {order && order.id &&
        <>
          <section className={`${style['order__details']} ${style['card']}`}>
            <h2 className={style['order__main-title']}>
              {`${t('profile-order')} на аренду сервера ${order.name}`}
            </h2>
            <h3 className={style['order__section-title']}>
              {t('profile-order-info')}
            </h3>
            <ul className={style['order__details-list']}>
              <li className={style['order__details-item']}>
                {`${t('profile-order-number')} ${order.number}`}
              </li>
              <li className={style['order__details-item']}>
                {`IP: ${order.ip}`}
              </li>
              <li className={style['order__details-item']}>
                {`${t('profile-order-user')} ${order.user}`}
              </li>
              <li className={style['order__details-item']}>
                {`${t('profile-order-password')} ${order.password}`}
              </li>
              <li className={style['order__details-item']}>
                {`${t('profile-order-port')} ${order.port}`}
              </li>
              <li className={style['order__details-item']}>
                {`${t('profile-order-type')} ${order.type}`}
              </li>
              <li className={style['order__details-item']}>
                {`OS: ${order.os}`}
              </li>
              <li className={style['order__details-item']}>
                {t('profile-order-command')}&nbsp;
                <span className={style['order__span_red']}>
                  {`${order.instruction}`}
                </span>
              </li>
              <li className={style['order__details-item']}>
                {t('profile-order-renewal')}&nbsp;
                <span className={`${order.autoRenewal === 'Отключено' ? style['order__span_red'] : ''}`}>
                  {`${order.autoRenewal}`}
                </span>
              </li>
              <li className={style['order__details-item']}>
                {t('profile-order-price')}&nbsp;
                <span className={style['order__span_dark']}>
                  {`${order.price}`}
                </span>
              </li>
            </ul>
            {order.name.includes('RDP') &&
              <p className={style['order__message']}>
                {t('profile-order-rdp')}
              </p>
            }
          </section>
          <section className={`${style['order__settings']} ${style['card']}`}>
            <h3 className={style['order__section-title']}>
              {t('profile-order-settings')}
            </h3>
            <p className={style['order__message']}>
              {t('profile-order-os')}&nbsp;
              <Link href='https://psb-hosting-pro.gitbook.io/documentations/obnovlenie-os-kak-vybrat-i-ustanovit-novuyu-operacionnuyu-sistemu'>
                {t('profile-order-instruction')}
              </Link>
            </p>
            <form className={style['order__form']}>
              <label htmlFor='system'>
               {t('profile-order-system')}
              </label>
              <select id='system' className={style['order__select']}>
                <option value={order.os}>
                  {order.os}
                </option>
                {order.systems.map(el => {
                  if (el !== order.os) {
                    return (
                      <option value={el} key={order.systems.indexOf(el)}>{el}</option>
                    );
                  }
                })}
              </select>
              <button type='submit' className={style['order__button']}>
                <iconify-icon icon="tabler:refresh"></iconify-icon>&nbsp;
                {t('profile-order-change-system')}
              </button>
            </form>
            <form className={style['order__form']}>
              <input
                placeholder={t('profile-order-new-password')}
                type='password'
                name='password'
                className={style['order__input']}
              />
              <button type='submit' className={style['order__button']}>
                <iconify-icon icon="tabler:refresh"></iconify-icon>&nbsp;
                {t('profile-order-button')}
              </button>
            </form>
          </section>
          <section className={`${style['order__options']} ${style['card']}`}>
            <h3 className={style['order__section-title']}>
              {t('profile-order-options')}
            </h3>
            <ul className={style['order__options-list']}>
              <li>
                <button className={`${style['order__options-button']} ${style['order__options-button_green']}`}>
                  <iconify-icon icon="simple-line-icons:energy"></iconify-icon>
                </button>
                {t('profile-order-option-one')}
              </li>
              <li>
                <button className={`${style['order__options-button']} ${style['order__options-button_green']}`}>
                  <iconify-icon icon="material-symbols:power-rounded"></iconify-icon>
                </button>
                {t('profile-order-option-two')}
              </li>
              <li>
                <button className={`${style['order__options-button']} ${style['order__options-button_orange']}`}>
                  <iconify-icon icon="zondicons:reload"></iconify-icon>
                </button>
                {t('profile-order-option-three')}
              </li>
              <li>
                <button className={`${style['order__options-button']} ${style['order__options-button_red']}`}>
                  <iconify-icon icon="lucide:power-off"></iconify-icon>
                </button>
                {t('profile-order-option-four')}
              </li>
            </ul>
          </section>
        </>
      }
    </div>
  );
}
