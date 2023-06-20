import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import LayoutAccount from '../../../../compontens/LayoutAccount/LayoutAccount';
import MessagePopup from '../../../../compontens/MessagePopup/MessagePopup';
import { wrapper } from '../../../../store/store';
import { getCurrentOrder } from '../../../../api/getCurrentOrder';
import { useAppSelector, useAppDispatch } from '../../../../store/hooks';
import { fetchCurrentOrder } from '../../../../store/slices/currentOrder';
import { changeOperativeSystem } from '../../../../api/changeOperativeSystem';
import { useFormAndValidation } from '../../../../hooks/useFormAndValidation';
import { changeServerPassword } from '../../../../api/changeServerPassword';
import { startServer } from '../../../../api/startServer';
import { restartServer } from '../../../../api/restartServer';
import { stopServer } from '../../../../api/stopServer';
import { toggleAutoRefresh } from '../../../../api/toggleAutoRefresh';
import { OS_LIST, NUMBER_REG_EXP } from '../../../../utils/constants';

import style from '../../../../styles/Order.module.scss';

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ params }) => {
  const id = params.id;

  return {
    props: {
      id,
    }
  }
});

const Order = (id) => {
  const { t } = useTranslation();
  const currentOrder = useAppSelector(store => store.currentOrder.currentOrder);
  const dispatch = useAppDispatch();
  const { values, errors, isValid, handleChange, setIsValid } = useFormAndValidation();

  const [system, setSystem] = useState('Debian 11');
  const [message, setMessage] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorOnlyNumbers, setErrorOnlyNumbers] = useState('');

  const fetchData = async () => {
    const token = typeof window !== 'undefined' && localStorage.getItem('token');
    if (token) {
      const res = await getCurrentOrder(token, id.pageProps.id);
      if (res) {
        const orderdata = [res[0].find(el => el.order_id === res[1][0].id)];
        const order = orderdata.concat(res[1][0]);
        dispatch(fetchCurrentOrder(order))
      };
    }
  }

  const handleChangeSystem = (evt) => {
    setSystem(evt.target.value);
  }

  const submitChangeSystem = async (evt) => {
    evt.preventDefault();

    const token = typeof window !== 'undefined' && localStorage.getItem('token');
    if (system && token) {
      const queries = `order_id=${currentOrder[0].order_id}&os=${system}`;
      const res = await changeOperativeSystem(token, queries);

      if (res) {
        setMessage(t('error-system-success'));
        setIsPopupOpen(true);
        setIsSuccess(true);
        fetchData();
      } else {
        setMessage(t('error'));
        setIsPopupOpen(true);
      }
    } else {
      setMessage(t('error-system-unsuccess'));
      setIsPopupOpen(true);
    }
  }

  const submitChangePassword = async (evt) => {
    evt.preventDefault();

    const token = typeof window !== 'undefined' && localStorage.getItem('token');
    if (token) {
      const queries = `order_id=${currentOrder[0].order_id}&password=${values.password}`;
      const res = await changeServerPassword(token, queries);

      if (res) {
        setMessage(t('error-password-success'));
        setIsPopupOpen(true);
        setIsSuccess(true);
        fetchData();
      } else {
        setMessage(t('error'));
        setIsPopupOpen(true);
      }
    }
  }

  const handleToggleAutoRefresh = async () => {
    const token = typeof window !== 'undefined' && localStorage.getItem('token');
    if (token) {
      const res = await toggleAutoRefresh(token, currentOrder[1].bill_id);

      if (res) {
        setMessage(t('error-saved'));
        setIsPopupOpen(true);
        setIsSuccess(true);
        fetchData();
      } else {
        setMessage(t('error'));
        setIsPopupOpen(true);
      }
    }
  }

  const handleStartServer = async () => {
    const token = typeof window !== 'undefined' && localStorage.getItem('token');
    if (token) {
      const res = await startServer(token, currentOrder[0].order_id);

      if (res) {
        setMessage(t('error-start-server-success'));
        setIsPopupOpen(true);
        setIsSuccess(true);
      } else {
        setMessage(t('error'));
        setIsPopupOpen(true);
      }
    }
  }

  const handleRestartServer = async () => {
    const token = typeof window !== 'undefined' && localStorage.getItem('token');
    if (token) {
      const res = await restartServer(token, currentOrder[0].order_id);

      if (res) {
        setMessage(t('error-restart-server-success'));
        setIsPopupOpen(true);
        setIsSuccess(true);
      } else {
        setMessage(t('error'));
        setIsPopupOpen(true);
      }
    }
  }

  const handleStopServer = async () => {
    const token = typeof window !== 'undefined' && localStorage.getItem('token');
    if (token) {
      const res = await stopServer(token, currentOrder[0].order_id);

      if (res) {
        setMessage(t('error-stop-server-success'));
        setIsPopupOpen(true);
        setIsSuccess(true);
      } else {
        setMessage(t('error'));
        setIsPopupOpen(true);
      }
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (values.password && NUMBER_REG_EXP.test(values.password)) {
      setIsValid(false);
      setErrorOnlyNumbers(t('error-numbers'));
    } else if (!errors.password && errorOnlyNumbers) {
      setIsValid(true);
      setErrorOnlyNumbers('');
    } else {
      setErrorOnlyNumbers('');
    }
  }, [values.password]);

  return (
    <div className={style['order']}>
      {currentOrder && currentOrder[1] && currentOrder[0] &&
        <>
          <section className={`${style['order__details']} ${style['card']}`}>
            <h2 className={style['order__main-title']}>
              {currentOrder[1] && currentOrder[1].title && `${t('profile-order')} на аренду сервера ${currentOrder[1].title}`}
            </h2>
            <h3 className={style['order__section-title']}>
              {t('profile-order-info')}
            </h3>
            <ul className={style['order__details-list']}>
              <li className={style['order__details-item']}>
                {currentOrder[1] && currentOrder[1].order_id && `${t('profile-order-number')} ${currentOrder[1].order_id}`}
              </li>
              <li className={style['order__details-item']}>
                {currentOrder[0] && currentOrder[0].ip && `IP: ${currentOrder[0].ip}`}
              </li>
              <li className={style['order__details-item']}>
                {currentOrder[0] && currentOrder[0].superuser && `${t('profile-order-user')} ${currentOrder[0].superuser}`}
              </li>
              <li className={style['order__details-item']}>
                {currentOrder[0] && currentOrder[0].password && `${t('profile-order-password')} ${currentOrder[0].password}`}
              </li>
              <li className={style['order__details-item']}>
                {currentOrder[0] && currentOrder[0].port && `${t('profile-order-port')} ${currentOrder[0].port}`}
              </li>
              <li className={style['order__details-item']}>
                {currentOrder[1] && currentOrder[1].os && `OS: ${currentOrder[1].os}`}
              </li>
              <li className={style['order__details-item']}>
                {t('profile-order-renewal')}&nbsp;
                <span className={`${currentOrder[1].auto_refresh ? style['order__span_green'] : style['order__span_red']}`}>
                  {currentOrder[1] && currentOrder[1].auto_refresh ? t('auto-refresh-true') : t('auto-refresh-false')}
                </span>
              </li>
              <li className={style['order__details-item']}>
                {t('profile-order-price')}&nbsp;
                <span className={style['order__span_dark']}>
                  {currentOrder[1] && currentOrder[1].price && `$${currentOrder[1].price}/${t('order-price-period')}`}
                </span>
              </li>
            </ul>
            {currentOrder[1].length > 0 && currentOrder[1].title && currentOrder[1].title.includes('RDP') &&
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
            <form className={style['order__form']} onSubmit={submitChangeSystem}>
              <label htmlFor='system'>
               {t('profile-order-system')}
              </label>
              <select
                id='system'
                className={style['order__select']}
                onClick={handleChangeSystem}
              >
                {OS_LIST.map(el => {
                  return (
                    <option value={el.name} key={el.id}>
                      {el.name}
                    </option>
                  );
                })}
              </select>
              <button type='submit' className={style['order__button']}>
                <iconify-icon icon="tabler:refresh"></iconify-icon>&nbsp;
                {t('profile-order-change-system')}
              </button>
            </form>
            <form
              className={`${style['order__form']} ${style['order__form_password']}`}
              noValidate
              onSubmit={submitChangePassword}
            >
              <input
                placeholder={t('profile-order-new-password')}
                type='password'
                name='password'
                className={style['order__input']}
                value={values.password || ''}
                onChange={handleChange}
                required
                minLength='8'
              />
              <p className={`${style.error} ${!isValid ? style['error_active'] : ''}`}>
                {errorOnlyNumbers ? errorOnlyNumbers : (!isValid ? errors.password : '')}
              </p>
              <button
                type='submit'
                className={style['order__button']}
                disabled={!isValid}
              >
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
                <button
                  className={`${style['order__options-button']}
                  ${currentOrder.auto_refresh ? style['order__options-button_red'] : style['order__options-button_green']}`}
                  onClick={handleToggleAutoRefresh}
                  type='button'
                >
                  <iconify-icon icon="simple-line-icons:energy"></iconify-icon>
                  {!currentOrder.auto_refresh ? t('profile-order-option-one') : t('profile-order-option-five')}
                </button>
              </li>
              <li>
                <button
                  className={`${style['order__options-button']} ${style['order__options-button_green']}`}
                  type='button'
                  onClick={handleStartServer}
                >
                  <iconify-icon icon="material-symbols:power-rounded"></iconify-icon>
                  {t('profile-order-option-two')}
                </button>
              </li>
              <li>
                <button
                  className={`${style['order__options-button']} ${style['order__options-button_orange']}`}
                  type='button'
                  onClick={handleRestartServer}
                >
                  <iconify-icon icon="zondicons:reload"></iconify-icon>
                  {t('profile-order-option-three')}
                </button>
              </li>
              <li>
                <button
                  className={`${style['order__options-button']} ${style['order__options-button_red']}`}
                  type='button'
                  onClick={handleStopServer}
                >
                  <iconify-icon icon="lucide:power-off"></iconify-icon>
                  {t('profile-order-option-four')}
                </button>
              </li>
            </ul>
          </section>
        </>
      }
      <MessagePopup
        message={message}
        isOpen={isPopupOpen}
        setIsOpen={setIsPopupOpen}
        isSuccess={isSuccess}
        setIsSuccess={setIsSuccess}
      />
    </div>
  );
}

Order.getLayout = function getLayout(page) {
  return (
    <LayoutAccount>
      {page}
    </LayoutAccount>
  );
}

export default connect(state => state)(Order);
