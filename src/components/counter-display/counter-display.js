import "./counter-display.css";
function CounterDisplay({ clickCount }) {
  return (
    <div className="counter-display">
      <p>{clickCount}</p>
    </div>
  );
}

CounterDisplay.defaultProps = { clickCount: 0 };

export default CounterDisplay;
