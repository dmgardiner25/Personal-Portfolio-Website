import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Nav from './components/Nav';
import Resume from './components/Resume';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <div>
      <Nav />
      <div className='social-media'>
        <a href='https://www.linkedin.com/in/david-m-gardiner/' target='_blank' rel="noopener noreferrer"><img src={require('./images/linkedin-logo.png')} alt='linkedin'/></a>
        <a href='https://github.com/dmgardiner25' target='_blank' rel="noopener noreferrer"><img src={require('./images/github-logo.png')} alt='github'/></a>
        <a href='mailto:dmgardiner25@gmail.com' target='_blank' rel="noopener noreferrer"><img src={require('./images/close-envelope.png')} alt='email'/></a>
        <a href='https://www.facebook.com/davy.gardiner.5' target='_blank' rel="noopener noreferrer"><img src={require('./images/facebook-logo.png')} alt='facebook'/></a>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/reddit" component={() => window.location = 'https://friendly-meninsky-bca341.netlify.com/'} />
        <Route path="/chill" component={() => window.location = 'http://davidgardiner.me/Chill'} />
        <Route path="*" component={Home}/>
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();