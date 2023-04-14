import Link from 'next/link';
import 'iconify-icon';
import FaqItem from '../compontens/FaqItem/FaqItem';
import { FAQ_LIST_VPS } from '../utils/constants';
import style from '../styles/Vps.module.scss';
// ToDo: delete after connecting with API
import { vpsCountries } from '../utils/data/vpsCountries';
import VpsCard from '../compontens/VpsCard/VpsCard';

function Vps() {
  return (
    <>
      <section className={style.vps}>
        <div>
          <h2 className={`${['h2-title']}`}>VPS/VDS</h2>
          <p>Список услуг выделенных серверов</p>
        </div>
        <ul className={style['offer__list-country']}>
          <li className={`${style['offer__country']} ${style['offer__country_Netherlands']} ${style['offer__country_active']}`}>
            Netherlands
          </li>
          <li className={`${style['offer__country']} ${style['offer__country_Moldowa']}`}>
            Moldowa
          </li>
          <li className={`${style['offer__country']} ${style['offer__country_Hong-Kong']}`}>
            Hong Kong
          </li>
          <li className={`${style['offer__country']} ${style['offer__country_USA']}`}>
            USA
          </li>
        </ul>
        <ul className={style['offer__wrapper']}>
          {/* ToDo: fix with API */}
          {vpsCountries.map(el => {
            return (
              <VpsCard
                key={el.id}
                vpsItem={el}
              />
            );
          })}
        </ul>
      </section>
      <section className={style['about']}>
        <h2 className={`${['h2-title']} ${style['card-title-main']}`}>
          Доступные операционные системы
        </h2>
        <ul className={style['cards-instructions']}>
          <li className={style['card-instruction']}>
            <img className={style['system-image']} src='/centos.png' alt='centos' />
            <p className={style['card-instruction__title']}>Centos</p>
          </li>
          <li className={style['card-instruction']}>
            <img className={style['system-image']} src='/cpanel.png' alt='cPanel' />
            <p className={style['card-instruction__title']}>cPanel</p>
          </li>
          <li className={style['card-instruction']}>
            <img className={style['system-image']} src='/debian.png' alt='Debian' />
            <p className={style['card-instruction__title']}>Debian</p>
          </li>
          <li className={style['card-instruction']}>
            <img className={style['system-image']} src='/ubuntu.png' alt='ubuntu' />
            <p className={style['card-instruction__title']}>Ubuntu</p>
          </li>
          <li className={style['card-instruction']}>
            <img className={style['system-image']} src='/windows.png' alt='windows' />
            <p className={style['card-instruction__title']}>Windows</p>
          </li>
        </ul>
      </section>
      <section className={style['services']}>
      <div className={style['section-title']}>
        <h2 className={`${['h2-title']}`}>Преимущества</h2>
        <p>Преимущества нашего хостинга</p>
      </div>
      <ul className={style['services__wrapper']}>
        <li className={style['services__wrap']}>
          <iconify-icon icon="mdi:shield-alert" height="100"></iconify-icon>
          <h4 className={`${['h4-title']} ${style['services__title']}`}>
            Конфиденциальность данных (no logs)
          </h4>
          <p className={style['services__description']}>
            Мы не храним IP адреса подключений к серверу и сохраняем полную анонимность вашего проекта.
          </p>
        </li>
        <li className={style['services__wrap']}>
          <iconify-icon icon="ph:globe-hemisphere-west-fill" height="100"></iconify-icon>
          <h4 className={`${['h4-title']} ${style['services__title']}`}>
            Оффшорные юрисдикции серверов
          </h4>
          <p className={style['services__description']}>
            Наши сервера находятся в странах с гибким законодательством. Вы получаете конфиденциальность
            данных и возможность размещать широкий спектр контента по сравнению с другими юрисдикциями.
          </p>
        </li>
        <li className={style['services__wrap']}>
          <iconify-icon icon="teenyicons:contract-outline" height="100"></iconify-icon>
          <h4 className={`${['h4-title']} ${style['services__title']}`}>
            DMCA 100% ignored
          </h4>
          <p className={style['services__description']}>
            Мы полностью игнорируем запросы DMCA.
          </p>
        </li>
        <li className={style['services__wrap']}>
          <iconify-icon icon="bx:support" height="100"></iconify-icon>
          <h4 className={`${['h4-title']} ${style['services__title']}`}>
            Техническая поддержка
          </h4>
          <p className={style['services__description']}>
            Наша техническая поддержка работает круглосуточно и поможет вам с любыми вопросами.
          </p>
        </li>
      </ul>
      </section>
      <section className={style['faq']}>
      <h2 className={`${['h2-title']}`}>Частые вопросы</h2>
      <ul className={style['faq__items']}>
        {FAQ_LIST_VPS.map(el => {
          return (
            <FaqItem
              key={el.id}
              question={el.question}
              answer={el.answer}
            />
          );
        })}
      </ul>
      </section>
    </>
  );
}

export default Vps;