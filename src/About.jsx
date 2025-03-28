
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHome, faComments, faPuzzlePiece, faBridgeWater, faWrench,faLayerGroup, faLightbulb, faBolt, faBuilding } from '@fortawesome/free-solid-svg-icons';
import './about.css' 
import  logo from './assets/Logos/LOGO.png'
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons/faShieldAlt';
import  facebook from './assets/Logos/facebook-logo.png'
import  twitter from './assets/Logos/x-logo.png'
import  instagram from './assets/Logos/instagram-logo.png'
 import  google from './assets/Logos/google-plus.png' 
 import  socials from './assets/Logos/social.png' 
 import  socialsAlign from './assets/Logos/social-align.png' 
 import  socialsWhite from './assets/Logos/social-mainw.png' 


function  About () {

  const year = new Date().getFullYear()
  
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)


  }

  const [isHover, setIsHover] = useState(false)

  const handleMouseEnter = () => {
    setIsHover(true);  
  };
  const handleMouseLeave = () => {
    setIsHover(false);  
  };


  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 0) {
        navbar.classList.add('black-nav');
      }  else {
        navbar.classList.remove('black-nav');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isVisible, setIsVisible] = useState(false)

  const toggleSocials = () => {
   setIsVisible(!isVisible)
   console.log('links are visible')
  }

 



  return (

    <>
    
    
         <div className="page">
         <nav className={isOpen ? "nav-active" : ""} id='navbar'>
   
             <a href="about.jsx" className='logo-link'>
           <div className='logo' >
             <img src={logo} alt="LoGo" />
             <p className={`logo-text ${isOpen ? "active" : ""}`}>Buildora Construction</p>
           </div>
           </a>
           <ul className={isOpen ? "open" : ""}>
             <li><Link to = "/">Home</Link></li>
             <li> <Link to = "/about"  className= {`active ${isHover ? "" : ""}`} 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>About Us</Link></li>
              <li  className= {`team ${isHover ? "OurTeam" : ""}`} onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}><Link  to= "/Team"> Our Team</Link></li>
              <li className='show-small'><Link  to= "/Team"> Our Team</Link></li>
             <li> <Link to = "/projects">Projects</Link></li>
             <li><Link to = "/services">Services</Link></li>
             <li><Link to = "/clients">Clients</Link></li>
             <li><Link to = "/contacts">Contact us</Link></li>
             <li><Link to = "/blogs">Blog</Link></li>
           </ul>
   
           <div className="icons">
           
                 <div className= {`menu-icon ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                   <div className="bar1"></div>
                   <div className="bar2"></div>
                   <div className="bar3"></div>
                   </div> 
   
                   {/* <div className={`links ${isOpen ? "active" : ""}`}>
                     is
                   </div> */}
                    <div className='toggle-social-links' onClick={toggleSocials}>
                                    <img src={socialsWhite} alt="social" className={`links ${isOpen ? "active" : ""}`}/>
                                   </div>
           </div>
         
         </nav>
          <div className= {`socials-nav ${isVisible ? "links-visible" : ""}`}>
                          <a href="#"> <img src= {facebook} alt="face" /></a>
                          <a href="#"> <img src= {instagram} alt="insta" /></a>
                          <a href="#"> <img src= {twitter} alt="twit" /> </a>
                          <a href="#"> <img src= {google} alt="goo" /></a> 
                          </div>
         <main>
        <h4 className='about-our-team'>ABOUT OUR TEAM</h4>
        <p className='we-are-based'>We are based on collective work
        <span className='and-share'>and shared knowledge</span></p>
        </main>
         </div>

    <section className="about-us">
         <div className="stats">
         <div className="stat-box">
         <span className="number">40</span>
         <span className="text">YEARS OF EXPERIENCE</span>
         </div>
         <div className="stat-box">  
         <span className="number">34</span>
         <span className="text">Projects Completed</span>
         </div>

         <div className="stat-box"> 
         <span className="number">14</span>
         <span className="text">Awards</span>
         </div>
         <div className="stat-box">
         <span className="number">20</span>
         <span className="text">Happy Clients</span>
        </div>
        </div>
        


        <div className="content">
        <p className='About-about'>ABOUT US</p>
            <h1 className='who-we-are-about'>Who we are</h1>
            <p className="main-text-about">
                Buildora Construction has a good history of over 29 years in the construction industry in Ghana in diverse areas of infrastructure development. 
                Buildora Construction is today one of the largest contractors in Ghana. We have successfully completed some of the most challenging infrastructure 
                projects in the country and hope to cross over through West Africa.
            </p>
            <p className="sapce-up">
                Buildora undertakes both government and private sector contracts and has set high standards in meeting the special needs and demands of every project.
            </p>
        </div>
    </section>

  <section className="our-services">
  <div className="what-we-made">
  <p className='services-services'>SERVICES</p>
  <h1 className='what-we-do'>This is what we do.</h1>
  </div>
   </section>
   <section className="services">
        <div className="service-card">
        <FontAwesomeIcon className='icons-fonts' icon={faBridgeWater}/>
            <h2>Civil Works</h2>
            <p>Best in the market</p>
            <button  className= {`custom-button-two ${isOpen ? "no-display" : ""}`}>
        <span className='line-two left'></span>
        READ
        <span className='line-two  right'></span>
        </button>
           {/*  <button>READ</button> */}
        </div>

        <div className="service-card">
            <FontAwesomeIcon  className='icons-fonts' icon={faPuzzlePiece}/>
            <h2>Earth Works</h2>
            <p>Heavy, Earth moving equipment for construction</p>
            <button  className= {`custom-button-two ${isOpen ? "no-display" : ""}`}>
        <span className='line-two left'></span>
           READ
        <span className='line-two  right'></span>
        </button>
           {/*  <button>READ</button> */}
        </div>

        <div className="service-card">
        <FontAwesomeIcon  className='icons-fonts' icon={faWrench}/>
            <h2>Fire Fighting Systems</h2>
            <p>Installation of fire components of alerting, suppression, and containment features and systems</p>
            <button  className= {`custom-button-two ${isOpen ? "no-display" : ""}`}>
        <span className='line-two left'></span>
        READ
        <span className='line-two  right'></span>
        </button>
          {/*   <button>READ</button> */}
        </div>

        <div className="service-card">
        <FontAwesomeIcon  className='icons-fonts' icon={faLayerGroup}/>
            
            <h2>Data and Audio-visual Systems</h2>
            <p>Our wide range of products and services offer you unlimited options.</p>
            <button  className= {`custom-button-two ${isOpen ? "" : ""}`}>
        <span className='line-two left'></span>
        READ
        <span className='line-two  right'></span>
        </button>
           {/*  <button>READ</button> */}
        </div>

        <div className="service-card">
        <FontAwesomeIcon  className='icons-fonts' icon={faLightbulb}/>
            <h2>Sewage Management</h2>
            <p>We provide clients with the best sewage management solutions.</p>
            <button  className= {`custom-button-two ${isOpen ? "no-display" : ""}`}>
        <span className='line-two left'></span>
        READ
        <span className='line-two  right'></span>
        </button>
            {/* <button>READ</button> */}
        </div>

        <div className="service-card">
            <i className="fas fa-bolt"></i>
        <FontAwesomeIcon  className='icons-fonts' icon={faBolt}/>
            <h2>Electrical Engineering</h2>
            <p>Providing innovative electrical engineering solutions.</p>
            <button  className= {`custom-button-two ${isOpen ? "no-display" : ""}`}>
        <span className='line-two left'></span>
        READ
        <span className='line-two  right'></span>
        </button>
            {/* <button>READ</button> */}
        </div>

        <div className="service-card">
        <FontAwesomeIcon  className='icons-fonts' icon={faShieldAlt}/>

           
            <h2>Safety</h2>
            <p>Ensuring top-notch safety standards in all projects.</p>
            <button  className= {`custom-button-two ${isOpen ? "no-display" : ""}`}>
        <span className='line-two left'></span>
        READ
        <span className='line-two  right'></span>
        </button>
            {/* <button>READ</button> */}
        </div>

        <div className="service-card">
        <FontAwesomeIcon className='icons-fonts' icon={faBuilding} />
            <h2>Structural Engineering</h2>
            <p>Delivering excellence in structural design and construction.</p>
            <button  className= {`custom-button-two ${isOpen ? "no-display" : ""}`}>
        <span className='line-two left'></span>
        READ
        <span className='line-two  right'></span>
        </button>
            {/* <button>READ</button> */}
        </div>
    </section> 

    <section className="vision-mission">
      <div className="mission">
    <h1 className='Our-mission'>Our Mission</h1>
    <p className='mission-statement'>To be a first-class builder and our client’s first choice contractor and to exceed benchmark standards in quality of work done.</p>
      </div>
      <div className="vision">
    <h1 className='Our-vision'>Our Vision</h1>
    <p className='mission-statement'>To be the first-choice contractor for all projects in west Africa</p>
      </div>
    </section>

    <footer>
            <div className="footer">
            <div className='logo-footer'>
              <img src={logo} alt="logo" />
              <p className='logo-footer-paragraph'>Our mission is to be a first-class builder and our client’s first choice contractor and to exceed benchmark standards in quality of work done.</p>
            </div>
            <div className='footer-contact'>
              <h3>Get In Touch</h3>
              <p className="number-phone"> <a href="tel:0203325968">0203325968/0537192525</a> </p>
              <p className="email"><a href="email:buildorconstruction@gmail.com">buildorconstruction@gmail.com</a></p>
              <p className="location">Locate us: Opposite the Ghana Cooperative Credit Union Association, Asafo -Kumasi</p>
            </div>
            </div>
            <hr />
    
            <div className="copy-right">
              <p className="right-text">
               Buildora Construction (C) {year} ALL RIGHTS RESERVED | Developed By Andrews Naworagyere
              </p>
    
              <div className='footer-socials'>
    
               <a href="#"> <img src= {facebook} alt="face" /></a>
                <a href="#"> <img src= {instagram} alt="insta" /></a>
                <a href="#"> <img src= {twitter} alt="twit" /> </a>
                <a href="#"> <img src= {google} alt="goo" /></a> 
                
                </div>     
            </div>
    
           </footer>

   
         



         </>

    
  )
}

 

export default About
