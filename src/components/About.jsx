import React from 'react'
import AboutMePic from '../assets/abt-me.jpg'
import Avatar from '../assets/avatar.svg'
function About() {
  return (
    <section className="page04" id="who_am_i">
      <div className="who-am-i">
        <div className="who-am-i-container">

        
          <div className="who-am-i-left">
          <div className="who-am-i-text">
              <div className="who-am-i-heading">
                <h2>Who Am I </h2>
              </div>
              <p>👋 Hey there! I’m Shaik Bhasidh, a 19-year-old web developer with a passion for crafting beautiful, functional, and accessible digital experiences. From tinkering with HTML and CSS to diving into the latest frameworks, I thrive on challenges and love the thrill of problem-solving. As a self-taught developer, I'm committed to creating intuitive and inclusive websites that make a positive impact. When I'm not coding, you can find me exploring the outdoors, or brainstorming creative projects. Let's connect and build something amazing together!</p>
            </div>
          </div>
          <div className="who-am-i-right">
          <div className="who-am-i-img-container">

<img src={Avatar} alt="Photo of Shaik Bhasidh" />
</div>
          </div>
        </div>
        {/* <div className="more-projects-link">
          <a href="#">
            <button className="learn-more">
              <span aria-hidden="true" className="circle">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">More About Me</span>
            </button>
          </a>
        </div> */}
      </div>
    </section>
  )
}

export default About