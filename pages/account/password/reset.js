import 'iconify-icon';
import useParralaxOnBlock from '../../../hooks/useParralaxOnBlock';
import AuthForm from '../../../compontens/AuthForm/AuthForm';
import style from '../../../styles/Auth.module.scss';

export default function ResetPassword() {
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
          title='Восстановление аккаунта'
          button='Восстановить'
          bottomLink='Вспомнили? Войдите'
          bottomLinkHref='/account/login/'
        >
          <p className={style['form__message']}>
            Если вы забыли данные для доступа в личный кабинет, укажите почту и мы вышлем вам доступ.
          </p>
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
        </AuthForm>
      </section>
    </main>
  );
}