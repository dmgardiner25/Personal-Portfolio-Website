import React from 'react';
import { Helmet } from 'react-helmet';
import './../styles/Resume.css'

class Resume extends React.Component {
  render() {
    return (
      <div className='resume'>
        <Helmet>
          <title>David Gardiner | Resume</title>
        </Helmet>
        <div className='resume-content'>
          <img className='resume' src={require('./../images/DavidGardinerResume.jpg')} alt='resume' />
        </div>
      </div>
    );
  }
}

export default Resume;
