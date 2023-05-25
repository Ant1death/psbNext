import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import 'iconify-icon';

import useParralaxOnBlock from '../../hooks/useParralaxOnBlock';
import AuthForm from '../../compontens/AuthForm/AuthForm';
import Preloader from '../../compontens/Preloader/Preloader';
import { checkAuth } from '../../api/checkAuth';

import style from '../../styles/Auth.module.scss';

export default function ResetPassword() {
  const { transformBlock, handleMouseEnter, handleMouseLeave, block } = useParralaxOnBlock();
  const router = useRouter();
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    router.push('/password/reset');
  }

  const checkName = async (token) => {
    const username = localStorage.getItem('username');

    const name = await checkAuth(token);

    if (name.username === username) {
      router.push('/account');
    } else {
      setIsLoading(true);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    token ? checkName(token) : setIsLoading(true);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="PSB Hosting" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>{`${t('login')}`}</title>
        <link rel="icon" href="/images/logo.svg" />
      </Head>
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
              title={t('reset-password-title')}
              button={t('reset-password-button')}
              bottomLink={t('reset-password-link')}
              bottomLinkHref='/login'
              handleSubmitForm={handleSubmitForm}
            >
              <p className={style['form__message']}>
                {t('reset-password-text')}
              </p>
              <label className={style['input']} htmlFor='email'>
                <input
                  type='text'
                  name='email'
                  id='email'
                  required
                  className={style['input__field']}
                  placeholder={t('email')}
                />
                <span className={style['input__field-focus']}></span>
                <iconify-icon icon="heroicons:envelope-solid"></iconify-icon>
              </label>
            </AuthForm>
          </section>
        </main>
      }
    </>
  );
}