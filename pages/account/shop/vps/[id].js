import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import LayoutAccount from '../../../../compontens/LayoutAccount/LayoutAccount';
import NewServise from '../../../../compontens/NewService/NewServise';

import { wrapper } from '../../../../store/store';
import { useAppSelector } from '../../../../store/hooks';

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

  const vdsVps = useAppSelector(store => store.vdsVps.vdsVps)
  const { t } = useTranslation();

  const handleChangeSystem = () => {}

  const handleChangePanel = () => {}

  const fetchData = () => {}

  useEffect(() => {
    if (vdsVps) {
      const product = vdsVps.find(el => el.id === Number(id.pageProps.id));
      setItem(product);
    } else {
      fetchData();
    }
  }, []);

  return (
    <NewServise>
      <label className={style['card__form-legend']} htmlFor='system'>
        {t('new-service-system')}
      </label>
      <select className={style['card__form-select']} name='system' id='system' onClick={handleChangeSystem}>
        {item && item.os && item.os.map(el => {
          return (
            <option key={el.id} value={el.name}>
              {el.name}
            </option>
          );
        })}
      </select>
      <label className={style['card__form-legend']} htmlFor='system'>
        {`${t('new-service-panel')} NL`}
      </label>
      <select className={style['card__form-select']} name='system' id='system' onClick={handleChangePanel}>
        {item && item.panel && item.panel.map(el => {
          return (
            <option key={item.panel.indexOf(el)} value={el}>
              {el}
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