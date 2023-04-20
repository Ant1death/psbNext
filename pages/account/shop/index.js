import { useState } from 'react';
import 'iconify-icon';
import LayoutAccount from '../../../compontens/LayoutAccount/LayoutAccount';
import style from '../../../styles/AccountShop.module.scss';
// ToDo: delete after connecting API
import { vpsCountries } from '../../../utils/data/vpsCountries';
import Link from 'next/link';

AccountVps.getLayout = function getLayout(page) {
  return (
    <LayoutAccount>
      {page}
    </LayoutAccount>
  );
}

export default function AccountVps() {
  const [isTableActive, setIsTableActive] = useState(true);
  const [isListActive, setIsListActive] = useState(false);

  const classButtonTable = `${style['shop__display-button']} ${isTableActive ? style['shop__display-button_active'] : ''}`;
  const classButtonList = `${style['shop__display-button']} ${isListActive ? style['shop__display-button_active'] : ''}`;

  return (
    <section className={style['shop']}>
      <div className={style['shop__filters']}>
        <div className={`${style['shop__country']} ${style['card']}`}>
          <h2 className={style['shop__country-title']}>
            Страны
          </h2>
          <ul className={style['shop__country-list']}>
            <li>
              <button className={style['shop__country-button']}>
                <iconify-icon icon="material-symbols:chevron-right-rounded"></iconify-icon>
                Все страны
              </button>
              <span className={style['shop__country-amount']}>
                66
              </span>
            </li>
            <li>
              <button className={style['shop__country-button']}>
                <iconify-icon icon="material-symbols:chevron-right-rounded"></iconify-icon>
                Netherlands
              </button>
              <span className={style['shop__country-amount']}>
                66
              </span>
            </li>
            <li>
              <button className={style['shop__country-button']}>
                <iconify-icon icon="material-symbols:chevron-right-rounded"></iconify-icon>
                Moldowa
              </button>
              <span className={style['shop__country-amount']}>
                66
              </span>
            </li>
            <li>
              <button className={style['shop__country-button']}>
                <iconify-icon icon="material-symbols:chevron-right-rounded"></iconify-icon>
                Hong Kong
              </button>
              <span className={style['shop__country-amount']}>
                66
              </span>
            </li>
            <li>
              <button className={style['shop__country-button']}>
                <iconify-icon icon="material-symbols:chevron-right-rounded"></iconify-icon>
                USA
              </button>
              <span className={style['shop__country-amount']}>
                66
              </span>
            </li>
            <li>
              <button className={style['shop__country-button']}>
                <iconify-icon icon="material-symbols:chevron-right-rounded"></iconify-icon>
                Germany
              </button>
              <span className={style['shop__country-amount']}>
                66
              </span>
            </li>
            <li>
              <button className={style['shop__country-button']}>
                <iconify-icon icon="material-symbols:chevron-right-rounded"></iconify-icon>
                Canada
              </button>
              <span className={style['shop__country-amount']}>
                66
              </span>
            </li>
          </ul>
        </div>
        <form className={`${style['shop__system']} ${style['card']}`}>
          <label className={style['shop__system-label']} htmlFor='system'>
            Операционная система
          </label>
          <select className={style['shop__system-select']} name='system' id='system'>
            <option value=''>Select</option>
            <option value="Debian 11">Debian 11</option>
            <option value="Ubuntu 22.04">Ubuntu 22.04</option>
            <option value="Centos 7">Centos 7</option>
            <option value="Windows 10">Windows 10</option>
            <option value="Centos 8 Stream">Centos 8 Stream</option>
            <option value="Centos 9 Stream">Centos 9 Stream</option>
            <option value="Alma Linux 8">Alma Linux 8</option>
            <option value="Rocky Linux 8">Rocky Linux 8</option>
            <option value="VzLinux 8">VzLinux 8</option>
            <option value="Debian 9">Debian 9</option>
            <option value="Debian 10">Debian 10</option>
            <option value="Oracle Linux 8">Oracle Linux 8</option>
            <option value="Ubuntu 16.04">Ubuntu 16.04</option>
            <option value="Ubuntu 18.04">Ubuntu 18.04</option>
            <option value="Ubuntu 20.04">Ubuntu 20.04</option>
            <option value="FreeBSD 12">FreeBSD 12</option>
            <option value="FreeBSD 13">FreeBSD 13</option>
            <option value="Astra Linux CE">Astra Linux CE</option>
            <option value="Windows Server 2012">Windows Server 2012</option>
            <option value="Windows Server 2016">Windows Server 2016</option>
            <option value="Windows Server 2019 Datacenter">Windows Server 2019 Datacenter</option>
            <option value="Windows Server 2019 RUS">Windows Server 2019 RUS</option>
            <option value="Windows Server 2019">Windows Server 2019</option>
            <option value="Windows Server 2022">Windows Server 2022</option>
          </select>
        </form>
      </div>
      <div className={style['shop__content']}>
        <div className={`${style['card']} ${style['shop__search']}`}>
          <form className={style['shop__search-form']}>
            <input
              type='search'
              placeholder='Введите название'
              className={style['shop__search-input']}
              name='search'
            />
            <button type='submit' className={style['shop__search-button']}>
              <iconify-icon icon="ion:search"></iconify-icon>
            </button>
            <button type='button' className={style['shop__search-button']}>
              <iconify-icon icon="ion:chevron-back-outline"></iconify-icon>
            </button>
          </form>
          <ul className={style['shop__display']}>
            <li>
              <button type='button' className={classButtonTable}>
                <iconify-icon icon="fa-solid:th"></iconify-icon>
              </button>
            </li>
            <li>
              <button type='button' className={classButtonList}>
                <iconify-icon icon="fa:list"></iconify-icon>
              </button>
            </li>
          </ul>
        </div>
        <ul className={style['shop__card-list']}>
          {vpsCountries.map(el => {
            return (
              <li key={el.id} className={`${style['card']} ${style['shop__item']}`}>
                <h2 className={style['shop__item-title']}>
                  <Link href={`/account/shop/new/[id]`}>
                    {`${el.title} - ${el.country}`}
                  </Link>
                </h2>
                <ul className={style['shop__item-list']}>
                  <li>{el.DMCA}</li>
                  <li>{el.vCPU}</li>
                  <li>{el.RAM}</li>
                  <li>{el.SSD}</li>
                  <li>{el.KVM}</li>
                  <li>{el.Gbps}</li>
                  <li>{el.bandwidth}</li>
                </ul>
                <p className={style['shop__item-price']}>
                  {el.price}
                </p>
                <Link href={`/account/shop/new/[id]`} className={style['shop__button-cta']}>
                  <iconify-icon icon="ci:shopping-cart-02"></iconify-icon>
                  &nbsp;Мгновенная покупка
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
