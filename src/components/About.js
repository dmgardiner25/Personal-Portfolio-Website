import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { withRouter, Link } from 'react-router-dom';
import entries from './../data/entries.json';
import experiences from './../data/experiences.json';
import projects from './../data/projects.json';
import skills from './../data/skills';
import './../styles/About.css'

class About extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  componentDidMount() {
    const { history } = this.props
    history.push({ pathname: '/about' });
  }

  render() {
    return (
      <div className='about'>
        <Helmet>
          <title>David Gardiner | About</title>
        </Helmet>
        <Link className='arrow link-left' to="/">
          <img className={'left-arrow display-arrow'} src={require('./../images/left_arrow_black.png')} alt='left arrow'/>
        </Link>
        <Link className='arrow link-right' to="/resume">
          <img className={'right-arrow display-arrow'} src={require('./../images/right_arrow_black.png')} alt='right arrow'/>
        </Link>
        <ReactCSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={600}
          transitionEnterTimeout={600}
          transitionLeaveTimeout={200}
          transitionName={'SlideIn'}>
          <div className='about-content'>
            <h1 className='about-header'>About</h1>
            <h2 className='sub-header'>OVERVIEW</h2>
            <p className='body-text'>
              I'm a student at the Missouri University of Science and Technology (Missouri S&T)
              where I am happy to finally be able to say that I am going into my last semester of working towards a bachelor's degree in
              Computer Science and graduating in December of this year. Most of my experience is in software engineering and object oriented
              design, but I have become quite passionate about web (especially front-end) development.
            </p>
            <h2 className='sub-header'>THE FUN STUFF</h2>
            <div className='body-text'>
              When I'm not working in the Computer Science Department office as a student worker, grading/creating assignments for CS 3100 (Software Engineering), or
              doing schoolwork, you can usually find me working on my own projects or working on the website
              for <a className='text-link' href="http://acm.mst.edu" target="_blank" rel="noopener noreferrer">acm.mst.edu</a> with
              ACM Web. Recently, I've become quite fond of hackathons and look forward to participating in as many as I can! Outside of
              the world of Computer Science, I enjoy hiking, camping, listening to music, going to concerts, and playing disc golf.
              <br />
              <p className='facts'>Fun Facts:</p>
              <ul>
                <li>My biggest passion aside from Computer Science is space and the aerospace industry. For as long as I can
                  remember, I've been staring up into the night sky and being amazed at what I see. If I hadn't been introduced
                  to programming, I'd most likely be studying Aerospace Engineering.
                </li>
                <br />
                <li>I love traveling and flying in planes, probably because I was introduced to it at a fairly young age. Almost
                  every year, we drive or fly up to North Dakota to see family, I've been to Mexico three times, went to Rome and
                  Athens for my senior trip after high school, and went on a two-week-long camping road trip the past two summers. It's still in
                  the works, but it looks like I'll be traveling the world for a few months after graduating as well!
                </li>
                <br />
                <li>I'm a pescatarian, meaning the only meat I eat is fish (although I still try to stay away from it when possible). The main 
                  reasons for this are because of the environmental impact the meat industry has as well as the health benefits.
                </li>
              </ul>
            </div>
            <h2 className='sub-header'>HISTORY</h2>
            <Entries />
            <h2 className='sub-header'>EXPERIENCE</h2>
            <Experiences />
            <h2 className='sub-header'>PROJECTS</h2>
            <Projects />
            <h2 className='sub-header'>SKILLS</h2>
            <Skills />
          </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

class Entries extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="timeline">
          {
            entries.entries.map((entry, i) => {
              return (
                <dl className="entry" key={i}>
                  <dt className="entry-title">{entry.year}</dt>
                  <dd className="entry-detail" dangerouslySetInnerHTML={ { __html: entry.detail } }></dd>
                </dl>
              );
            })
          }
        </div>
      </div>
    );
  }
}

class Experiences extends React.Component {
  render() {
    return (
      <div className='body-text'>
        {
          experiences.experiences.map((experience, i) => {
            return (
              <div className='experience' key={i}>
                <span className='org'>{experience.org}</span>
                <span className='date'>{experience.dates}</span>
                <br /><span className='role'>{experience.position}</span><br />
              </div>
            );
          })
        }
      </div>
    );
  }
}

class Projects extends React.Component {
  render() {
    return (
      <div className='body-text'>
        {
          projects.projects.map((project, i) => {
            if(project.demo !== '')
              return (
                <div className='project' key={i}>
                  <img src={require('./../images/' + project.url)} alt={project.alt}/>
                  <div className='project-text'>
                    <h2>{project.title}</h2>
                    <p className='project-detail'>{project.detail}</p>
                    <p className='tech-stack'>Tech Stack: {project.stack}</p>
                    <a href={project.github} className='button github' target='_blank' rel="noopener noreferrer"><p className='button-text'>GitHub</p></a>
                    <a href={project.demo} className='button demo' target='_blank' rel="noopener noreferrer"><p className='button-text'>Demo</p></a>
                  </div>
                </div>
              );
            else
              return (
                <div className='project' key={i}>
                  <img src={require('./../images/' + project.url)} alt={project.alt}/>
                  <div className='project-text'>
                    <h2>{project.title}</h2>
                    <p className='project-detail'>{project.detail}</p>
                    <p className='tech-stack'>Tech Stack: {project.stack}</p>
                    <a href={project.github} className='button github' target='_blank' rel="noopener noreferrer"><p className='button-text'>GitHub</p></a>
                  </div>
                </div>
              );
          })
        }
      </div>
    );
  }
}

class Skills extends React.Component {
  componentDidMount() {
    this.forceUpdate();
  }

  render() {
    return (
      <div className='body-text'>
        <div className='skills'>
          {
            skills.skills.map((skill, i) => {
              return (
                <div className='skill' key={i}>
                  <h2 className='skill-type'>{skill.title}</h2>
                  {
                    skill.list.map((l, i) => {
                      return (
                        <p dangerouslySetInnerHTML={ { __html: l } } key={i}></p>
                      );
                    })
                  }
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default withRouter(About);