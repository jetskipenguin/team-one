import './App.css';
import React, { Component } from 'react';
import PieChart from './components/PieChartWhole/PieChart';
import Iframe from './components/iframe'
import USAMap from './components/UsaState/USAState'
import NavigationBar from './Nav'

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
        <NavigationBar/>
        <h2>Oil Production By State from 1981 to 2016</h2>
  
        <PieChart/>
        <USAMap onClick={this.mapHandler}/>
        <Iframe source="//www.eia.gov/opendata/v1/embed/iframe.php?api_key=E0qs2v71QQZScSd0Ige5auJ1nnrk55BgsEdBbb7a&series_id=PET.RCRR9907SAK_1.A;PET.RL2R9911SAK_1.A;PET.RNGR9908SAK_1.A;PET.RNGR9909SAK_1.A;PET.RNGR9910SAK_1.A" load="iframe_load"/>
      </div>
    );
  }
}

export default App;
