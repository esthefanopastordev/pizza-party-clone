import { useReducer } from 'react';
import { ToppingsContext } from './toppings-context';
import { toppingsReducer } from './toppings-reducer';

export const initialState = [];

export const ToppingsProvider = ({ children }) => {
  const [toppingList, dispatch] = useReducer(toppingsReducer, initialState);

  const updateToppingsHandler = toppings => {
    dispatch({ type: 'UPDATE', toppings });
  };

  const toppingsContext = {
    toppingList,
    updateToppings: updateToppingsHandler,
  };

  return (
    <ToppingsContext.Provider value={toppingsContext}>
      {children}
    </ToppingsContext.Provider>
  );
};
