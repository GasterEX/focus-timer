import React from "react";

export default function skipButton(props){
    return(
            <button class="small-button" onClick={()=>props.onClick()}>
                {props.skip}
            </button>
    )
}   