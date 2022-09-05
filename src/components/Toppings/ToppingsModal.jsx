import { Button, Modal } from '../UI';
import { ToppingsForm } from './ToppingsForm';

export const ToppingsSummary = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <header className="mb-2">
        <h3>Pizza Toppings</h3>
        <p>Please select the toppings you want on your pizza.</p>
      </header>
      <main>
        <p className="mb-2">
          There will be an upchange of <span className="font-bold">$1.79</span>
        </p>
        <ToppingsForm />
      </main>
      <footer className="text-right">
        <Button className="mr-2" type="submit">
          Confirm
        </Button>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
      </footer>
    </Modal>
  );
};
