
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
 import './Project.css'
import  logo from './assets/Logos/LOGO.png'

import  facebook from './assets/Logos/facebook-logo.png'
import  twitter from './assets/Logos/x-logo.png'
import  instagram from './assets/Logos/instagram-logo.png'
 import  google from './assets/Logos/google-plus.png' 

import  firstImage from './assets/Images-Home/1.IMG_1450.jpg'
import  secondImage from './assets/Images-projects/Nursing-768x576.jpg'
import  thirdImage from './assets/Images-projects/lab.webp'
import  fourthImage from './assets/Images-projects/Wards.webp'
import  fifthImage from './assets/Images-projects/sanitation.jpg'
import  gas from './assets/Images-projects/gas.jpg'
import  syndicate from './assets/Images-projects/syndicate.webp'
import  library from './assets/Images-projects/library.webp'
import  cabe from './assets/Images-projects/CABE.webp'
import  Science from './assets/Images-projects/science.webp'
import  socials from './assets/Logos/social.png' 
 import  socialsAlign from './assets/Logos/social-align.png' 
 import  socialsWhite from './assets/Logos/social-mainw.png' 

function Projects (){

  
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

    <div className="Landing-page">
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
             <li><Link to = "/projects" className='active'>Projects</Link></li>
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
         <h4 className='exterior'>EXTERIOR & INTERIOR</h4>
         <p className='we-love'>We Love to Create Spaces</p>
        
        </main>
        </div> 

        <section className='projects'>
         
           <div className="image-description">
                   
                   <div className='description-for-hover'>
                      <p className='description'>6-Storey offices and Classrooms (Accra city campus) for KNUST institute of distance learning at Adenta – Accra</p>
                      <p className='construction-for'>Construction for Nursing, KNUST</p>
                   <div className="read">
                     <p className='read-word'>READ</p>
                   <span className="arrow-left arrow">&#8594;</span>
                   </div>
                   </div>
                  
                  <div className="image-one">
                   <img   src={firstImage} alt="our projects" width= "600" height= "400"/>
                   </div>
                 </div>

                  <div className="image-description-two">
                           
                           <div className=' description-for-hover'>
                              <p className='description'>Construction for School of Nursing, KNUST</p>
                              <p className='construction-for'>Construction for Nursing, KNUST</p>
                           <div className="read">
                             <p className='read-word'>READ</p>
                           <span className="arrow-left arrow">&#8594;</span>
                           </div>
                 
                           </div>
                          
                          <div className="image-one">
                           <img   src={secondImage} alt="our projects" width= "600" height= "400"/>
                           </div>
                         </div>

                         <div className="image-description">
                   
                   <div className='description-for-hover'>
                      <p className='description'>Construction of four-storey multipurpose laboratory for KNUST, at KNUST-Kumasi</p>
                      <p className='construction-for'>Construction of four-storey multipurpose laboratory for KNUST, at KNUST-Kumasi</p>
                   <div className="read">
                     <p className='read-word'>READ</p>
                   <span className="arrow-left arrow">&#8594;</span>
                   </div>
         
                   </div>
                  
                  <div className="image-one">
                   <img   src={thirdImage} alt="our projects" width= "600" height= "400"/>
                   </div>
                 </div>

                 <div className="image-description-two">
                           
                           <div className='description-for-hover'>
                              <p className='description'>Three storey medical wards and offices, Pentecost Hospital – Madina</p>
                              <p className='construction-for'>Construction of three storey medical wards and offices for the church of Pentecost hospital at Madina</p>
                           <div className="read">
                             <p className='read-word'>READ</p>
                           <span className="arrow-left arrow">&#8594;</span>
                           </div>
                 
                           </div>
                          
                          <div className="image-one">
                           <img   src={fourthImage} alt="our projects" width= "600" height= "400"/>
                           </div>
                         </div>

                        
                         <div className="image-description">
                   
                   <div className='description-for-hover'>
                      <p className='description'>Regional Water and Sanitation Center (Phase II), College of Engineering, KNUST</p>
                      <p className='construction-for'>Regional Water and Sanitation Center (Phase II), College of Engineering, KNUST</p>
                   <div className="read">
                     <p className='read-word'>READ</p>
                   <span className="arrow-left arrow">&#8594;</span>
                   </div>
         
                   </div>
                  
                  <div className="image-one">
                   <img   src={fifthImage} alt="our projects" width= "600" height= "400"/>
                   </div>
                 </div>

                 <div className="image-description-two">
                           
                           <div className='description-for-hover'>
                              <p className='description'>Nine-levels lecture Halls and offices complex</p>
                              <p className='construction-for'>Construction of nine-levels lecture Halls and offices complex for College of Art and built environment, KNUST – Kumasi</p>
                           <div className="read">
                             <p className='read-word'>READ</p>
                           <span className="arrow-left arrow">&#8594;</span>
                           </div>
                 
                           </div>
                          
                          <div className="image-one">
                           <img   src={cabe} alt="our projects" width= "600" height= "400"/>
                           </div>
                         </div>

                         <div className="image-description">
                   
                   <div className='description-for-hover'>
                      <p className='description'>Syndicate Hall</p>
                      <p className='construction-for'>Construction of syndicate hall for university of Energy and natural resource</p>
                   <div className="read">
                     <p className='read-word'>READ</p>
                   <span className="arrow-left arrow">&#8594;</span>
                   </div>
         
                   </div>
                  
                  <div className="image-one">
                   <img   src={firstImage} alt="our projects" width= "600" height= "400"/>
                   </div>
                 </div>

                 <div className="image-description-two">
                           
                           <div className='description-for-hover'>
                              <p className='description'>Construction of Ghana Gas Centre of excellence for E-vehicle and industrial welding technologies for Sunyani Technical University – Phase 1</p>
                              <p className='construction-for'>Construction of Ghana Gas Centre of excellence for E-vehicle and industrial welding technologies for Sunyani Technical University – Phase 1</p>
                           <div className="read">
                             <p className='read-word'>READ</p>
                           <span className="arrow-left arrow">&#8594;</span>
                           </div>
                 
                           </div>
                          
                          <div className="image-one">
                           <img   src={gas} alt="our projects" width= "600" height= "400"/>
                           </div>
                         </div>

                         
                         <div className="image-description">
                   
                   <div className='description-for-hover'>
                      <p className='description'>Library for STU</p>
                      <p className='construction-for'>Construction of library for Sunyani Technical University</p>
                   <div className="read">
                     <p className='read-word'>READ</p>
                   <span className="arrow-left arrow">&#8594;</span>
                   </div>
         
                   </div>
                  
                  <div className="image-one">
                   <img   src={library} alt="our projects" width= "600" height= "400"/>
                   </div>
                 </div>
                         <div className="image-description-two">
                   
                  
                   <div className='description-for-hover'>
                      <p className='description'>Science Park</p>
                      <p className='construction-for'>Construction of Science Park complex at Sunyani Technical University</p>
                   <div className="read">
                     <p className='read-word'>READ</p>
                   <span className="arrow-left arrow">&#8594;</span>
                   </div>
                   
                   </div>
                  
                  
                  <div className="image-one">
                   <img   src={Science} alt="our projects" width= "600" height= "400"/>
                   </div>
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


 
  </>)


}

export default Projects