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
            <h1 className='header'>About</h1>
            <h2 className='sub-header'>OVERVIEW</h2>
            <p className='body-text'>
              I'm a student at the Missouri University of Science and Technology (Missouri S&T)
              where I'll be going into my junior year of working towards a bachelor's degree in
              Computer Science. Most of my experience is with Software Engineering and object oriented
              languages thanks to my experience in school and a summer internship. The beginning of
              2018 introduced me to Web Development, which is something that I've found quite a passion
              for fairly recently.
            </p>
            <h2 className='sub-header'>THE FUN STUFF</h2>
            <div className='body-text'>
              When I'm not working or studying for school, you can usually find me working on my own projects or working on the website
              for <a className='text-link' href="http://acm.mst.edu" target="_blank" rel="noopener noreferrer">acm.mst.edu</a> with
              ACM SIG.com. Outside of the world of Computer Science, I enjoy casually playing video games, listening to music, and
              taking my dog on hikes.
              <br />
              <p className='facts'>Fun Facts:</p>
              <ul>
                <li>My biggest passion behind Computer Science is space and the aerospace industry. For as long as I can
                  remember, I've been staring up into the night sky and being amazed at what I see. If I hadn't been introduced
                  to programming, I'd most likely be studying Aerospace Engineering. Working for NASA, SpaceX, Boeing, or Garmin's
                  Aviation team would definitely be something that I would love to do at some point.
                </li>
                <br />
                <li>I love traveling and flying in planes, probably because I was introduced to it at a fairly young age. Almost
                  every year, we drive or fly up to North Dakota to see family, I've been to Mexico three times, went to Rome and
                  Athens for my senior trip, and went on a twelve-day road trip out to San Francisco where my friends and I tent
                  camped in national parks along the way.
                </li>
                <br />
                <li>I have a one year old English Cocker Spaniel named Ramsey.
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
          })
        }
        <p className='current'>Currently working on some Neural Network projects, check back soon!</p>
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