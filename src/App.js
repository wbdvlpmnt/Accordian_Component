import { useState } from "react";
import "./App.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function App() {
  const [indexExpanded, setIndexExpanded] = useState(0);

  function handleIndexExpansion(index) {
    setIndexExpanded(index);
  }
  return (
    <div>
      <Accordion
        faqs={faqs}
        indexExpanded={indexExpanded}
        onExpand={handleIndexExpansion}
      />
    </div>
  );
}

function Card({ item, index, indexExpanded, onExpand }) {
  const isExpanded = index === indexExpanded;
  const cardNumber = index + 1;
  return (
    <div className={isExpanded ? "item open" : "item"}>
      <h1 className="number">
        {cardNumber < 10 ? "0" + cardNumber : cardNumber}
      </h1>
      <h1 className="title">{item.title}</h1>
      <span className="icon" onClick={() => onExpand(index)}>
        <strong>+</strong>
      </span>
      <br />
      {isExpanded ? <p>{item.text}</p> : <></>}
    </div>
  );
}

function Accordion({ faqs, indexExpanded, onExpand }) {
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

export default App;
