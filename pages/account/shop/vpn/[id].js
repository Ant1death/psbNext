import { connect } from 'react-redux';
import { useEffect, useState, useRef } from 'react';
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
import { VPN_PERIOD_EN, VPN_PERIOD_RU, VPN_COUNTRIES } from '../../../../utils/constants';
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

const  VpnItem = (id) => {
  const [item, setItem] = useState({});
  const [period, setPeriod] = useState(1);
  const [valuePeriod, setValuePeriod] = useState('');
  const [message, setMessage] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [currentFlag, setCurrentFlag] = useState('');
  const [activeButton, setActiveButton] = useState(true);

  const { t } = useTranslation();
  const vpn = useAppSelector(store => store.vpn.vpn);
  const user = useAppSelector(store => store.user.user);
  const dispatch = useAppDispatch();
  const dropdownListRef = useRef();

  const handleChangePeriod = (evt) => {
    setPeriod(evt.currentTarget.id);
    setIsDropDownOpen(false);
    setValuePeriod(evt.currentTarget.textContent);
  }

  const openDropDown = () => {
    isDropDownOpen ? setIsDropDownOpen(false) : setIsDropDownOpen(true);
  }

  const fetchData = async () => {
    const data = await getProducts('VPN', '/api/getProducts');
    const vpn = data && data.products ? data.products : [];
    dispatch(fetchVpn(vpn));
  }

  const sentDataToOrder = async (payment) => {
    const token = typeof window !== 'undefined' && localStorage.getItem('token');
    const queries = `product_id=${item.id}&payment_type=${Number(payment)}&period=${period}`;

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

  const findItem = () => {
    const product = vpn.find(el => el.id === Number(id.pageProps.id));
    setItem(product);
  }

  const handleClickOutside = (evt) => {
    if (dropdownListRef.current && !dropdownListRef.current.contains(evt.target)) {
      setIsDropDownOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  useEffect(() => {
    if (!vpn) fetchData();
  }, []);

  useEffect(() => {
    if (vpn) findItem();
  }, [vpn]);

  useEffect(() => {
    t('faq-lang') === 'ru' ? setValuePeriod(VPN_PERIOD_RU[0].option) : setValuePeriod(VPN_PERIOD_EN[0].option);
  }, []);

  useEffect(() => {
    if (item.country) {
      const flag = VPN_COUNTRIES.find(el => el.country === item.country).flag;
      setCurrentFlag(flag);
    }
  }, [item]);

  return (
    item && item.country &&
    <>
      <NewServise
        sentDataToOrder={sentDataToOrder}
        message={message}
        isPopupOpen={isPopupOpen}
        setIsPopupOpen={setIsPopupOpen}
        isSuccess={isSuccess}
        setIsSuccess={setIsSuccess}
        activeButton={activeButton}
      >
        <h3 className={style['card__title-item']}>
          <img src={currentFlag} alt={`icon ${item.title}`} className={style['card__flag']} />
          {`${item.title} - ${item.country}`}
        </h3>
        <p className={style['card__price']}>
          {`${t('new-service-price')}: ${item.price}$`}
        </p>
        <label className={style['card__form-legend']} htmlFor='system'>
          {t('new-service-subscribe')}
        </label>
        <div className={style['card__select-wrap']} ref={dropdownListRef}>
          <p
            className={`${style['card__form-select']} ${isDropDownOpen ? style['card__form-select_open'] : ''}`}
            onClick={openDropDown}
          >
            {valuePeriod}
          </p>
          <ul className={`${style['card__option-list']} ${isDropDownOpen ? style['card__option-list_open'] : ''}`}>
            {t('faq-lang') === 'ru' &&
              VPN_PERIOD_RU.map((el, ind) => {
                return (
                  <li key={ind} id={el.value} onClick={handleChangePeriod}>
                    {el.option}
                  </li>
                );
              })
            }
            {t('faq-lang') === 'en' &&
              VPN_PERIOD_EN.map((el, ind) => {
                return (
                  <li key={ind} id={el.value} onClick={handleChangePeriod}>
                    {el.option}
                  </li>
                );
              })
            }
          </ul>
        </div>
      </NewServise>
    </>
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