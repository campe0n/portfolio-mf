import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <section>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </section>
    </Router>
  );
}

export default App;
