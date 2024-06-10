import Options from "./Options";
import { formatCurrency } from "../../utilities";
import { useOrderDetails } from "../../contexts/OrderDetails";

export default function OrderEntry({ setStatus }) {
  const { totals } = useOrderDetails();
  return (
    <div>
      {status}
      <div>
        <h2>Design Your Sundae!</h2>
        <Options optionType={"scoops"} />
        <Options optionType={"toppings"} />
        <h2>Grand total: {formatCurrency(totals.scoops + totals.toppings)}</h2>
        <button onClick={() => setStatus("review")}>Order Sundae!</button>
      </div>
    </div>
  );
}
