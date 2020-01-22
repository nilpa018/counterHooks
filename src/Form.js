import React, { useState } from "react";
import "./App.css";

function Form() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h3>Compteur : {count}</h3>
      <button onClick={() => setCount(count + 2)}>Ajouter 2</button>
    </>
  );
}

export default Form;
