import style from '../../styles/Balance.module.scss';

const RowTableHistory = ({ id, type, date, sum, status }) => {
  const classStatus = `${status === 'Успешно' ? style['section__table_success'] : ''}`;

  return (
    <tr>
      <td>{id}</td>
      <td>{type}</td>
      <td>{date}</td>
      <td className={style['section__table-sum']}>
        {sum}
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