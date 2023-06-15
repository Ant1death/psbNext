import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import 'iconify-icon';

import LayoutAccount from '../../../../compontens/LayoutAccount/LayoutAccount';
import Preloader from '../../../../compontens/Preloader/Preloader';

import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { fetchVdsVpsBulletproof } from '../../../../store/slices/vdsVpsBulletproof';
import { getProducts } from '../../../../api/getProducts';
import { sortVps } from '../../../../utils/sortVps';

import style from '../../../../styles/AccountShop.module.scss';

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
  const [isLoading, setIsLoading] = useState(true);

  const { t } = useTranslation();
  const vdsVpsBulletproof = useAppSelector(store => store.vdsVpsBulletproof.vdsVpsBulletproof);
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
      setCurrentCountry(vdsVpsBulletproof);
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

  const fetchData = async () => {
    const vpsData = await getProducts('Bulletproof VDS', '/api/getProducts');
    const vps = vpsData && vpsData.products ? vpsData.products : [];
    const vdsData = await getProducts('Bulletproof VPS', '/api/getProducts');
    const vds = vdsData && vdsData.products ? vdsData.products : [];
    dispatch(fetchVdsVpsBulletproof(sortVps(vds.concat(vps))));
  }

  useEffect(() => {
    if (!vdsVpsBulletproof) fetchData();
  }, []);

  useEffect(() => {
    setCurrentCountry(vdsVpsBulletproof);
  }, [vdsVpsBulletproof]);

  useEffect(() => {
    const set = new Set();
    vdsVpsBulletproof && vdsVpsBulletproof.forEach(el => {
      el.os && el.os.forEach(system => set.add(system.name));
    });
    setSystemList(Array.from(set));
  }, [vdsVpsBulletproof]);

  useEffect(() => {
    if (selectedSystem === '') {
      setCurrentCountry(vdsVpsBulletproof);
    } else {
      const items = vdsVpsBulletproof.filter(el => {
        const names = [];
        el.os.forEach(el => names.push(el.name));
        if (names.includes(selectedSystem)) return el;
      });
      setCurrentCountry(items);
    }
  }, [selectedSystem]);

  useEffect(() => {
    if (seachedItem === '') {
      setCurrentCountry(vdsVpsBulletproof);
    } else {
      const search = seachedItem.toLowerCase();
      const items = vdsVpsBulletproof.filter(el => el.title.toLowerCase().includes(search));
      setCurrentCountry(items);
    }
  }, [seachedItem]);

  useEffect(() => {
    !vdsVpsBulletproof ? setIsLoading(true) : setIsLoading(false);
  }, [vdsVpsBulletproof]);

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
                  <button className={style['shop__country-button']} onClick={handleCountryClick}>
                    <iconify-icon icon="material-symbols:chevron-right-rounded"></iconify-icon>
                    {t('card-all-countries')}
                  </button>
                  <span className={style['shop__country-amount']}>
                    {vdsVpsBulletproof && vdsVpsBulletproof.length}
                  </span>
                </li>
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
              <form className={style['shop__search-form']}>
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
              {currentCountry && currentCountry.map(el => {
                return (
                  <li key={el.id} className={classItem}>
                    <Link href={`/account/shop/bulletproof/${el.id}`} className={imgItemClass}>
                      <img src='/server.png' alt='icon server' />
                    </Link>
                    <div className={classWrapTitle}>
                      <h2 className={classItemTitle}>
                        <Link href={`/account/shop/bulletproof/${el.id}`}>
                          {el.title}
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
                      <Link href={`/account/shop/bulletproof/${el.id}`} className={style['shop__button-cta']}>
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
