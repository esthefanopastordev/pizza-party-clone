import { useState } from "react";
import { ToppingSummary, Cart } from "./components/Toppings";
import { Button } from "./components/UI";

export const App = () => {
  const [toppings, setToppings] = useState([]);
  const [modalIsShown, setModalIsShown] = useState(false);

  const cartConfirmHandler = (selectedToppings) => {
    setToppings(selectedToppings);
    hideModalHandler();
  };

  const showModalHandler = () => {
    setModalIsShown(true);
  };

  const hideModalHandler = () => {
    setModalIsShown(false);
  };

  return (
    <>
      {modalIsShown && (
        <Cart
          items={toppings}
          onClose={hideModalHandler}
          onConfirm={cartConfirmHandler}
        />
      )}
      <div className="container mx-auto p-4">
        <Button variant="secondary" onClick={showModalHandler}>
          Select Toppings
        </Button>
        <ToppingSummary toppings={toppings} />
      </div>
    </>
  );
};
