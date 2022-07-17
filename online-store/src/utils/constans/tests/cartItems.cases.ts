import { CartPizzasState } from '../../../redux/cart/types';

interface ICartItemsCases {
  [key: string]: CartPizzasState;
}

export const cartItemsCases: ICartItemsCases = {
  empty: {
    items: [],
    numberItems: 0,
    totalPrice: 0,
  },
  oneItem: {
    items: [
      {
        value: {
          imageUrl:
            'https://api.papajohns.by//images/catalog/thumbs/full/1b1c7f64d5a413a0c3be893065d1911e.webp',
          title: 'Cheddar Mexican Carnitas',
          type: 1,
          size: 23,
          price: 7.9,
        },
        number: 1,
      },
    ],
    numberItems: 1,
    totalPrice: 7.9,
  },
  threeSameItems: {
    items: [
      {
        value: {
          imageUrl:
            'https://api.papajohns.by//images/catalog/thumbs/full/1b1c7f64d5a413a0c3be893065d1911e.webp',
          title: 'Cheddar Mexican Carnitas',
          type: 1,
          size: 23,
          price: 7.9,
        },
        number: 3,
      },
    ],
    numberItems: 3,
    totalPrice: 23.700000000000003,
  },
  randomNumberItems: {
    items: [
      {
        value: {
          imageUrl:
            'https://api.papajohns.by//images/catalog/thumbs/full/1b1c7f64d5a413a0c3be893065d1911e.webp',
          title: 'Cheddar Mexican Carnitas',
          type: 1,
          size: 23,
          price: 7.9,
        },
        number: 1,
      },
      {
        value: {
          imageUrl:
            'https://api.papajohns.by//images/catalog/thumbs/full/1b1c7f64d5a413a0c3be893065d1911e.webp',
          title: 'Cheddar Mexican Carnitas',
          type: 1,
          size: 35,
          price: 14,
        },
        number: 1,
      },
      {
        value: {
          imageUrl:
            'https://api.papajohns.by//images/catalog/thumbs/full/1b1c7f64d5a413a0c3be893065d1911e.webp',
          title: 'Cheddar Mexican Carnitas',
          type: 0,
          size: 40,
          price: 15.9,
        },
        number: 1,
      },
      {
        value: {
          imageUrl:
            'https://cdn.papajohns.ru//images/catalog/thumbs/full/fd3074cffac20d9e9c31c611d4e28682.webp',
          title: 'Cheddar Cheeseburger',
          type: 0,
          size: 30,
          price: 11.6,
        },
        number: 1,
      },
      {
        value: {
          imageUrl:
            'https://api.papajohns.by//images/catalog/thumbs/full/e477db0317c64e8254965566e5deaf4b.webp',
          title: 'Greek',
          type: 0,
          size: 30,
          price: 7.9,
        },
        number: 2,
      },
      {
        value: {
          imageUrl:
            'https://api.papajohns.by//images/catalog/thumbs/full/f921adc4e568ae2929c4b14332c31406.webp',
          title: 'Honey Spicy Pepperoni',
          type: 1,
          size: 40,
          price: 15,
        },
        number: 1,
      },
    ],
    numberItems: 7,
    totalPrice: 80.2,
  },
};
