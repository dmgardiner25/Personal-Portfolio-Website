import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './../styles/Home.css'

class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <ReactCSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={600}
          transitionEnterTimeout={600}
          transitionLeaveTimeout={200}
          transitionName={'SlideOut'}>
          <HomeContent />
        </ReactCSSTransitionGroup>
        <img className='splash' src={require('./../images/san_fran_2.JPG')} alt='splash'/>
      </div>
    );
  }
}

class HomeContent extends React.Component {
  render() {
    return (
      <div className='home-content'>
        <div className='stacked-text'>
          <h1>Hey there, my name is David Gardiner</h1>
          <h2>
            I'm a Computer Science student at Missouri S&T <br />
            with a passion for anything and everything <br />
            that involves programming.
          </h2>
        </div>
        <img className='profile' src={require('./../images/suit_green_cropped.jpg')} alt='profile'/>
        <p>Like this photo? Check out more of Amanda Frazier's work <a target="_blank" rel="noopener noreferrer" href="http://amandafrazierwebdev.com">here</a>.</p>
      </div>
    );
  }
}

export default Home;