import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
 import './Project.css'
import  logo from './assets/Logos/LOGO.png'

import  facebook from './assets/Logos/facebook-logo.png'
import  twitter from './assets/Logos/x-logo.png'
import  instagram from './assets/Logos/instagram-logo.png'
 import  google from './assets/Logos/google-plus.png' 

 import  socials from './assets/Logos/social.png' 
 import  socialsAlign from './assets/Logos/social-align.png' 
 import  socialsWhite from './assets/Logos/social-mainw.png' 


function Blog (){

  
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
        navbar.classList.add('black-nav-client');
      }  else {
        navbar.classList.remove('black-nav-client');
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

 <nav className={`nav ${isOpen ? "nav-active-client" : ""}`} id='navbar'>
     
               <a href="about.jsx" className='logo-link'>
             <div className='logo' >
               <img src={logo} alt="LoGo" />
               <p className={`logo-text ${isOpen ? "active" : ""}`}>Buildora Construction</p>
             </div>
             </a>
             <ul className={`unordered-list ${isOpen ? "open" : ""}`}>
               <li ><Link to = "/" className='nav-items'>Home</Link></li>
               <li> <Link to = "/about"  className= 'nav-items'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>About Us</Link></li>
                {/* <div  className= {`team ${isHover ? "OurTeam" : ""}`} onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}>Our Team</div> */}
                <li  className= {`team ${isHover ? "OurTeam" : ""}`} onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}><Link  to= "/Team"> Our Team</Link></li>
                <li className='show-small'><Link  to= "/Team" className='nav-items' > Our Team</Link></li>
               <li > <Link to = "/projects" className='nav-items'>Projects</Link></li>
               <li ><Link to = "/services" className='nav-items'>Services</Link></li>
               <li ><Link to = "/clients" className=' nav-items'>Clients</Link></li>
               <li ><Link to = "/contacts" className='nav-items'>Contact us</Link></li>
               <li><Link to = "/blogs" className='active-client nav-items'>Blog</Link></li>
             </ul>
     
             <div className="icons">
             
                   <div className= {`menu-icon-client ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                     <div className="bar1"></div>
                     <div className="bar2"></div>
                     <div className="bar3"></div>
                     </div> 
     
                    {/*  <div className={`links-client ${isOpen ? "active" : ""}`}>
                       is
                     </div> */}
                      <div className='toggle-social-links-client' onClick={toggleSocials}>
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
  
    <div className="container">  
{/*   <div className="background-text">
            <span>P</span>
            <span>E</span>
            <span>O</span>
            <span>P</span>
            <span>L</span>
            <span>E</span>
        </div> */}  
            <svg className="background-text">
            <text  x="50%" y="50%" textAnchor="middle">BLOG</text>
        </svg> 
        <p className='Ambitious'>NEWSLETTER</p>
        <h2 className='work-with'>Here we share our ideas.</h2>
       {/*  <p className="subheading">AMBITIOUS CLIENTS</p>
        <h2 className="main-text">We have worked with great people.</h2> */}
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

  </>
  
)
}

export default Blog;