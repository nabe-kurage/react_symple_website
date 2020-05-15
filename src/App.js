import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>mottox2 Portfolio</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#works">Works</a>
        </nav>
      </header>
      <div>
        <h1>mottox2</h1>
        <p>Web Engineer, Prototyper</p>
      </div>
      <section>
        <h2>About</h2>
        <p>React􏷲Gatsby, Ruby on Rails</p>
      </section>
      <section>
        <h2>Works</h2>
        <p>React Gatsby, Ruby on Rails</p>
        <ul>
          <li>
            <img src="" /> <h3>成果物1</h3>
          </li>{" "}
          <li>
            <img src="" />
            <h3>成果物 2</h3>{" "}
          </li>
        </ul>
      </section>
    </div>
  );
}
