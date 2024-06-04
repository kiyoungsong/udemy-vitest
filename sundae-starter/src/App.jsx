import Options from "./page/entry/Options";
import { SummaryForm } from "./page/summary/SummaryForm";

function App() {
  return (
    <div>
      <h1>Sundaes on Demand</h1>

      <Options optionType={"scoops"} />
      <Options optionType={"toppings"} />
      <SummaryForm />
    </div>
  );
}

export default App;
