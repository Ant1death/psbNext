import { Rubik } from '@next/font/google';
import AppHeader from '../AppHeader/AppHeader';
import AppFooter from '../AppFooter/AppFooter';
import ButtonTelegram from '../ButtonTelegram/ButtonTelegram';
import Head from 'next/head';

const rubik = Rubik({
  subsets: ['latin', 'cyrillic'],
});

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="PSB Hosting" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>{`PSB Hosting ${title ? title : ''}`}</title>
        <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.ico" />
      </Head>
      <div className={rubik.className}>
        <div className="container">
          <AppHeader />
            { children }
          <AppFooter />
          <ButtonTelegram />
        </div>
      </div>
    </>
  );
}

export default Layout;