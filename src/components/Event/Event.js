import React from 'react'
import './Event.css'


 class Event extends React.Component{

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
    <li><h2>Event Name </h2>
    <span>Date, Location</span>
    <span className="right">Time</span>
    </li>
)
}
}
export default Event;
