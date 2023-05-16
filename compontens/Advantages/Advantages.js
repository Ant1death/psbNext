import style from '../../styles/Advantages.module.scss';

export const Advantages = () => {
  return (
    <section className={style['advantages']}>
        <div className={style['section-title']}>
          <h2 className={`${['h2-title']}`}>Преимущества</h2>
          <p>Преимущества нашего хостинга</p>
        </div>
        <ul className={style['advantages__list']}>
          <li className={style['advantages__list-item']}>
            <iconify-icon icon="ic:twotone-shield" height="100"></iconify-icon>
            <h4 className={`${['h4-title']} ${style['advantages__title']}`}>
              Конфиденциальность данных
            </h4>
            <p className={style['advantages__description']}>
              Безопасность клиентов является нашим главным приоритетом. Мы храним все
              конфиденциальные данные в зашифрованном виде и не предаем их третьим лицам.
            </p>
          </li>
          <li className={style['advantages__list-item']}>
            <iconify-icon icon="mdi:server-shield" height="100"></iconify-icon>
            <h4 className={`${['h4-title']} ${style['advantages__title']}`}>
              Абузоустойчевые сервера
            </h4>
            <p className={style['advantages__description']}>
              Мы предоставляем bulletproof VPS/Hosting по лучшим ценам.
            </p>
          </li>
          <li className={style['advantages__list-item']}>
            <iconify-icon icon="ion:document-lock" height="100"></iconify-icon>
            <h4 className={`${['h4-title']} ${style['advantages__title']}`}>
              DMCA 100% ignored
            </h4>
            <p className={style['advantages__description']}>
              В Нидерландах и Молдавии запросы DMCA полностью игнорируются, что позволяет размещать
              более широкий спектр приемлемого контента.
            </p>
          </li>
          <li className={style['advantages__list-item']}>
            <iconify-icon icon="streamline:money-currency-bitcoin-circle-1-crypto-circle-payment-blockchain-finance-bitcoin-currency-money" height="100"></iconify-icon>
            <h4 className={`${['h4-title']} ${style['advantages__title']}`}>
              Оплата криптовалютой
            </h4>
            <p className={style['advantages__description']}>
              Мы принимаем оплату: BTC, ETH, LTC, USDT. Доступные сети: ERC-20, TRC-20, BSC, MATIC.
            </p>
          </li>
          <li className={style['advantages__list-item']}>
            <iconify-icon icon="gis:search-country" height="100"></iconify-icon>
            <h4 className={`${['h4-title']} ${style['advantages__title']}`}>
              Большой выбор стран
            </h4>
            <p className={style['advantages__description']}>
              Наши сервера находятся в дата центрах по всему миру: Нидерланды, Молдавия, Гонконг, США,
              Великобритания, Германия, Канада, Турция.
            </p>
          </li>
          <li className={style['advantages__list-item']}>
            <iconify-icon icon="clarity:ssd-line" height="100"></iconify-icon>
            <h4 className={`${['h4-title']} ${style['advantages__title']}`}>
              SSD-накопители NVMe
            </h4>
            <p className={style['advantages__description']}>
              NVMe диски и собственное оборудование высокого качества.
            </p>
          </li>
          <li className={style['advantages__list-item']}>
            <iconify-icon icon="iconoir:private-wifi" height="100"></iconify-icon>
            <h4 className={`${['h4-title']} ${style['advantages__title']}`}>
              Приватный VPN сервис
            </h4>
            <p className={style['advantages__description']}>
              Современный и не требовательный к ресурсам VPN WireGuard, более чем в 20 странах.
            </p>
          </li>
          <li className={style['advantages__list-item']}>
            <iconify-icon icon="bx:support" height="100"></iconify-icon>
            <h4 className={`${['h4-title']} ${style['advantages__title']}`}>
              Техническая поддержка
            </h4>
            <p className={style['advantages__description']}>
              Наша техническая поддержка работает круглосуточно и поможет вам с любыми вопросами.
            </p>
          </li>
        </ul>
      </section>
  );
}