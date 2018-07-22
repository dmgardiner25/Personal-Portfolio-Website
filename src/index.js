import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Nav from './components/Nav';
import PageTransition from './components/PageTransition';
import Project from './components/Projects'
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <div>
      <Nav />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={PageTransition(About)} />
      <Route path="/projects" component={PageTransition(Project)} />
    </div>
  </Router>, 
  document.getElementById('root')
);
registerServiceWorker();