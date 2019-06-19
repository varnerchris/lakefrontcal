import React from 'react'
//import './RainoutLine.css'
//import moment from 'moment'

class RainoutLine extends React.Component{
  render(){


    return(
      <ul>
         <li>{this.props.model.name} - {this.props.model.clip}</li>
       </ul>
    )
  }
}
export default RainoutLine;
