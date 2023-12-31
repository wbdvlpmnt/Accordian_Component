export default function Card({ item, index, indexExpanded, onExpand }) {
  const isExpanded = index === indexExpanded;
  const cardNumber = index + 1;
  return (
    <div
      className={isExpanded ? "item open" : "item"}
      onClick={() => onExpand(index)}
    >
      <h1 className="number">
        {cardNumber < 10 ? "0" + cardNumber : cardNumber}
      </h1>
      <h1 className="title">{item.title}</h1>
      <span className="icon">
        {isExpanded ? <strong>-</strong> : <strong>+</strong>}
      </span>
      <br />
      {isExpanded ? <p>{item.text}</p> : <></>}
    </div>
  );
}
