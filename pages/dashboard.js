import LayoutAccount from '../compontens/LayoutAccount/LayoutAccount';
import style from '../styles/Dashboard.module.scss';

Dashboard.getLayout = function getLayout(page) {
  return (
    <LayoutAccount>
      {page}
    </LayoutAccount>
  );
}

export default function Dashboard() {
  return (
    <div></div>
  );
}