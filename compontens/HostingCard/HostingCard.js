import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import style from '../../styles/ItemCard.module.scss';

const HostingCard = ({ hostingItem }) => {
  const { t } = useTranslation();

  return (
    <li className={style['card']}>
      <div className={style['card__title']}>
        <h3 className={style['card__h3-title']}>
          {hostingItem.title}
        </h3>
        <p className={style['card__price']}>
          {hostingItem.price}
        </p>
      </div>
      <ul className={style['card__list']}>
        <li>{hostingItem.size}</li>
        <li>{hostingItem.websites}</li>
        <li>{hostingItem.license}</li>
        <li>{hostingItem.protection}</li>
      </ul>
      <Link href={`/account/shop/hosting/${hostingItem.id}`}>
        {t('button-buy-item')}
      </Link>
    </li>
  );
}

export default HostingCard;