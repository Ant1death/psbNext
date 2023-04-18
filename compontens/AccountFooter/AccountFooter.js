import Link from 'next/link';
import 'iconify-icon';
import style from '../../styles/AccountFooter.module.scss';

const AccountFooter = ({ isSidebarMini, windowWidth }) => {
  return (
    <footer className={`${style['footer']} ${(isSidebarMini && windowWidth > 991) ? style['footer_sadebar-mini'] : ''}`}>
      <p className={style['footer__text']}>
        {`Copyright © 2022 - ${new Date().getFullYear()}`}&nbsp;
        <Link href="https://psb-offshore.pro/">PROFESSIONAL SUPPORT BUSINESS</Link>.&nbsp;
        <iconify-icon icon="mdi:cards-heart"></iconify-icon>&nbsp;
        Сайт разработан студией&nbsp;
        <Link href="https://t.me/AIlab73">AILAB73</Link>&nbsp;
        Все права защищены, копирование контента сайта без письменного разрешение администратора сайта запрещено.
      </p>
    </footer>
  );
}

export default AccountFooter;