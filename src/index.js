import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Nav from './components/Nav';
import PageShell from './components/PageShell';
import Project from './components/Projects'
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <div>
      <Nav />

      <Route exact path="/" component={PageShell(Home)} />
      <Route path="/about" component={PageShell(About)} />
      <Route path="/projects" component={PageShell(Project)} />
    </div>
  </Router>, 
  document.getElementById('root')
);
registerServiceWorker();