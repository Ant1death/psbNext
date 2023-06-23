import { useState } from 'react';

import style from '../../styles/NewServise.module.scss';

export const DropDownList = ({ list, name, setOption, setName }) => {
  const [selectOpen, setSelectOpen] = useState(false);

  const handleSelectClick = () => {
    selectOpen ? setSelectOpen(false) : setSelectOpen(true);
  }

  const handleOptionClick = (evt) => {
    setOption(evt.currentTarget.id);
    setName(evt.currentTarget.textContent);
    setSelectOpen(false);
  }

  return (
    <div className={style['card__select-wrap']}>
      <div
        className={`${style['card__form-select']} ${selectOpen ? style['card__form-select_open'] : ''}`}
        onClick={handleSelectClick}
      >
        {name}
      </div>
      <ul className={`${style['card__option-list']} ${selectOpen ? style['card__option-list_open'] : ''}`}>
        {list.map(el => {
          return (
            <li key={el.id} id={el.content} onClick={handleOptionClick}>
              {!el.price && el.name}
              {el.price && `${el.name} - ${el.price}$`}
            </li>
          );
        })}
      </ul>
    </div>
  );
}