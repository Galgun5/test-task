import './App.css';
import Main from "./containers/Main/Main.js";
import {TickersState} from "./context/Tickers/TickersState";


function App() {
  return (
      <TickersState>
          <div className="App">
              <Main/>
          </div>
      </TickersState>
  );
}

export default App;
