import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import LayoutAccount from '../../../../compontens/LayoutAccount/LayoutAccount';
import NewServise from '../../../../compontens/NewService/NewServise';
import style from '../../../../styles/NewServise.module.scss';
// Todo: delete after connecting API
import { vpnCountries } from '../../../../utils/data/vpnCountries.js';

VpnItem.getLayout = function getLayout(page) {
  return (
    <LayoutAccount>
      {page}
    </LayoutAccount>
  );
}

export default function VpnItem() {
  const [item, setItem] = useState({});
  const router = useRouter();

  const handleChangeSubscription = () => {}

  const getItemWithId = () => {
    const { id } = router.query;
    return vpnCountries.find(el => el.id === +id);
  }

  useEffect(() => {
    setItem(getItemWithId());
  }, [router]);

  return (
    <NewServise>
      <h3 className={style['card__title-item']}>
        <img src={item.img} alt={`icon ${item.title}`} className={style['card__flag']} />
        {`${item.title} - ${item.country}`}
      </h3>
      <p className={style['card__price']}>
        {item && item.price &&
          `Цена за 1 месяц: ${item.price.split(' ')[1]} $`
        }
      </p>
      <label className={style['card__form-legend']} htmlFor='system'>
        Длительность подписки
      </label>
      <select className={style['card__form-select']} name='system' id='system' onClick={handleChangeSubscription}>
        {item && item.subscription && item.subscription.map(el => {
          return (
            <option key={item.subscription.indexOf(el)} value={el}>
              {el}
            </option>
          );
        })}
      </select>
    </NewServise>
  );
}
