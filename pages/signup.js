import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import 'iconify-icon';

import AuthForm from '../compontens/AuthForm/AuthForm';
import MessagePopup from '../compontens/MessagePopup/MessagePopup';
import { useFormAndValidation } from '../hooks/useFormAndValidation';
import { signup } from '../api/signup';
import { login } from '../api/login';
import { checkAuth } from '../api/checkAuth';
import LayoutAuth from '../compontens/LayoutAuth/LayoutAuth';
import { CYRILLIC_REG_EXP, EMAIL_REG_EXP, NUMBER_REG_EXP } from '../utils/constants';

import style from '../styles/Auth.module.scss';

export default function SignUp() {
  const { t } = useTranslation();
  const router = useRouter();
  const { handleChange, values, isValid, errors, setIsValid } = useFormAndValidation();

  const [isErrorMessaggeOpen, setIsErrorMessageOpen] = useState(false);
  const [errorPasswordRepeat, setErrorPasswordRepeat] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorOnlyNumbers, setErrorOnlyNumbers] = useState('');
  const [errorCyrillicName, setErrorCyrilycName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitForm = (evt) => {
    evt.preventDefault();

   signup(values.name, values.email, values.password)
    .then (res => {
      if (res) {
        login(values.email, values.password)
          .then (res => {
            if (res) {
              localStorage.setItem('username', values.email.toLowerCase());
              localStorage.setItem('token', res.access_token);
              router.push('/account');
            }
          })
          .catch ((err) => {
            setErrorMessage(`${err.includes('400') || err.includes('422') ? t('error-login') : t('error')}`);
            setIsErrorMessageOpen(true);
          })
      }
    })
    .catch(err => {
      if (typeof(err) === 'object') {
        setErrorMessage(`${err}`);
      } else {
        if (err.includes('400')) {
          setErrorMessage(`${t('error-user')}`);
        } else {
          setErrorMessage(`${err}`);
        }
      }
      setIsErrorMessageOpen(true);
    });
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
    } else if (
        !errors.name
        && !errors.email
        && !errors.password
        && !errors.repeatPassword
        && !errorCyrillicName
        && errorPasswordRepeat
        && !errorEmail
        && !errorOnlyNumbers
      ) {
      setIsValid(true);
      setErrorPasswordRepeat('');
    } else {
      setErrorPasswordRepeat('');
    }

    if (values.name && values.name.match(CYRILLIC_REG_EXP)) {
      setIsValid(false);
      setErrorCyrilycName(t('error-name'));
    } else if (
        !errors.name &&
        !errors.email &&
        !errors.password
        && !errors.repeatPassword
        && errorCyrillicName
        && !errorPasswordRepeat
        && !errorEmail
        && !errorOnlyNumbers
      ) {
      setIsValid(true);
      setErrorCyrilycName('');
    } else {
      setErrorCyrilycName('');
    }

    if (values.email && !EMAIL_REG_EXP.test(values.email)) {
      setIsValid(false);
      setErrorEmail(t('error-email'));
    } else if (
        !errors.name
        && !errors.email
        && !errors.password
        && !errors.repeatPassword
        && !errorCyrillicName
        && !errorPasswordRepeat
        && errorEmail
        && !errorOnlyNumbers
      ) {
      setIsValid(true);
      setErrorEmail('');
    } else {
      setErrorEmail('');
    }

    if (values.password && NUMBER_REG_EXP.test(values.password)) {
      setIsValid(false);
      setErrorOnlyNumbers(t('error-numbers'));
    } else if (
        !errors.name
        && !errors.email
        && !errors.password
        && !errors.repeatPassword
        && !errorCyrillicName
        && !errorPasswordRepeat
        && !errorEmail
        && errorOnlyNumbers
      ) {
      setIsValid(true);
      setErrorOnlyNumbers('');
    } else {
      setErrorOnlyNumbers('');
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
        title={t('signup')}
        button={t('signup-button')}
        bottomLink={t('signup-link')}
        bottomLinkHref='/login'
        handleSubmitForm={handleSubmitForm}
        isValid={isValid}
      >
        <label className={style['input']} htmlFor='name'>
          <input
            type='text'
            name='name'
            id='name'
            required
            className={style['input__field']}
            placeholder={t('name')}
            value={values.name || ''}
            onChange={handleChange}
          />
          <span className={style['input__field-focus']}></span>
          <iconify-icon icon="ri:user-fill"></iconify-icon>
        </label>
        <p className={`${style.error} ${!isValid ? style['error_active'] : ''}`}>
          {errorCyrillicName ? errorCyrillicName : (!isValid && errors.name)}
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
        <label className={style['input']} htmlFor='password'>
          <input
            type='password'
            name='password'
            id='password'
            required
            className={style['input__field']}
            placeholder={t('password')}
            value={values.password || ''}
            onChange={handleChange}
            minLength='8'
          />
          <span className={style['input__field-focus']}></span>
          <iconify-icon icon="bxs:lock-alt"></iconify-icon>
        </label>
        <p className={`${style.error} ${!isValid ? style['error_active'] : ''}`}>
          {errorOnlyNumbers ? errorOnlyNumbers : !isValid && errors.password}
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
            minLength='8'
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