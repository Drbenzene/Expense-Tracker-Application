import './App.css';
import Balance from './Components/Balance/Balance';
import History from './Components/History/History';
import NewTransaction from './Components/NewTransaction/NewTransaction';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Balance />
        <History />
        <NewTransaction />
      </div>
    </div>
  );
}

export default App;
