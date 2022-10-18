import React from "react";

export default function MainButton(props){
    return(
        <div>
            <button class="rounded-corner" onClick={()=>props.onClick()}>
                {props.mainButton}
            </button>
        </div>
    )
}   