export const TRANSFORM_AMOUNT = 10;
export const INDENT_POPUP_NOTIFICATION = 25;
export const INDENT_POPUP_PROFILE = 20;

export const PATH_LIST_RU = {
  account: 'Панель управления',
  shop: 'Магазин услуг',
  bulletproof: 'Магазин услуг',
  vpn: 'Магазин услуг',
  balance: 'Ваш кошелек',
  rules: 'Правила сервиса',
  new: 'Новая услуга',
  profile: 'Ваш профиль',
}

export const PATH_LIST_EN = {
  account: 'Control Panel',
  shop: 'Service Store',
  bulletproof: 'Service Store',
  vpn: 'Service Store',
  balance: 'Your Wallet',
  rules: 'Terms of Service',
  new: 'New Service',
  profile: 'Your Account',
}

export const FAQ_LIST_VPS_RU = [
  {
    id: 0,
    question: 'Что такое оффшорный веб хостинг?',
    answer: 'Оффшорные хостинги гарантируют полную конфиденциальность данных, анонимность и широкий спектр приемлемого контента',
  },
  {
    id: 1,
    question: 'Что такое DMCA?',
    answer: 'Digital Millenium Copyright Act — это закон, обеспечивающий соблюдение авторского права. Его приняли в 1998 году в США, и действует он только в американской юрисдикции',
  },
  {
    id: 2,
    question: 'Какие способы оплаты вы принимаете?',
    answer: 'Мы принимаем оплату BTC, ETH, LTC, USDT (TRC-20)',
  },
  {
    id: 3,
    question: 'Вам нужна моя личная информация?',
    answer: 'Нет, мы не запрашиваем информацию о клиентах, весь процесс покупки и использования наших услуг является анонимным',
  },
  {
    id: 4,
    question: 'Делаете ли вы резервное копирование (бэкапы)?',
    answer: 'По умолчанию бэкапы отключены',
  },
  {
    id: 5,
    question: 'Есть ли у вас защита от DDOS атак?',
    answer: 'Да, мы предоставляем защиту от DDOS атак',
  },
];

export const FAQ_LIST_VPS_EN = [
  {
    id: 0,
    question: 'What is offshore web hosting?',
    answer: 'Offshore web hosting guarantees complete data privacy, anonymity and a wide range of acceptable content',
  },
  {
    id: 1,
    question: 'What is the DMCA?',
    answer: 'The Digital Millenium Copyright Act is a law enforcing copyright law. It was passed in 1998 in the United States and is only valid in American jurisdiction',
  },
  {
    id: 2,
    question: 'What payment methods do you accept?',
    answer: 'We accept payment BTC, ETH, LTC, USDT (TRC-20)',
  },
  {
    id: 3,
    question: 'You want my personal information?',
    answer: 'No, we do not ask for customer information, the entire process of buying and use of our services is anonymous',
  },
  {
    id: 4,
    question: 'Do you make backups?',
    answer: 'Backups are disabled by default',
  },
  {
    id: 5,
    question: 'Do you have protection against DDOS attacks?',
    answer: 'Yes, we provide protection from DDOS attacks',
  },
];

export const FAQ_LIST_VPN_RU = [
  {
    id: 0,
    question: 'На каких устройствах можно использовать VPN?',
    answer: 'Windows, macOS, Android, iOS, Linux.',
  },
  {
    id: 1,
    question: 'Чем WireGuard лучше OpenVPN?',
    answer: 'WireGuard не использует большой объем кода, поэтому работает быстрее.',
  },
  {
    id: 2,
    question: 'Какие способы оплаты вы принимаете?',
    answer: 'Мы принимаем оплату BTC, ETH, LTC, USDT (TRC-20)',
  },
  {
    id: 3,
    question: 'У вас есть скидки за аренду VPN на длительный срок?',
    answer: 'Да, 3 месяца -5%, 6 месяцев -10%, 12 месяцев -15%',
  },
  {
    id: 4,
    question: 'Ваш VPN анонимный?',
    answer: 'Да, мы не храним логи и используем современные протоколы шифрования.',
  },
  {
    id: 5,
    question: 'Где мне скачать клиент для моего устройства?',
    answer: 'На официальном сайте https://www.wireguard.com/install/.',
  },
];

export const FAQ_LIST_VPN_EN = [
  {
    id: 0,
    question: 'On which devices you can use a VPN?',
    answer: 'Windows, macOS, Android, iOS, Linux.',
  },
  {
    id: 1,
    question: 'How is WireGuard better than OpenVPN?',
    answer: 'WireGuard does not use a large amount of code, so it works faster.',
  },
  {
    id: 2,
    question: 'What payment methods do you accept?',
    answer: 'We accept BTC, ETH, LTC, USDT (TRC-20)',
  },
  {
    id: 3,
    question: 'You have discounts for long term VPN rentals?',
    answer: 'Yes, 3 months -5%, 6 months -10%, 12 months -15%',
  },
  {
    id: 4,
    question: 'Your VPN is anonymous?',
    answer: 'Yes, we do not store logs and use modern encryption protocols.',
  },
  {
    id: 5,
    question: 'Where do I download the client for my device?',
    answer: 'On the official website https://www.wireguard.com/install/.',
  },
];

export const FAQ_LIST_ABUSE_RU = [
  {
    id: 0,
    question: 'Что такое Абузоустойчивые сервера?',
    answer: 'Абузоустойчивые VPS/VDS разрешают размещение любого контента',
  },
  {
    id: 1,
    question: 'На сколько выдается хостинг?',
    answer: 'Минимальный срок 30 дней',
  },
  {
    id: 2,
    question: 'Какие способы оплаты вы принимаете?',
    answer: 'Мы принимаем оплату BTC, ETH, LTC, USDT (TRC-20)',
  },
  {
    id: 3,
    question: 'Сколько времени происходит активация абузоустойчевого сервера?',
    answer: 'До 24 часов',
  },
  {
    id: 4,
    question: 'Вам нужна моя личная информация?',
    answer: 'Нет, мы не запрашиваем информацию о клиентах, весь процесс покупки и использования наших услуг является анонимным',
  },
  {
    id: 5,
    question: 'Есть ли у вас защита от DDOS атак?',
    answer: 'Да, мы предоставляем защиту от DDOS атак',
  },
];

export const FAQ_LIST_ABUSE_EN = [
  {
    id: 0,
    question: 'What is a bulletproof server?',
    answer: 'Bulletproof VPS/VDS allows to host any content',
  },
  {
    id: 1,
    question: 'For how long is the hosting given out?',
    answer: 'Minimum period 30 days',
  },
  {
    id: 2,
    question: 'What payment methods do you accept?',
    answer: 'We accept payment BTC, ETH, LTC, USDT (TRC-20)',
  },
  {
    id: 3,
    question: 'How long does it take to activate an bulletproof server?',
    answer: 'Up to 24 hours',
  },
  {
    id: 4,
    question: 'You want my personal information?',
    answer: 'No, we do not ask for customer information, the entire process of buying and use of our services is anonymous',
  },
  {
    id: 5,
    question: 'Do you have protection against DDOS attacks?',
    answer: 'Yes, we provide protection from DDOS attacks',
  },
];

export const VPS_COUNTRY_LIST = [
  {
    id: 0,
    country: 'Netherlands',
    flag: '/nl.svg',
    description: [
      'DMCA 100% ignored',
      'Offshore hosting',
      'Linux & Windows',
    ],
  },
  {
    id: 1,
    country: 'Moldowa',
    flag: '/md.svg',
    description: [
      'DMCA 100% ignored',
      'Offshore hosting',
      'Linux & Windows',
    ],
  },
  {
    id: 2,
    country: 'USA',
    flag: '/us.svg',
    description: [
      'Offshore hosting',
      'Linux & Windows',
    ],
  },
  {
    id: 3,
    country: 'Hong Kong',
    flag: '/hk.svg',
    description: [
      'Offshore hosting',
      'Linux & Windows',
    ],
  },
  {
    id: 4,
    country: 'Germany',
    flag: '/de.svg',
    description: [
      'Offshore hosting',
      'Linux & Windows',
    ],
  },
  {
    id: 5,
    country: 'Canada',
    flag: '/ca.svg',
    description: [
      'Offshore hosting',
      'Linux & Windows',
    ],
  },
  {
    id: 6,
    country: 'Great Britain',
    flag: '/gb.svg',
    description: [
      'Offshore hosting',
      'Linux & Windows',
    ],
  },
  {
    id: 7,
    country: 'Turkey',
    flag: '/tr.svg',
    description: [
      'Offshore hosting',
      'Linux & Windows',
    ],
  },
];

export const VPN_CHARACTERS_RU = [
  'Порт: 1 Gbps',
  'Безопасное шифрование',
  'Поддержка 24/7',
  'Безлимитный трафик',
  '1 активное устройство',
];

export const VPN_CHARACTERS_EN = [
  'Port: 1 Gbps',
  'Secure encryption',
  'Support 24/7',
  'Unlimited traffic',
  '1 active device',
];

export const VPN_COUNTRIES = [
  {
    country: 'Netherlands',
    flag: './nl.svg',
  },
  {
    country: 'Moldowa',
    flag: './md.svg',
  },
  {
    country: 'USA',
    flag: './us.svg',
  },
  {
    country: 'Hong Kong',
    flag: './hk.svg',
  },
  {
    country: 'Germany',
    flag: './de.svg',
  },
  {
    country: 'Canada',
    flag: './ca.svg',
  },
  {
    country: 'Great Britain',
    flag: './gb.svg',
  },
  {
    country: 'Turkey',
    flag: './tr.svg',
  },
];

export const MONTH_RU = [ 'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
export const MONTH_EN = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];