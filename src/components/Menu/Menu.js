import React from 'react'
import './Menu.css'
import Event from '../Event/Event';
import Parser from 'rss-parser';
import ReactWeather from 'react-open-weather';
import 'react-open-weather/lib/css/ReactWeather.css';
import Rainout from '../../util/Rainout';
import RainoutLine from '../RainoutLine/RainoutLine';

class Menu extends React.Component{

constructor(props){
  super(props);
  this.state={ events:[],
    weather:[]
  }
}

fieldStatus(){
console.log(Rainout.statusRequest());
  Rainout.statusRequest().then(field=>{
    this.setState({weather:field})
  })
  //console.log(this.state.weather);
}

stateCounter(){
  console.log(this.state.weather.length);
  console.log(this.state.events.length);
}

componentDidMount()  {
    let parser = new Parser();

    (async () => {
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
    let feed = await parser.parseURL(CORS_PROXY + 'https://www.winpark.org/events/feed/');
      this.setState({events:feed.items.slice(0,3)})
  })();
  this.fieldStatus();
}


render(){


  let eventComponents = this.state.events.map(event=>{
    return <Event model={event} key={event.guid}/>
  })

  let weatherComponents = ( <ReactWeather
    forecast="5days"
    unit="imperial"
    apikey="eb800eca93e14eeca78162825191706"
    type="city"
    city="Winnetka"
    />);

    let statusComponenets = this.state.weather.map(status=>{
      //console.log(this.state.weather);
      return <RainoutLine model={status} key={status.uid}/>
    })
    if(this.state.weather.length === 0){
      statusComponenets = <span>loading</span>
    }

  return(
    <div className="events">

            <h1>Upcoming Events</h1>
            <ul>
              {eventComponents}
            </ul>
            <div className="weather">{weatherComponents}</div>
            <div className="beachStatus">
              {statusComponenets}
            <div className="logo">
            </div>
            </div>
        </div>
)
}
}
export default Menu;
