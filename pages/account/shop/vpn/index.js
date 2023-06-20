import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import 'iconify-icon';

import LayoutAccount from '../../../../compontens/LayoutAccount/LayoutAccount';
import Preloader from '../../../../compontens/Preloader/Preloader';

import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { fetchVpn } from '../../../../store/slices/vpn';
import { getProducts } from '../../../../api/getProducts';
import { VPN_CHARACTERS_RU, VPN_CHARACTERS_EN, VPN_COUNTRIES } from '../../../../utils/constants';

import style from '../../../../styles/AccountShop.module.scss';

AccountVpn.getLayout = function getLayout(page) {
  return (
    <LayoutAccount>
      {page}
    </LayoutAccount>
  );
}

export default function AccountVpn() {
  const [seachedItem, setSeachedItem] = useState('');
  const [currentCountry, setCurrentCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { t } = useTranslation();
  const vpn = useAppSelector(store => store.vpn.vpn);
  const dispatch = useAppDispatch();

  const classItem = `${style['card']} ${style['shop__item']} ${style['shop__item_vpn']}`;

  const handleSearchItem = (evt) => {
    setSeachedItem(evt.target.value);
  }

  const fetchData = async () => {
    const data = await getProducts('VPN', '/api/getProducts');
    const vpn = data && data.products ? data.products : [];
    dispatch(fetchVpn(vpn));
  }

  useEffect(() => {
    if (!vpn) fetchData();
  }, []);

  useEffect(() => {
    setCurrentCountry(vpn);
  }, [vpn]);

  useEffect(() => {
    if (seachedItem === '') {
      setCurrentCountry(vpn);
    } else {
      const search = seachedItem.toLowerCase();
      const items = vpn.filter(el => el.title.toLowerCase().includes(search) || el.country.toLowerCase().includes(search));
      setCurrentCountry(items);
    }
  }, [seachedItem]);

  useEffect(() => {
    !vpn ? setIsLoading(true) : setIsLoading(false);
  }, [vpn]);

  return (
    <div className={style['shop']}>
      {isLoading && <Preloader />}
      {!isLoading &&
        <>
          <div className={`${style['shop__content']} ${style['shop__content_vpn']}`}>
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
            </div>
            <ul className={style['shop__card-list']}>
              {currentCountry && currentCountry.map(el => {
                return (
                  <li key={el.id} className={classItem}>
                    <Link href={`/account/shop/vpn/${el.id}`} className={style['shop__item-img']}>
                      <img src='/server.png' alt='icon server' />
                    </Link>
                    <div className={style['shop__item-wrap-title']}>
                      <h2 className={style['shop__item-title']}>
                        {VPN_COUNTRIES.map(item => {
                          return (
                            item.country === el.country &&
                              <img key={el.id} src={item.flag} alt={`icon ${el.country}`} className={style['shop__item-flag']} />
                          )
                        })}
                        <Link href={`/account/shop/vpn/${el.id}`}>
                          {`${el.title} - ${el.country}`}
                        </Link>
                      </h2>
                      <ul className={`${style['shop__item-list']} ${style['shop__item-list_vpn']}`}>
                        {t('faq-lang') === 'ru' && VPN_CHARACTERS_RU.map((el, ind) => {
                          return (
                            <li key={ind}>{el}</li>
                          );
                        })}
                        {t('faq-lang') === 'en' && VPN_CHARACTERS_EN.map((el, ind) => {
                          return (
                            <li key={ind}>{el}</li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className={style['shop__item-price-wrap']}>
                      <p className={style['shop__item-price']}>
                        {`$${el.price}`}
                      </p>
                      <Link href={`/account/shop/vpn/${el.id}`} className={style['shop__button-cta']}>
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
