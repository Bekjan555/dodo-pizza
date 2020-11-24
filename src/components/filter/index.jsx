import React, { useState } from "react";
import { filterNames } from "./const.jsx";

function Filter() {
  const [input, setInput] = useState("");
  const [names, setNames] = useState("");
  const [elIndex, setElIndex] = useState(0);

  const hendelChange = (event) => {
    setInput(event.target.value);
  };

  const handelEnter = (event) => {
    setInput(event.target.value);
    if (event.key == "Enter") {
      setNames([...names, event.target.value]);
    }
  };

  const hendelClick = (index) => {
    setElIndex(index);
  };

  return (
    <section className="filter">
      <input
        onKeyPress={handelEnter}
        type="text"
        placeholder="Что-то добавит"
        value={input}
        onChange={hendelChange}
      />
      <ul className="filter__list">
        {names.map((item, index) => {
          return (
            <li
              onClick={() => hendelClick(index)}
              className={`filter__item ${index === elIndex ? "is-active" : ""}`}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Filter;
