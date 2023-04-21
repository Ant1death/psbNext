import { Rubik } from '@next/font/google';
import AppHeader from '../AppHeader/AppHeader';
import AppFooter from '../AppFooter/AppFooter';
import ButtonTelegram from '../ButtonTelegram/ButtonTelegram';

const rubik = Rubik({
  subsets: ['latin']
});

const Layout = ({ children }) => {
  return (
    <div className={rubik.className}>
      <div className="container">
        <AppHeader />
          { children }
        <AppFooter />
        <ButtonTelegram />
      </div>
    </div>
  );
}

export default Layout;