import Link from 'next/link';
import style from '../styles/Company.module.scss';

export default function Company() {
  return (
    <section className={style['about']}>
      <img alt='picture company' src='/about.jpg' className={style['about__img']} />
      <div className={style['about__text']}>
        <h2 className={`${['h2-title']}`}>О компании</h2>
        <p>
          Компания PSB была основана в 2019 году и с каждым годом стремительно развивает
          спектр и качество предоставляемых услуг. Наша команда состоит из международных юристов,
          айти специалистов и системных администраторов. Спектр предоставляемых услуг:
        </p>
        <ul className={style['about__list']}>
          <li>Анонимные оффшорные хостинги для вашего бизнеса</li>
          <li>IT разработка</li>
          <li>Администрирование ваших проектов</li>
          <li>Регистрация оффшорных компаний</li>
          <li>Открытие корпоративных банковских счетов в Европе</li>
          <li>Бухгалтерские услуги в Европе и Азии</li>
          <li>Лицензирование крипто проектов и онлайн казино</li>
          <li>Верификации аккаунтов криптобирж и платежных систем</li>
        </ul>
        <p className={style['about__telegram']}>
          Более подробно с нашими услугами вы можете ознакомиться&nbsp;
          <Link href='https://psb-offshore.pro/'>
            на сайте
          </Link>
          &nbsp;и&nbsp;
          <Link href='https://telegram.me/PSB_Wallet_Bot'>
            в телеграмм боте
          </Link>
        </p>
      </div>
    </section>
  );
}