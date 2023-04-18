import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { PATH_LIST } from '../../utils/constants';
import style from '../../styles/Breadcrumbs.module.scss';

const Breadcrumbs = () => {
  const router = useRouter();
  const [lastCrumb, setLastCrumb] = useState('');
  const [pageTitle, setPageTitle] = useState('');

  const replasePath = (crumb, pathList) => {
    crumb = pathList[crumb];
    return crumb;
  }

  useEffect(() => {
    const pathWithoutQuery = router.pathname.split('?')[0];

    if (pathWithoutQuery.includes('[')) {
      const firstInd = pathWithoutQuery.indexOf('[') + 1;
      const lastInd = pathWithoutQuery.indexOf(']');

      setLastCrumb('Магазин услуг');
      setPageTitle(`Заказ новой услуги ${pathWithoutQuery.slice(firstInd, lastInd)}`);
    } else {
      const pathList = pathWithoutQuery.split('/').filter(el => el.length > 0);
      const path = replasePath(pathList[pathList.length - 1], PATH_LIST);

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