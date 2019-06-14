import React from 'react'
import './Event.css'
import moment from 'moment'

class Event extends React.Component{
  render(){
    console.log(this.props.model)

    let eventTime = new moment(this.props.model.pubDate)

    return(
      <li>
        <h2>{this.props.model.title} </h2>
        <span>{eventTime.format('dddd, MMMM D')}</span>
        <span className="right">{eventTime.format('h:mmA')}</span>
      </li>
    )
  }
}
export default Event;
