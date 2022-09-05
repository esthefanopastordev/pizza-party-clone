import { DUMMY_TOPPINGS } from '../../data/toppings';
import { Checkbox } from '../UI';

export const ToppingsForm = () => {
  const toppingList = DUMMY_TOPPINGS.map(topping => (
    <Checkbox
      key={topping.id}
      id={topping.id}
      name={topping.name}
      label={`${topping.name} ${topping.price}`}
      onChange={() => {}}
    />
  ));

  return (
    <div className="flex flex-col gap-4">
      <Checkbox
        name="select-all"
        id="select-all"
        label="Select All"
        onChange={() => {}}
      />
      {toppingList}
    </div>
  );
};
