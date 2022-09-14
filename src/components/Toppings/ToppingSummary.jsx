import { ToppingItem } from "./ToppingItem";

export const ToppingSummary = ({ toppings }) =>
  toppings.map((topping) => (
    <ToppingItem key={topping.name} name={topping.name} />
  ));
