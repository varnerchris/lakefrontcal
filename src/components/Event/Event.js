import React from 'react'
import './Event.css'


class Event extends React.Component{
render(){

  return(
    <li><h2>Event Name </h2>
    <span>Date, Location</span>
    <span className="right">Time</span>
    </li>
)
}
}
export default Event;
