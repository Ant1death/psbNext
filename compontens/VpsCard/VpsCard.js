import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import style from '../../styles/ItemCard.module.scss';

const VpsCard = ({ vpsItem }) => {
  const { t } = useTranslation();

  return (
    <li className={style['card']} key={vpsItem.id}>
      <h3 className={style['card__title']}>{vpsItem.title}</h3>
      {vpsItem.characters &&
        <table className={style.table}>
          <thead>
            <tr>
              <th>Кол-во ядер:</th>
              <th>RAM</th>
              <th>Память</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {vpsItem.characters[0] && <td>{`${vpsItem.characters[0].name} ${vpsItem.characters[0].content}`}</td>}
              {vpsItem.characters[1] && <td>{`${vpsItem.characters[1].content}`}</td>}
              {vpsItem.characters[2] && <td>{`${vpsItem.characters[0].name} ${vpsItem.characters[0].content}`}</td>}
            </tr>
          </tbody>
        </table>
      }
      <div className={style['card__order']}>
        <p className={style['card__price']}>
          {`$${vpsItem.price}/мес.`}
        </p>
        <Link href={`/account/shop/vps/${vpsItem.id}`}>
          {t('button-buy-item')}
        </Link>
      </div>
    </li>
  );
}

export default VpsCard;