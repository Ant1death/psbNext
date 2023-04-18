import LayoutAccount from '../../../compontens/LayoutAccount/LayoutAccount';
import style from '../../../styles/AccountVps.module.scss';

AccountVps.getLayout = function getLayout(page) {
  return (
    <LayoutAccount>
      {page}
    </LayoutAccount>
  );
}

export default function AccountVps() {
  return (
    <>
      <div className=""></div>
    </>
  );
}