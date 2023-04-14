import AbuseCard from '../compontens/AbuseCard/AbuseCard';
import AvailableSystems from '../compontens/AvailableSystems/AvailableSystems';
import style from '../styles/Abuse.module.scss';
// ToDo: delete after connecting with API
import { abuseList } from '../utils/data/abuseList';

export default function Abuse() {
  return (
    <>
      <section className={style.abuse}>
      <div>
        <h2 className={`${['h2-title']}`}>
          Абузоустойчивые VPS/VDS
        </h2>
        <p>Список услуг выделенных серверов</p>
      </div>
      <ul className={style['abuse__list']}>
        {abuseList.map(el => {
          return (
            <AbuseCard
              key={el.id}
              abuseItem={el}
            />
          );
        })}
      </ul>
      </section>
      <AvailableSystems />
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
              Абузоустойчевые VPS/VDS
            </h4>
            <p className={style['services__description']}>
              Данные сервера игнорируют все запросы, которые приходят по размещаемому контенту.
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
    </>
  );
}