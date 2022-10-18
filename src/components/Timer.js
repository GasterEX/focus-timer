import React from 'react'

export default function Timer(props) {
  return (
    <div>
      <div style={{ fontSize: "100px" }}>
        <span>{props.minutes}</span>:<span>{props.seconds}</span>
      </div>
    </div>
  );
}