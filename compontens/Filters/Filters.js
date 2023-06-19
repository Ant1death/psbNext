import { useState } from 'react';
import RangeSlider from 'react-range-slider-input';
import { useTranslation } from 'react-i18next';

import "react-range-slider-input/dist/style.css";
import style from '../../styles/Filters.module.scss';

export const Filters = ({
    price,
    setPrice,
    cpu,
    setCpu,
    ram,
    setRam,
    ssd,
    setSsd,
    initialPrice,
    initialCpu,
    initialRam,
    initialSsd,
  }) => {
  const { t } = useTranslation();

  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const handleButtonReset = () => {
    setPrice(initialPrice);
    setCpu(initialCpu);
    setRam(initialRam);
    setSsd(initialSsd);
  }

  const handleToggleFilters = () => {
    isFiltersOpen ? setIsFiltersOpen(false) : setIsFiltersOpen(true);
  }

  return (
    <>
      <button
        type='button'
        onClick={handleToggleFilters}
        className={`${style.buttonFilters} ${isFiltersOpen ? style.buttonOpen : ''}`}
      >
        {t('button-filters')}
      </button>

      <div className={`${style.filters} ${isFiltersOpen ? style.filtersOpen : ''}`}>
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
                min={initialPrice[0]}
                max={initialPrice[1]}
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
                min={initialCpu[0]}
                max={initialCpu[1]}
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
                min={initialRam[0]}
                max={initialRam[1]}
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
                min={initialSsd[0]}
                max={initialSsd[1]}
              />
            </div>
          </li>
        </ul>
        <button type='button' className={style.button} onClick={handleButtonReset}>
          Очистить фильтры
        </button>
      </div>
    </>
  );
}