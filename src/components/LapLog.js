import React from "react";
export default function LapLog(props) {
    const logs = props.LapLog;
    const Loglist = logs.map((lap)=>
    <li>{lap}</li>)
    return <p>{Loglist}</p>
}