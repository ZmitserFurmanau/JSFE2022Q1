import {
  IPizzaCategory,
  IPizzaType,
  IPizzaSort,
} from '../interfaces/IPizzaOptions';

const pizzaCategories: IPizzaCategory[] = [
  { id: 0, name: 'All' }, // default category
  { id: 1, name: 'Bestseller' },
  { id: 2, name: 'Meat' },
  { id: 3, name: 'Veggie' },
  { id: 4, name: 'Spicy' },
  { id: 5, name: 'Mushrooms' },
  { id: 6, name: 'Fish' },
];

const pizzaTypes: IPizzaType[] = [
  { id: 0, name: 'Thin' }, // default type
  { id: 1, name: 'Traditional' },
];

const pizzaSorts: IPizzaSort[] = [
  { id: 0, name: 'rating', title: 'rating' }, // default sort
  { id: 1, name: 'price', title: 'cost' },
  { id: 2, name: 'title', title: 'name' },
];

export { pizzaCategories, pizzaTypes, pizzaSorts };
