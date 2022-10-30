import './App.css';
import React, { Component } from 'react';
import PieChart from './components/PieChartWhole/PieChart';
import Iframe from './components/iframe'
import USAMap from './components/UsaState/USAState'
import NavigationBar from './Nav'

// example on how to use map:
// https://github.com/gabidavila/react-usa-map-demo/blob/master/src/App.js

const API_KEY = 'E0qs2v71QQZScSd0Ige5auJ1nnrk55BgsEdBbb7a';

var texas = "//www.eia.gov/opendata/v1/embed/iframe.php?api_key=" + API_KEY + '&series_id=PET.EMA_EPJK_PTG_NUS_DPG.A;PET.EMA_EPJK_PWG_NUS_DPG.A;PET.EMA_EPLLPA_PTG_NUS_DPG.A;PET.EMA_EPLLPA_PWG_NUS_DPG.A;PET.EMA_EPM0_PTG_NUS_DPG.A;PET.EMA_EPM0_PWG_NUS_DPG.A;PET.EMA_EPPK_PTG_NUS_DPG.A;PET.EMA_EPPK_PWG_NUS_DPG.A;PET.EMA_EPPV_PTG_NUS_DPG.A;PET.EMA_EPPV_PWG_NUS_DPG.A';
var alaska = "//www.eia.gov/opendata/v1/embed/iframe.php?api_key=" + API_KEY + "&series_id=PET.RCRR9907SAK_1.A;PET.RL2R9911SAK_1.A;PET.RNGR9908SAK_1.A;PET.RNGR9909SAK_1.A;PET.RNGR9910SAK_1.A";
var california = "//www.eia.gov/opendata/v1/embed/iframe.php?api_key=" + API_KEY + "&series_id=PET.EMA_EPJK_PTG_SCA_DPG.A;PET.EMA_EPJK_PWG_SCA_DPG.A;PET.EMA_EPM0_PWG_SCA_DPG.A;PET.EMA_EPPK_PTG_SCA_DPG.A;PET.EMA_EPPK_PWG_SCA_DPG.A;PET.EMA_EPPV_PTG_SCA_DPG.A;PET.EMA_EPPV_PWG_SCA_DPG.A";

class App extends Component {

  mapHandler = (event) => {
    if(event.target.dataset.name == "TX"){
      this.setState({src: texas});
    }
    if(event.target.dataset.name == "AK") {
      this.setState({src: alaska});
    }
    if(event.target.dataset.name == "CA") {
      this.setState({src: california});
    }    
  };

  state = {
    src: alaska
  }

  statesFilling = () => {
    return {
      "CA": {
        fill: "#777777",
      },
      "TX": {
        fill: "#777777"
      },
      "AK": {
        fill: "#777777"
      }
    };
  };
  
  render() 
  {
    return (
      <div className="App">
        <NavigationBar/>
        <h2>Oil Production By State from 1981 to 2016</h2>
  
        <PieChart/>
        <USAMap customize={this.statesFilling()} onClick={this.mapHandler}/>
        <Iframe source={this.state.src} />
      </div>
    );
  }
}

export default App;
