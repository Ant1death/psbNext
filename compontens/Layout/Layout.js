import { Rubik } from '@next/font/google';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import AppHeader from '../AppHeader/AppHeader';
import AppFooter from '../AppFooter/AppFooter';
import ButtonTelegram from '../ButtonTelegram/ButtonTelegram';
import Preloader from '../Preloader/Preloader';

const rubik = Rubik({
  subsets: ['latin', 'cyrillic'],
});

const Layout = ({ children, title }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { ready } = useTranslation('translation');

  const handleLoad = () => {
    if (isLoading) setTimeout(() => setIsLoading(false), 1000);
  }

  useEffect(() => {
    if (ready) {
      // for Chrome
      window.addEventListener('load', handleLoad);

      // for yandex browser
      if (isLoading && document.readyState === 'complete') {
        handleLoad();
      }

      return () => {
        window.removeEventListener('load', handleLoad);
      };
    }
  }, [ready]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="PSB Hosting" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>{`PSB Hosting ${title ? title : ''}`}</title>
        <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.ico" />
      </Head>
      {isLoading && <Preloader /> }
      <div className={rubik.className}>
        <div className={`container ${isLoading ? 'hidden' : ''}`}>
          <AppHeader />
            { children }
        </div>
        <AppFooter />
        <ButtonTelegram />
      </div>
    </>
  );
}

export default Layout;