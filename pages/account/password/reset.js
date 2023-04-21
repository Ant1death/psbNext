import { useRouter } from 'next/router';
import 'iconify-icon';
import useParralaxOnBlock from '../../../hooks/useParralaxOnBlock';
import AuthForm from '../../../compontens/AuthForm/AuthForm';
import style from '../../../styles/Auth.module.scss';

export default function ResetPasswordDone() {
  const { transformBlock, handleMouseEnter, handleMouseLeave, block } = useParralaxOnBlock();
  const router = useRouter();

  const handleSubmitForm = (evt) => {
    evt.preventDefault();
    router.push('/account/login/');
  }

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
          title='Письмо отправлено'
          button='Вернуться'
          bottomLink='Вспомнили? Войдите'
          bottomLinkHref='/account/login/'
          handleSubmitForm={handleSubmitForm}
        >
          <p className={style['form__message']}>
            Отлично, письмо отправлено на вашу почту, обычно это
            занимает 5 минут, проверьте почту и перейдите по ссылке.
          </p>
        </AuthForm>
      </section>
    </main>
  );
}