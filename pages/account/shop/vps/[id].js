import LayoutAccount from '../../../../compontens/LayoutAccount/LayoutAccount';

VpsItem.getLayout = function getLayout(page) {
  return (
    <LayoutAccount>
      {page}
    </LayoutAccount>
  );
}

export default function VpsItem() {
  return (
    <div></div>
  );
}
