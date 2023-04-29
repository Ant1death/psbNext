import LayoutAccount from '../../../../compontens/LayoutAccount/LayoutAccount';

AccountHosting.getLayout = function getLayout(page) {
  return (
    <LayoutAccount>
      {page}
    </LayoutAccount>
  );
}

export default function AccountHosting() {
  return (
    <section>

    </section>
  );
}