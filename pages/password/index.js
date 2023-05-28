import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import 'iconify-icon';

import LayoutAuth from '../../compontens/LayoutAuth/LayoutAuth';
import AuthForm from '../../compontens/AuthForm/AuthForm';
import { checkAuth } from '../../api/checkAuth';
import MessagePopup from '../../compontens/MessagePopup/MessagePopup';
import { restorePassword } from '../../api/restorePassword';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { EMAIL_REG_EXP } from '../../utils/constants';

import style from '../../styles/Auth.module.scss';

export default function ResetPassword() {
  const router = useRouter();
  const { t } = useTranslation();
  const { values, isValid, handleChange, errors, setIsValid } = useFormAndValidation();

  const [isLoading, setIsLoading] = useState(false);
  const [isErrorMessaggeOpen, setIsErrorMessageOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [errorEmail, setErrorEmail] = useState('');

  const handleSubmitForm = async (evt) => {
    evt.preventDefault();
    const res = await restorePassword(values.email);

    if (res) {
      router.push('/password/reset');
    } else {
      setErrorMessage(t('error'));
      setIsErrorMessageOpen(true);
    }
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

  useEffect(() => {
    if (values.email && !EMAIL_REG_EXP.test(values.email)) {
      setIsValid(false);
      setErrorEmail(t('error-email'));
    } else if (!errors.email && errorEmail) {
      setIsValid(true);
      setErrorEmail('');
    } else {
      setErrorEmail('');
    }
  }, [values.email]);

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
        isValid={isValid}
      >
        <p className={style['form__message']}>
          {t('reset-password-text')}
        </p>
        <label className={style['input']} htmlFor='email'>
          <input
            type='email'
            name='email'
            id='email'
            required
            className={style['input__field']}
            placeholder={t('email')}
            value={values.email || ''}
            onChange={handleChange}
          />
          <span className={style['input__field-focus']}></span>
          <iconify-icon icon="heroicons:envelope-solid"></iconify-icon>
        </label>
        <p className={`${style.error} ${!isValid ? style['error_active'] : ''}`}>
          {errorEmail ? errorEmail : !isValid && errors.email}
        </p>
      </AuthForm>
    </LayoutAuth>
  );
}