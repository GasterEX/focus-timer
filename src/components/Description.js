import React from "react";
export default function Description(props) {
    return (
        <div>
            <p>{props.description[0]}</p>
            <p>{props.description[1]}</p>
        </div>
    )
}