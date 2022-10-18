import React from "react";
export default function LapButton(props){
    return(
            <button class="small-button" onClick={()=>props.onClick()}>
                {props.lap}
            </button>
    )
}   