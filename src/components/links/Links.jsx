import React from 'react'
import './links.css'
import { mail, linkedin, resume, github, resumefile } from './imports';

class DownloadLink extends React.Component {
  render() {
      return (
          <a href={this.props.src} download>{this.props.children}</a>
      )
  }
}

const Links = () => {
  return (
    <div className="tle__links section__padding">
      <div>
        <a href="mailto:thanh@thanhle.ca"><img src={mail} alt="mail" /></a>
      </div>
      <div>
        <a href="https://linkedin.com/in/lvthanh03"><img src={linkedin} alt="linkedin" /></a>
      </div>
      <div>
        <a href={resumefile} download="Thanh Le - Resume.pdf"><img src={resume} alt="resume" /></a>
      </div>
      <div>
        <a href="https://github.com/lvthanh03"><img src={github} alt="github" /></a>
      </div>
    </div>
  )
}

export default Links