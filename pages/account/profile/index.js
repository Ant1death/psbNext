import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import LayoutAccount from '../../../compontens/LayoutAccount/LayoutAccount';
import MessagePopup from '../../../compontens/MessagePopup/MessagePopup';
import { useFormAndValidation } from '../../../hooks/useFormAndValidation';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { getUser } from '../../../api/getUser';
import { fetchUser } from '../../../store/slices/user';

import style from '../../../styles/Profile.module.scss';

const Profile = () => {
  const { values, handleChange, errors, isValid, setValues } = useFormAndValidation();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const user = useAppSelector(store => store.user.user);

  const [isMessaggePopupOpen, setIsMessaggePopupOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isFormSubmitSuccess, setIsFormSubmitSuccess] = useState(false);

  const fetchData = async (token) => {
    const data = await getUser(token);
    if (data) dispatch(fetchUser(data));
  }

  const hendleFormSubmit = (evt) => {
    evt.preventDefault();

    if (values.name !== user.username || values.email !== user.email) {
      console.log(values.name, values.email);
      setMessage('Изменения сохранены');
      setIsMessaggePopupOpen(true);
      setIsFormSubmitSuccess(true);
    }
  }

  useEffect(() => {
    if (user) {
      const token = localStorage.getItem('token');
      fetchData(token);
    }
  }, []);

  useEffect(() => {
    if (user) setValues({ ...values, name: user.username, email: user.email });
  }, [user]);

  return (
    <>
      <form className={style['form']} noValidate onSubmit={hendleFormSubmit}>
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
        </label>
        <p className={`${style['form__error']} ${!isValid ? style['form__error_active'] : ''}`}>
          {!isValid && errors.name}
        </p>
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
        </label>
        <p className={`${style['form__error']} ${!isValid ? style['form__error_active'] : ''}`}>
          {!isValid && errors.email}
        </p>
        <button type='submit' className={style['form__button']} disabled={!isValid}>
          {t('profile-button')}
        </button>
      </form>
      <MessagePopup
        isOpen={isMessaggePopupOpen}
        message={message}
        setIsOpen={setIsMessaggePopupOpen}
        isSuccess={isFormSubmitSuccess}
        setIsSuccess={setIsFormSubmitSuccess}
      />
    </>
  );
}

Profile.getLayout = function getLayout(page) {
  return (
    <LayoutAccount>
      {page}
    </LayoutAccount>
  );
}

export default connect(state => state)(Profile);