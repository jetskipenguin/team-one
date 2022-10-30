import './App.css';
import React, { Component } from 'react';
import PieChart from './components/PieChartWhole/PieChart';
import LineChart from './components/StreamGraph/LineChart';
import ChartBubble from './components/Lollipop/BubbleChart';
import USAMap from './components/UsaState/USAState'

// example on how to use map:
// https://github.com/gabidavila/react-usa-map-demo/blob/master/src/App.js

class App extends Component {

  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };
  
  // statesFilling = () => {
  //   return {
  //       "NJ": {
  //       fill: "navy",
  //       clickHandler: () => alert("Custom callback for the NJ state")
  //     },
  //     "NY": {
  //       fill: "#CC0000"
  //     }
  //   };
  // };
  
  render() 
  {
    return (
      <div className="App">
        <h2>Oil Production By State from 1981 to 2016</h2>
  
        
        <PieChart/>
        <USAMap onClick={this.mapHandler}/>
  
        
      </div>
    );
  }
}

export default App;
