import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import LayoutAccount from '../../../../compontens/LayoutAccount/LayoutAccount';
import NewServise from '../../../../compontens/NewService/NewServise';

import style from '../../../../styles/NewServise.module.scss';
// Todo: delete after connecting API
import { abuseList } from '../../../../utils/data/abuseList.js';

AbuseItem.getLayout = function getLayout(page) {
  return (
    <LayoutAccount>
      {page}
    </LayoutAccount>
  );
}

export default function AbuseItem() {
  const [item, setItem] = useState({});

  const router = useRouter();
  const { t } = useTranslation();

  const handleChangeSystem = () => {}

  const handleChangePanel = () => {}

  const getItemWithId = () => {
    const { id } = router.query;
    return abuseList.find(el => el.id === +id);
  }

  useEffect(() => {
    setItem(getItemWithId());
  }, [router]);

  return (
    <NewServise>
      <label className={style['card__form-legend']} htmlFor='system'>
        {t('new-service-system')}
      </label>
      <select className={style['card__form-select']} name='system' id='system' onClick={handleChangeSystem}>
        {item && item.systems && item.systems.map(el => {
          return (
            <option key={item.systems.indexOf(el)} value={el}>
              {el}
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
