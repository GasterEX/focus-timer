import React from "react";
export default function LapButton(props){
    return(
            <button className={props.doingState === "study" ? "small-button" : "small-button-opacity"} onClick={()=>props.onClick()} >
                {props.lap}
            </button>
    )
}   