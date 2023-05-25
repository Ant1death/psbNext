import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import LayoutAccount from '../../../../compontens/LayoutAccount/LayoutAccount';
import NewServise from '../../../../compontens/NewService/NewServise';

import { wrapper } from '../../../../store/store';
import { useAppSelector, useAppDispatch } from '../../../../store/hooks';
import { createNewOrder } from '../../../../api/createNewOrder';
import { fetchVpn } from '../../../../store/slices/vpn';
import { getProducts } from '../../../../api/getProducts';
import { fetchOrders } from '../../../../store/slices/orders';
import { getOrders } from '../../../../api/getOrders';
import { VPN_PERIOD_EN, VPN_PERIOD_RU } from '../../../../utils/constants';

import style from '../../../../styles/NewServise.module.scss';

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ params }) => {
  const id = params.id;

  return {
    props: {
      id,
    }
  }
});

const  VpnItem = (id) => {
  const [item, setItem] = useState({});
  const [period, setPeriod] = useState(1);
  const [message, setMessage] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { t } = useTranslation();
  const vpn = useAppSelector(store => store.vpn.vpn);
  const dispatch = useAppDispatch();

  const handleChangePeriod = (evt) => {
    setPeriod(evt.target.value);
  }

  const fetchData = async () => {
    const data = await getProducts('VPN');
    if (data) dispatch(fetchVpn(data));
  }

  const sentDataToOrder = async (payment) => {
    const token = typeof window !== 'undefined' && localStorage.getItem('token');
    const queries = `product_id=${item.id}&payment_type=${Number(payment)}&period=${period}`;
    const res = await createNewOrder(token, queries);

    if (res) {
      const data = await getOrders(token);
      if (data) dispatch(fetchOrders(data));

      setMessage(t('error-order-success'));
      setIsSuccess(true);
      setIsPopupOpen(true);
    } else {
      setMessage(t('error'));
      setIsPopupOpen(true);
    }
  }

  const findItem = () => {
    const product = vpn.find(el => el.id === Number(id.pageProps.id));
    setItem(product);
  }

  useEffect(() => {
    if (!vpn) fetchData();
  }, []);

  useEffect(() => {
    if (vpn) findItem();
  }, [vpn]);

  return (
    <NewServise
      sentDataToOrder={sentDataToOrder}
      message={message}
      isPopupOpen={isPopupOpen}
      setIsPopupOpen={setIsPopupOpen}
      isSuccess={isSuccess}
      setIsSuccess={setIsSuccess}
    >
      {item &&
        <h3 className={style['card__title-item']}>
          <img src='/de.svg' alt={`icon ${item.title}`} className={style['card__flag']} />
          {`${item.title} - ${item.country}`}
        </h3>
      }
      <p className={style['card__price']}>
        {item && item.price &&
          `${t('new-service-price')}: ${item.price}$`
        }
      </p>
      <label className={style['card__form-legend']} htmlFor='system'>
        {t('new-service-subscribe')}
      </label>
      <select
        className={style['card__form-select']}
        name='system'
        id='system'
        onClick={handleChangePeriod}
      >
        {t('faq-lang') === 'ru' &&
          VPN_PERIOD_RU.map((el, ind) => {
            return (
              <option key={ind} value={el.value}>
                {el.option}
              </option>
            );
          })
        }
        {t('faq-lang') === 'en' &&
          VPN_PERIOD_EN.map((el, ind) => {
            return (
              <option key={ind} value={el.value}>
                {el.option}
              </option>
            );
          })
        }
      </select>
    </NewServise>
  );
}

VpnItem.getLayout = function getLayout(page) {
  return (
    <LayoutAccount>
      {page}
    </LayoutAccount>
  );
}

export default connect(state => state)(VpnItem)