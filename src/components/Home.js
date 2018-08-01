import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { withRouter, Link } from 'react-router-dom';
import './../styles/Home.css';

class Home extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.history.push({ pathname: '/' });
  }

  render() {
    return (
      <div className='home'>
        <Helmet>
          <title>David Gardiner | Home</title>
        </Helmet>
        <Link className='arrow' to="/about">
          <img className={'right-arrow display-arrow'} src={require('./../images/right_arrow.png')} alt='right arrow'/>
        </Link>
        <ReactCSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={600}
          transitionEnterTimeout={600}
          transitionLeaveTimeout={200}
          transitionName={'SlideIn'}>
          <HomeContent />
        </ReactCSSTransitionGroup>
        <p>Like this photo? Check out more of Amanda Frazier's work <a target="_blank" rel="noopener noreferrer" href="http://amandafrazierwebdev.com">here</a>.</p>
      </div>
    );
  }
}

class HomeContent extends React.Component {
  render() {
    return (
      <div className='home-content'>
        <div className='stacked-text'>
          <h1>Hey there, my name is <span className='name'>David Gardiner</span>.</h1>
          <h2>
            I'm a Computer Science student at Missouri S&T <br />
            with a passion for anything and everything <br />
            that involves programming.
          </h2>
        </div>
        <img className='profile' src={require('./../images/suit_green_cropped.jpg')} alt='profile'/>
      </div>
    );
  }
}

export default withRouter(Home);