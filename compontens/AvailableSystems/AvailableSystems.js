import style from '../../styles/AvailableSystems.module.scss'

const AvailableSystems = () => {
  return (
    <section className={style['systems']}>
        <h2 className={`${['h2-title']} ${style['systems-title']}`}>
          Доступные операционные системы
        </h2>
        <ul className={style['systems__list']}>
          <li className={style['systems__item']}>
            <img className={style['systems__image']} src='/centos.png' alt='centos' />
            <p className={style['systems__item-title']}>Centos</p>
          </li>
          <li className={style['systems__item']}>
            <img className={style['systems__image']} src='/cpanel.png' alt='cPanel' />
            <p className={style['systems__item-title']}>cPanel</p>
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