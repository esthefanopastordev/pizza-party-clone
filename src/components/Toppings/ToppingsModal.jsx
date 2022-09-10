import { useContext, useState } from 'react';
import { DUMMY_TOPPINGS } from '../../data/toppings';
import { useToppingList } from '../../hooks/useToppingList';
import { useTotalPrice } from '../../hooks/useTotalPrice';
import { ToppingsContext } from '../../store/toppings-context';
import { Button, Checkbox, Modal } from '../UI';

export const ToppingsSummary = ({ onClose }) => {
  const { toppingList, updateToppings } = useContext(ToppingsContext);
  const {
    toppingList: tempToppingList,
    addTopping,
    removeTopping,
  } = useToppingList(toppingList);
  const totalPrice = useTotalPrice(tempToppingList);

  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  const toggleToppingHandler = topping => {
    if (toppingIsChecked(topping.name)) removeTopping(topping.name);
    else addTopping(topping);
  };

  const toppingIsChecked = name => {
    const existingTopping = tempToppingList.find(
      topping => topping.name === name
    );
    return Boolean(existingTopping);
  };

  const confirmHandler = () => {
    updateToppings(tempToppingList);
    onClose();
  };

  const toppingCheckboxes = DUMMY_TOPPINGS.map(topping => (
    <Checkbox
      key={topping.name}
      label={`${topping.name} $${topping.price}`}
      name={topping.name}
      id={topping.name}
      checked={toppingIsChecked(topping.name)}
      onCheck={toggleToppingHandler.bind(null, topping)}
    />
  ));

  return (
    <Modal onClose={onClose}>
      <header className="mb-2">
        <h3>Pizza Toppings</h3>
        <p>Please select the toppings you want on your pizza.</p>
      </header>
      <main>
        <p className={`mb-2 ${totalPrice <= 0 && 'opacity-0'}`}>
          There will be an upchange of{' '}
          <span className="font-bold">{formattedTotalPrice}</span>
        </p>

        <div className="flex flex-col gap-4">
          <Checkbox
            label="Select All"
            name="select-all"
            id="select-all"
            checked={false}
            onCheck={() => {}}
          />
          {toppingCheckboxes}
        </div>
      </main>
      <footer className="text-right">
        <Button className="mr-2" type="submit" onClick={confirmHandler}>
          Confirm
        </Button>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
      </footer>
    </Modal>
  );
};
