import { useReducer } from "react";
import { DUMMY_TOPPINGS } from "../../data/toppings";
import { useTotalPrice } from "../../hooks";
import { Button, Checkbox, Modal } from "../UI";
import { toppingsReducer } from "./toppings-reducer";

export const Cart = ({ items, onClose, onConfirm }) => {
  const [toppings, dispatchToppings] = useReducer(toppingsReducer, items);
  const totalPrice = useTotalPrice(toppings);

  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  const changeCheckboxHandler = (topping) => {
    if (toppingIsAlreadyChecked(topping.name)) {
      dispatchToppings({ type: "REMOVE", name: topping.name });
      return;
    }
    dispatchToppings({ type: "ADD", topping });
  };

  const selectAllHandler = (e) => {
    if (e.target.checked) {
      dispatchToppings({ type: "ADD_ALL", toppings: DUMMY_TOPPINGS });
      return;
    }
    dispatchToppings({ type: "REMOVE_ALL" });
  };

  const toppingIsAlreadyChecked = (name) => {
    return toppings.some((topping) => topping.name === name);
  };

  const toppingCheckboxes = DUMMY_TOPPINGS.map((topping) => (
    <Checkbox
      key={topping.name}
      label={`${topping.name} $${topping.price}`}
      name={topping.name}
      id={topping.name}
      checked={toppingIsAlreadyChecked(topping.name)}
      onCheck={changeCheckboxHandler.bind(null, topping)}
    />
  ));

  return (
    <Modal onClose={onClose}>
      <header className="mb-2">
        <h3>Pizza Toppings</h3>
        <p>Please select the toppings you want on your pizza.</p>
      </header>
      <main>
        <p className={`mb-2 ${totalPrice <= 0 && "opacity-0"}`}>
          There will be an upchange of{" "}
          <span className="font-bold">{formattedTotalPrice}</span>
        </p>

        <div className="flex flex-col gap-4">
          <Checkbox
            label="Select All"
            name="select-all"
            id="select-all"
            checked={toppings.length === DUMMY_TOPPINGS.length}
            onCheck={selectAllHandler}
          />
          {toppingCheckboxes}
        </div>
      </main>
      <footer className="text-right">
        <Button
          className="mr-2"
          type="submit"
          onClick={onConfirm.bind(null, toppings)}
        >
          Confirm
        </Button>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
      </footer>
    </Modal>
  );
};
