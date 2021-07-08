import './App.css';
import {Home} from './pages/home/home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>Sistema de Gestão Financeira</h4>
      </header>
      <Router>
          <Switch>
            <Route path="/" component= {Home}></Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
