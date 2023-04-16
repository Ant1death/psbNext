import LayoutAccount from '../../compontens/LayoutAccount/LayoutAccount';
import style from '../styles/Account.module.scss';

Dashboard.getLayout = function getLayout(page) {
  return (
    <LayoutAccount>
      {page}
    </LayoutAccount>
  );
}

export default function Account() {
  return (
    <div></div>
  );
}