import React from "react";
import Charts from "./Charts.js";
import "./ColumnA.css"

function ColumnA() {

    return (
        <div className="columnA_container">
            <Charts name={"GTBY"} />
            <Charts name={"APPL"}/>
            <Charts name={"TSLA"}/>
        </div>
    )
}




export default ColumnA