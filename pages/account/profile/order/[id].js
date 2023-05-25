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
  const { values, errors, isValid, handleChange, resetForm } = useFormAndValidation();

  const [system, setSystem] = useState('');
  const [message, setMessage] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const fetchData = async () => {
    const token = typeof window !== 'undefined' && localStorage.getItem('token');
    if (token) {
      const res = await getCurrentOrder(token, id.pageProps.id);
      if (res) dispatch(fetchCurrentOrder(res[0]));
    }
  }

  const handleChangeSystem = (evt) => {
    setSystem(evt.target.value);
  }

  const submitChangeSystem = async (evt) => {
    evt.preventDefault();

    const token = typeof window !== 'undefined' && localStorage.getItem('token');
    if (system && token) {
      const queries = `order_id=${currentOrder.order_id}&os=${system}`;
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
      const queries = `order_id=${currentOrder.order_id}&password=${values.password}`;
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

  const handleSwitchAutoRefresh = async () => {
    const token = typeof window !== 'undefined' && localStorage.getItem('token');
    if (token) {

    }
  }

  const handleStartServer = async () => {
    const token = typeof window !== 'undefined' && localStorage.getItem('token');
    if (token) {
      const res = await startServer(token, currentOrder.order_id);

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
      const res = await restartServer(token, currentOrder.order_id);

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
      const res = await stopServer(token, currentOrder.order_id);

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

  return (
    <div className={style['order']}>
      {currentOrder &&
        <>
          <section className={`${style['order__details']} ${style['card']}`}>
            <h2 className={style['order__main-title']}>
              {`${t('profile-order')} на аренду сервера ${currentOrder.title}`}
            </h2>
            <h3 className={style['order__section-title']}>
              {t('profile-order-info')}
            </h3>
            <ul className={style['order__details-list']}>
              <li className={style['order__details-item']}>
                {`${t('profile-order-number')} ${currentOrder.order_id}`}
              </li>
              <li className={style['order__details-item']}>
                {`IP: ${currentOrder.ip}`}
              </li>
              <li className={style['order__details-item']}>
                {`${t('profile-order-user')} ${currentOrder.superuser}`}
              </li>
              <li className={style['order__details-item']}>
                {`${t('profile-order-password')} ${currentOrder.password}`}
              </li>
              <li className={style['order__details-item']}>
                {`${t('profile-order-port')} ${currentOrder.port}`}
              </li>
              <li className={style['order__details-item']}>
                {`OS: ${currentOrder.os}`}
              </li>
              <li className={style['order__details-item']}>
                {t('profile-order-renewal')}&nbsp;
                <span className={`${currentOrder.autoRenewal === 'Отключено' ? style['order__span_red'] : ''}`}>
                  {`${currentOrder.autoRenewal}`}
                </span>
              </li>
              <li className={style['order__details-item']}>
                {t('profile-order-price')}&nbsp;
                <span className={style['order__span_dark']}>
                  {`${currentOrder.price}`}
                </span>
              </li>
            </ul>
            {currentOrder.title && currentOrder.title.includes('RDP') &&
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
                {currentOrder.os &&
                  <option value={currentOrder.os.name}>
                    {currentOrder.os.name}
                  </option>
                }
                {currentOrder.os && currentOrder.os.map(el => {
                  if (el.name !== currentOrder.os.name) {
                    return (
                      <option value={el.content} key={el.id}>
                        {el.name}
                      </option>
                    );
                  }
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
                pattern='^(?=.*[+.=*_\-!@#&%,])(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$'
              />
              <p className={`${style.error} ${!isValid ? style['error_active'] : ''}`}>
                {!isValid && errors.password}
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
                  onClick={handleSwitchAutoRefresh}
                  type='button'
                >
                  <iconify-icon icon="simple-line-icons:energy"></iconify-icon>
                </button>
                {!currentOrder.auto_refresh ? t('profile-order-option-one') : t('profile-order-option-five')}
              </li>
              <li>
                <button
                  className={`${style['order__options-button']} ${style['order__options-button_green']}`}
                  type='button'
                  onClick={handleStartServer}
                >
                  <iconify-icon icon="material-symbols:power-rounded"></iconify-icon>
                </button>
                {t('profile-order-option-two')}
              </li>
              <li>
                <button
                  className={`${style['order__options-button']} ${style['order__options-button_orange']}`}
                  type='button'
                  onClick={handleRestartServer}
                >
                  <iconify-icon icon="zondicons:reload"></iconify-icon>
                </button>
                {t('profile-order-option-three')}
              </li>
              <li>
                <button
                  className={`${style['order__options-button']} ${style['order__options-button_red']}`}
                  type='button'
                  onClick={handleStopServer}
                >
                  <iconify-icon icon="lucide:power-off"></iconify-icon>
                </button>
                {t('profile-order-option-four')}
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
