import "./App.css";

import React from "react";
import Loader from "./loader";
import { DIRECTION } from "./components/constatns";

const SIZE = {
  height: 70,
  width: 350
};

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="App__container">
      <h1 className="App__header">Example svg loaders</h1>
      <section className="App__section">
        <div className="App__section-col">
          <h2 className="App__header">Loader with vertical direction</h2>
          <Loader height={SIZE.height} width={SIZE.width} />
        </div>
        <div className="App__section-col">
          <h2 className="App__header">Loader with horizontal direction</h2>
          <Loader height={SIZE.height} width={SIZE.width} direction={DIRECTION.horizontal} />
        </div>
        <div className="App__section-col">
          <h2 className="App__header">Loader with reverse vertical direction</h2>
          <Loader height={SIZE.height} width={SIZE.width} direction={DIRECTION.vertical} reverse/>
        </div>
        <div className="App__section-col">
          <h2 className="App__header">Loader with reverse horizontal direction</h2>
          <Loader height={SIZE.height} width={SIZE.width} direction={DIRECTION.horizontal} reverse />
        </div>
      </section>
      </div>
    </div>
  );
};

export default App;
