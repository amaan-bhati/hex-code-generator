import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f9769a").all(10));
  const [amount, setAmount] = useState(10);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(amount);
      setList(colors);
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
    // setColor("");
  };

  return (
    <>
      <section className='container'>
        <h2>COLOR Palette GENERATOR</h2>
      </section>
      <section className='container-buttons'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value.trim())}
            placeholder='#F9769A'
            className={`${error ? "error" : null}`}
          />
          <button className='btn' type='submit'>
            GENERATE
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
