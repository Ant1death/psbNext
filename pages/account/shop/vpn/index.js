import { useEffect, useState } from 'react';
import Link from 'next/link';
import 'iconify-icon';
import LayoutAccount from '../../../../compontens/LayoutAccount/LayoutAccount';
import style from '../../../../styles/AccountShop.module.scss';
// ToDo: delete after connecting API
import { vpnCountries } from '../../../../utils/data/vpnCountries';

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

  const classItem = `${style['card']} ${style['shop__item']} ${style['shop__item_vpn']}`;
  const imgItemClass = `${style['shop__item-img']}`;
  const classWrapTitle = `${style['shop__item-wrap-title']}`;
  const classItemTitle = `${style['shop__item-title']}`;
  const classPriceWrapItem = `${style['shop__item-price-wrap']}`;
  const classPriceItem = `${style['shop__item-price']}`;
  const flagCountryClass = `${style['shop__item-flag']}`;

  const handleSearchItem = (evt) => {
    setSeachedItem(evt.target.value);
  }

  useEffect(() => {
    setCurrentCountry(vpnCountries);
  }, []);

  useEffect(() => {
    if (seachedItem === '') {
      setCurrentCountry(vpnCountries);
    } else {
      const search = seachedItem.toLowerCase();
      const items = vpnCountries.filter(el => el.title.toLowerCase().includes(search));
      setCurrentCountry(items);
    }
  }, [seachedItem]);

  return (
    <section className={style['shop']}>
      <div className={`${style['shop__content']} ${style['shop__content_vpn']}`}>
        <div className={`${style['card']} ${style['shop__search']}`}>
          <form className={style['shop__search-form']}>
            <input
              type='search'
              placeholder='Введите название'
              className={style['shop__search-input']}
              name='search'
              onChange={handleSearchItem}
            />
          </form>
        </div>
        <ul className={style['shop__card-list']}>
          {currentCountry.map(el => {
            return (
              <li key={el.id} className={classItem}>
                <Link href={`/account/shop/vpn/${el.id}`} className={imgItemClass}>
                  <img src='/server.png' alt='icon server' />
                </Link>
                <div className={classWrapTitle}>
                  <h2 className={classItemTitle}>
                    <img
                      src={el.img}
                      alt={`icon ${el.title}`}
                      className={flagCountryClass}
                    />
                    <Link href={`/account/shop/vpn/${el.id}`}>
                      {`${el.title} - ${el.country}`}
                    </Link>
                  </h2>
                  <ul className={style['shop__item-list']}>
                    <li>{el.encryption}</li>
                    <li>{el.traffic}</li>
                    <li>{el.support}</li>
                    <li>{el.device}</li>
                  </ul>
                </div>
                <div className={classPriceWrapItem}>
                  <p className={classPriceItem}>
                    {el.price.split('/')[0]}
                  </p>
                  <Link href={`/account/shop/vpn/${el.id}`} className={style['shop__button-cta']}>
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
