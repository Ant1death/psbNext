import Link from 'next/link';
import { Icon } from '@iconify/react';
import style from '../../styles/AccountSidebar.module.scss';

const AccountSidebar = () => {
  return (
    <aside className={style['sidebar']}>
      <div className={style['sidebar__header']}>
        <Link href='/account'>
          <img src='/logo.png' alt='logo' />
        </Link>
      </div>
      <nav className={style['sidebar__nav-menu']}>
        <ul className={style['sidebar__nav-menu-list']}>
          <li className={style['sidebar__item']} >
            <h3 className={style['sidebar__subtitle']}>
              Главная страница
            </h3>
            <Link href='/account'>
              <Icon icon="mi:grid" className={style['sidebar__icon']} />
              Панель управления
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default AccountSidebar;