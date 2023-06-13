import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import 'iconify-icon';

import LayoutAccount from '../../../../compontens/LayoutAccount/LayoutAccount';
import Preloader from '../../../../compontens/Preloader/Preloader';

import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { fetchHosting } from '../../../../store/slices/hosting';
import { getProducts } from '../../../../api/getProducts';
import { sortHostings } from '../../../../utils/sortHostings';

import style from '../../../../styles/AccountShop.module.scss';

AccountHosting.getLayout = function getLayout(page) {
  return (
    <LayoutAccount>
      {page}
    </LayoutAccount>
  );
}

export default function AccountHosting() {
  const { t } = useTranslation();
  const hosting = useAppSelector(store => store.hosting.hosting);
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const hostings = await getProducts('Hosting', '/api/getProducts');
    const hosting = hostings && hostings.products ? hostings.products : [];
    dispatch(fetchHosting(sortHostings(hosting)));
  }

  useEffect(() => {
    if (!hosting) fetchData();
  }, []);

  useEffect(() => {
    !hosting ? setIsLoading(true) : setIsLoading(false);
  }, [hosting]);

  return (
    <section className={style['shop']}>
      {isLoading && <Preloader />}
      {!isLoading &&
        <ul className={style['shop__card-list']}>
          {hosting && hosting.map(el => {
            return (
              <li key={el.id} className={`${style['card']} ${style['shop__item']}`}>
                <div className={style['shop__item-wrap-title']}>
                  <h2 className={style['shop__item-title']}>
                    <Link href={`/account/shop/hosting/${el.id}`}>
                      {el.title}
                    </Link>
                  </h2>
                  <ul className={style['shop__item-list']}>
                    {el.characters.map(item => {
                      return (
                        <li key={item.id}>{`${item.name} ${item.content}`}</li>
                      );
                    })}
                  </ul>
                </div>
                <div className={style['shop__item-price-wrap']}>
                  <p className={style['shop__item-price']}>
                    {`$${el.price}`}
                  </p>
                  <Link href={`/account/shop/hosting/${el.id}`} className={style['shop__button-cta']}>
                    <iconify-icon icon="ci:shopping-cart-02"></iconify-icon>
                    &nbsp;{t('card-button')}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      }
    </section>
  );
}