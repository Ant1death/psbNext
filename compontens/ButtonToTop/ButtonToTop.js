import 'iconify-icon';
import style from '../../styles/ButtonToTop.module.scss';

const ButtonToTop = () => {
  const goToTop = () => {

  }

  return (
    <button type='buuton' onClick={goToTop} className={style.button}>
      <iconify-icon icon="mdi:chevron-up"></iconify-icon>
    </button>
  );
}

export default ButtonToTop;