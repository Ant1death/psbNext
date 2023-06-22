import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import LayoutAccount from '../../../../compontens/LayoutAccount/LayoutAccount';
import NewServise from '../../../../compontens/NewService/NewServise';

import { wrapper } from '../../../../store/store';
import { useAppSelector, useAppDispatch } from '../../../../store/hooks';
import { createNewOrder } from '../../../../api/createNewOrder';
import { getProducts } from '../../../../api/getProducts';
import { fetchVdsVps } from '../../../../store/slices/vdsVps';
import { fetchOrders } from '../../../../store/slices/orders';
import { getOrders } from '../../../../api/getOrders';
import { checkBalance } from '../../../../utils/checkBalance';

import style from '../../../../styles/NewServise.module.scss';

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ params }) => {
  const id = params.id;

  return {
    props: {
      id,
    }
  }
});

const VpsItem = (id) => {
  const [item, setItem] = useState({});
  const [system, setSystem] = useState('');
  const [controlPanel, setControlPanel] = useState('');
  const [message, setMessage] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [controlPanelList, setControlPanelList] = useState([]);
  const [activeButton, setActiveButton] = useState(true);

  const vdsVps = useAppSelector(store => store.vdsVps.vdsVps);
  const user = useAppSelector(store => store.user.user);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const handleChangeSystem = (evt) => {
    setSystem(evt.target.value);
  }

  const handleChangePanel = (evt) => {
    setControlPanel(evt.target.value);
  }

  const findItem = () => {
    const product = vdsVps.find(el => el.id === Number(id.pageProps.id));
    setItem(product);
  }

  const fetchData = async () => {
    const vpsData = await getProducts('VPS', '/api/getProducts');
    const vps = vpsData && vpsData.products ? vpsData.products : [];
    dispatch(fetchVdsVps(vps));
  }

  useEffect(() => {
    if (!vdsVps) fetchData();
  }, []);

  useEffect(() => {
    if (vdsVps) findItem();
  }, [vdsVps]);

  useEffect(() => {
    if (item && controlPanelList && controlPanelList.length > 0) {
      item.os && setSystem(item.os[0].content);
      setControlPanel(controlPanelList[0].content);
    }
  }, [controlPanelList, item]);

  useEffect(() => {
    if (item && item.control_panel) {
      const arrSort = [...item.control_panel].sort((a, b) => {
        return b.id - a.id;
      });
      const arr = [arrSort[0], ...arrSort.slice(1).reverse()];


      setControlPanelList(arr);
    }
  }, [item]);

  const sentDataToOrder = async (payment) => {
    const token = typeof window !== 'undefined' && localStorage.getItem('token');
    const queries = `product_id=${item.id}&payment_type=${Number(payment)}&os=${system}&control_panel=${controlPanel}`;

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

        if (res.status === '200') {
          const data = await getOrders(token);
          if (data) dispatch(fetchOrders(data));
          setMessage(t('error-order-success'));
          setIsPopupOpen(true);
          setActiveButton(true);
        } else if (res.status === '422') {
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
        setIsPopupOpen(true);
        setIsSuccess(false);
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
      <select
        className={style['card__form-select']}
        name='system'
        id='system'
        onClick={handleChangeSystem}
      >
        {item && item.os && item.os.map(el => {
          return (
            <option key={el.id} value={el.content}>
              {el.name}
            </option>
          );
        })}
      </select>
      <label className={style['card__form-legend']} htmlFor='system'>
        {`${t('new-service-panel')}`}
      </label>
      <select
        className={style['card__form-select']}
        name='system'
        id='system'
        onClick={handleChangePanel}
      >
        {controlPanelList && controlPanelList.map(el => {
          return (
            <option key={el.id} value={el.content}>
              {`${el.name} - ${el.price}$`}
            </option>
          );
        })}
      </select>
    </NewServise>
  );
}

VpsItem.getLayout = function getLayout(page) {
  return (
    <LayoutAccount>
      {page}
    </LayoutAccount>
  );
}

export default connect(state => state)(VpsItem);