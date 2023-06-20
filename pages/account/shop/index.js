import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import 'iconify-icon';

import LayoutAccount from '../../../compontens/LayoutAccount/LayoutAccount';
import Preloader from '../../../compontens/Preloader/Preloader';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { fetchVdsVps } from '../../../store/slices/vdsVps';
import { getProducts } from '../../../api/getProducts';
import { sortVps } from '../../../utils/sortVps';

import style from '../../../styles/AccountShop.module.scss';

AccountVps.getLayout = function getLayout(page) {
  return (
    <LayoutAccount>
      {page}
    </LayoutAccount>
  );
}

export default function AccountVps() {
  const [amountContry, setAmountContry] = useState([]);
  const [currentCountry, setCurrentCountry] = useState([]);
  const [selectedSystem, setSelectedSystem] = useState('');
  const [seachedItem, setSeachedItem] = useState('');
  const [systemList, setSystemList] = useState([]);
  const [isTableActive, setIsTableActive] = useState(true);
  const [isListActive, setIsListActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCountry, setActiveCountry] = useState('Все страны');

  const { t } = useTranslation();
  const vdsVps = useAppSelector(store => store.vdsVps.vdsVps);
  const dispatch = useAppDispatch();

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

    if (country === t('card-all-countries')) {
      setCurrentCountry(vdsVps);
    } else {
      const items = vdsVps.filter(el => el.country === country);
      setCurrentCountry(items);
    }

    setActiveCountry(country);
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

  const fetchData = async () => {
    const vpsData = await getProducts('VPS', '/api/getProducts');
    const vps = vpsData && vpsData.products ? vpsData.products : [];
    dispatch(fetchVdsVps(sortVps(vps)));
  }

  useEffect(() => {
    if (!vdsVps) fetchData();
  }, []);

  useEffect(() => {
    const map = new Map();
    vdsVps && vdsVps.forEach(el => {
      map.has(el.country) ? map.set(el.country, map.get(el.country) + 1) : map.set(el.country, 1);
    });
    setAmountContry(Array.from(map));
  }, [vdsVps]);

  useEffect(() => {
    setCurrentCountry(vdsVps);
  }, [vdsVps]);

  useEffect(() => {
    const set = new Set();
    vdsVps && vdsVps.forEach(el => {
      el.os && el.os.forEach(system => set.add(system.name));
    });
    setSystemList(Array.from(set));
  }, [vdsVps]);

  useEffect(() => {
    if (selectedSystem === '') {
      setCurrentCountry(vdsVps);
    } else {
      const items = vdsVps.filter(el => {
        const names = [];
        el.os.forEach(el => names.push(el.name));
        if (names.includes(selectedSystem)) return el;
      });
      setCurrentCountry(items);
    }
  }, [selectedSystem]);

  useEffect(() => {
    if (seachedItem === '') {
      setCurrentCountry(vdsVps);
    } else {
      const search = seachedItem.toLowerCase();
      const items = vdsVps.filter(el =>
        el.title.toLowerCase().includes(search) || el.country.toLowerCase().includes(search)
      );
      setCurrentCountry(items);
    }
  }, [seachedItem]);

  useEffect(() => {
    !vdsVps ? setIsLoading(true) : setIsLoading(false);
  }, [vdsVps]);

  return (
    <div className={style['shop']}>
      {isLoading && <Preloader />}
      {!isLoading &&
        <>
          <div className={style['shop__filters']}>
            <div className={`${style['shop__country']} ${style['card']}`}>
              <h2 className={style['shop__country-title']}>
                {t('card-countries')}
              </h2>
              <ul className={style['shop__country-list']}>
                <li>
                  <button
                    className={`${style['shop__country-button']} ${activeCountry === 'Все страны' ? style['shop__country-button_active'] : ''}`}
                    onClick={handleCountryClick}
                    type='button'
                  >
                    <iconify-icon icon="material-symbols:chevron-right-rounded"></iconify-icon>
                    {t('card-all-countries')}
                  </button>
                  <span className={style['shop__country-amount']}>
                    {vdsVps && vdsVps.length}
                  </span>
                </li>
                {amountContry.length > 0 && amountContry.map(el => {
                  return (
                    <li key={amountContry.indexOf(el)}>
                      <button
                        className={`${style['shop__country-button']} ${activeCountry === el[0] ? style['shop__country-button_active'] : ''}`}
                        onClick={handleCountryClick}
                        type='button'
                      >
                        <iconify-icon icon="material-symbols:chevron-right-rounded"></iconify-icon>
                        {el[0]}
                      </button>
                      <span className={style['shop__country-amount']}>
                        {el[1]}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <form className={`${style['shop__system']} ${style['card']}`}>
              <label className={style['shop__system-label']} htmlFor='system'>
                {t('card-system')}
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
              <form className={`${style['shop__search-form']} ${seachedItem === '' ? '' : style['shop__search-form_active']}`}>
                <input
                  type='search'
                  placeholder={t('card-search')}
                  className={style['shop__search-input']}
                  name='search'
                  onChange={handleSearchItem}
                />
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
              {currentCountry && currentCountry.length > 0 && currentCountry.map(el => {
                return (
                  <li key={el.id} className={classItem}>
                    <Link href={`/account/shop/vps/${el.id}`} className={imgItemClass}>
                      <img src='/server.png' alt='icon server' />
                    </Link>
                    <div className={classWrapTitle}>
                      <h2 className={classItemTitle}>
                        <Link href={`/account/shop/vps/${el.id}`}>
                          {`${el.title} - ${el.country}`}
                        </Link>
                      </h2>
                      <ul className={style['shop__item-list']}>
                        {el.characters.map(item => {
                          if (item) {
                            return (
                              <li key={item.id}>{`${item.name} ${item.content}`}</li>
                            );
                          }
                        })}
                      </ul>
                    </div>
                    <div className={classPriceWrapItem}>
                      <p className={classPriceItem}>
                        {`$${el.price}`}
                      </p>
                      <Link href={`/account/shop/vps/${el.id}`} className={style['shop__button-cta']}>
                        <iconify-icon icon="ci:shopping-cart-02"></iconify-icon>
                        &nbsp;{t('card-button')}
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      }
    </div>
  );
}
