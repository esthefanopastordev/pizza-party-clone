import { useContext, useState } from 'react';
import { DUMMY_TOPPINGS } from '../../data/toppings';
import { useTotalPrice } from '../../hooks/useTotalPrice';
import { ToppingsContext } from '../../store/toppings-context';
import { Button, Checkbox, Modal } from '../UI';

export const ToppingsSummary = ({ onClose }) => {
  const { updateToppings } = useContext(ToppingsContext);
  const [selectedToppings, setSelectedToppings] = useState([]);
  const totalPrice = useTotalPrice(selectedToppings);

  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  const toggleToppingHandler = (topping, event) => {
    const isChecked = event.target.checked;

    if (isChecked) setSelectedToppings(prev => [...prev, topping]);
    else setSelectedToppings(prev => prev.filter(t => t.name !== topping.name));
  };

  const confirmHandler = () => {
    updateToppings(selectedToppings);
    onClose();
  };

  const toppingCheckboxes = DUMMY_TOPPINGS.map(topping => (
    <Checkbox
      key={topping.name}
      id={topping.name}
      name={topping.name}
      label={`${topping.name} $${topping.price}`}
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
            name="select-all"
            id="select-all"
            label="Select All"
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
