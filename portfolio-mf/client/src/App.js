import './App.css';
import Nav from './components/Nav';
import {BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <section>
      <Nav />
      <h1>My first react app</h1>
    </section>
    </Router>
  );
}

export default App;
