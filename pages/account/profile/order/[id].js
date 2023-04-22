import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
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
              {`Заказ на аренду сервера ${order.name}`}
            </h2>
            <h3 className={style['order__section-title']}>
              Данные к заказу
            </h3>
            <ul className={style['order__details-list']}>
              <li className={style['order__details-item']}>
                {`Номер заказа: ${order.number}`}
              </li>
              <li className={style['order__details-item']}>
                {`IP: ${order.ip}`}
              </li>
              <li className={style['order__details-item']}>
                {`Пользователь: ${order.user}`}
              </li>
              <li className={style['order__details-item']}>
                {`Пароль: ${order.password}`}
              </li>
              <li className={style['order__details-item']}>
                {`Порт: ${order.port}`}
              </li>
              <li className={style['order__details-item']}>
                {`Тип соединения: ${order.type}`}
              </li>
              <li className={style['order__details-item']}>
                {`OS: ${order.os}`}
              </li>
              <li className={style['order__details-item']}>
                Команда на подключение:&nbsp;
                <span className={style['order__span_red']}>
                  {`${order.instruction}`}
                </span>
              </li>
              <li className={style['order__details-item']}>
                Авто-продление:&nbsp;
                <span className={`${order.autoRenewal === 'Отключено' ? style['order__span_red'] : ''}`}>
                  {`${order.autoRenewal}`}
                </span>
              </li>
              <li className={style['order__details-item']}>
                Цена:&nbsp;
                <span className={style['order__span_dark']}>
                  {`${order.price}`}
                </span>
              </li>
            </ul>
            {order.name.includes('RDP') &&
              <p className={style['order__message']}>
                Если не удается подключиться по имени пользователя Admin,
                попробуйте Administrator
              </p>
            }
          </section>
          <section className={`${style['order__settings']} ${style['card']}`}>
            <h3 className={style['order__section-title']}>
              Настройки
            </h3>
            <p className={style['order__message']}>
              Если вы сменили ОС, то воспользуйтесь инструкцией:&nbsp;
              <Link href='https://psb-hosting-pro.gitbook.io/documentations/obnovlenie-os-kak-vybrat-i-ustanovit-novuyu-operacionnuyu-sistemu'>
                Инструкция
              </Link>
            </p>
            <form className={style['order__form']}>
              <label htmlFor='system'>
                Операционная система
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
                Поменять Операционную Систему
              </button>
            </form>
            <form className={style['order__form']}>
              <input
                placeholder='Новый пароль'
                type='password'
                name='password'
                className={style['order__input']}
              />
              <button type='submit' className={style['order__button']}>
                <iconify-icon icon="tabler:refresh"></iconify-icon>&nbsp;
                Сменить пароль
              </button>
            </form>
          </section>
          <section className={`${style['order__options']} ${style['card']}`}>
            <h3 className={style['order__section-title']}>
              Опции
            </h3>
            <ul className={style['order__options-list']}>
              <li>
                <button className={`${style['order__options-button']} ${style['order__options-button_green']}`}>
                  <iconify-icon icon="simple-line-icons:energy"></iconify-icon>
                </button>
                Включить авто-продление
              </li>
              <li>
                <button className={`${style['order__options-button']} ${style['order__options-button_green']}`}>
                  <iconify-icon icon="material-symbols:power-rounded"></iconify-icon>
                </button>
                Включить сервер
              </li>
              <li>
                <button className={`${style['order__options-button']} ${style['order__options-button_orange']}`}>
                  <iconify-icon icon="zondicons:reload"></iconify-icon>
                </button>
                Перезагрузить сервер
              </li>
              <li>
                <button className={`${style['order__options-button']} ${style['order__options-button_red']}`}>
                  <iconify-icon icon="lucide:power-off"></iconify-icon>
                </button>
                Выключить сервер
              </li>
            </ul>
          </section>
        </>
      }
    </div>
  );
}
