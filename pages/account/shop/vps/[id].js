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

  const vdsVps = useAppSelector(store => store.vdsVps.vdsVps)
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
    const vpsData = await getProducts('VPS');
    const vps = vpsData ? vpsData.products : [];
    const vdsData = await getProducts('VDS');
    const vds = vdsData ? vdsData.products : [];
    dispatch(fetchVdsVps(vds.concat(vps)));
  }

  useEffect(() => {
    if (!vdsVps) fetchData();
  }, []);

  useEffect(() => {
    if (vdsVps) findItem();
  }, [vdsVps]);

  useEffect(() => {
    if (item) {
      item.os && setSystem(item.os[0].content);
      item.control_panel && setControlPanel(item.control_panel[0].content);
    }
  }, [item]);

  const sentDataToOrder = async (payment) => {
    const token = typeof window !== 'undefined' && localStorage.getItem('token');
    const queries = `product_id=${item.id}&payment_type=${Number(payment)}&os=${system}&control_panel=${controlPanel}`;
    const res = await createNewOrder(token, queries);

    if (res) {
      const data = await getOrders(token);
      if (data) dispatch(fetchOrders(data));

      setMessage('Заказ успешно создан и ждёт выдачи');
      setIsSuccess(true);
      setIsPopupOpen(true);
    } else {
      setMessage('Произошла ошибка');
      setIsPopupOpen(true);
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
        {`${t('new-service-panel')} NL`}
      </label>
      <select
        className={style['card__form-select']}
        name='system'
        id='system'
        onClick={handleChangePanel}
      >
        {item && item.control_panel && item.control_panel.map(el => {
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