import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

import LayoutAccount from '../../../../compontens/LayoutAccount/LayoutAccount';
import NewServise from '../../../../compontens/NewService/NewServise';

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

  useEffect(() => {
    if (hosting) {
      const product = hosting.find(el => el.id === Number(id.pageProps.id));
      setItem(product);
    } else {
      fetchData();
    }
  }, []);

  return (
    <NewServise />
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
