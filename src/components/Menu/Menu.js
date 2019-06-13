import React from 'react'
import './Menu.css'
import Event from '../Event/Event';


 class Menu extends React.Component{
constructor(props){
  super(props);
  this.state={

  }
  
}
render(){
  return(
    <div className="events">

            <h1>Upcoming Events</h1>
            <ul>
              <Event/>
            </ul>
        </div>
)
}
}
export default Menu;
