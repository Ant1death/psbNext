import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

import LayoutAccount from '../../../../compontens/LayoutAccount/LayoutAccount';
import NewServise from '../../../../compontens/NewService/NewServise';
import { createNewOrder } from '../../../../api/createNewOrder';
import { fetchHosting } from '../../../../store/slices/hosting';
import { getProducts } from '../../../../api/getProducts';

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
  const dispatch = useAppDispatch();

  const fetchData = async () => {
    const hostings = await getProducts('Hosting');
    const hosting = hostings ? hostings.products : [];
    dispatch(fetchHosting(hosting));
  }

  const sentDataToOrder = (payment) => {
    const token = typeof window !== 'undefined' && localStorage.getItem('token');
    const queries = `product_id=${item.id}&payment_type=${Number(payment)}`;

    createNewOrder(token, queries);
  }

  const findItem = () => {
    const product = hosting.find(el => el.id === Number(id.pageProps.id));
    setItem(product);
  }

  useEffect(() => {
    if (!hosting) fetchData();
  }, []);

  useEffect(() => {
    if (hosting) findItem();
  }, [hosting]);

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
