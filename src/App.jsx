import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState(
    "It's is easy to sit up and take notice, what's difficult is getting up and taking action"
  );
  const [adviceId, setAdviceId] = useState("117");
  async function handleClick() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const json = await response.json();
    setAdviceId(json.slip.id);
    setAdvice(json.slip.advice);
  }

  return (
    <>
      <div className="app">
        <div className="main">
          <h1>Advice #{adviceId}</h1>
          <p>{`"${advice}"`}</p>
          <div>
            <picture>
              <source
                media="(min-width:500px)"
                srcSet="../public/images/pattern-divider-desktop.svg"
              />
              <img
                src="../public/images/pattern-divider-mobile.svg"
                alt="IfItDoesntMatchAnyMedia"
              />
            </picture>
          </div>
          <div className="relative-container">
            <div className="dice-container">
              <button onClick={handleClick}>
                <img src="../public/images/icon-dice.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
