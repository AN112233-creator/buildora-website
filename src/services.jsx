
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
 import './services.css'
import  logo from './assets/Logos/LOGO.png'

import  facebook from './assets/Logos/facebook-logo.png'
import  twitter from './assets/Logos/x-logo.png'
import  instagram from './assets/Logos/instagram-logo.png'
 import  google from './assets/Logos/google-plus.png' 
 import  socials from './assets/Logos/social.png' 
 import  socialsAlign from './assets/Logos/social-align.png' 
 import  socialsWhite from './assets/Logos/social-mainw.png' 




function Services (){


  
  
  const year = new Date().getFullYear()
 

          const [isOpen, setIsOpen] = useState(false)

          const toggleMenu = () => {
            setIsOpen(!isOpen)


          }

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

          const [isHover, setIsHover] = useState(false)

          const handleMouseEnter = () => {
            setIsHover(true);  
          };
          const handleMouseLeave = () => {
            setIsHover(false);  
          };

          const [isVisible, setIsVisible] = useState(false)

          const toggleSocials = () => {
           setIsVisible(!isVisible)
           console.log('links are visible')
          }






  return(
 
 <>

  <div className="Services-Landing-page">
          <nav className={isOpen ? "nav-active" : ""} id='navbar'>
    
              <a href="Home" className='logo-link'>
            <div className='logo' >
              <img src={logo} alt="LoGo" />
              <p className={`logo-text ${isOpen ? "active" : ""}`}>Buildora Construction</p>
            </div>
            </a>
            <ul className={isOpen ? "open" : ""}>
              <li><Link to = "/" > Home</Link></li>
              <li> <Link to = "/about"  className= {`${isHover ? "" : ""}`} 
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}>About Us</Link></li>
              {/*  <div  className= {`team ${isHover ? "OurTeam" : ""}`} onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}>Our Team</div> */}
              <li  className= {`team ${isHover ? "OurTeam" : ""}`} onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}><Link  to= "/Team"> Our Team</Link></li>
              <li className='show-small'><Link  to= "/Team"> Our Team</Link></li>
              <li><Link to = "/projects">Projects</Link></li>
              <li><Link to = "/services" className='active'>Services</Link></li>
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
         
        
          <main className='main'>
          <h4 className='we-propose'>We propose</h4>
          <p className='Best-services'>Best services</p>
         
         </main>
         </div> 
 
  
 <h1>Services Page</h1>
 <h2>Coming Soon!</h2>
  
</>
)
}


export default Services