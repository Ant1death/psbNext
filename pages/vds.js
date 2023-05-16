import 'iconify-icon';
import Layout from '../compontens/Layout/Layout';
import FaqItem from '../compontens/FaqItem/FaqItem';
import AvailableSystems from '../compontens/AvailableSystems/AvailableSystems';
import VpsCard from '../compontens/VpsCard/VpsCard';
import { FAQ_LIST_VPS } from '../utils/constants';
import style from '../styles/Vps.module.scss';
import styleAdvantages from '../styles/Advantages.module.scss';
// ToDo: delete after connecting with API
import { vpsCountries } from '../utils/data/vpsCountries';

Vps.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  );
}

function Vps() {
  return (
    <>
      <section className={style.vps}>
        <div>
          <h2 className={`${['h2-title']}`}>VPS/VDS</h2>
          <p>Список услуг выделенных серверов</p>
        </div>
        {/* ToDo: fix with API */}
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
          <li className={`${style['offer__country']} ${style['offer__country_Germany']}`}>
            Germany
          </li>
          <li className={`${style['offer__country']} ${style['offer__country_Canada']}`}>
            Canada
          </li>
          <li className={`${style['offer__country']} ${style['offer__country_Great-Britain']}`}>
            Great Britain
          </li>
          <li className={`${style['offer__country']} ${style['offer__country_Turkey']}`}>
            Turkey
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
              DMCA 100% ignored
            </h4>
            <p className={styleAdvantages['advantages__description']}>
              Мы полностью игнорируем запросы DMCA.
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