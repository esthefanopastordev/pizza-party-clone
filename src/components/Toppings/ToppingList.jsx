import { useContext } from 'react';
import { ToppingsContext } from '../../store/toppings-context';
import { ToppingItem } from './ToppingItem';

export const ToppingList = () => {
  const { toppingList } = useContext(ToppingsContext);

  return toppingList.map(topping => (
    <ToppingItem key={topping.name} name={topping.name} />
  ));
};
