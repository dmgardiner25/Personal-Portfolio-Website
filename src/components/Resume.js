import React from 'react';
import { Helmet } from 'react-helmet';
import { loadpdf } from './../util/loadpdf.js';
import './../styles/Resume.css'

class Resume extends React.Component {
  render() {
    loadpdf();
    return (
      <div className='resume'>
        <Helmet>
          <title>David Gardiner | Resume</title>
        </Helmet>
        <div className='resume-content'>
          <canvas id="the-canvas"></canvas>
        </div>
      </div>
    );
  }
}

export default Resume;
