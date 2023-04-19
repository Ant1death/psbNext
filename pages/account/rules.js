import LayoutAccount from '../../compontens/LayoutAccount/LayoutAccount';
import style from '../../styles/Rules.module.scss';

Rules.getLayout = function getLayout(page) {
  return (
    <LayoutAccount>
      {page}
    </LayoutAccount>
  );
}

export default function Rules() {
  return (
    <>
      <section className='section-account'>
        <h3 className='section-account-title'>
          Правила сервиса
        </h3>
        <div className={style['rules']}>
          <p className={style['rules__title']}>
            Правила сервиса
          </p>
          <div className={style['rules__list-wrap']}>
            <ul className={style['rules__list']}>
              <li>
                Мы даем гарантию на весь срок аренды
              </li>
              <li>
                Мы не несем ответственность за ваши действия на сервере
              </li>
              <li>
                Мы не несем ответственность за прямые или косвенные убытки связанные с работой серверов
              </li>
              <li>
                Мы в праве отключить ваш аккаунт если контент, который вы размещаете нарушает законодательство оффшорной юрисдикции
              </li>
              <li>
                Выдача доступа происходит от 1 до 24 часов после покупки
              </li>
              <li className={style['rules__list-cite']}>
              &mdash; Администрация сервиса &mdash;&nbsp;
                <cite title="Source Title">PSB-HOSTING.PRO</cite>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}