import { useState } from "react";
import "./App.css";
function App() {
  const [buttonColor, setButtonColor] = useState("medium-violet-red");
  const nextColor =
    buttonColor === "medium-violet-red" ? "midnight-blue" : "medium-violet-red";
  const [isChecked, setChecked] = useState(false);

  const handleClick = (e) => {
    const { checked } = e.target;
    setChecked(checked);
  };

  return (
    <div>
      {/* <h1>I'm gonna learn React Testing Library</h1> */}
      <button
        className={`${isChecked ? "gray" : buttonColor}`}
        onClick={() => setButtonColor(nextColor)}
        disabled={isChecked}
      >
        Change to {nextColor}
      </button>
      <br />
      <input
        type="checkbox"
        id="disable-button-checkbox"
        checked={isChecked}
        onChange={handleClick}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
