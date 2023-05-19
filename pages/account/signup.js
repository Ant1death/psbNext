import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import 'iconify-icon';

import useParralaxOnBlock from '../../hooks/useParralaxOnBlock';
import AuthForm from '../../compontens/AuthForm/AuthForm';
import MessageError from '../../compontens/MessageError/MessageError';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { signup } from '../../api/signup';

import style from '../../styles/Auth.module.scss';

export default function SignUp() {
  const { t } = useTranslation();
  const router = useRouter();
  const { transformBlock, handleMouseEnter, handleMouseLeave, block } = useParralaxOnBlock();
  const { handleChange, values, isValid, errors, setIsValid } = useFormAndValidation();

  const [isErrorMessaggeOpen, setIsErrorMessageOpen] = useState(false);
  const [errorPasswordRepeat, setErrorPasswordRepeat] = useState('');

  const handleSubmitForm = async (evt) => {
    evt.preventDefault();

    const data = await signup(values.name, values.email, values.password);

    if (data.id) {
      router.push('/account/login');
    } else {
      setIsErrorMessageOpen(true);
    }
  }

  useEffect(() => {
    if (isErrorMessaggeOpen) {
      setTimeout(() => {
        setIsErrorMessageOpen(false);
      }, 5000);
    }
  }, [isErrorMessaggeOpen]);

  useEffect(() => {
    if (values.password !== values.repeatPassword) {
      setIsValid(false);
      setErrorPasswordRepeat('Пароли не совпадают');
    } else if (!errors.name && !errors.email && !errors.password && !errors.repeatPassword && errorPasswordRepeat) {
      setIsValid(true);
      setErrorPasswordRepeat('');
    } else {
      setErrorPasswordRepeat('');
    }
  }, [values.name, values.email, values.password, values.repeatPassword]);

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
          title={t('signup')}
          button={t('signup-button')}
          bottomLink={t('signup-link')}
          bottomLinkHref='/account/login/'
          handleSubmitForm={handleSubmitForm}
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
          <span className={`${style.error} ${!isValid ? style['error_active'] : ''}`}>
            {!isValid && errors.name}
          </span>
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
          <span className={`${style.error} ${!isValid ? style['error_active'] : ''}`}>
            {!isValid && errors.email}
          </span>
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
          <span className={`${style.error} ${!isValid ? style['error_active'] : ''}`}>
            {!isValid && errors.password}
          </span>
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
            />
            <span className={style['input__field-focus']}></span>
            <iconify-icon icon="bxs:lock-alt"></iconify-icon>
          </label>
          <span className={`${style.error} ${!isValid ? style['error_active'] : ''}`}>
            {errorPasswordRepeat ? errorPasswordRepeat : (!isValid ? errors.repeatPassword : '')}
          </span>
        </AuthForm>
      </section>
      <MessageError
        isOpen={isErrorMessaggeOpen}
        message='Что-то пошло не так...'
      />
    </main>
  );
}