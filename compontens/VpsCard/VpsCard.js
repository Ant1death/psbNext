import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import style from '../../styles/ItemCard.module.scss';

const VpsCard = ({ vpsItem }) => {
  const { t } = useTranslation();

  return (
    <li className={style['card']} key={vpsItem.id}>
      <div className={style['card__title']}>
        <h3 className={style['card__h3-title']}>{vpsItem.title}</h3>
        <p className={style['card__price']}>
          {`$${vpsItem.price}/мес.`}
        </p>
      </div>
      <ul className={style['card__list']}>
        {vpsItem.characters.map(el => {
          return (
            <li key={el.id}>{`${el.name} ${el.content}`}</li>
          );
        })}
      </ul>
      <Link href={`/account/shop/vps/${vpsItem.id}`}>
        {t('button-buy-item')}
      </Link>
    </li>
  );
}

export default VpsCard;