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
    question: 'Сколько времени происходит активация абузоустойчивого сервера?',
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
    country: 'Moldova',
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

export const VPN_PERIOD_RU = [
  {
    option: '1 месяц',
    value: 1,
  },
  {
    option: '3 месяца - 5%',
    value: 3,
  },
  {
    option: '6 месяцев - 10%',
    value: 6,
  },
  {
    option: '12 месяцев - 15%',
    value: 12,
  },
];

export const VPN_PERIOD_EN = [
  {
    option: '1 month',
    value: 1,
  },
  {
    option: '3 month - 5%',
    value: 3,
  },
  {
    option: '6 month - 10%',
    value: 6,
  },
  {
    option: '12 month - 15%',
    value: 12,
  },
];

export const OS_LIST = [
  {
    id: 24,
    name: "Debian 11",
    content: "VM6_ISPsystem_Debian-11_25",
  },
  {
    id: 23,
    name: "Ubuntu 22.04",
    content: "VM6_ISPsystem_Ubuntu-22.04_14",
  },
  {
    id: 21,
    name: "Centos 7",
    content: "VM6_ISPsystem_Windows-10_17",
  },
  {
    id: 14,
    name: "Astra Linux CE",
    content: "VM6_ISPsystem_Astra-Linux-CE_21",
  },
  {
    id: 13,
    name: "FreeBSD 13",
    content: "VM6_ISPsystem_FreeBSD-13_20",
  },
  {
    id: 12,
    name: "FreeBSD 12",
    content: "VM6_ISPsystem_FreeBSD-12_19",
  },
  {
    id: 11,
    name: "Ubuntu 20.04",
    content: "VM6_ISPsystem_Ubuntu-20.04_13",
  },
  {
    id: 10,
    name: "Ubuntu 18.04",
    content: "VM6_ISPsystem_Ubuntu-18.04_6",
  },
  {
    id: 8,
    name: "Oracle linux 8",
    content: "VM6_ISPsystem_Oracle-Linux-8_24",
  },
  {
    id: 7,
    name: "Debian 10",
    content: "VM6_ISPsystem_Debian-10_3",
  },
  {
    id: 6,
    name: "Debian 9",
    content: "VM6_ISPsystem_Debian-9_4",
  },
  {
    id: 5,
    name: "VzLinux 8",
    content: "VM6_ISPsystem_VzLinux-8_26",
  },
  {
    id: 4,
    name: "Rocky Linux 8",
    content: "VM6_ISPsystem_Rocky-Linux-8_23",
  },
  {
    id: 3,
    name: "Alma Linux 8",
    content: "VM6_ISPsystem_Alma-Linux-8_22",
  },
  {
    id: 2,
    name: "Centos 9 Steam",
    content: "VM6_ISPsystem_CentOS-9-Stream_27",
  },
  {
    id: 1,
    name: "Centos 8 Steam",
    content: "VM6_ISPsystem_CentOS-8-Stream_18",
  },
];

export const CYRILLIC_REG_EXP = /[а-яё]/gi;
export const NUMBER_REG_EXP = /^\d+$/;
export const EMAIL_REG_EXP = /^.*\.[a-z]{2,}$/;