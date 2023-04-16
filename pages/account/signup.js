import 'iconify-icon';
import useParralaxOnBlock from '../../hooks/useParralaxOnBlock';
import AuthForm from '../../compontens/AuthForm/AuthForm';
import style from '../../styles/Auth.module.scss';

export default function SignUp() {
  const { transformBlock, handleMouseEnter, handleMouseLeave, block } = useParralaxOnBlock();

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
          title='Регистрация'
          button='Создать аккаунт'
          bottomLink='Уже зарегистрированы? войдите'
          bottomLinkHref='/account/login/'
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
            <iconify-icon icon="ri:user-fill"></iconify-icon>
          </label>
          <label className={style['input']} htmlFor='email'>
            <input
              type='text'
              name='email'
              id='email'
              required
              className={style['input__field']}
              placeholder='Электронная почта'
            />
            <span className={style['input__field-focus']}></span>
            <iconify-icon icon="heroicons:envelope-solid"></iconify-icon>
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
            <iconify-icon icon="bxs:lock-alt"></iconify-icon>
          </label>
          <label className={style['input']} htmlFor='repeat-password'>
            <input
              type='password'
              name='repeat-password'
              id='repeat-password'
              required
              className={style['input__field']}
              placeholder='Повторите пароль'
            />
            <span className={style['input__field-focus']}></span>
            <iconify-icon icon="bxs:lock-alt"></iconify-icon>
          </label>
        </AuthForm>
      </section>
    </main>
  );
}