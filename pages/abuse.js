import 'iconify-icon';
import Layout from '../compontens/Layout/Layout';
import AbuseCard from '../compontens/AbuseCard/AbuseCard';
import AvailableSystems from '../compontens/AvailableSystems/AvailableSystems';
import FaqItem from '../compontens/FaqItem/FaqItem';
import { FAQ_LIST_ABUSE } from '../utils/constants';
import style from '../styles/Abuse.module.scss';
import styleAdvantages from '../styles/Advantages.module.scss';
// ToDo: delete after connecting with API
import { abuseList } from '../utils/data/abuseList';

Abuse.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  );
}

export default function Abuse() {
  return (
    <>
      <section className={style.abuse}>
      <div>
        <h2 className={`${['h2-title']} ${style['abuse__title']}`}>
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
      <section className={styleAdvantages['advantages']}>
        <div className={style['section-title']}>
          <h2 className={`${['h2-title']}`}>Преимущества</h2>
          <p>Преимущества нашего хостинга</p>
        </div>
        <ul className={styleAdvantages['advantages__list']}>
          <li className={styleAdvantages['advantages__list-item']}>
            <iconify-icon icon="mdi:shield-alert" height="100"></iconify-icon>
            <h4 className={`${['h4-title']} ${styleAdvantages['advantages__title']}`}>
              Конфиденциальность данных (no logs)
            </h4>
            <p className={styleAdvantages['advantages__description']}>
              Мы не храним IP адреса подключений к серверу и сохраняем полную анонимность вашего проекта.
            </p>
          </li>
          <li className={styleAdvantages['advantages__list-item']}>
            <iconify-icon icon="ph:globe-hemisphere-west-fill" height="100"></iconify-icon>
            <h4 className={`${['h4-title']} ${styleAdvantages['advantages__title']}`}>
              Оффшорные юрисдикции серверов
            </h4>
            <p className={styleAdvantages['advantages__description']}>
              Наши сервера находятся в странах с гибким законодательством. Вы получаете конфиденциальность
              данных и возможность размещать широкий спектр контента по сравнению с другими юрисдикциями.
            </p>
          </li>
          <li className={styleAdvantages['advantages__list-item']}>
            <iconify-icon icon="teenyicons:contract-outline" height="100"></iconify-icon>
            <h4 className={`${['h4-title']} ${styleAdvantages['advantages__title']}`}>
              Абузоустойчевые VPS/VDS
            </h4>
            <p className={styleAdvantages['advantages__description']}>
              Данные сервера игнорируют все запросы, которые приходят по размещаемому контенту.
            </p>
          </li>
          <li className={styleAdvantages['advantages__list-item']}>
            <iconify-icon icon="bx:support" height="100"></iconify-icon>
            <h4 className={`${['h4-title']} ${styleAdvantages['advantages__title']}`}>
              Техническая поддержка
            </h4>
            <p className={styleAdvantages['advantages__description']}>
              Наша техническая поддержка работает круглосуточно и поможет вам с любыми вопросами.
            </p>
          </li>
        </ul>
      </section>
      <section className={style['faq']}>
        <h2 className={`${['h2-title']}`}>Частые вопросы</h2>
        <ul>
          {FAQ_LIST_ABUSE.map(el => {
            return (
              <FaqItem
                key={el.id}
                answer={el.answer}
                question={el.question}
              />
            );
          })}
        </ul>
      </section>
    </>
  );
}