import React, {useState, useEffect} from "react";
import "./Charts.css";
import {Line} from "react-chartjs-2";
import {chartData} from "./Tickers.js";

function Charts(props) {

    const [graphData, setData] = useState([]);

    useEffect(() => {
        setTimeout(() => {

            let date = new Date();
            try{
                setData(graphData.concat({
                    x: date,
                    y: chartData.get(props.name)[chartData.get(props.name).length - 1]
                }));
            }
            catch (error){
                console.log(error)
            }


        }, 1000);
    });

    return (
        <div className="charts_container">
            <div className="charts_wrapper">
                <Line data={{
                    datasets: [
                        {
                            type: 'line',
                            backgroundColor: "black",
                            borderColor: "#5AC53B",
                            borderWidth: 2,
                            pointBorderColor: 'rgba(0, 0, 0, 0)',
                            pointBackgroundColor: 'rgba(0, 0, 0, 0)',
                            pointHoverBackgroundColor: '#5AC53B',
                            pointHoverBorderColor: '#000000',
                            pointHoverBorderWidth: 4,
                            pointHoverRadius: 6,
                            data: graphData,
                        },
                    ],
                }}
              options={{
                  title: {
                      display: true,
                      text: props.name,
                      fontColor: '#FFFFFF',
                      font: 'monospace',
                      fontSize: 25,
                  },
                  legend: {
                      display: false,
                  },
                  hover: {
                      intersect: false
                  },
                  elements: {
                      line: {
                          tension: 0
                      },
                      point: {
                          radius: 0,
                      },
                  },
                  maintainAspectRatio: false,
                  tooltips: {
                      mode: "index",
                      intersect: false,
                      callbacks: {
                      },
                  },
                  scales: {
                      xAxes: [
                          {
                              type: "time",
                              time: {
                                  format: "MM/DD/YY",
                              },
                              ticks: {
                                  display: false,
                              }
                          },
                      ],
                      yAxes: [
                          {
                              gridLines: {
                                  display: false,
                              },
                              ticks: {
                                  display: false,
                              },
                          },
                      ],
                  },
              }}
                />
            </div>
        </div>
    )
}


export default Charts