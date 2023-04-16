import AccountHeader from '../AccountHeader/AccountHeader';
import AccountFooter from '../AccountFooter/AccountFooter';
import AccountSidebar from '../AccountSidebar/AccountSidebar';

const LayoutAccount = ({ children }) => {
  return (
    <div className='page-account'>
      <AccountSidebar />
      <AccountHeader />
        { children }
      <AccountFooter />
    </div>
  );
}

export default LayoutAccount;