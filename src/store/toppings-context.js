import { createContext } from 'react';

export const ToppingsContext = createContext({
  toppingList: [],
  updateToppings(toppings) {},
});
