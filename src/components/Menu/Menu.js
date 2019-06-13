import React from 'react'
import './Menu.css'
import Event from '../Event/Event';


class Menu extends React.Component{

constructor(props){
  super(props);
  this.state={  }
}


render(){
  let Parser = require('rss-parser');
  let parser = new Parser();

  (async () => {
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
    let feed = await parser.parseURL(CORS_PROXY + 'https://www.winpark.org/events/feed/');

    feed.items.forEach(item => {

  console.log(item.title + ':' + item.pubDate)
    });

  })();

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
