import { useEffect, useState } from 'react';

import style from '../../styles/Balance.module.scss';

const RowTableHistory = ({ id, type, date, sum, status }) => {
  const classStatus = `${style['section__table']} ${status === 'Успешно' ? style['section__table_success'] : style['section__table_unsuccess']}`;
  const classSum = `${type.includes('Пополнение') ? style['section__table-sum_plus'] : style['section__table-sum_minus']}`;

  const [amount, setAmount] = useState('');

  useEffect(() => {
    type.includes('Пополнение') ? setAmount(`+${sum}`) : setAmount(`-${sum}`);
  }, []);

  return (
    <tr>
      <td>{id}</td>
      <td>{type}</td>
      <td>{date}</td>
      <td className={classSum}>
        {amount}
      </td>
      <td>
        <span className={classStatus}>
          {status}
        </span>
      </td>
    </tr>
  );
}

export default RowTableHistory;