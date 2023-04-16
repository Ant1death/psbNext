import Link from 'next/link';
import 'iconify-icon';
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
              <iconify-icon icon="mi:grid"></iconify-icon>
              Панель управления
            </Link>
          </li>
          <li className={style['sidebar__item']} >
            <h3 className={style['sidebar__subtitle']}>
              Магазин услуг
            </h3>
            <ul>
              <li>
                <Link href='/account/shop'>
                  <iconify-icon icon="lucide:server"></iconify-icon>
                  Купить VPS/VDS
                </Link>
              </li>
              <li>
                <Link href='/account/shop/bulletproof'>
                  <iconify-icon icon="ph:text-b-bold"></iconify-icon>
                  Купить Bulletproof VPS/VDS
                </Link>
              </li>
              <li>
                <Link href='/account/vpn'>
                  <iconify-icon icon="fa6-solid:rocket"></iconify-icon>
                  Купить VPN
                </Link>
              </li>
            </ul>
          </li>
          <li className={style['sidebar__item']} >
            <h3 className={style['sidebar__subtitle']}>
              Личные финансы
            </h3>
            <Link href='/account/balance'>
              <iconify-icon icon="lucide:credit-card"></iconify-icon>
              Ваш кошелек
            </Link>
          </li>
          <li className={style['sidebar__item']} >
            <h3 className={style['sidebar__subtitle']}>
              Поддержка и документация
            </h3>
            <ul>
              <li>
                <Link href='https://psb-hosting-pro.gitbook.io/documentations/'>
                  <iconify-icon icon="ci:book-open"></iconify-icon>
                  Документация
                </Link>
              </li>
              <li>
                <Link href='/account/rules'>
                  <iconify-icon icon="ci:book-open"></iconify-icon>
                  Правила сервиса
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default AccountSidebar;