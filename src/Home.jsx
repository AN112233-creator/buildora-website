import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css' 
import  logo from './assets/Logos/LOGO.png'

import  facebook from './assets/Logos/facebook-logo.png'
import  twitter from './assets/Logos/x-logo.png'
import  instagram from './assets/Logos/instagram-logo.png'
 import  google from './assets/Logos/google-plus.png' 
 import  socialsWhite from './assets/Logos/social-mainw.png' 

import  firstImage from './assets/Images-Home/1.IMG_1450.jpg'

import TestimonialSlider from './Slider/Slider.jsx'



function Home (){


  const year = new Date().getFullYear();
 

          const [isOpen, setIsOpen] = useState(false);

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




  return (
    <>
    
      <div className="landing-page"> 
      <div className="Landing-page">
      <nav className={isOpen ? "nav-active" : ""} id='navbar'>

          <a href="Home" className='logo-link'>
        <div className='logo' >
          <img src={logo} alt="LoGo" />
          <p className={`logo-text ${isOpen ? "active" : ""}`}>Buildora Construction</p>
        </div>
        </a>
        <ul className={isOpen ? "open" : ""}>
          <li><Link to = "/" className='active'> Home</Link></li>
          <li> <Link to = "/about"  className= {`${isHover ? "" : ""}`} 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>About Us</Link></li>
             {/*  <div  className= {`team ${isHover ? "OurTeam" : ""}`} onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}>Our Team</div> */}
             <li  className= {`team ${isHover ? "OurTeam" : ""}`} onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}><Link  to= "/Team"> Our Team</Link></li>
             <li className='show-small'><Link  to= "/Team"> Our Team</Link></li>
          <li><Link to = "/projects">Projects</Link></li>
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
      <h4 className='kumasi'>Kumasi, ghana</h4>
      <p className='multi'>Mutlipurpose lecture halls, KNUST Constructed by BUILDORA</p>
      <button  className= {`custom-button ${isOpen ? "no-display" : ""}`}>
        <span className='line left'></span>
        explore 
        <span className='line  right'></span>
        </button>
     </main>
     </div> 
     <section className='section-one'>
          <div className="experience-box">
            <span className="number">40</span>
            <span className="text">YEARS OF EXPERIENCE</span>
          </div>

          <div className="small-about-home">
            <p className='About-home'>ABOUT US</p>
            <h4 className='who-we-are'>Who we are</h4>
            <p className="main-text-home">Buildora Construction has a good history of over 40 years in the construction industry in Ghana in diverse areas of infrastructure development.Buildora Construction is today one of the largest contractors in Ghana. We have successfully completed some of the most challenging infrastructure projects in the country and hoping to cross over through West Africa.</p>
           <p className="sapce-up-home"> Buildora Construction undertakes both government and private sector contracts, and has set high standards in meeting the special needs and demands of every project.</p>
          </div>
      </section>

      <section className="section-two">
        <p className='project'>
          Projects
        </p>
        <h2 className='make-it'>Make it with passion.</h2>
       
        <div className="image-description-home">
          
          <div className=''>
             <p className='description-home'>6-Storey offices and Classrooms (Accra city campus) for KNUST institute of distance learning at Adenta – Accra</p>
          <div className="read">
            <p className='read-word'>READ</p>
          <span className="arrow-left arrow">&#8594;</span>
          </div>

          </div>
         
         <div className="image-one-home">
          <img  className='img'  src={firstImage} alt="our projects" width= "600" height= "400"/>
          </div>
        </div>
      </section>
      <section className="section-three">
       
        <div className="image-description-two-home">
          
          <div className=''>
             <p className='description-home'>Construction for School of Nursing, KNUST</p>
          <div className="read">
            <p className='read-word'>READ</p>
          <span className="arrow-left arrow">&#8594;</span>
          </div>

          </div>
         
         <div className="image-one-home">
          <img   src={firstImage} alt="our projects" width= "600" height= "400"/>
          </div>
        </div>

        <button  className= {`custom-button-two ${isOpen ? "no-display" : ""}`}>
        <span className='line-two left'></span>
        LOAD MORE 
        <span className='line-two  right'></span>
        </button>
      </section>
       </div> 

       <div className="testimonials">

        <div className="test-monial">
       <p className='About'>Testiomonials</p>
       <h4 className='who-we-are'> What our Clients Say About Us</h4>

       <TestimonialSlider /> 
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

    

    
      



    </>
  )



}

export default Home