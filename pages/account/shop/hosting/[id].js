import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import LayoutAccount from '../../../../compontens/LayoutAccount/LayoutAccount';
import NewServise from '../../../../compontens/NewService/NewServise';

import { createNewOrder } from '../../../../api/createNewOrder';
import { fetchHosting } from '../../../../store/slices/hosting';
import { getProducts } from '../../../../api/getProducts';
import { fetchOrders } from '../../../../store/slices/orders';
import { getOrders } from '../../../../api/getOrders';
import { checkBalance } from '../../../../utils/checkBalance';
import { wrapper } from '../../../../store/store';
import { useAppSelector, useAppDispatch } from '../../../../store/hooks';

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
  const [message, setMessage] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeButton, setActiveButton] = useState(true);

  const { t } = useTranslation();
  const hosting = useAppSelector(store => store.hosting.hosting);
  const user = useAppSelector(store => store.user.user);
  const dispatch = useAppDispatch();

  const fetchData = async () => {
    const hostings = await getProducts('Hosting', '/api/getProducts');
    const hosting = hostings && hostings.products ? hostings.products : [];
    dispatch(fetchHosting(hosting));
  }

  const sentDataToOrder = async (payment) => {
    const token = typeof window !== 'undefined' && localStorage.getItem('token');
    const queries = `product_id=${item.id}&payment_type=${Number(payment)}`;

    setMessage(t('error-pending'));
    setIsSuccess(true);
    setIsPopupOpen(true);
    setActiveButton(false);

    if (Number(payment) === 1) {
      const message = checkBalance(user.balance, item.price, t('faq-lang'));

      if (message) {
        setMessage(message);
        setIsSuccess(false);
        setIsPopupOpen(true);
        setActiveButton(true);
      } else {
        const res = await createNewOrder(token, queries);

        if (res.status === 200) {
          const data = await getOrders(token);
          if (data) dispatch(fetchOrders(data));
          setMessage(t('error-order-success'));
          setIsPopupOpen(true);
          setActiveButton(true);
        } else if (res.status === 422) {
          setMessage(t('error-balance'));
          setIsSuccess(false);
          setIsPopupOpen(true);
          setActiveButton(true);
        } else {
          setMessage(t('error'));
          setIsSuccess(false);
          setIsPopupOpen(true);
          setActiveButton(true);
        }
      }
    } else if (Number(payment) === 2) {
      const res = await createNewOrder(token, queries);

      if (res && res.data && res.pay_url) {
        setMessage(t('error-order'));
        setIsPopupOpen(true);
        setActiveButton(true);
        window.open(res.pay_url, '_blank');
        const data = await getOrders(token);
        if (data) dispatch(fetchOrders(data));
      } else {
        setMessage(t('error'));
        setIsSuccess(false);
        setIsPopupOpen(true);
        setActiveButton(true);
      }
    }
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
      message={message}
      isPopupOpen={isPopupOpen}
      setIsPopupOpen={setIsPopupOpen}
      isSuccess={isSuccess}
      setIsSuccess={setIsSuccess}
      activeButton={activeButton}
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
