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
          <p className='body-text'>
            When I'm not working or studying for school, you can usually find me working on my own projects or working on the website
            for <a className='text-link' href="http://acm.mst.edu" target="_blank" rel="noopener noreferrer">acm.mst.edu</a> with
            ACM SIG.com. Outside of the world of Computer Science, I enjoy casually playing video games, listening to music, and
            taking my dog on hikes.
            <br /><br />
            <u>Fun Facts</u>:
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
          </p>
          <h2 className='sub-header'>HISTORY</h2>
          <div class="wrapper">
            <div class="timeline">
              <dl class="entry">
                <dt class="entry-title">1998</dt>
                <dd class="entry-detail">Baby David was born.</dd>
              </dl>
              <dl class="entry">
                <dt class="entry-title">2001</dt>
                <dd class="entry-detail">My first memories of messing around on our home computer.</dd>
              </dl>
              <dl class="entry">
                <dt class="entry-title">2004</dt>
                <dd class="entry-detail">Began fixing computers with my great grandfather. <br /><br />"Did he say <em>great</em> grandfather?" Yes, yes I did.</dd>
              </dl>
              <dl class="entry">
                <dt class="entry-title">2012</dt>
                <dd class="entry-detail">Freshman year of high school, I was introduced to the world of programming and
                  instantly fell in love. Started off with learning Java on my own (to make video games, naturally).
                </dd>
              </dl>
              <dl class="entry">
                <dt class="entry-title">2013</dt>
                <dd class="entry-detail">A senior friend told me about Missouri S&T long before I even thought about college and
                  the idea of one of the best Midwestern tech schools that was only two hours from home sounded great.
                </dd>
              </dl>
              <dl class="entry">
                <dt class="entry-title">2014</dt>
                <dd class="entry-detail">My first programming class with Scratch, QBasic, and Visual Basic. This was by far the
                  class that I have found to be <del>most</del> least relevant.
                </dd>
              </dl>
              <dl class="entry">
                <dt class="entry-title">2015</dt>
                <dd class="entry-detail">I applied to Missouri S&T and got accepted for the Computer Science program. Also took
                  AP Computer Science and solidified my programming foundation further with Java.
                </dd>
              </dl>
              <dl class="entry">
                <dt class="entry-title">2016</dt>
                <dd class="entry-detail">Began my journey at S&T.
                </dd>
              </dl>
              <dl class="entry">
                <dt class="entry-title">2018</dt>
                <dd class="entry-detail">Joined ACM SIG.com at the beginning of the spring semester and interned at RGA as a
                  software engineer intern during the summer.
                </dd>
              </dl>
            </div>
            <h2 className='sub-header'>EXPERIENCE</h2>
            <p className='body-text'>
              <div className='experience'>
                Reinsurance Group of America, Incorporated <span className='date'>June - August 2018</span>
                <br /><span className='role'>Software Development Engineer Intern</span><br />
              </div>
              <div className='experience'>
                ACM SIG.com <span className='date'>January 2018 - Present</span>
                <br /><span className='role'>Web Developer</span><br />
              </div>
              <div className='experience'>
                ACM SIG-Game <span className='date'>January - May 2017</span>
                <br /><span className='role'>AI Developer</span><br />
              </div>
              <div className='experience'>
                Mars Rover Design Team <span className='date'>August - December 2016</span>
                <br /><span className='role'>Embedded Programmer</span><br />
              </div>
            </p>
            <h2 className='sub-header'>PROJECTS</h2>
            <p className='body-text'>
              <div className='project'>
                <img src={require('./../images/chill.png')} alt='chill'/>
                <div className='project-text'>
                  <h2>Chill</h2>
                  <p className='project-detail'>
                    A website that emulates the function of Netflix in order to utilize and show the group's understanding
                    of database design and implementation.
                  </p>
                  <p className='tech-stack'>
                    Tech Stack: HTML, CSS, PHP, JavaScript, jQuery, MySQL
                  </p>
                  <a href='https://github.com/dmgardiner25/Chill-CS2300' className='button github' target='_blank' rel="noopener noreferrer"><p className='button-text'>GitHub</p></a>
                  <a href='http://dmgardiner.com/Chill' className='button demo' target='_blank' rel="noopener noreferrer"><p className='button-text'>Demo</p></a>
                </div>
              </div>
              <div className='project'>Currently working on some Neural Network projects, check back soon!</div>
            </p>
            <h2 className='sub-header'>SKILLS</h2>
            <p className='body-text'>
              <div className='skills'>
                <div className='skill'>
                  <h2 className='skill-type'>LANGUAGES</h2>
                  <p>C++</p>
                  <p>Java</p>
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>JavaScript</p>
                  <p>SQL</p>
                  <p>Python</p>
                  <p>C#</p>
                  <p><span class="latex">L<sup>a</sup>T<sub>e</sub>X</span></p>
                </div>
                <div className='skill'>
                  <h2 className='skill-type'>FRAMEWORKS</h2>
                  <p>React</p>
                  <p>Node.js</p>
                  <p>Vue.js</p>
                  <p>Django</p>
                </div>
                <div className='skill'>
                  <h2 className='skill-type'>SOFTWARE</h2>
                  <p>Git</p>
                  <p>Bash</p>
                  <p>Windows</p>
                  <p>Ubuntu</p>
                  <p>Microsoft Office</p>
                  <p>Microsoft TFS</p>
                </div>
                <div className='skill'>
                  <h2 className='skill-type'>OTHER</h2>
                  <p>Agile/Scrum</p>
                  <p>Public Speaking</p>
                  <p>Leadership</p>
                  <p>Volunteer</p>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;