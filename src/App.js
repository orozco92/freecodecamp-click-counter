import "./App.css";
import CounterDisplay from "./components/counter-display/counter-display";
import Button from "./components/button/button";
import { useState } from "react";
import fccLogo from "./assets/fcc-logo.svg";

function App() {
  const [clickCount, setClickCount] = useState(0);

  const updateClicks = () => {
    setClickCount(clickCount + 1);
  };

  const resetClicks = () => {
    setClickCount(0);
  };

  return (
    <div className="App">
      <div className="logo-container">
        <img src={fccLogo} alt="fcc-logo" />
      </div>
      <div className="counter-container">
        <CounterDisplay clickCount={clickCount} />
        <Button
          text={"Click"}
          styleClass="btn-click"
          clickAction={updateClicks}
        />
        <Button
          text={"Reset"}
          styleClass="btn-reset"
          clickAction={resetClicks}
        />
      </div>
    </div>
  );
}

export default App;
