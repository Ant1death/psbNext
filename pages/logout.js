import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import useParralaxOnBlock from '../hooks/useParralaxOnBlock';
import AuthForm from '../compontens/AuthForm/AuthForm';
import Preloader from '../compontens/Preloader/Preloader';
import { checkAuth } from '../api/checkAuth';

import style from '../styles/Auth.module.scss';

export default function Login() {
  const { transformBlock, handleMouseEnter, handleMouseLeave, block } = useParralaxOnBlock();
  const router = useRouter();
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(false);

  const logout = (evt) => {
    evt.preventDefault();
    if (typeof window !== 'undefined') localStorage.setItem('token', '');
    if (typeof window !== 'undefined') localStorage.setItem('username', '');

    router.push('/login');
  }

  const checkName = async (token) => {
    const username = localStorage.getItem('username');

    const name = await checkAuth(token);

    if (name.username !== username) {
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
              handleSubmitForm={logout}
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