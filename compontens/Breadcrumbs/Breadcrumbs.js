import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { PATH_LIST } from '../../utils/constants';
import style from '../../styles/Breadcrumbs.module.scss';
// ToDo: delete after connecting API
import { vpnCountries } from '../../utils/data/vpnCountries';
import { vpsCountries } from '../../utils/data/vpsCountries';
import { abuseList } from '../../utils/data/abuseList';

const Breadcrumbs = () => {
  const router = useRouter();
  const [lastCrumb, setLastCrumb] = useState('');
  const [pageTitle, setPageTitle] = useState('');

  const replasePath = (crumb, pathList) => {
    crumb = pathList[crumb];
    return crumb;
  }

  const findNameItemWhithId = (itemList, id) => {
    const item = itemList.find(el => el.id === id);

    return item.title;
  }

  useEffect(() => {
    const pathWithoutQuery = router.asPath.split('?')[0];
    const asPath = pathWithoutQuery.split('/').filter(el => el.length > 0);

    if (asPath.length === 1) {
      const path = replasePath(asPath[0], PATH_LIST);
      setLastCrumb(path);
      setPageTitle(path);
    } else if (asPath.length === 4 && (asPath.includes('shop'))) {
      let name = '';

      if (asPath[2] === 'vps') {
        name = findNameItemWhithId(vpsCountries, +asPath[3]);
      } if (asPath[2] === 'vpn') {
        name = findNameItemWhithId(vpnCountries, +asPath[3]);
      } if (asPath[2] === 'bulletproof') {
        name = findNameItemWhithId(abuseList, +asPath[3]);
      }

      const title = `Заказ новой услуги ${name}`;
      setPageTitle(title);
      setLastCrumb('Магазин услуг');
    } else {
      const path = replasePath(asPath[1], PATH_LIST);
      setLastCrumb(path);
      setPageTitle(path);
    }
  }, [router]);

  return (
    <section className={style['breadcrumbs']}>
      <h1 className={style['breadcrumbs__title']}>
        {pageTitle}
      </h1>
      <ol className={style['breadcrumbs__list']}>
        <li className={style['breadcrumbs__link']}>
          <Link href='/account'>
            {lastCrumb === 'Панель управления' ? 'Главная страница' : 'Панель управления'}
          </Link>
        </li>
        <li className={style['breadcrumbs__item']}>
          {lastCrumb}
        </li>
      </ol>
    </section>
  );
}

export default Breadcrumbs;