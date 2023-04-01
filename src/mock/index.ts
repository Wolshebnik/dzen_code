import { IProducts, IOrders } from './types';

export const products: IProducts[] = [
  {
    id: 1,
    serialNumber: 1234,
    isNew: 1,
    photo:
      'https://images.philips.com/is/image/PhilipsConsumer/346B1C_00-IMS-ru_UA?wid=420&hei=360&$jpglarge$',
    title: 'Product 1',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33',
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 },
    ],
    order: 1,
    date: '2017-06-29 12:09:33',
  },
  {
    id: 2,
    serialNumber: 1234,
    isNew: 1,
    photo:
      'https://images.philips.com/is/image/PhilipsConsumer/346B1C_00-IMS-ru_UA?wid=420&hei=360&$jpglarge$',
    title: 'Product 1',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33',
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 },
    ],
    order: 2,
    date: '2017-06-29 12:09:33',
  },
  {
    id: 3,
    serialNumber: 1234,
    isNew: 1,
    photo:
      'https://images.philips.com/is/image/PhilipsConsumer/346B1C_00-IMS-ru_UA?wid=420&hei=360&$jpglarge$',
    title: 'Product 1',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33',
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 },
    ],
    order: 2,
    date: '2017-06-29 12:09:33',
  },
  {
    id: 4,
    serialNumber: 1234,
    isNew: 1,
    photo:
      'https://images.philips.com/is/image/PhilipsConsumer/346B1C_00-IMS-ru_UA?wid=420&hei=360&$jpglarge$',
    title: 'Product 1',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33',
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 },
    ],
    order: 2,
    date: '2017-06-29 12:09:33',
  },
  {
    id: 5,
    serialNumber: 1234,
    isNew: 1,
    photo:
      'https://images.philips.com/is/image/PhilipsConsumer/346B1C_00-IMS-ru_UA?wid=420&hei=360&$jpglarge$',
    title: 'Product 1',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33',
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 },
    ],
    order: 2,
    date: '2017-06-29 12:09:33',
  },
];

export const orders: IOrders[] = [
  {
    id: 1,
    title: 'Order 1',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products() {
      return products;
    },
  },
  {
    id: 2,
    title: 'Order 2',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products() {
      return products;
    },
  },
  {
    id: 3,
    title: 'Order 3',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products() {
      return products;
    },
  },
  {
    id: 4,
    title: 'Order 3',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products() {
      return products;
    },
  },
  {
    id: 5,
    title: 'Order 3',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products() {
      return products;
    },
  },
  {
    id: 6,
    title: 'Order 3',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products() {
      return products;
    },
  },
  {
    id: 7,
    title: 'Order 3',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products() {
      return products;
    },
  },
  {
    id: 8,
    title: 'Order 3',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products() {
      return products;
    },
  },
];
