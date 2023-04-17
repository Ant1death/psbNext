import Link from 'next/link';
import 'iconify-icon';
import style from '../../styles/AccountHeader.module.scss';

const AccountHeader = () => {
  return (
    <header className={style['header']}>
      <button className={style['header__toggle-sidebar']} type='button' aria-label='button toggle sidebar'></button>
      <ul className={style['header__navbar']}>
        <li className={style['header__navbar-item']}>
          <button className={style['header__country']} type='button'>
            <iconify-icon icon="ph:globe-light"></iconify-icon>
            <span>Язык</span>
          </button>
        </li>
        <li className={style['header__navbar-item']}>
          <button className={style['header__notifications']} type='button'>
            <iconify-icon icon="lucide:bell"></iconify-icon>
            <span className={style['header__pulse']}></span>
          </button>
        </li>
        <li className={`${style['header__navbar-item']} ${style['header__navbar-item_avatar']}`}>
          <div className={style['header__avatar']}>H</div>
        </li>
      </ul>
    </header>
  );
}

export default AccountHeader;