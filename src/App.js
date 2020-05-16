import React from "react";
import "minireset.css";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="header-title">Portfolio</h1>
        <nav className="headerNav">
          <a className="headerNav-item" href="#about">
            About
          </a>
          <a className="headerNav-item" href="#works">
            Works
          </a>
        </nav>
      </header>
      <div className="hero">
        <h1 className="hero-title">Nabekura</h1>
        <p className="hero-description">Web Engineer, Prototyper</p>
      </div>
      <section className="section" id="About">
        <h2 className="section-title">About</h2>
        <p className="section-description">Web Engineer, Prototyper</p>
      </section>
      <section className="section" id="Works">
        <h2 className="section-title">Works</h2>
        <p className="section-description">React Gatsby, Ruby on Rails</p>
        <ul>
          <li className="workItem">
            <img
              className="workItem-image"
              src="https://picsum.photos/id/101/300/200"
              alt="成果物１のサプル画像"
            />
            <h3 className="workItem-category">Vue.js</h3>
            <h3 className="workItem-title">成果物２</h3>
          </li>
          <li className="workItem">
            <img
              className="workItem-image"
              src="https://picsum.photos/id/1023/300/200"
              alt="成果物１のサプル画像"
            />
            <h3 className="workItem-category">React</h3>
            <h3 className="workItem-title">成果物１</h3>
          </li>
        </ul>
      </section>
      <footer className="footer">
        copyright &copy; nabekura. All Rights Reserved.
      </footer>
    </div>
  );
}
