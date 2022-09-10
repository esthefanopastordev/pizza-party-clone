import { useState } from 'react';

export const useToppingList = toppings => {
  const [toppingList, setToppingList] = useState(toppings);

  const addToppingHandler = topping => {
    setToppingList(prev => [...prev, topping]);
  };

  const removeToppingHandler = name => {
    setToppingList(prev => prev.filter(topping => topping.name !== name));
  };

  return {
    toppingList,
    addTopping: addToppingHandler,
    removeTopping: removeToppingHandler,
  };
};
