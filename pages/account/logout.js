import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import useParralaxOnBlock from '../../hooks/useParralaxOnBlock';
import AuthForm from '../../compontens/AuthForm/AuthForm';

import style from '../../styles/Auth.module.scss';

export default function Login() {
  const { transformBlock, handleMouseEnter, handleMouseLeave, block } = useParralaxOnBlock();
  const router = useRouter();
  const { t } = useTranslation();

  const logout = (evt) => {
    evt.preventDefault();

    router.push('/account/login');
  }

  return (
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
  );
}