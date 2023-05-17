import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import style from '../../styles/ItemCard.module.scss';

const AbuseCard = ({ abuseItem }) => {
  const { t } = useTranslation();

  return (
    <li className={style['card']}>
      <div className={style['card__title']}>
        <h3 className={style['card__h3-title']}>
          {abuseItem.title}
        </h3>
        <p className={style['card__price']}>
          {abuseItem.price}
        </p>
      </div>
      <ul className={style['card__list']}>
        <li>{abuseItem.vCPU}</li>
        <li>{abuseItem.RAM}</li>
        <li>{abuseItem.SSD}</li>
      </ul>
      <Link href={`/account/shop/bulletproof/${abuseItem.id}`}>
        {t('button-buy-item')}
      </Link>
    </li>
  );
}

export default AbuseCard;