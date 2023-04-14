import AbuseCard from '../compontens/AbuseCard/AbuseCard';
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
    </>
  );
}