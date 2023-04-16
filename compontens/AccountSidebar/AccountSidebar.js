import Link from 'next/link';
import { Icon } from '@iconify/react';
import { faBold, faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
          <li className={style['sidebar__item']} >
            <h3 className={style['sidebar__subtitle']}>
              Магазин услуг
            </h3>
            <ul>
              <li>
                <Link href='/account/shop'>
                  <Icon icon="lucide:server" className={style['sidebar__icon']} />
                  Купить VPS/VDS
                </Link>
              </li>
              <li>
                <Link href='/account/shop/bulletproof'>
                  <FontAwesomeIcon icon={faBold} className={style['sidebar__icon']} />
                  Купить Bulletproof VPS/VDS
                </Link>
              </li>
              <li>
                <Link href='/account/vpn'>
                  <FontAwesomeIcon icon={faRocket} className={style['sidebar__icon']} />
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
              <Icon icon="lucide:credit-card" className={style['sidebar__icon']} />
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
                  <Icon icon="ci:book-open" className={style['sidebar__icon']} />
                  Документация
                </Link>
              </li>
              <li>
                <Link href='/account/rules'>
                  <Icon icon="ci:circle-help" className={style['sidebar__icon']} />
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