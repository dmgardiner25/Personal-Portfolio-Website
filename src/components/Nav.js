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
    else if(path === '/resume')
      tabNum = 2;
    else if(path !== '/') {
      tabNum = 0;
      window.location.pathname = '/';
    }
    this.setState({ activeTab: tabNum })
  }

  setActive = (tabNum) => {
    this.setState({ activeTab: tabNum });
  }

  render() {
    return (
      <div className='Nav'>
        <div className='logo-wrapper'><Link className='logo' onClick={() => this.setActive(0)} to="/">DAVID GARDINER</Link></div>
        <Link className={'link' + (this.state.activeTab === 0 ? ' active' : '')} onClick={() => this.setActive(0)} to="/"><p>HOME</p></Link>
        <Link className={'link' + (this.state.activeTab === 1 ? ' active' : '')} onClick={() => this.setActive(1)} to="/about"><p>ABOUT</p></Link>
        <Link className={'link' + (this.state.activeTab === 2 ? ' active' : '')} onClick={() => this.setActive(2)} to="/resume"><p>RESUME</p></Link>
      </div>
    );
  }
}

export default Nav;