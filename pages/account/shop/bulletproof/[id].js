import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import LayoutAccount from '../../../../compontens/LayoutAccount/LayoutAccount';
import NewServise from '../../../../compontens/NewService/NewServise';

import { createNewOrder } from '../../../../api/createNewOrder';
import { getProducts } from '../../../../api/getProducts';
import { fetchVdsVpsBulletproof } from '../../../../store/slices/vdsVpsBulletproof';
import { fetchOrders } from '../../../../store/slices/orders';
import { getOrders } from '../../../../api/getOrders';
import { checkBalance } from '../../../../utils/checkBalance';
import { wrapper } from '../../../../store/store';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { DropDownList } from '../../../../compontens/DropDownList/DropDownList';

import style from '../../../../styles/NewServise.module.scss';

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ params }) => {
  const id = params.id;

  return {
    props: {
      id,
    }
  }
});

const AbuseItem = (id) => {
  const [item, setItem] = useState({});
  const [system, setSystem] = useState('');
  const [message, setMessage] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeButton, setActiveButton] = useState(true);
  const [systemName, setSystemName] = useState('');

  const { t } = useTranslation();
  const vdsVpsBulletproof = useAppSelector(store => store.vdsVpsBulletproof.vdsVpsBulletproof);
  const user = useAppSelector(store => store.user.user);
  const dispatch = useAppDispatch();

  const fetchData = async () => {
    const vpsData = await getProducts('Bulletproof VDS', '/api/getProducts');
    const vps = vpsData && vpsData.products ? vpsData.products : [];
    const vdsData = await getProducts('Bulletproof VPS', '/api/getProducts');
    const vds = vdsData && vdsData.products ? vdsData.products : [];
    dispatch(fetchVdsVpsBulletproof(vds.concat(vps)));
  }

  const findItem = () => {
    const product = vdsVpsBulletproof.find(el => el.id === Number(id.pageProps.id));
    setItem(product);
  }

  useEffect(() => {
    if (!vdsVpsBulletproof) fetchData();
  }, []);

  useEffect(() => {
    if (vdsVpsBulletproof) findItem();
  }, [vdsVpsBulletproof]);

  useEffect(() => {
    if (item && item.os) {
      setSystem(item.os[0].content);
      setSystemName(item.os[0].name);
    }
  }, [item]);

  const sentDataToOrder = async (payment) => {
    const token = typeof window !== 'undefined' && localStorage.getItem('token');
    const queries = `product_id=${item.id}&payment_type=${Number(payment)}&os=${system}`;

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
        const data = await getOrders(token);
        if (data) dispatch(fetchOrders(data));
        window.open(res.pay_url, '_blank');
      } else {
        setMessage(t('error'));
        setIsSuccess(false);
        setIsPopupOpen(true);
        setActiveButton(true);
      }
    }

  }

  return (
    <NewServise
      sentDataToOrder={sentDataToOrder}
      message={message}
      isPopupOpen={isPopupOpen}
      setIsPopupOpen={setIsPopupOpen}
      isSuccess={isSuccess}
      setIsSuccess={setIsSuccess}
      activeButton={activeButton}
    >
      <label className={style['card__form-legend']} htmlFor='system'>
        {t('new-service-system')}
      </label>
      {item && item.os &&
        <DropDownList
          list={item.os}
          name={systemName}
          setOption={setSystem}
          setName={setSystemName}
        />
      }
    </NewServise>
  );
}

AbuseItem.getLayout = function getLayout(page) {
  return (
    <LayoutAccount>
      {page}
    </LayoutAccount>
  );
}

export default connect(state => state)(AbuseItem);