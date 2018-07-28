import React from 'react';
import { Helmet } from 'react-helmet';
import './../styles/About.css'

class About extends React.Component {
  render() {
    return (
      <div className='about'>
        <Helmet>
          <title>David Gardiner | About</title>
        </Helmet>
        <div className='about-content'>
          <h1>Hello, this is the about page!</h1>
        </div>
      </div>
    );
  }
}

export default About;