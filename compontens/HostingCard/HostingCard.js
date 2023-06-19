import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import style from '../../styles/ItemCard.module.scss';

const HostingCard = ({ hostingItem, className }) => {
  const { t } = useTranslation();

  return (
    <li className={style['card']}>
      <h3 className={style['card__title']}>{hostingItem.title}</h3>
      <p className={style.price}>
        {`$${hostingItem.price}/мес.`}
      </p>
      {hostingItem.characters &&
        <>
          <table className={style.table}>
            <thead>
              <tr>
                <th className={style.tableVpsFirst}>Кол-во сайтов:</th>
                <th className={style.tableItem}>Память</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {hostingItem.characters[1] && <td>{`${hostingItem.characters[1].name} ${hostingItem.characters[1].content}`}</td>}
                {hostingItem.characters[0] && <td>{`SSD ${hostingItem.characters[0].content}`}</td>}
              </tr>
            </tbody>
          </table>
          <ul className={style.caracters}>
            {hostingItem.characters[1] &&
              <li>
                <span>Кол-во сайтов:</span>
                <span>
                  {`${hostingItem.characters[1].name} ${hostingItem.characters[1].content}`}
                </span>
              </li>
            }
            {hostingItem.characters[0] &&
              <li>
                <span>Память</span>
                <span>
                  {`SSD ${hostingItem.characters[0].content}`}
                </span>
              </li>
            }
          </ul>
        </>
      }
      <div className={style['card__order']}>
        <p className={style['card__price']}>
          {`$${hostingItem.price}/мес.`}
        </p>
        <Link href={`/account/shop/hosting/${hostingItem.id}`}>
          {t('button-buy-item')}
        </Link>
      </div>
    </li>
  );
}

export default HostingCard;