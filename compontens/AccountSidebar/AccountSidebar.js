import Link from 'next/link';
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
          <li>
            <h3 className={style['sidebar__subtitle']}>
              Главная страница
            </h3>
            <Link href='/account'>

              Панель управления
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default AccountSidebar;