export default function EventBasic({ type }) {
  const current = () => {
    const d = new Date();
    switch(type) {
      case 'date':
        console.log(d.toLocaleDateString());
        break;
      case 'time':
        console.log(d.toLocaleDateString());
        break;
      default:
        console.log(d.toLocaleDateString());
        break;
    }
  };

  return (
    <div>
      <button onClick={current}>現在時刻を取得</button>
    </div>
  );
}