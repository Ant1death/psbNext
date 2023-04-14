import AuthForm from '../../compontens/AuthForm/AuthForm';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from '../../styles/Auth.module.scss';

export default function Login() {
  return (
    <main className={style['container']}>
      <section className={style['content']}>
        <img className={style['content__logo']} alt='logo' src='/logo.png' />
        <AuthForm
          title='Авторизация'
          button='Вход'
          bottomLink='Создать аккаунт'
          bottomLinkHref='/accounts/signup/'
        >
          <label className={style['input']} htmlFor='name'>
            <input
              type='text'
              name='name'
              id='name'
              required
              className={style['input__field']}
              placeholder='Имя пользователя'
            />
            <span className={style['input__field-focus']}></span>
            <FontAwesomeIcon
              icon={faEnvelope}
              className={style['input__field-icon']}
            />
          </label>
          <label className={style['input']} htmlFor='password'>
            <input
              type='password'
              name='password'
              id='password'
              required
              className={style['input__field']}
              placeholder='Пароль'
            />
            <span className={style['input__field-focus']}></span>
            <FontAwesomeIcon
              icon={faLock}
              className={style['input__field-icon']}
             />
          </label>
        </AuthForm>
      </section>
    </main>
  );
}