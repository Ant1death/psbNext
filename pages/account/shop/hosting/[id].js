import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

import LayoutAccount from '../../../../compontens/LayoutAccount/LayoutAccount';
import NewServise from '../../../../compontens/NewService/NewServise';
import { createNewOrder } from '../../../../api/createNewOrder';

import { wrapper } from '../../../../store/store';
import { useAppSelector } from '../../../../store/hooks';

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ params }) => {
  const id = params.id;

  return {
    props: {
      id,
    }
  }
});

const HostingItem = (id) => {
  const [item, setItem] = useState({});

  const hosting = useAppSelector(store => store.hosting.hosting);

  const fetchData = () => {}

  const sentDataToOrder = (payment) => {
    const token = typeof window !== 'undefined' && localStorage.getItem('token');
    const queries = `product_id=${item.id}&payment_type=${Number(payment)}`;

    createNewOrder(token, queries);
  }

  useEffect(() => {
    if (hosting) {
      const product = hosting.find(el => el.id === Number(id.pageProps.id));
      setItem(product);
    } else {
      fetchData();
    }
  }, []);

  return (
    <NewServise
      sentDataToOrder={sentDataToOrder}
    />
  );
}

HostingItem.getLayout = function getLayout(page) {
  return (
    <LayoutAccount>
      {page}
    </LayoutAccount>
  );
}

export default connect(state => state)(HostingItem);
