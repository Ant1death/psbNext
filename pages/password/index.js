import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import 'iconify-icon';

import LayoutAuth from '../../compontens/LayoutAuth/LayoutAuth';
import AuthForm from '../../compontens/AuthForm/AuthForm';
import { checkAuth } from '../../api/checkAuth';
import MessagePopup from '../../compontens/MessagePopup/MessagePopup';

import style from '../../styles/Auth.module.scss';

export default function ResetPassword() {
  const router = useRouter();
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(false);
  const [isErrorMessaggeOpen, setIsErrorMessageOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    router.push('/password/reset');
  }

  const checkName = async (token) => {
    const username = localStorage.getItem('username');

    const name = await checkAuth(token);

    if (name && username && name.username === username) {
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
    <LayoutAuth
      isLoading={isLoading}
      popup={
        <MessagePopup
          isOpen={isErrorMessaggeOpen}
          message={errorMessage}
          setIsOpen={setIsErrorMessageOpen}
        />
      }
    >
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
    </LayoutAuth>
  );
}