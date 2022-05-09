import React from 'react';
import './about.css';
import me from '../../assets/me.jpg';

const About = () => (
  <div className="tle__header section__padding">
    <div className="tle__header-content">
      <h1 className="gradient__text">Hi, I am Thanh Le</h1>
      <p><b>Computer Science</b> student from <b>Ho Chi Minh City, Vietnam</b>. Currently in my <b>2B</b> term at <b>University of Waterloo</b>.</p>
      <p>I am a <b>Software Developer</b> and <b>Full-stack Web Developer</b> with a passion for <b>front-end</b> and <b>back-end</b> development.</p>
      <p>I also have an extensive background in <b>Data Structures</b>, <b>Algorithms</b> and <b>Competitive Programming</b>.</p>
      <p>I am a <b>hard-working</b> and <b>self-motivated</b> person. I am always looking for new challenges and opportunities to learn new things as well as improve my skills.</p>
      <p>Check out <b>TetherPortal</b> below if you're here to invest!</p>
      <p>Or, check out my <a href="https://tle-chat-app.herokuapp.com/"><u>chatting app</u></a>.</p> 
    </div>

    <div className="tle__header-image">
      <img src={me} />
    </div>
  </div>
);

export default About