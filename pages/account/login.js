import { useTranslation } from 'react-i18next';
import 'iconify-icon';

import useParralaxOnBlock from '../../hooks/useParralaxOnBlock';
import AuthForm from '../../compontens/AuthForm/AuthForm';

import style from '../../styles/Auth.module.scss';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

export default function Login() {
  const { t } = useTranslation();
  const { transformBlock, handleMouseEnter, handleMouseLeave, block } = useParralaxOnBlock();
  const { handleChange, values, setValues } = useFormAndValidation();

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
          title={t('login')}
          button={t('login-button')}
          bottomLink={t('login-link')}
          bottomLinkHref='/account/signup/'
        >
          <label className={style['input']} htmlFor='name'>
            <input
              type='text'
              name='name'
              id='name'
              required
              className={style['input__field']}
              placeholder={t('name')}
              value={values.name || ''}
              onChange={handleChange}
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
              placeholder={t('password')}
              value={values.password || ''}
              onChange={handleChange}
            />
            <span className={style['input__field-focus']}></span>
            <iconify-icon icon="bxs:lock-alt"></iconify-icon>
          </label>
        </AuthForm>
      </section>
    </main>
  );
}