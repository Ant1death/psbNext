import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import 'iconify-icon';

import LayoutAuth from '../../compontens/LayoutAuth/LayoutAuth';
import AuthForm from '../../compontens/AuthForm/AuthForm';
import { checkAuth } from '../../api/checkAuth';
import MessagePopup from '../../compontens/MessagePopup/MessagePopup';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

import style from '../../styles/Auth.module.scss';

export default function ResetPassword() {
  const router = useRouter();
  const { t } = useTranslation();
  const { handleChange, values, isValid, errors, setIsValid } = useFormAndValidation();

  const [errorPasswordRepeat, setErrorPasswordRepeat] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorMessaggeOpen, setIsErrorMessageOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmitForm = (evt) => {

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
    if (values.password !== values.repeatPassword) {
      setIsValid(false);
      setErrorPasswordRepeat(t('error-passwords-not-match'));
    } else if (!errors.name && !errors.email && !errors.password && !errors.repeatPassword && errorPasswordRepeat) {
      setIsValid(true);
      setErrorPasswordRepeat('');
    } else {
      setErrorPasswordRepeat('');
    }
  }, [values.name, values.email, values.password, values.repeatPassword]);

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
        title={t('change-password-title')}
        button={t('change-password-button')}
        handleSubmitForm={handleSubmitForm}
      >
        <label className={style['input']} htmlFor='password'>
          <input
            type='password'
            name='password'
            id='password'
            required
            className={style['input__field']}
            placeholder={t('change-password')}
            value={values.password || ''}
            onChange={handleChange}
            pattern='^(?=.*[+.=*_\-!@#&%,])(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$'
          />
          <span className={style['input__field-focus']}></span>
          <iconify-icon icon="bxs:lock-alt"></iconify-icon>
        </label>
        <p className={`${style.error} ${!isValid ? style['error_active'] : ''}`}>
          {!isValid && errors.password}
        </p>
        <label className={style['input']} htmlFor='repeat-password'>
          <input
            type='password'
            name='repeatPassword'
            id='repeat-password'
            required
            className={style['input__field']}
            placeholder={t('password-repeat')}
            value={values.repeatPassword || ''}
            onChange={handleChange}
            pattern='^(?=.*[+.=*_\-!@#&%,])(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$'
          />
          <span className={style['input__field-focus']}></span>
          <iconify-icon icon="bxs:lock-alt"></iconify-icon>
        </label>
        <p className={`${style.error} ${!isValid ? style['error_active'] : ''}`}>
          {errorPasswordRepeat ? errorPasswordRepeat : (!isValid ? errors.repeatPassword : '')}
        </p>
      </AuthForm>
    </LayoutAuth>
  );
}