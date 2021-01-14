import React from "react";
import Charts from "./Charts.js";

function ColumnB() {

    return (
        <div className="columnB_container">
            <Charts name={"UAL"}/>
            <Charts name={"MRNA"}/>
        </div>
    )
}


export default ColumnB