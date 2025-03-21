  import React from "react";
  import {Swiper, SwiperSlide } from "swiper/react"
  import {Navigation, Pagination, Autoplay} from "swiper/modules"
  import "swiper/css";             
  import "swiper/css/navigation";  
  import "swiper/css/pagination";
  import './slider.css'

  

  import knustLogo from '../assets/Logos/knust-logo.png';
  import goilLogo from '../assets/Logos/goil-logo.png';
  import stuLogo from '../assets/Logos/stu-logo.png'; 
  import gctuLogo from '../assets/Logos/gctu-logo.jpg'; 
 




  
 




  const TestimonialSlider = () => {
    const testimonials  = [

      {
        title:'KNUST',
        logo: knustLogo,
        text:  'Buildora is Known for their quality works and well thought-through construction procedure',
        date: "sep 30, 2024"
      },
      {
        title:'GOIL',
        logo: goilLogo,
        text:  'Buildora construction is reliable and professional in construction work',
        date: "aug 20, 2024"
      },
      {
        title:'STU',
        logo: stuLogo,
        text:  'Buildora construction provide services with attention to detail',
        date: "march 30, 2022"
      },
      {
        title:'GCTU',
        logo: gctuLogo,
        text:  'They are a great company to work with',
        date: "sep 13, 2021"
      },
  
    ];

    return (
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true,
          color: "black"
         }}
        autoplay={{ delay: 5000, 
          disableOnInteraction: false
        }}
        loop={true}
        speed={1400}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index} className="swiper">
            <div style={{ textAlign: "center", padding: "20px", margin: "40px" }}>
              <img src={item.logo} alt={item.title} width="100" />
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <small>{item.date}</small>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };
  
  




export default TestimonialSlider

 