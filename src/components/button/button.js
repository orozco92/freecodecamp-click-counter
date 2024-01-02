import "./button.css";

function Button({ text, clickAction, styleClass }) {
  return (
    <button className={styleClass} type="button" onClick={clickAction}>
      {text}
    </button>
  );
}
export default Button;
