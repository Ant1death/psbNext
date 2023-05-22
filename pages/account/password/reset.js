import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import 'iconify-icon';

import useParralaxOnBlock from '../../../hooks/useParralaxOnBlock';
import AuthForm from '../../../compontens/AuthForm/AuthForm';

import style from '../../../styles/Auth.module.scss';

export default function ResetPasswordDone() {
  const { transformBlock, handleMouseEnter, handleMouseLeave, block } = useParralaxOnBlock();
  const router = useRouter();
  const { t } = useTranslation();

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    router.push('/account/login/');
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
          title={t('reset-password-success-title')}
          button={t('button-go-back')}
          bottomLink={t('reset-password-link')}
          bottomLinkHref='/account/login/'
          handleSubmitForm={handleSubmitForm}
        >
          <p className={style['form__message']}>
            {t('reset-password-success-text')}
          </p>
        </AuthForm>
      </section>
    </main>
  );
}