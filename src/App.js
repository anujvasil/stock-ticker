import React from "react";
import './App.css';
import Header from "./Header.js";
import Tickers from "./Tickers.js";
import Ending from "./Ending.js";
import ColumnA from "./ColumnA.js";


function App() {

  return (
    <div className="App">
      <div className="app_header">
        <Header />
      </div>
      <div className="app_body">
        <div className="app_container">
            <Tickers />
            <ColumnA />
        </div>
      </div>
        <Ending />
    </div>
  );
}


export default App;
