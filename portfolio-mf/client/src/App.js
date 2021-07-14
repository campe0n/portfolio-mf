import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Resume from './components/Resume'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <section>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/AboutMe' exact component={AboutMe} />
        <Route path='/Projects' exact component={Projects} />
        <Route path='/Resume' exact component={Resume} />
      </Switch>
    </section>
    </Router>
  );
}

export default App;
