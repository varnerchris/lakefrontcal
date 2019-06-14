import React from 'react'
import './Menu.css'
import Event from '../Event/Event';
import Parser from 'rss-parser';



class Menu extends React.Component{

constructor(props){
  super(props);
  this.state={ events:[] }
}
componentDidMount()  {
      let parser = new Parser();

    (async () => {
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
    let feed = await parser.parseURL(CORS_PROXY + 'https://www.winpark.org/events/feed/');

      this.setState({events:feed.items.slice(0,4)})

  })();
}

render(){

  let eventComponents = this.state.events.map(event=>{
    return <Event model={event} key={event.guid}/>
  })
  if(this.state.events.length == 0){
    eventComponents = <div id="loading"></div>
  }

  return(
    <div className="events">

            <h1>Upcoming Events</h1>
            <ul>
              {eventComponents}
            </ul>
        </div>
)
}
}
export default Menu;
