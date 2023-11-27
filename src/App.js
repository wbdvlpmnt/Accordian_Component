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
  return (
    <div>
      <Accordion faqs={faqs} />
    </div>
  );
}

function Card({ item, index }) {
  return (
    <div className="accordion">
      <div className="item">
        <h1 className="number">{index + 1}</h1>
        <h1 className="title">{item.title}</h1>
        <p className="icon">
          <strong>+</strong>
        </p>
        <br />
        <p>{item.text}</p>
      </div>
    </div>
  );
}

function Accordion({ faqs }) {
  return (
    <ul>
      {faqs.map((item, index) => {
        return <Card item={item} index={index} key={index} />;
      })}
    </ul>
  );
}

export default App;
