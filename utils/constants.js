import bitcoin from '../public/bitcoin.svg';
import ethereum from '../public/ethereum.svg';
import litecoin from '../public/litecoin.svg';
import usdt from '../public/usdt.svg';
import qiwi from '../public/qiwi.svg';
import visa from '../public/visa.svg';
import mastercard from '../public/mk.svg';

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

export const PAYMENTS = [
  {
    name: 'Bitcoin',
    img: bitcoin,
  },
  {
    name: 'Ethereum',
    img: ethereum,
  },
  {
    name: 'Litecoin',
    img: litecoin,
  },
  {
    name: 'USDT',
    img: usdt,
  },
  {
    name: 'Qiwi',
    img: qiwi,
  },
  {
    name: 'Visa',
    img: visa,
  },
  {
    name: 'Mastercard',
    img: mastercard,
  },
]

export const FAQ_LIST_RU = [
  {
    question: 'Что такое оффшорные сервера?',
    answer: 'Оффшорные сервера гарантируют полную конфиденциальность данных и анонимность. Подходят для безопасного хранения информации и любых других проектов.',
  },
  {
    question: 'Какой контент запрещено размещать на оффшорных серверах?',
    answer: 'Любой контент по которому приходят жалобы на сервер, исключение DMCA.',
  },
  {
    question: 'Что такое DMCA?',
    answer: 'Digital Millenium Copyright Act — это закон, обеспечивающий соблюдение авторского права. Его приняли в 1998 году в США, и действует он только в американской юрисдикции',
  },
  {
    question: 'В каких странах вы игнорируете запросы DMCA?',
    answer: 'Нидерланды и Молдавия.',
  },
  {
    question: 'Что такое Bulletproof сервера?',
    answer: 'На Bulletproof серверах разрешено размещение любого контента. Исключение: майнинг, взлом RDP, атаки на сервера (DDoS, exploit и т.д.)',
  },
  {
    question: 'Вам нужна моя личная информация?',
    answer: 'Нет, мы не запрашиваем информацию о клиентах, весь процесс покупки и использования наших услуг является анонимным',
  },
  {
    question: 'Делаете ли вы резервное копирование (бэкапы)?',
    answer: 'По умолчанию бэкапы отключены',
  },
  {
    question: 'Есть ли у вас защита от DDOS атак?',
    answer: 'Да, мы предоставляем защиту от DDOS атак',
  },
  {
    question: 'Какие способы оплаты вы принимаете?',
    answer: 'Мы принимаем оплату BTC, ETH, LTC, USDT (TRC-20)',
  },
];

export const FAQ_LIST_EN = [
  {
    question: 'What are offshore servers?',
    answer: 'Offshore servers guarantee complete data confidentiality and anonymity. They are suitable for secure storage of information and any other projects.',
  },
  {
    question: 'What content is prohibited from hosting offshore servers?',
    answer: 'Any content for which complaints come to the server. DMCA is exception.',
  },
  {
    question: 'What is the DMCA?',
    answer: 'The Digital Millenium Copyright Act is a law enforcing copyright law. It was passed in 1998 in the United States and is only valid in American jurisdiction',
  },
  {
    question: 'In which countries do you ignore DMCA requests?',
    answer: 'Netherlands and Moldova.',
  },
  {
    question: 'What are Bulletproof servers?',
    answer: 'Any content is allowed on Bulletproof servers. Exception is mining, RDP hacking, server attacks (DDoS, exploit, etc.)',
  },
  {
    question: 'You want my personal information?',
    answer: 'No, we do not ask for customer information, the entire process of buying and use of our services is anonymous',
  },
  {
    question: 'Do you make backups?',
    answer: 'Backups are disabled by default',
  },
  {
    question: 'Do you have protection against DDOS attacks?',
    answer: 'Yes, we provide protection from DDOS attacks',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept payment BTC, ETH, LTC, USDT (TRC-20)',
  },
];

export const REVIEW_RU = [
  {
    name: 'Hosting.info',
    number: '4.9',
    img: './review_stars.svg',
    text: 'средняя оценка',
  },
  {
    name: 'Hosting101.ru',
    number: '6',
    img: './review_lightning.svg',
    text: 'преимуществ',
  },
  {
    name: 'HostingHUB.ru',
    number: '9',
    img: './review_messages.svg',
    text: 'отзывов',
  },
  {
    name: 'VpsUP.ru',
    number: '19',
    img: './review_bomb.svg',
    text: 'место из 169',
  },
];

export const REVIEW_EN = [
  {
    name: 'Hosting.info',
    number: '4.9',
    img: './review_stars.svg',
    text: 'average rating',
  },
  {
    name: 'Hosting101.ru',
    number: '6',
    img: './review_lightning.svg',
    text: 'advantages',
  },
  {
    name: 'HostingHUB.ru',
    number: '9',
    img: './review_messages.svg',
    text: 'reviews',
  },
  {
    name: 'VpsUP.ru',
    number: '19',
    img: './review_bomb.svg',
    text: 'place out of 169',
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
    country: 'Spain',
    flag: './spain.svg',
  },
  {
    country: 'France',
    flag: './france.svg',
  },
  {
    country: 'Ireland',
    flag: './ireland.svg',
  },
  {
    country: 'Switzerland',
    flag: './switzerland.svg',
  },
  {
    country: 'Sweden',
    flag: './sweden.svg',
  },
  {
    country: 'Portugal',
    flag: './portugal.svg',
  },
  {
    country: 'Hungary',
    flag: './hungary.svg',
  },
  {
    country: 'Finland',
    flag: './finland.svg',
  },
  {
    country: 'Italy',
    flag: './italy.svg',
  },
  {
    country: 'Romania',
    flag: './romania.svg',
  },
  {
    country: 'Bulgaria',
    flag: './bulgaria.svg',
  },
  {
    country: 'Poland',
    flag: './poland.svg',
  },
  {
    country: 'Czech',
    flag: './czech.svg',
  },
  {
    country: 'Slovakia',
    flag: './slovakia.svg',
  },
  {
    country: 'Latvia',
    flag: './latvia.svg',
  },
  {
    country: 'Israel',
    flag: './israel.svg',
  },
  {
    country: 'Serbia',
    flag: './serbia.png',
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