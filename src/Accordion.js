import Card from "./Card";

export default function Accordion({ faqs, indexExpanded, onExpand }) {
  return (
    <div className="accordion content-box">
      <ul>
        {faqs.map((item, index) => {
          return (
            <Card
              item={item}
              index={index}
              key={index}
              indexExpanded={indexExpanded}
              onExpand={onExpand}
            />
          );
        })}
      </ul>
    </div>
  );
}
