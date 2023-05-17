import { useTranslation } from 'react-i18next';

import style from '../../styles/AvailableSystems.module.scss'

const AvailableSystems = () => {
  const { t } = useTranslation();

  return (
    <section className={style['systems']}>
        <h2 className={`${['h2-title']} ${style['systems-title']}`}>
          {t('systems')}
        </h2>
        <ul className={style['systems__list']}>
          <li className={style['systems__item']}>
            <img className={style['systems__image']} src='/centos.png' alt='centos' />
            <p className={style['systems__item-title']}>Centos</p>
          </li>
          <li className={style['systems__item']}>
            <img className={style['systems__image']} src='/freebsd.svg' alt='FreeBSD' />
            <p className={style['systems__item-title']}>FreeBSD</p>
          </li>
          <li className={style['systems__item']}>
            <img className={style['systems__image']} src='/debian.png' alt='Debian' />
            <p className={style['systems__item-title']}>Debian</p>
          </li>
          <li className={style['systems__item']}>
            <img className={style['systems__image']} src='/ubuntu.png' alt='ubuntu' />
            <p className={style['systems__item-title']}>Ubuntu</p>
          </li>
          <li className={style['systems__item']}>
            <img className={style['systems__image']} src='/windows.png' alt='windows' />
            <p className={style['systems__item-title']}>Windows</p>
          </li>
        </ul>
      </section>
  );
}
export default AvailableSystems;