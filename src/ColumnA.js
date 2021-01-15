import React from "react";
import Charts from "./Charts.js";

function ColumnA() {

    return (
        <div className="columnA_container">
            <Charts name={"GTBY"} />
            <Charts name={"APPL"}/>
            <Charts name={"TSLA"}/>
            <Charts name={"UAL"}/>
            <Charts name={"MRNA"}/>
        </div>
    )
}




export default ColumnA