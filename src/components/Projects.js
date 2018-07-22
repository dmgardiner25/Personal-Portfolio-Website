import React from 'react';
import { Helmet } from 'react-helmet';

class Project extends React.Component {
  render() {
    return (
      <div className='Project'>
        <Helmet>
          <title>David Gardiner | Projects</title>
        </Helmet>
        <h1>Hello, this is the project page!</h1>
      </div>
    );
  }
}

export default Project;