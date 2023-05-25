import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import 'iconify-icon';

import LayoutAuth from '../../compontens/LayoutAuth/LayoutAuth';
import AuthForm from '../../compontens/AuthForm/AuthForm';
import { checkAuth } from '../../api/checkAuth';

import style from '../../styles/Auth.module.scss';

export default function ResetPasswordDone() {
  const router = useRouter();
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(false);

  const checkName = async (token) => {
    const username = localStorage.getItem('username');

    const name = await checkAuth(token);

    if (name && username && name.username === username) {
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
    <LayoutAuth
      isLoading={isLoading}
    >
      <AuthForm
        title={t('reset-password-success-title')}
        button={t('button-go-back')}
        bottomLink={t('reset-password-link')}
        bottomLinkHref='/login'
        handleSubmitForm={handleSubmitForm}
        isValid={true}
      >
        <p className={style['form__message']}>
          {t('reset-password-success-text')}
        </p>
      </AuthForm>
    </LayoutAuth>
  );
}