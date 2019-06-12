import React from 'react'
import './Menu.css'


 class Menu extends React.Component{

render(){
  return(
    <div className="events">
            <h1>Upcoming Events</h1>
            <ul>
            <li><h2>Wednesdays in the Woods Evening Concert: 7th Heaven (Cancelled)</h2>
            <span>June 12, Hubbard Woods Park</span>
            <span className="right">6PM - 8:30 PM</span>
            </li>
            <li><h2>Tower’s Tidal Wave Thursdays: Skydeck</h2>
            <span>June 13, Tower Road Beach</span>
            <span className="right">6PM - 8PM</span>
            </li><li><h2>Kid's Night Out: Tennis, Pizza & Movie</h2>
            <span>June 14, A.C Nielsen Tennis Center</span><span className="right">5PM - 8PM</span>
            </li>
            <li><h2>Father's Day Brunch</h2>
              <span>June 16, Tower Road Beach</span><span className="right">10AM - 1PM</span>
              </li>
              <li><h2>Wednesday's in the Woods Evening Concert: Twinray</h2>
                <span>June 19, Hubbard Woods Park</span><span className="right">6 - 8:30PM</span>
                </li>
              </ul>
        </div>
)
}
}
export default Menu;
