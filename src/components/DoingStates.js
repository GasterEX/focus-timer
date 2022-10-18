import React from 'react'

export default function DoingStates(props) {
  return (
    <h3 className={props.doingState=="study" ? "StudyTime" : "RestTime"}>{props.doingState=="study" ? "Study Time" : "Rest Time"}</h3>
  )
}