import './App.css';
import data from "./data";
import { useState } from "react";


const App = () => {

  const [amount, setAmount] = useState(0);
  const [text, setText] = useState([]);


  const AmountHandler = ({ target: { value } }) => {
    if (value >= 0) {
      setAmount(value);
    }
  }

  const SubmitHandler = (e) => {
    e.preventDefault();
    let newText = data.slice(0, amount);
    setText(newText);
  }

  return (
    <main className="Container">
      <h1 className="Heading"> tired of boring lorem ipsum ?</h1>
      <form onSubmit={(e) => SubmitHandler(e)}>
        <div className="FormGroup">
          <label htmlFor="amount">Pargraphs :</label>
          <input id="amount" onChange={(e) => AmountHandler(e)} value={amount} type="number" name="amount" />
          <input type="submit" value="genarate" className="SubmitButton" />
        </div>
      </form>
      <article>
        {text.map((element, index) => {
          return (
            <p key={index}>{element}</p>
          )
        })}
      </article>
    </main>
  );
}

export default App;