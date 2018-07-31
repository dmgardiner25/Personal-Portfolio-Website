import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Nav from './components/Nav';
import Resume from './components/Resume';
import PageTransition from './components/PageTransition';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

var currentTab = () => {
  console.log(window.location.pathname);
  return window.location.pathname;
}

ReactDOM.render(
  <Router>
    <div>
      <Nav />
      <Link className='link' to="/about">
        <img className={'right-arrow ' + (currentTab() === '/project' ? 'hide-arrow' : 'hide-arrow')} src={require('./images/right_arrow.png')} alt='right arrow'/>
      </Link>
      <Link className='link' to="/projects">
        <img className={'right-arrow ' + (currentTab() === '/about' ? 'display-arrow' : 'hide-arrow')} src={require('./images/right_arrow.png')} alt='right arrow'/>
      </Link>
      <Link className='link' to="/about">
        <img className={'right-arrow ' + (currentTab() === '/' ? 'display-arrow' : 'hide-arrow')} src={require('./images/right_arrow.png')} alt='right arrow'/>
      </Link>
      <div className='social-media'>
        <a href='https://www.linkedin.com/in/david-m-gardiner/' target='_blank' rel="noopener noreferrer"><img src={require('./images/linkedin-logo.png')} alt='linkedin'/></a>
        <a href='https://github.com/dmgardiner25' target='_blank' rel="noopener noreferrer"><img src={require('./images/github-logo.png')} alt='github'/></a>
        <a href='mailto:dmgardiner25@gmail.com' target='_blank' rel="noopener noreferrer"><img src={require('./images/close-envelope.png')} alt='email'/></a>
        <a href='https://www.facebook.com/davy.gardiner.5' target='_blank' rel="noopener noreferrer"><img src={require('./images/facebook-logo.png')} alt='facebook'/></a>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={PageTransition(About)} />
        <Route path="/resume" component={Resume} />
        <Route path="/chill" component={() => window.location = 'http://dmgardiner.com/Chill'} />
        <Route component={Home}/>
        </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();