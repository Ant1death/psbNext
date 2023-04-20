import LayoutAccount from '../../../../compontens/LayoutAccount/LayoutAccount';
import NewServise from '../../../../compontens/NewService/NewServise';
import style from '../../../../styles/NewServise.module.scss';

VpsItem.getLayout = function getLayout(page) {
  return (
    <LayoutAccount>
      {page}
    </LayoutAccount>
  );
}

export default function VpsItem() {
  return (
    <NewServise>

    </NewServise>
  );
}
