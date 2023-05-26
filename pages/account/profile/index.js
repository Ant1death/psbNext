import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import LayoutAccount from '../../../compontens/LayoutAccount/LayoutAccount';
import MessagePopup from '../../../compontens/MessagePopup/MessagePopup';
import { useFormAndValidation } from '../../../hooks/useFormAndValidation';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { getUser } from '../../../api/getUser';
import { fetchUser, changeName, changeEmail } from '../../../store/slices/user';
import { changeProfileData } from '../../../api/changeProfileData';

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

  const hendleFormSubmit = async (evt) => {
    evt.preventDefault();

    const token = localStorage.getItem('token');

    if (token && (values.name !== user.username || values.email !== user.email)) {
      const queries = `username=${values.name}&email=${values.email}`;
      const res = await changeProfileData(token, queries);

      if (res) {
        setMessage(t('error-saved'));
        setIsMessaggePopupOpen(true);
        setIsFormSubmitSuccess(true);
        if (values.name !== user.username) dispatch(changeName(values.name));
        if (values.email !== user.email) {
          dispatch(changeEmail(values.email));
        typeof window !== 'undefined' && localStorage.setItem('username', values.email.toLowerCase());
        };
      } else {
        setMessage(t('error'));
        setIsMessaggePopupOpen(true);
      }
    } else {
      setMessage(t('error-change-profile'));
      setIsMessaggePopupOpen(true);
    }
  }

  useEffect(() => {
    if (!user) {
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