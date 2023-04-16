import { IBM_Plex_Sans } from '@next/font/google';
import AccountHeader from '../AccountHeader/AccountHeader';
import AccountFooter from '../AccountFooter/AccountFooter';
import AccountSidebar from '../AccountSidebar/AccountSidebar';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
});

const LayoutAccount = ({ children }) => {
  return (
    <div className={ibmPlexSans.className}>
      <div className='page-account'>
        <AccountSidebar />
        <AccountHeader />
          { children }
        <AccountFooter />
      </div>
    </div>
  );
}

export default LayoutAccount;