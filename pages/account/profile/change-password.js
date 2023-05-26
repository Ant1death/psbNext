import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import LayoutAccount from '../../../compontens/LayoutAccount/LayoutAccount';
import MessagePopup from '../../../compontens/MessagePopup/MessagePopup';
import { useFormAndValidation } from '../../../hooks/useFormAndValidation';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { getUser } from '../../../api/getUser';
import { fetchUser } from '../../../store/slices/user';
import { changeProfilePassword } from '../../../api/changeProfilePassword';

import style from '../../../styles/Profile.module.scss';

const FormPassword = () => {
  const { t } = useTranslation();
  const { values, handleChange, errors, isValid, resetForm, setIsValid } = useFormAndValidation();
  const dispatch = useAppDispatch();
  const user = useAppSelector(store => store.user.user);

  const [isMessaggePopupOpen, setIsMessaggePopupOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isFormSubmitSuccess, setIsFormSubmitSuccess] = useState(false);
  const [errorPasswordRepeat, setErrorPasswordRepeat] = useState('');
  const [errorPasswordEquals, setErrorPasswordEquals] = useState('');

  const fetchData = async (token) => {
    const data = await getUser(token);
    if (data) dispatch(fetchUser(data));
  }

  const handleFormSubmit = async (evt) => {
    evt.preventDefault();

    const token = localStorage.getItem('token');

    if (token && values.oldPassword !== values.newPassword) {
      const res = await changeProfilePassword(token, values.newPassword);

      if (res) {
        setMessage(t('error-saved'));
        setIsMessaggePopupOpen(true);
        setIsFormSubmitSuccess(true);
        resetForm();
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
    if (values.oldPassword === values.newPassword
      && values.oldPassword !== ''
      && values.oldPassword !==undefined
    ) {
      setIsValid(false);
      setErrorPasswordRepeat(t('error-password-use'));
    } else if (!errors.oldPassword && !errorPasswordEquals && errorPasswordRepeat) {
      setIsValid(true);
      setErrorPasswordRepeat('');
    } else {
      setErrorPasswordRepeat('');
    }

    if (values.confirmPassword !== values.newPassword) {
      setIsValid(false);
      setErrorPasswordEquals(t('error-passwords-not-match'));
    } else if (!errors.oldPassword && errorPasswordEquals && !errorPasswordRepeat) {
      setIsValid(true);
      setErrorPasswordEquals('');
    } else {
      setErrorPasswordEquals('');
    }
  }, [values.confirmPassword, values.newPassword, values.oldPassword]);

  return (
    <>
      <form className={style['form']} noValidate onSubmit={handleFormSubmit}>
        <h2 className={style['form__title']}>
          {user && `${t('profile-password')} ${user.username}`}
        </h2>
        <label htmlFor='oldPassword' className={style['form__label']}>
          {t('profile-password-old')}
          <input
            type='password'
            name='oldPassword'
            id='oldPassword'
            required
            className={style['form__input']}
            value={values.oldPassword || ''}
            onChange={handleChange}
            minLength='8'
            pattern='^(?=.*[+.=*_\-!@#&%,])(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$'
          />
        </label>
        <p className={`${style['form__error']} ${!isValid ? style['form__error_active'] : ''}`}>
          {!isValid && errors.oldPassword}
        </p>
        <label htmlFor='newPassword' className={style['form__label']}>
          {t('profile-password-new')}
          <input
            type='password'
            name='newPassword'
            id='newPassword'
            required
            className={style['form__input']}
            value={values.newPassword || ''}
            onChange={handleChange}
            minLength='8'
            pattern='^(?=.*[+.=*_\-!@#&%,])(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$'
          />
        </label>
        <p className={`${style['form__error']} ${!isValid ? style['form__error_active'] : ''}`}>
          {errorPasswordRepeat ? errorPasswordRepeat : (!isValid ? errors.repeatPassword : '')}
        </p>
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
            value={values.confirmPassword || ''}
            onChange={handleChange}
            minLength='8'
            pattern='^(?=.*[+.=*_\-!@#&%,])(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$'
          />
        </label>
        <p className={`${style['form__error']} ${!isValid ? style['form__error_active'] : ''}`}>
          {errorPasswordEquals ? errorPasswordEquals : (!isValid ? errors.repeatPassword : '')}
        </p>
        <button type='submit' className={style['form__button']} disabled={!isValid}>
          {t('profile-password-button')}
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

FormPassword.getLayout = function getLayout(page) {
  return (
    <LayoutAccount>
      {page}
    </LayoutAccount>
  );
}

export default connect(state => state)(FormPassword);