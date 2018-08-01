import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { withRouter, Link } from 'react-router-dom';
import './../styles/Resume.css'

class Resume extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  componentDidMount() {
    const { history } = this.props
    history.push({ pathname: '/resume' });
  }

  render() {
    return (
      <div className='resume'>
        <Helmet>
          <title>David Gardiner | Resume</title>
        </Helmet>
        <Link className='arrow' to="/about">
          <img className={'left-arrow display-arrow'} src={require('./../images/left_arrow_black.png')} alt='left arrow'/>
        </Link>
        <div className='resume-content'>
          <img className='resume-img' src={require('./../images/DavidGardinerResume.jpg')} alt='resume' />
        </div>
      </div>
    );
  }
}

export default withRouter(Resume);
