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
          <h1>Hey there, I'm David Gardiner</h1>
          <h2>
            I'm a Computer Science student at Missouri S&T <br />
            with a passion for anything and everything that <br /> involves programming.
          </h2>
        </div>
        <img className='profile' src={require('./../images/suit_green_cropped.jpg')} alt='profile'/>
      </div>
    );
  }
}

export default Home;