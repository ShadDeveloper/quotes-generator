import React, { useEffect, useState } from "react";
import './App.css';
import { Button } from 'react-bootstrap';

function App() {
  const [quotes, setQuotes] = useState("");

  const getQuotes = () => {
    fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      let randomNum = Math.floor(Math.random() * data.length);
      setQuotes(data[randomNum]);
    }); 
  };

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <>
      <div className="Container">
        <div className="Quotes">
        <p className="Text">{ quotes.text }</p>
        <p className="Author">Said by: <span>{ quotes.author }</span></p>
        <Button className="btn btn-secondary" onClick={ getQuotes }>Get Quote</Button>
        </div>
      </div>
    </>
  );
}

export default App;