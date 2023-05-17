import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import LayoutAccount from '../../../compontens/LayoutAccount/LayoutAccount';
import { useFormAndValidation } from '../../../hooks/useFormAndValidation';

import style from '../../../styles/Profile.module.scss';
// Todo: delete after connecting API
import { user } from '../../../utils/data/user';

Profile.getLayout = function getLayout(page) {
  return (
    <LayoutAccount>
      {page}
    </LayoutAccount>
  );
}

export default function Profile() {
  const { values, handleChange, errors, isValid, setValues } = useFormAndValidation();
  const { t } = useTranslation();

  useEffect(() => {
    setValues({ ...values, name: user.name, email: user.email });
  }, []);

  return (
    <form className={style['form']}>
      <h2 className={style['form__title']}>
        {t('profile')}
      </h2>
      <label htmlFor='name' className={style['form__label']}>
        Nickname:
        <input
          type='text'
          name='name'
          id='name'
          required
          className={style['form__input']}
          value={values.name || ''}
          onChange={handleChange}
        />
        <span className={style['form__error']}></span>
      </label>
      <label htmlFor='email' className={style['form__label']}>
        Email:
        <input
          type='email'
          name='email'
          id='email'
          required
          className={style['form__input']}
          value={values.email || ''}
          onChange={handleChange}
        />
        <span className={style['form__error']}></span>
      </label>
      <button type='submit' className={style['form__button']}>
        {t('profile-button')}
      </button>
    </form>
  );
}