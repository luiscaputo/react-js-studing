import './App.css';
import {react} from 'react';
import {Home} from './pages/home/home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { render } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/" component= {Home}></Route>
          </Switch>
        </Router>
      </header>
      <body>
        <h1>teste</h1>
      </body>
    </div>
  );
}

export default App;
