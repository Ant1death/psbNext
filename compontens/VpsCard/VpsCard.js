import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import style from '../../styles/ItemCard.module.scss';

const VpsCard = ({ vpsItem }) => {
  const { t } = useTranslation();

  return (
    <li className={style['card']} key={vpsItem.id}>
      <h3 className={style['card__title']}>{vpsItem.title}</h3>
      <p className={style.price}>
        {`$${vpsItem.price}/мес.`}
      </p>
      {vpsItem.characters &&
        <>
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
                {vpsItem.characters[2] && <td>{`${vpsItem.characters[2].name} ${vpsItem.characters[2].content}`}</td>}
              </tr>
            </tbody>
          </table>
          <ul className={style.caracters}>
            {vpsItem.characters[0] &&
              <li>
                <span>Кол-во ядер:</span>
                <span>
                  {`${vpsItem.characters[0].name} ${vpsItem.characters[0].content}`}
                </span>
              </li>
            }
            {vpsItem.characters[1] &&
              <li>
                <span>RAM</span>
                <span>
                  {`${vpsItem.characters[1].content}`}
                </span>
              </li>
            }
            {vpsItem.characters[2] &&
              <li>
                <span>Память</span>
                <span>
                  {`${vpsItem.characters[2].name} ${vpsItem.characters[2].content}`}
                </span>
              </li>
            }
          </ul>
        </>
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