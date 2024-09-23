// import './StateCounter.css'; 紙面上の割愛のため、今回割愛。コメントアウトを解除するとエラーになる。

export default function StateCounter({ step, onUpdate }) {
  const handleClick = () => onUpdate(step);
  return (
    <button className="cnt" onClick={handleClick}>
      <span>{step}</span>
    </button>
  );
}
