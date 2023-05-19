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

const  VpnItem = (id) => {
  const [item, setItem] = useState({});

  const { t } = useTranslation();
  const vpn = useAppSelector(store => store.vpn.vpn)

  const handleChangeSubscription = () => {}

  const fetchData = () => {}

  useEffect(() => {
    if (vpn) {
      const product = vpn.find(el => el.id === Number(id.pageProps.id));
      setItem(product);
    } else {
      fetchData();
    }
  }, []);

  return (
    <NewServise>
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
      <select className={style['card__form-select']} name='system' id='system' onClick={handleChangeSubscription}>
        {item && item.subscription && item.subscription.map(el => {
          return (
            <option key={item.subscription.indexOf(el)} value={el}>
              {el}
            </option>
          );
        })}
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