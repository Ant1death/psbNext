import Link from 'next/link';
import style from '../../styles/AppFooter.module.scss'

function appFooter() {
  return (
    <footer className={style.footer}>
      <p className={style.footer__copyright}>© PSB Hosting. All Rights Reserved</p>
      <nav className={style.footer__wrapper}>
        <ul>
          <li>
            <Link href='/company' className={style.navbar__link}>О компании</Link>
          </li>
          <li>
            <Link href='/vds' className={style.navbar__link}>VPS</Link>
          </li>
          <li>
            <Link href='/abuse' className={style.navbar__link}>Bulletproof VPS</Link>
          </li>
          <li>
            <Link href='/vpn' className={style.navbar__link}>VPN</Link>
          </li>
        </ul>
      </nav>
      <ul className={style.footer__reviews}>
        <li>
          <Link
            href='https://ru.hostings.info/psb-hosting-pro.html'
            target='_blank'
            title='Отзывы о хостинге psb hosting'
          >
            <img alt='Отзывы клиентов на Hostings.info' src='/hostinginfo.png' />
          </Link>
        </li>
        <li>
          <Link
            href='https://hosting101.ru/psb-hosting'
            target='_blank'
            title='Отзывы о хостинге psb hosting'
          >
            <img alt='Отзывы клиентов на Hosting101.ru' src='/hosting101.png' />
          </Link>
        </li>
        <li>
          <Link
            href='https://hostinghub.ru/psb-hosting'
            target='_blank'
            title='Отзывы о хостинге psb hosting'
          >
            <img alt='Отзывы клиентов на HostingHub.ru' src='/hostinghub.png' />
          </Link>
        </li>
        <li>
          <Link
            href='https://vpsup.ru/reviews/psb-hosting.pro.html'
            target='_blank'
            title='Отзывы о хостинге psb hosting'
          >
            <img alt='Отзывы клиентов на vpsUp.ru' src='/vpsup.png' />
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default appFooter;