import Link from 'next/link';
import style from '../../styles/VpsCard.module.scss';

const VpsCard = ({ vpsItem }) => {
  return (
    <li className={style['vps-card']} key={vpsItem.id}>
      <div className={style['vps-card__title']}>
        <h3 className={style['vps-card__h3-title']}>{vpsItem.title}</h3>
        <p className={style['vps-card__price']}>
          {vpsItem.price}
        </p>
      </div>
      <ul className={style['vps-card__list']}>
        <li>{vpsItem.DMCA}</li>
        <li>{vpsItem.vCPU}</li>
        <li>{vpsItem.RAM}</li>
        <li>{vpsItem.SSD}</li>
        <li>{vpsItem.KVM}</li>
        <li>{vpsItem.Gbps}</li>
        <li>{vpsItem.bandwidth}</li>
      </ul>
      <Link href={`/accounts/shop/new/${vpsItem.id}`}>
        Купить
      </Link>
    </li>
  );
}

export default VpsCard;