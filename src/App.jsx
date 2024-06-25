// import { useState, useEffect } from 'react';
// import './css/style.css';
// import './css/animations.css';
// import './css/navbar.css';
// import './css/responsive.css';

// // ==============Components==================
// import Header from './components/Header';
// import Intro from './components/Intro';
// import Projects from './components/projects/Projects';
// import WhatsIKnow from './components/WhatsIKnow';
// import About from './components/About';
// import ContactMe from './components/Contact';
// import Loader from './components/Loader';

// function App() {
//   const [navOpen, setNavOpen] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulating a delay of 2 seconds to mimic page loading
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 2000);

//     // Clear the timeout when the component unmounts
//     return () => clearTimeout(timer);
//   }, []);

//   function handleNavClick() {
//     setNavOpen(!navOpen);
//   }

//   function scrollToSection(sectionId) {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       setNavOpen(false); // Close the navigation first
//       setTimeout(() => {
//         // Wait for the navigation to close before scrolling
//         section.scrollIntoView({ behavior: 'smooth' });
//       }, 300); // Adjust the timeout value as needed
//     }
//   }

//   if (loading) {
//     // Render a loading indicator until the page loads
//     return <div><Loader /></div>;
//   }

//   return (
//     <>
//       <div id='body' className={navOpen ? 'nav-opened' : ''}>
//         <Header navOpen={navOpen} handleNavClick={handleNavClick} scrollToSection={scrollToSection} />
//         <Intro handleNavClick={handleNavClick} />
//         <Projects />
//         <WhatsIKnow />
//         <About />
//         <ContactMe />
//       </div>
//     </>
//   );
// }

// export default App;

import { useState, useEffect } from 'react';
import './css/style.css';
import './css/animations.css';
import './css/navbar.css';
import './css/responsive.css';

// ==============Components==================
import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/projects/Projects';
import WhatsIKnow from './components/WhatsIKnow';
import About from './components/About';
import ContactMe from './components/Contact';
import Loader from './components/Loader';

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay of 2 seconds to mimic page loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  function handleNavClick() {
    setNavOpen(!navOpen);
  }

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      setNavOpen(false); // Close the navigation first
      setTimeout(() => {
        // Wait for the navigation to close before scrolling
        section.scrollIntoView({ behavior: 'smooth' });
      }, 300); // Adjust the timeout value as needed
    }
  }

  return (
    <>
      <div id='body' className={navOpen ? 'nav-opened' : ''}>
        <Header navOpen={navOpen} handleNavClick={handleNavClick} scrollToSection={scrollToSection} />
        <Intro handleNavClick={handleNavClick} />
        <Projects />
        <WhatsIKnow />
        <About />
        <ContactMe />
      </div>
      {loading && (
        <div className="loader-overlay">
          <Loader />
        </div>
      )}
    </>
  );
}

export default App;

