import Link from 'next/link';
import style from '../styles/Vps.module.scss';
// ToDo: delete after connecting with API
import { vpsCountries } from '../data/vpsCountries';

export default function Vps() {
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
              <li className={style['offer__wrap']} key={el.id}>
                <div className={style['offer__title']}>
                  <h3 className={style['offer__h3-title']}>{el.title}</h3>
                  <div className={style['offer__price']}>
                    <p>{el.price}</p>
                  </div>
                </div>
                <ul className={style['offer__list']}>
                  <li>{el.DMCA}</li>
                  <li>{el.vCPU}</li>
                  <li>{el.RAM}</li>
                  <li>{el.SSD}</li>
                  <li>{el.KVM}</li>
                  <li>{el.Gbps}</li>
                  <li>{el.bandwidth}</li>
                </ul>
                <Link href={`/accounts/shop/new/${el.id}`}>
                  Купить
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}