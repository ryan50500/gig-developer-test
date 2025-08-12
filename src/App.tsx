import './App.css'
import MatchList from './components/MatchList';
import BetSlip from './components/BetSlip';

function App() {

  return (
    <div className="app-container">
      <div className="main-layout">
        <div className="matches-section">
          <MatchList />
        </div>
        <div className="betslip-section">
          <BetSlip />
        </div>
      </div>
    </div>
  )
}

export default App
