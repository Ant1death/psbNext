import 'iconify-icon';
import Layout from '../compontens/Layout/Layout';
import AbuseCard from '../compontens/AbuseCard/AbuseCard';
import AvailableSystems from '../compontens/AvailableSystems/AvailableSystems';
import FaqItem from '../compontens/FaqItem/FaqItem';
import HostingCard from '../compontens/HostingCard/HostingCard';
import { FAQ_LIST_ABUSE } from '../utils/constants';
import style from '../styles/Abuse.module.scss';
import { Advantages } from '../compontens/Advantages/Advantages';
// ToDo: delete after connecting with API
import { abuseList } from '../utils/data/abuseList';
import { hostings } from '../utils/data/hostings';

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
      <section className={style['abuse']}>
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
      <section className={style['abuse']}>
        <div>
          <h2 className={`${['h2-title']} ${style['abuse__title']}`}>
            Абузоустойчивые Hosting
          </h2>
          <p>Список услуг выделенных хостингов</p>
        </div>
        <ul className={style['abuse__list']}>
          {hostings.map(el => {
            return (
              <HostingCard
                key={el.id}
                hostingItem={el}
              />
            );
          })}
        </ul>
      </section>
      <AvailableSystems />
      <Advantages />
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