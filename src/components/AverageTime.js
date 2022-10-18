import React from "react";
let possible = 0;
export default function Title(props) {
    possible = Math.round(props.currentMinute/props.AveLapTime*10)/10 || 0;
    return (
        <div className="AverageTime">
                <h3>平均{props.AveLapTime}分</h3>
                <h3>この調子でいけば{possible}問解けます</h3>
        </div>
    )
}