import { useState } from 'react';
import { ToppingList, ToppingsSummary } from './components/Toppings';
import { Button } from './components/UI';

export const App = () => {
  const [modalIsShown, setModalIsShown] = useState(false);

  const showModalHandler = () => {
    setModalIsShown(true);
  };

  const hideModalHandler = () => {
    setModalIsShown(false);
  };

  return (
    <>
      {modalIsShown && <ToppingsSummary onClose={hideModalHandler} />}
      <div className="container mx-auto p-4">
        <Button variant="secondary" onClick={showModalHandler}>
          Select Toppings
        </Button>
        <ToppingList />
      </div>
    </>
  );
};
