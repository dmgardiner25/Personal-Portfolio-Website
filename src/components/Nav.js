import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../styles/Nav.css';

class Nav extends Component {
  constructor() {
    super();

    this.state = {
      activeTab: 0
    }
  }

  componentWillMount() {
    var path = window.location.pathname;
    var tabNum = 0;
    if(path === '/about')
      tabNum = 1;
    else if(path === '/projects')
      tabNum = 2;
    this.setState({ activeTab: tabNum })
  }

  setActive = (tabNum, currUrl) => {
    this.setState({ activeTab: tabNum });
  }

  render() {
    return (
      <div className='Nav'>
        <Link className='logo nav-item' to="/">DAVID GARDINER</Link>
        <Link className={'link nav-item' + (this.state.activeTab === 0 ? ' active' : '')} onClick={() => this.setActive(0, '')} to="/"><p>HOME</p></Link>
        <Link className={'link nav-item' + (this.state.activeTab === 1 ? ' active' : '')} onClick={() => this.setActive(1, 'about')} to="/about"><p>ABOUT</p></Link>
        <Link className={'link nav-item' + (this.state.activeTab === 2 ? ' active' : '')} onClick={() => this.setActive(2, 'projects')} to="/projects"><p>PROJECTS</p></Link>
      </div>
    );
  }
}

export default Nav;