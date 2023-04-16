import Link from 'next/link';
import 'iconify-icon';
import style from '../../styles/Auth.module.scss';

const AuthForm = ({ title, children, button, bottomLink, bottomLinkHref }) => {
  return (
    <form className={style['form']}>
      <p className={style['form__title']}>
        {title}
      </p>
      {children}
      <button type='submit' className={style['form__button-submit']}>
        {button}
      </button>
      {button === 'Вход' &&
        <p className={style['form__link-reset-password']}>
          Забыли&nbsp;
          <Link href='/account/password/reset/' className={style['form__link']}>
            имя пользователя / пароль?
          </Link>
        </p>
      }
      <Link href={bottomLinkHref} className={`${style['form__link']} ${style['form__link-bottom']}`}>
        {bottomLink}
        <iconify-icon icon="material-symbols:arrow-right-alt-rounded"></iconify-icon>
      </Link>
    </form>
  );
}

export default AuthForm;