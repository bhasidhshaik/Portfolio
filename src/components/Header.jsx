import React from 'react'

function Header({navOpen , handleNavClick , scrollToSection}) {
  return (
    <>
    <div className= {navOpen ?"nav-bar-container opened" :  "nav-bar-container closed"} id="navbar">
    <div className="close-nav">
      <span id="close-nav" onClick={handleNavClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fff" className="bi bi-x-octagon"
          viewBox="0 0 16 16">
          <path
            d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1z" />
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
        </svg>
      </span>
    </div>
    <nav className="navbar">
      <ul className="nav-list">
        <li className="list-item">
          <a onClick={() => scrollToSection('intro')}>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" className="bi bi-caret-right"
                viewBox="0 0 16 16">
                <path
                  d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
              </svg></span>
            Home</a>
        </li>
        <li className="list-item"><a onClick={() => scrollToSection('projects')} ><span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                fill="#fff" className="bi bi-caret-right" viewBox="0 0 16 16">
                <path
                  d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
              </svg></span>Projects</a></li>
        <li className="list-item"><a onClick={() => scrollToSection('what_i_know')}><span><svg xmlns="http://www.w3.org/2000/svg" width="30"
                height="30" fill="#fff" className="bi bi-caret-right" viewBox="0 0 16 16">
                <path
                  d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
              </svg></span>What I Know ?</a></li>
        <li className="list-item"><a onClick={() => scrollToSection('who_am_i')}><span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                fill="#fff" className="bi bi-caret-right" viewBox="0 0 16 16">
                <path
                  d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
              </svg></span>Who Am I ?</a></li>
        <li className="list-item"><a onClick={() => scrollToSection('contact_me')}><span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                fill="#fff" className="bi bi-caret-right" viewBox="0 0 16 16">
                <path
                  d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
              </svg></span>Send Me a Messege !</a></li>
      </ul>
    </nav>
    <div className="get-in-touch">
      {/* <!-- <h5> <span><i className="fa-solid fa-comments"></i> </span> Get in touch</h5> --> */}
      <ul className="get-in-touch-wrapper">
        <a href="https://github.com/bhasidhshaik">
          <li className="icon github">
            <span className="tooltip">GitHub</span>
            <span><i className="fa-brands fa-github"></i></span>
          </li>
        </a>


        <a href="https://www.linkedin.com/in/shaik-bhasidh-91351a270/">
          <li className="icon linkedin">
            <span className="tooltip">LinkedIn</span>
            <span><i className="fa-brands fa-linkedin-in"></i></span>
          </li>
        </a>

        <a href="https://www.instagram.com/abdul.bhasidh/">
          <li className="icon instagram">
            <span className="tooltip">Instagram</span>
            <span><i className="fab fa-instagram"></i></span>
          </li>
        </a>



      </ul>
    </div>
    <div className="nav-last">
      <p>Feel free to say "Hello !" <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
            fill="currentColor" className="bi bi-emoji-smile-upside-down" viewBox="0 0 16 16">
            <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m0-1a8 8 0 1 1 0 16A8 8 0 0 1 8 0" />
            <path
              d="M4.285 6.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 4.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 3.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M7 9.5C7 8.672 6.552 8 6 8s-1 .672-1 1.5.448 1.5 1 1.5 1-.672 1-1.5m4 0c0-.828-.448-1.5-1-1.5s-1 .672-1 1.5.448 1.5 1 1.5 1-.672 1-1.5" />
          </svg></span></p>
    </div>
  </div>

  {/* <!-- ====================Loader ========================================== -->

  <!-- ===============================Scroll bar=========================== --> */}

  <div className="scroll-indicator">
    <div className="progress-bar"></div>
  </div>

  {/* <!-- ===============================Scroll bar=========================== --> */}
  </>
  )
}

export default Header