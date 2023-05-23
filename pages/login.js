import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import 'iconify-icon';

import useParralaxOnBlock from '../hooks/useParralaxOnBlock';
import AuthForm from '../compontens/AuthForm/AuthForm';
import MessagePopup from '../compontens/MessagePopup/MessagePopup';
import { useFormAndValidation } from '../hooks/useFormAndValidation';
import { login } from '../api/login';
import Preloader from '../compontens/Preloader/Preloader';
import { checkAuth } from '../api/checkAuth';

import style from '../styles/Auth.module.scss';

const Login = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { transformBlock, handleMouseEnter, handleMouseLeave, block } = useParralaxOnBlock();
  const { handleChange, values, errors, isValid } = useFormAndValidation();

  const [isErrorMessaggeOpen, setIsErrorMessageOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const checkName = async (token) => {
    const username = localStorage.getItem('username');

    const name = await checkAuth(token);

    if (name.username === username) {
      router.push('/account');
    } else if (name.username !== username || !username) {
      setIsLoading(true);
    }
  }

  const handleSubmitForm = (evt) => {
    evt.preventDefault();

    login(values.name, values.password)
      .then(res => {
        if (res) {
          localStorage.setItem('username', values.name);
          localStorage.setItem('token', res.access_token);
          router.push('/account');
        }
      })
      .catch(err => {
        setErrorMessage(`${t('error')}: ${err.message}`);
        setIsErrorMessageOpen(true);
      });
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
              title={t('login')}
              button={t('login-button')}
              bottomLink={t('login-link')}
              bottomLinkHref='/signup'
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
                <iconify-icon icon="heroicons:envelope-solid"></iconify-icon>
              </label>
              <p className={`${style.error} ${!isValid ? style['error_active'] : ''}`}>
                {!isValid && errors.name}
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
                />
                <span className={style['input__field-focus']}></span>
                <iconify-icon icon="bxs:lock-alt"></iconify-icon>
              </label>
              <p className={`${style.error} ${!isValid ? style['error_active'] : ''}`}>
                {!isValid && errors.password}
              </p>
            </AuthForm>
          </section>
          <MessagePopup
            isOpen={isErrorMessaggeOpen}
            message={errorMessage}
            setIsOpen={setIsErrorMessageOpen}
          />
        </main>
      }
    </>
  );
}

export default connect(state => state)(Login);