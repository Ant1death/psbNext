import Link from 'next/link';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from '../../styles/Auth.module.scss';

const AuthForm = ({ title, children, button, bottomLink, bottomLinkHref }) => {
  return (
    <form className={style['form']}>
      <p className={style['form__title']}>
        {title}
      </p>
      {button === 'Восстановить' &&
        <p className={style['form__message']}>
          Если вы забыли данные для доступа в личный кабинет, укажите почту и мы вышлем вам доступ.
        </p>
      }
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
        <FontAwesomeIcon
          icon={faArrowRightLong}
          className={style['form__bottom-link-icon']}
        />
      </Link>
    </form>
  );
}

export default AuthForm;