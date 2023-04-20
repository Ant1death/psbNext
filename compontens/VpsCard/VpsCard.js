import Link from 'next/link';
import style from '../../styles/ItemCard.module.scss';

const VpsCard = ({ vpsItem }) => {
  return (
    <li className={style['card']} key={vpsItem.id}>
      <div className={style['card__title']}>
        <h3 className={style['card__h3-title']}>{vpsItem.title}</h3>
        <p className={style['card__price']}>
          {vpsItem.price}
        </p>
      </div>
      <ul className={style['card__list']}>
        <li>{vpsItem.DMCA}</li>
        <li>{vpsItem.vCPU}</li>
        <li>{vpsItem.RAM}</li>
        <li>{vpsItem.SSD}</li>
        <li>{vpsItem.KVM}</li>
        <li>{vpsItem.Gbps}</li>
        <li>{vpsItem.bandwidth}</li>
      </ul>
      <Link href={`/account/shop/vps/${vpsItem.id}`}>
        Купить
      </Link>
    </li>
  );
}

export default VpsCard;