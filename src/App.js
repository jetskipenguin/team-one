import logo from './logo.svg';
// mport BarChart from './components/BarChartV/BarChart'
import PieChart from './components/PieChartWhole/PieChart'
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Oil Production By State from 1981 to 2016</h2>
      <PieChart/>
    </div>
  );
}

export default App;
