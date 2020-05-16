import React from "react";
import { Helmet } from "react-helmet";

import Header from "./Header";
import Footer from "./Footer";
import WorkItem from "./WorkItem";

import "minireset.css";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>nabekura ポートフォリオ</title>
        <meta name="description" content="ポートフォリオサイトのサンプル" />
      </Helmet>
      <Header />
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
          <WorkItem id="101" title="成果物１" category="React" />
          <WorkItem id="1023" title="成果物２" category="Vue.js" />
        </ul>
      </section>
      <Footer />
    </div>
  );
}
