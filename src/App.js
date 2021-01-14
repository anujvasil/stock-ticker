import React, {useState, useEffect} from "react";
import './App.css';
import Header from "./Header.js";
import Tickers from "./Tickers.js";
import Charts from "./Charts.js";


function App() {

  return (
    <div className="App">
      <div className="app_header">
        <Header />
      </div>
      <div className="app_body">
        <div className="app_container">
            <Tickers />
            <div className="chart_containerA">
                <Charts name={"GTBY"} />
                <Charts name={"APPL"}/>
                <Charts name={"TSLA"}/>
            </div>
            <div className="chart_containerB">
                <Charts name={"UAL"}/>
                <Charts name={"MRNA"}/>
            </div>

        </div>
      </div>
        <div className="app_ending" style={{paddingTop: 500, paddingBottom: 20}}>
            <text style={{color: "white", display: "flex", justifyContent: "center"}}>Made by Anuj Vasil for Gatsby Labs </text>
        </div>
    </div>
  );
}

export default App;
