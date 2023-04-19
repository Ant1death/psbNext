import LayoutAccount from '../../../compontens/LayoutAccount/LayoutAccount';
import style from '../../../styles/Profile.module.scss';
// Todo: delete after connecting API
import { user } from '../../../utils/data/user';

FormPassword.getLayout = function getLayout(page) {
  return (
    <LayoutAccount>
      {page}
    </LayoutAccount>
  );
}

export default function FormPassword() {
  return (
    <form className={style['form']}>
      <h2 className={style['form__title']}>
        {`Смена пароля пользователя ${user.name}`}
      </h2>
      <label htmlFor='oldPassword' className={style['form__label']}>
      Старый пароль:
        <input
          type='password'
          name='oldPassword'
          id='oldPassword'
          required
          className={style['form__input']}
        />
        <span className={style['form__error']}></span>
      </label>
      <label htmlFor='newPassword' className={style['form__label']}>
        Новый пароль:
        <input
          type='password'
          name='newPassword'
          id='newPassword'
          required
          className={style['form__input']}
        />
        <span className={style['form__error']}></span>
      </label>
      <ul className={style['form__list']}>
        <li>Пароль не должен быть слишком похож на другую вашу личную информацию.</li>
        <li>Ваш пароль должен содержать как минимум 8 символов.</li>
        <li>Пароль не должен быть слишком простым и распространенным.</li>
        <li>Пароль не может состоять только из цифр.</li>
      </ul>
      <label htmlFor='confirmPassword' className={style['form__label']}>
        Подтверждение нового пароля:
        <input
          type='password'
          name='confirmPassword'
          id='confirmPassword'
          required
          className={style['form__input']}
        />
        <span className={style['form__error']}></span>
      </label>
      <button type='submit' className={style['form__button']}>Изменить</button>
    </form>
  );
}