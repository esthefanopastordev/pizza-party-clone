import { useEffect, useState } from 'react';

export const useTotalPrice = toppings => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    calculateTotalPrice();
  }, [toppings]);

  const calculateTotalPrice = () => {
    const total = toppings.reduce((total, topping) => total + topping.price, 0);
    setTotalPrice(total);
  };

  return totalPrice;
};
