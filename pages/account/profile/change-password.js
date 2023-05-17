import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <form className={style['form']}>
      <h2 className={style['form__title']}>
        {`${t('profile-password')} ${user.name}`}
      </h2>
      <label htmlFor='oldPassword' className={style['form__label']}>
        {t('profile-password-old')}
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
        {t('profile-password-new')}
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
        <li>{t('profile-password-rule-one')}</li>
        <li>{t('profile-password-rule-two')}</li>
        <li>{t('profile-password-rule-three')}</li>
        <li>{t('profile-password-rule-four')}</li>
      </ul>
      <label htmlFor='confirmPassword' className={style['form__label']}>
        {t('profile-password-new-repeat')}
        <input
          type='password'
          name='confirmPassword'
          id='confirmPassword'
          required
          className={style['form__input']}
        />
        <span className={style['form__error']}></span>
      </label>
      <button type='submit' className={style['form__button']}>
        {t('profile-password-button')}
      </button>
    </form>
  );
}