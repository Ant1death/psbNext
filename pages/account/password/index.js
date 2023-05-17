import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import 'iconify-icon';

import useParralaxOnBlock from '../../../hooks/useParralaxOnBlock';
import AuthForm from '../../../compontens/AuthForm/AuthForm';

import style from '../../../styles/Auth.module.scss';

export default function ResetPassword() {
  const { transformBlock, handleMouseEnter, handleMouseLeave, block } = useParralaxOnBlock();
  const router = useRouter();
  const { t } = useTranslation();

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    router.push('/account/password/reset');
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
          title={t('reset-password-title')}
          button={t('reset-password-button')}
          bottomLink={t('reset-password-link')}
          bottomLinkHref='/account/login/'
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
  );
}