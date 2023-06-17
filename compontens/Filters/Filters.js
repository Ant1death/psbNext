import RangeSlider from 'react-range-slider-input';
import { useTranslation } from 'react-i18next';

import "react-range-slider-input/dist/style.css";
import style from '../../styles/Filters.module.scss';

export const Filters = ({ price, setPrice, cpu, setCpu, ram, setRam, ssd, setSsd }) => {
  const { t } = useTranslation();

  const handleButtonReset = () => {
    setPrice([8, 220]);
    setCpu([1, 32]);
    setRam([1, 64]);
    setSsd([15, 500]);
  }

  return (
    <div className={style.filters}>
      <ul className={style.list}>
        <li>
          <p className={style.title}>
            {t('filter-price')}
          </p>
          <div className={style.item}>
            <p className={style.value}>
              <span className={style.number}>{price[0]}</span>
              <span className={style.line}></span>
              <span className={style.number}>{price[1]}</span>
            </p>
            <RangeSlider
              value={price}
              onInput={setPrice}
              min={8}
              max={220}
            />
          </div>
        </li>

        <li>
          <p className={style.title}>
            {t('filter-cpu')}
          </p>
          <div className={style.item}>
            <p className={style.value}>
              <span className={style.number}>{cpu[0]}</span>
              <span className={style.line}></span>
              <span className={style.number}>{cpu[1]}</span>
            </p>
            <RangeSlider
              value={cpu}
              onInput={setCpu}
              min={1}
              max={32}
            />
          </div>
        </li>

        <li>
          <p className={style.title}>
            {t('filter-ram')}
          </p>
          <div className={style.item}>
            <p className={style.value}>
              <span className={style.number}>{ram[0]}</span>
              <span className={style.line}></span>
              <span className={style.number}>{ram[1]}</span>
            </p>
            <RangeSlider
              value={ram}
              onInput={setRam}
              min={1}
              max={64}
            />
          </div>
        </li>

        <li>
          <p className={style.title}>
            {t('folter-ssd')}
          </p>
          <div className={style.item}>
            <p className={style.value}>
              <span className={style.number}>{ssd[0]}</span>
              <span className={style.line}></span>
              <span className={style.number}>{ssd[1]}</span>
            </p>
            <RangeSlider
              value={ssd}
              onInput={setSsd}
              min={15}
              max={500}
            />
          </div>
        </li>
      </ul>
      <button type='button' className={style.button} onClick={handleButtonReset}>
        Очистить фильтры
      </button>
    </div>
  );
}