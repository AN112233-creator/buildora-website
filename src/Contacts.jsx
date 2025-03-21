
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from 'emailjs-com';


import './contacts.css'
import  logo from './assets/Logos/LOGO.png'

import  facebook from './assets/Logos/facebook-logo.png'
import  twitter from './assets/Logos/x-logo.png'
import  instagram from './assets/Logos/instagram-logo.png'
 import  google from './assets/Logos/google-plus.png' 

 import  socials from './assets/Logos/social.png' 
 import  socialsAlign from './assets/Logos/social-align.png' 
 import  socialsWhite from './assets/Logos/social-mainw.png' 

function Contact (){

    const [formData, setFormData] = useState({
      name: '', 
      phone: '',
      email: '', 
      message: ''
    })

  const handleFormChange = (e) => {
    setFormData({...formData,
       [e.target.name]: e.target.value
      });

  }; 

   const sendEmail = (e) => {

    e.preventDefault();

    console.log('Form Data:', formData)

    emailjs.send(
      'service_aqjnx58',  // SERVICE ID
      'template_p52sdkx', // TEMPLATE ID
      
      formData,
      'Ut6brapGiZsw6tqFF' // PUBLIC KEY

    ).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      },
      (error) => {
        console.log('FAILED...', error);
        alert('Failed to send message')
      }
    ).then(() => {
      setFormData({
        name: '', 
        phone: '',
        email: '', 
        message: ''
      })
    })
  } 
    
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


  
  



  return (
  
  
  <>

<div className="Contacts-Landing-page">
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
             <li className='show-small'><Link to= "/Team"> Our Team</Link></li>
             <li><Link to = "/projects">Projects</Link></li>
             <li><Link to = "/services">Services</Link></li>
             <li><Link to = "/clients">Clients</Link></li>
             <li><Link to = "/contacts" className='active'>Contact us</Link></li>
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
        
       
         <main className='contact-main'>
         <h4 className='contact-us'>contact us</h4>
         <p className='relation'>Let's establish relations : )</p>
        </main>
        </div> 
        
      <div className="contact-form-section">
     <div>
      <p className='contact-at-contact'>Contact</p>
      <h3 className='start-new-project'>Let's start new project.</h3>
      <p className='contact-text'>Now, as you were able to get a picture of who we are, it is up to you to contact us and lay the foundation for a new and successful business relationship. Our team consists</p>
      <div className="contact-phone-and-email">
      <div className='contact-phone-details'>
      <div className="line-horizon-at-contact"></div>
      <p className='phone-email'>PHONE</p>
      <a href="tel:0203325968" className='phone-number'>0203325968</a>
      <br />
      <a href="tel:0203325968" className='phone-number'>0203325968</a>
      </div>

      <div className='contact-email-details'>
      <div className="line-horizon-at-contact"></div>
      <p className='phone-email'>EMAIL</p>
      <a href="mailto:buildorconstruction@gmail.com" className='phone-number'>buildorconstruction@gmail.com</a>
      </div>
      </div>
     </div>

     <div className="contact-form">
        <form  onSubmit={sendEmail} >
            <div className="inputs">
              <input type="text" className='input-field' placeholder='Name' name='name' value={formData.name} onChange={handleFormChange}  />
              <br />
              <input type="text" className='input-field' placeholder='Phone'name='phone' value={formData.phone} onChange={handleFormChange} />
              <br />
              <input type="text" className='input-field' placeholder='example@gmail.com' name='email' value={formData.email} onChange={handleFormChange} />
              </div>
              <div className="text-submit">
              <textarea name="message" id="" className='text-field' placeholder='Message'  value={formData.message} onChange={handleFormChange}  />
            <input type="submit" className='submit-button' />
            </div>

        </form>
     </div>
     </div>

      <div className="main-location">
     <div>
     <p className='contact-at-location'>LOCATIONS</p>
     <h3 className='meet-us'>Meet Us in your City.</h3>
     </div>

     <div className='background-image'>
      <div className='background-image-line'></div>
      <p className='kum'>kumasi</p>
      <p className='opposite-ghana'>Opposite the Ghana Cooperative Credit Union Association, Asafo -Kumasi</p>
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

export default Contact