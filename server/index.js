import express from 'express';
import cors from 'cors';

const app = express();

let products = [
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
    title: 'Product 2',
    type: 'Monitors',
    specification: 'Specification 2',
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
    title: 'Product 3',
    type: 'Monitors',
    specification: 'Specification 3',
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
    id: 4,
    serialNumber: 1234,
    isNew: 1,
    photo:
      'https://images.philips.com/is/image/PhilipsConsumer/346B1C_00-IMS-ru_UA?wid=420&hei=360&$jpglarge$',
    title: 'Product 4',
    type: 'Monitors',
    specification: 'Specification 4',
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
    title: 'Product 5',
    type: 'Monitors',
    specification: 'Specification 5',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33',
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 },
    ],
    order: 3,
    date: '2017-06-29 12:09:33',
  },
  {
    id: 6,
    serialNumber: 1234,
    isNew: 1,
    photo:
      'https://images.philips.com/is/image/PhilipsConsumer/346B1C_00-IMS-ru_UA?wid=420&hei=360&$jpglarge$',
    title: 'Product 6',
    type: 'Monitors',
    specification: 'Specification 6',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33',
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 },
    ],
    order: 4,
    date: '2017-06-29 12:09:33',
  },
  {
    id: 7,
    serialNumber: 1234,
    isNew: 1,
    photo:
      'https://images.philips.com/is/image/PhilipsConsumer/346B1C_00-IMS-ru_UA?wid=420&hei=360&$jpglarge$',
    title: 'Product 7',
    type: 'Monitors',
    specification: 'Specification 7',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33',
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 },
    ],
    order: 5,
    date: '2017-06-29 12:09:33',
  },
  {
    id: 8,
    serialNumber: 1234,
    isNew: 1,
    photo:
      'https://images.philips.com/is/image/PhilipsConsumer/346B1C_00-IMS-ru_UA?wid=420&hei=360&$jpglarge$',
    title: 'Product 8',
    type: 'Monitors',
    specification: 'Specification 8',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33',
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 },
    ],
    order: 6,
    date: '2017-06-29 12:09:33',
  },
  {
    id: 9,
    serialNumber: 1234,
    isNew: 1,
    photo:
      'https://images.philips.com/is/image/PhilipsConsumer/346B1C_00-IMS-ru_UA?wid=420&hei=360&$jpglarge$',
    title: 'Product 9',
    type: 'Monitors',
    specification: 'Specification 9',
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
    id: 10,
    serialNumber: 1234,
    isNew: 1,
    photo:
      'https://images.philips.com/is/image/PhilipsConsumer/346B1C_00-IMS-ru_UA?wid=420&hei=360&$jpglarge$',
    title: 'Product 10',
    type: 'Monitors',
    specification: 'Specification 10',
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
];

let orders = [
  {
    id: 1,
    title: 'Order 1',
    date: '2017-06-29 12:09:33',
    description: 'Order 1',
  },
  {
    id: 2,
    title: 'Order 2',
    date: '2017-06-29 12:09:33',
    description: 'Order 2',
  },
  {
    id: 3,
    title: 'Order 3',
    date: '2017-06-29 12:09:33',
    description: 'Order 3',
  },
  {
    id: 4,
    title: 'Order 4',
    date: '2017-06-29 12:09:33',
    description: 'Order 4',
  },
  {
    id: 5,
    title: 'Order 5',
    date: '2017-06-29 12:09:33',
    description: 'Order 5',
  },
  {
    id: 6,
    title: 'Order 6',
    date: '2017-06-29 12:09:33',
    description: 'Order 6',
  },
];

app.use(cors());

app.get('/orders', (req, res) => {
  const combineOrders = orders.reduce((acc, order) => {
    const newProducts = products.filter(
      (product) => product.order === order.id
    );
    if (newProducts.length > 0) {
      acc.push({ ...order, products: newProducts });
    }
    return acc;
  }, []);

  res.json(combineOrders);
});

app.get('/products', (req, res) => {
  const combineProducts = products.map((product) => {
    const con = orders.find((order) => order.id === product.order);
    return { ...product, orderName: con.title };
  });
  res.json(combineProducts);
});

app.delete('/products/:id', (req, res) => {
  const newProducts = products.filter(
    (product) => product.id !== +req.params.id
  );
  products = newProducts;

  res.sendStatus(200);
});

app.listen(7000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening on port 7000');
});
