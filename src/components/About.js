import React from 'react';
import { Helmet } from 'react-helmet';

class About extends React.Component {
  render() {
    return (
      <div className='Home'>
        <Helmet>
          <title>David Gardiner | About</title>
        </Helmet>
        <h1>Hello, this is the about page!</h1>
      </div>
    );
  }
}

export default About;