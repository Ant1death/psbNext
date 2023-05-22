import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import LayoutAccount from '../../../../compontens/LayoutAccount/LayoutAccount';
import NewServise from '../../../../compontens/NewService/NewServise';

import { wrapper } from '../../../../store/store';
import { useAppSelector } from '../../../../store/hooks';
import { createNewOrder } from '../../../../api/createNewOrder';

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

  const vdsVps = useAppSelector(store => store.vdsVps.vdsVps)
  const { t } = useTranslation();

  const handleChangeSystem = (evt) => {
    setSystem(evt.target.value);
  }

  const handleChangePanel = (evt) => {
    setControlPanel(evt.target.value);
  }

  const fetchData = () => {}

  useEffect(() => {
    if (vdsVps) {
      const product = vdsVps.find(el => el.id === Number(id.pageProps.id));
      setItem(product);
    } else {
      fetchData();
    }
  }, []);

  useEffect(() => {
    if (item) {
      item.os && setSystem(item.os[0].content);
      item.control_panel && setControlPanel(item.control_panel[0].content);
    }
  }, [item]);

  const sentDataToOrder = (payment) => {
    const token = typeof window !== 'undefined' && localStorage.getItem('token');

    const body = {
      product_id: item.id,
      payment_type: Number(payment),
      os: system,
      control_panel: controlPanel,
    }

    createNewOrder(token, body);
  }

  return (
    <NewServise
      sentDataToOrder={sentDataToOrder}
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