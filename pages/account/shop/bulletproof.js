import { useEffect, useState } from 'react';
import Link from 'next/link';
import 'iconify-icon';
import LayoutAccount from '../../../compontens/LayoutAccount/LayoutAccount';
import style from '../../../styles/AccountShop.module.scss';
// ToDo: delete after connecting API
import { abuseList } from '../../../utils/data/abuseList';

Bulletproof.getLayout = function getLayout(page) {
  return (
    <LayoutAccount>
      {page}
    </LayoutAccount>
  );
}

export default function Bulletproof() {
  const [selectedSystem, setSelectedSystem] = useState('');
  const [seachedItem, setSeachedItem] = useState('');
  const [systemList, setSystemList] = useState([]);
  const [isTableActive, setIsTableActive] = useState(true);
  const [isListActive, setIsListActive] = useState(false);
  const [currentCountry, setCurrentCountry] = useState([]);

  const classButtonTable = `${style['shop__display-button']} ${isTableActive ? style['shop__display-button_active'] : ''}`;
  const classButtonList = `${style['shop__display-button']} ${isListActive ? style['shop__display-button_active'] : ''}`;
  const classItem = `${style['card']} ${style['shop__item']} ${isListActive ? style['shop__item_list'] : ''}`;
  const imgItemClass = `${style['shop__item-img']} ${isListActive ? style['shop__item-img_list'] : ''}`;
  const classWrapTitle = `${style['shop__item-wrap-title']} ${isListActive ? style['shop__item-wrap-title_list'] : ''}`;
  const classItemTitle = `${style['shop__item-title']} ${isListActive ? style['shop__item-title_list'] : ''}`;
  const classPriceWrapItem = `${style['shop__item-price-wrap']} ${isListActive ? style['shop__item-price-wrap_list'] : ''}`;
  const classPriceItem = `${style['shop__item-price']} ${isListActive ? style['shop__item-price_list'] : ''}`;

  const handleCountryClick = (evt) => {
    const country = evt.target.textContent;

    if (country === 'Все страны') {
      setCurrentCountry(abuseList);
    }
  }

  const handleChangeSelect = (evt) => {
    setSelectedSystem(evt.target.value);
  }

  const handleSearchItem = (evt) => {
    setSeachedItem(evt.target.value);
  }

  const toggleLookCards = () => {
    isTableActive ? setIsTableActive(false) : setIsTableActive(true);
    isListActive ? setIsListActive(false) : setIsListActive(true);
  }

  useEffect(() => {
    setCurrentCountry(abuseList);
  }, []);

  useEffect(() => {
    const set = new Set();
    abuseList.forEach(el => {
      el.systems.forEach(system => set.add(system));
    });
    setSystemList(Array.from(set));
  }, []);

  useEffect(() => {
    if (selectedSystem === '') {
      setCurrentCountry(abuseList);
    } else {
      const items = abuseList.filter(el => el.systems.includes(selectedSystem));
      setCurrentCountry(items);
    }
  }, [selectedSystem]);

  useEffect(() => {
    if (seachedItem === '') {
      setCurrentCountry(abuseList);
    } else {
      const search = seachedItem.toLowerCase();
      const items = abuseList.filter(el => el.title.toLowerCase().includes(search));
      setCurrentCountry(items);
    }
  }, [seachedItem]);

  return (
    <section className={style['shop']}>
      <div className={style['shop__filters']}>
        <div className={`${style['shop__country']} ${style['card']}`}>
          <h2 className={style['shop__country-title']}>
            Страны
          </h2>
          <ul className={style['shop__country-list']}>
            <li>
              <button className={style['shop__country-button']} onClick={handleCountryClick}>
                <iconify-icon icon="material-symbols:chevron-right-rounded"></iconify-icon>
                Все страны
              </button>
              <span className={style['shop__country-amount']}>
                {abuseList.length}
              </span>
            </li>
          </ul>
        </div>
        <form className={`${style['shop__system']} ${style['card']}`}>
          <label className={style['shop__system-label']} htmlFor='system'>
            Операционная система
          </label>
          <select className={style['shop__system-select']} name='system' id='system' onClick={handleChangeSelect}>
            <option value=''>Select</option>
            {systemList.length > 0 && systemList.map(el => {
              return (
                <option key={systemList.indexOf(el)} value={el}>{el}</option>
              );
            })}
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
              onChange={handleSearchItem}
            />
            {/* ToDo: is it necessary? */}
            <button type='submit' className={style['shop__search-button']}>
              <iconify-icon icon="ion:search"></iconify-icon>
            </button>
            <button type='button' className={style['shop__search-button']}>
              <iconify-icon icon="ion:chevron-back-outline"></iconify-icon>
            </button>
          </form>
          <ul className={style['shop__display']}>
            <li>
              <button
                type='button'
                className={classButtonTable}
                onClick={toggleLookCards}
              >
                <iconify-icon icon="fa-solid:th"></iconify-icon>
              </button>
            </li>
            <li>
              <button
                type='button'
                className={classButtonList}
                onClick={toggleLookCards}
              >
                <iconify-icon icon="fa:list"></iconify-icon>
              </button>
            </li>
          </ul>
        </div>
        <ul className={style['shop__card-list']}>
          {currentCountry.map(el => {
            return (
              <li key={el.id} className={classItem}>
                <Link href={`/account/shop/new/${el.id}`} className={imgItemClass}>
                  <img src='/server.png' alt='icon server' />
                </Link>
                <div className={classWrapTitle}>
                  <h2 className={classItemTitle}>
                    <Link href={`/account/shop/new/${el.id}`}>
                      {`${el.title} - ${el.country}`}
                    </Link>
                  </h2>
                  <ul className={style['shop__item-list']}>
                    <li>{el.vCPU}</li>
                    <li>{el.RAM}</li>
                    <li>{el.SSD}</li>
                  </ul>
                </div>
                <div className={classPriceWrapItem}>
                  <p className={classPriceItem}>
                    {el.price.split('/')[0]}
                  </p>
                  <Link href={`/account/shop/new/${el.id}`} className={style['shop__button-cta']}>
                    <iconify-icon icon="ci:shopping-cart-02"></iconify-icon>
                    &nbsp;Мгновенная покупка
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
