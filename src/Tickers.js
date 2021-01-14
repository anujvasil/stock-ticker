import React, {useState, useEffect} from "react";
import "./Tickers.css";

var chartData = new Map([
    ["GTBY", []],
    ["APPL", []],
    ["TSLA", []],
    ["UAL", []],
    ["MRNA", []],
])

var show = "GTBY";

function Tickers() {

    const topStocks = ["GTBY", "APPL", "TSLA", "UAL", "MRNA"];
    const [data, setData] = useState([]);

    useEffect(() => {
        setTimeout(() => {
        fetch("http://localhost:9000/stockAPI/")
            .then(response => response.json())
            .then(data => setData(data));
        try {
            topStocks.forEach(element => chartData.get(element).push(data[topStocks.indexOf(element)].price))
        }
        catch (error){}
        //console.log(show);
        }, 1000);
    });


    return (
        <div className="tickers_container">
            <div className="tickers_wrapper">
                <div className="tickers_heading">
                    Top 5 Stocks 🔥
                </div>
                <div className="tickers_list">
                    <button className="tickers_stock" onClick={() => show="GTBY"}>
                        <div>GTBY</div>
                        <div>{chartData.get("GTBY")[chartData.get("GTBY").length - 1]}</div>
                    </button>
                    <Bar />
                    <button className="tickers_stock" onClick={() => show="APPL"}>
                        <div>APPL</div>
                        <div>{chartData.get("APPL")[chartData.get("APPL").length - 1]}</div>
                    </button>
                    <Bar />
                    <button className="tickers_stock" onClick={() => show="TSLA"}>
                        <div>TSLA</div>
                        <div>{chartData.get("TSLA")[chartData.get("TSLA").length - 1]}</div>
                    </button>
                    <Bar />
                    <button className="tickers_stock" onClick={() => show="UAL"}>
                        <div>UAL</div>
                        <div>{chartData.get("UAL")[chartData.get("UAL").length - 1]}</div>
                    </button>
                    <Bar />
                    <button className="tickers_stock" onClick={() => show="MRNA"}>
                        <div>MRNA</div>
                        <div>{chartData.get("MRNA")[chartData.get("MRNA").length - 1]}</div>
                    </button>
                </div>
            </div>
        </div>
    )
}

function Bar(){
    return(
        <hr style={{
            borderColor: "#869196",
            height: .05,
            width: 225,
        }}/>
    )
}



export {chartData}
export {show}
export default Tickers

