import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import 'iconify-icon';

import useParralaxOnBlock from '../../hooks/useParralaxOnBlock';
import AuthForm from '../../compontens/AuthForm/AuthForm';
import Preloader from '../../compontens/Preloader/Preloader';
import { checkAuth } from '../../api/checkAuth';

import style from '../../styles/Auth.module.scss';

export default function ResetPasswordDone() {
  const { transformBlock, handleMouseEnter, handleMouseLeave, block } = useParralaxOnBlock();
  const router = useRouter();
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(false);

  const checkName = async (token) => {
    const username = localStorage.getItem('username');

    const name = await checkAuth(token);

    if (name.username === username) {
      router.push('/account');
    } else {
      setIsLoading(true);
    }
  }

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    router.push('/login');
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    token ? checkName(token) : setIsLoading(true);
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
              title={t('reset-password-success-title')}
              button={t('button-go-back')}
              bottomLink={t('reset-password-link')}
              bottomLinkHref='/login'
              handleSubmitForm={handleSubmitForm}
            >
              <p className={style['form__message']}>
                {t('reset-password-success-text')}
              </p>
            </AuthForm>
          </section>
        </main>
      }
    </>
  );
}