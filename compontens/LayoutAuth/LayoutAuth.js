import Head from 'next/head';
import { useTranslation } from 'react-i18next';

import useParralaxOnBlock from '../../hooks/useParralaxOnBlock';
import Preloader from '../Preloader/Preloader';

import style from '../../styles/Auth.module.scss';

const LayoutAuth = ({ children, popup, isLoading }) => {
  const { t } = useTranslation();
  const { transformBlock, handleMouseEnter, handleMouseLeave, block } = useParralaxOnBlock();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="PSB Hosting" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>{`${t('login')}`}</title>
        <link rel="shortcut icon" href="/images/logo.svg" />
      </Head>
      {!isLoading && <Preloader />}
      {isLoading &&
        <main className={style['container']}>
          <section className={style['content']}>
            <div
              className={style['content__block-logo']}
              ref={block}
              onMouseMove={transformBlock}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img className={style['content__logo']} alt='logo' src='/logo.png' />
            </div>
            {children}
          </section>
          {popup}
        </main>
      }
    </>
  );
}

export default LayoutAuth;