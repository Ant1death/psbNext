import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import { PATH_LIST_RU, PATH_LIST_EN } from '../../utils/constants';

import style from '../../styles/Breadcrumbs.module.scss';
// ToDo: delete after connecting API
import { vpnCountries } from '../../utils/data/vpnCountries';
import { vpsCountries } from '../../utils/data/vpsCountries';
import { abuseList } from '../../utils/data/abuseList';
import { orders } from '../../utils/data/orders';
import { hostings } from '../../utils/data/hostings';

const Breadcrumbs = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const [lastCrumb, setLastCrumb] = useState('');
  const [pageTitle, setPageTitle] = useState('');

  const replasePath = (crumb, pathList) => {
    crumb = pathList[crumb];
    return crumb;
  }

  const findNameItemWhithId = (itemList, id) => {
    const item = itemList.find(el => el.id === id);

    if (item) return item.title;
  }

  const findOrderWhithId = (itemList, id) => {
    const item = itemList.find(el => el.id === id);

    if (item) return item.number;
  }

  useEffect(() => {
    const pathWithoutQuery = router.asPath.split('?')[0];
    const asPath = pathWithoutQuery.split('/').filter(el => el.length > 0);

    if (asPath.length === 1) {
      const path = t('account-lang') === 'en'
        ? replasePath(asPath[0], PATH_LIST_EN)
        : replasePath(asPath[0], PATH_LIST_RU);
      setLastCrumb(path);
      setPageTitle(path);
    } else if (asPath.length === 4 && asPath.includes('shop')) {
      let name = '';

      if (asPath[2] === 'vps') {
        name = findNameItemWhithId(vpsCountries, +asPath[3]);
      } else if (asPath[2] === 'vpn') {
        name = findNameItemWhithId(vpnCountries, +asPath[3]);
      } else if (asPath[2] === 'bulletproof') {
        name = findNameItemWhithId(abuseList, +asPath[3]);
      } else if (asPath[2] === 'hosting') {
        name = findNameItemWhithId(hostings, +asPath[3]);
      }

      const title = `${t('path-new-service')} ${name}`;
      setPageTitle(title);
      setLastCrumb(t('category-store'));
    } else if (asPath.length === 4 && (asPath.includes('profile'))) {
        const name = findOrderWhithId(orders, +asPath[3]);
        setPageTitle(`${t('path-order')} #${name}`);
        setLastCrumb(t('path-order'));
    } else {
      const path = t('account-lang') === 'en'
        ? replasePath(asPath[1], PATH_LIST_EN)
        : replasePath(asPath[1], PATH_LIST_RU);
      setLastCrumb(path);
      setPageTitle(path);
    }
  }, [router, t('account-lang')]);

  return (
    <section className={style['breadcrumbs']}>
      <h1 className={style['breadcrumbs__title']}>
        {pageTitle}
      </h1>
      <ol className={style['breadcrumbs__list']}>
        <li className={style['breadcrumbs__link']}>
          <Link href='/account'>
            {lastCrumb === t('account-page') ? t('home-page') : t('account-page')}
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