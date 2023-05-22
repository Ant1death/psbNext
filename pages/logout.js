import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import useParralaxOnBlock from '../hooks/useParralaxOnBlock';
import AuthForm from '../compontens/AuthForm/AuthForm';
import Preloader from '../compontens/Preloader/Preloader';
import { checkAuth } from '../api/checkAuth';
import { useAppDispatch } from '../store/hooks';
import { fetchVdsVps } from '../store/slices/vdsVps';
import { fetchVpn } from '../store/slices/vpn';
import { fetchVdsVpsBulletproof } from '../store/slices/vdsVpsBulletproof';
import { fetchHosting } from '../store/slices/hosting';
import { fetchUser } from '../store/slices/user';
import { fetchOrders } from '../store/slices/orders';
import { logout } from '../api/logout';

import style from '../styles/Auth.module.scss';

const Logout = () => {
  const { transformBlock, handleMouseEnter, handleMouseLeave, block } = useParralaxOnBlock();
  const router = useRouter();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = (evt) => {
    evt.preventDefault();
    const token = typeof window !== 'undefined' && localStorage.getItem('token');

    if (typeof window !== 'undefined') localStorage.setItem('token', '');
    if (typeof window !== 'undefined') localStorage.setItem('username', '');
    dispatch(fetchHosting(null));
    dispatch(fetchOrders(null));
    dispatch(fetchUser(null));
    dispatch(fetchVdsVps(null));
    dispatch(fetchVpn(null));
    dispatch(fetchVdsVpsBulletproof(null));
    logout(token);

    router.push('/');
  }

  const checkName = async (token) => {
    const username = localStorage.getItem('username');

    const name = await checkAuth(token);

    if (name.username !== username || !username) {
      router.push('/login');
    } else {
      setIsLoading(true);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    token ? checkName(token) : router.push('/login');
  }, []);

  return (
    <>
      {!isLoading && <Preloader />}
      {isLoading &&
        <main className={style['container']}>
          <section className={style['content']}>
            <div
              className={style['content__block-logo']}
              ref={block}
              onMouseMove={transformBlock}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img className={style['content__logo']} alt='logo' src='/logo.png' />
            </div>
            <AuthForm
              title={t('logout')}
              button={t('logout-button')}
              handleSubmitForm={handleLogout}
              isValid={true}
            >
              <p className={`${style['form__message']} ${style['form__message_logout']}`}>
                {t('logout-text')}
              </p>
            </AuthForm>
          </section>
        </main>
      }
    </>
  );
}

export default connect(state => state)(Logout);