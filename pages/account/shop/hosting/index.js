import Link from 'next/link';
import 'iconify-icon';
import LayoutAccount from '../../../../compontens/LayoutAccount/LayoutAccount';
import style from '../../../../styles/AccountShop.module.scss';
// ToDo: delete after connecting API
import { hostings } from '../../../../utils/data/hostings';

AccountHosting.getLayout = function getLayout(page) {
  return (
    <LayoutAccount>
      {page}
    </LayoutAccount>
  );
}

export default function AccountHosting() {
  return (
    <section className={style['shop']}>
      <ul className={style['shop__card-list']}>
        {hostings.map(el => {
          return (
            <li key={el.id} className={`${style['card']} ${style['shop__item']}`}>
              <div className={style['shop__item-wrap-title']}>
                <h2 className={style['shop__item-title']}>
                  <Link href={`/account/shop/hosting/${el.id}`}>
                    {el.title}
                  </Link>
                </h2>
                <ul className={style['shop__item-list']}>
                  <li>{el.size}</li>
                  <li>{el.websites}</li>
                  <li>{el.license}</li>
                  <li>{el.protection}</li>
                </ul>
              </div>
              <div className={style['shop__item-price-wrap']}>
                <p className={style['shop__item-price']}>
                  {el.price.split('/')[0]}
                </p>
                <Link href={`/account/shop/hosting/${el.id}`} className={style['shop__button-cta']}>
                  <iconify-icon icon="ci:shopping-cart-02"></iconify-icon>
                  &nbsp;Мгновенная покупка
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}