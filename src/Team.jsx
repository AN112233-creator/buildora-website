import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
 import './Team.css'
import  logo from './assets/Logos/LOGO.png'

import  facebook from './assets/Logos/facebook-logo.png'
import  twitter from './assets/Logos/x-logo.png'
import  instagram from './assets/Logos/instagram-logo.png'
 import  google from './assets/Logos/google-plus.png' 
 import  socials from './assets/Logos/social.png' 
 import  socialsAlign from './assets/Logos/social-align.png' 
 import  socialsWhite from './assets/Logos/social-mainw.png' 
 
 import  chief from './assets/imges-our-team/ceo-director-scaled.webp'
 import  manager from './assets/imges-our-team/managing-dir-scaled.jpg'
 import  director from './assets/imges-our-team/managing-director.webp'


function Team (){


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
 
  const [isHoverManager, setIsHoverManager] = useState(false)

  const handleMouseEnterManager = () => {
    setIsHoverManager(true);  
  };
  const handleMouseLeaveManager = () => {
    setIsHoverManager(false);  
  };
 
  const [isHoverDirector, setIsHoverDirector] = useState(false)

  const handleMouseEnterDirector = () => {
    setIsHoverDirector(true);  
  };
  const handleMouseLeaveDirector = () => {
    setIsHoverDirector(false);  
  }; 
  const [isHoverChief, setIsHoverChief] = useState(false)

  const handleMouseEnterChief = () => {
    setIsHoverChief(true);  
  };
  const handleMouseLeaveChief = () => {
    setIsHoverChief(false);  
  }; 


  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 0) {
        navbar.classList.add('white-nav');
      }  else {
        navbar.classList.remove('white-nav');
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

  return  (
  
  <>
 
  <div className="page">
  <nav className={`nav-team ${isOpen ? "nav-active-team" : ""}`} id='navbar'>
     
    
              <a href="about.jsx" className='logo-link'>
            <div className='logo' >
              <img src={logo} alt="LoGo" />
              <p className={`logo-text ${isOpen ? "active" : ""}`}>Buildora Construction</p>
            </div>
            </a>
            <ul className={`unordered-list ${isOpen ? "open" : ""}`}>
              <li><Link to = "/"className='nav-items' >Home</Link></li>
              <li> <Link to = "/about"/*  className= {`active ${isHover ? "" : ""}`} */ 
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave} className='nav-items'>About Us</Link></li>
               <li  className= {`team  nav-items ${isHover ? "OurTeam" : ""}`} onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}><Link  to= "/Team" className='active' nav-items> Our Team</Link></li>
               <li className='show-small'><Link  to= "/Team" className='active-client nav-items' > Our Team</Link></li>
              <li> <Link to = "/projects" className='nav-items'>Projects</Link></li>
              <li><Link to = "/services" className='nav-items'>Services</Link></li>
              <li><Link to = "/clients" className='nav-items'>Clients</Link></li>
              <li><Link to = "/contacts" className='nav-items'>Contact us</Link></li>
              <li><Link to = "/blogs" className='nav-items'>Blog</Link></li>
            </ul>
    
            <div className="icons">
            
                  <div className= {`menu-icon-client ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                    </div> 
    
                     <div className='toggle-social-links ' onClick={toggleSocials}>
                                     <img src={socials} alt="social" className={`links-client ${isOpen ? "active" : ""}`}/>
                                    </div>
            </div>
          
          </nav>
           <div className= {`socials-nav ${isVisible ? "links-visible" : ""}`}>
                           <a href="#"> <img src= {facebook} alt="face" /></a>
                           <a href="#"> <img src= {instagram} alt="insta" /></a>
                           <a href="#"> <img src= {twitter} alt="twit" /> </a>
                           <a href="#"> <img src= {google} alt="goo" /></a> 
                           </div>
          <main className='main-team'>
         <h4 className='about-our-team-team'>ABOUT OUR TEAM</h4>
         <p className='we-are-based-team'>We are based on collective work
         <span className='and-share-team'>and shared knowledge</span></p>
         </main>
          </div>
             

          <div className='our-expert-column'>
          <p className='our-team-team'>
          TEAM
        </p>
        <h2 className='experts-ready'>Experts ready to serve.</h2>
        </div>

        <div className="directors">

          <div className="director">
            <div /* className="line-and-title" */ className={`line-and-title ${isHoverChief ? "show-title" : "" }`}>
            <p className='title'>Founder/Ceo(Director)</p>
            <div className="line-ontop"></div>
            </div>
            <img src={chief} alt="chief" width= "400" height= "400" className='directors-image' onMouseEnter={handleMouseEnterChief} onMouseLeave={handleMouseLeaveChief}/>
            <p className="name-director">Kwaku Osei-Asibey
            </p>
          </div>
         
          <div className="director">
          <div /* className="line-and-title" */  className={`line-and-title ${isHoverDirector ? "show-title" : "" }`}>
          <p className='title'>Managing Director</p>
          <div className="line-ontop"></div>
          </div>
            <img src={director} alt="chief" width= "400" height= "400" className='directors-image' onMouseEnter={handleMouseEnterDirector} onMouseLeave={handleMouseLeaveDirector}/>
            <p className="name-director">Nana Kwaku Osei Asibey</p>
          </div>
         
          <div className="director">
           <div /* className="line-and-title" */ className={`line-and-title ${isHoverManager ? "show-title" : "" }`}>
            <p className='title-three'>General Manager/contracts Manager</p>
             <div className="line-ontop"></div>
          </div>
            <img src={manager} alt="chief" width= "400" height= "400" className='directors-image' onMouseEnter={handleMouseEnterManager} onMouseLeave={handleMouseLeaveManager}/>
            <p className="name-director">Jones Aboagye Nyame</p>
          </div>
        </div>

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
 
  </>)
}

export default  Team