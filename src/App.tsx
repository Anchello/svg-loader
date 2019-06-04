import "./App.css";

import React from "react";
import SvgLoader from "./components/svg-loader"

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="App__container">
      <h1 className="App__header">Example svg loaders</h1>
      <section className="App__section">
        <div className="App__section-col">
          <h2 className="App__header">Loader with vertical direction</h2>
          <SvgLoader height={70} width={350}>
            <circle cx="20" cy="37" r="20"/>
            <rect x="60" y="0" width="40" height="15" rx="8" ry="8"/>
            <rect x="60" y="25" width="140" height="20" rx="8" ry="8"/>
            <rect x="60" y="55" width="100" height="15" rx="8" ry="8"/>
            <rect x="220" y="0" width="130" height="70" rx="8" ry="8"/>
          </SvgLoader>
        </div>
        <div className="App__section-col">
          <h2 className="App__header">Loader with reverse vertical direction</h2>
          <SvgLoader height={70} width={350} direction="vertical" reverse>
            <circle cx="20" cy="37" r="20"/>
            <rect x="60" y="0" width="40" height="15" rx="8" ry="8"/>
            <rect x="60" y="25" width="140" height="20" rx="8" ry="8"/>
            <rect x="60" y="55" width="100" height="15" rx="8" ry="8"/>
            <rect x="220" y="0" width="130" height="70" rx="8" ry="8"/>
          </SvgLoader>
        </div>
        <div className="App__section-col">
          <h2 className="App__header">Loader with horizontal direction</h2>
          <SvgLoader height={70} width={350} direction="horizontal">
            <circle cx="20" cy="37" r="20"/>
            <rect x="60" y="0" width="40" height="15" rx="8" ry="8"/>
            <rect x="60" y="25" width="140" height="20" rx="8" ry="8"/>
            <rect x="60" y="55" width="100" height="15" rx="8" ry="8"/>
            <rect x="220" y="0" width="130" height="70" rx="8" ry="8"/>
          </SvgLoader>
        </div>
        <div className="App__section-col">
          <h2 className="App__header">Loader with reverse horizontal direction</h2>
          <SvgLoader height={70} width={350} direction="horizontal" reverse>
            <circle cx="20" cy="37" r="20"/>
            <rect x="60" y="0" width="40" height="15" rx="8" ry="8"/>
            <rect x="60" y="25" width="140" height="20" rx="8" ry="8"/>
            <rect x="60" y="55" width="100" height="15" rx="8" ry="8"/>
            <rect x="220" y="0" width="130" height="70" rx="8" ry="8"/>
          </SvgLoader>
        </div>
      </section>
      </div>
    </div>
  );
};

export default App;
