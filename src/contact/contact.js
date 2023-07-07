import React from 'react';
import './contact.scss';
import Form from '../form/form.js';


const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-container'>
        <div className='contact-head' data-aos="zoom-in-right" data-aos-duration="1000"> 
          <h1>Contact </h1>


        </div>
        <div className='contact-content'>
          <div className='content1 ' >
            <div className='address' data-aos="zoom-in" data-aos-duration="1000" >
              <div><i class="fa fa-map-marker" aria-hidden="true"></i></div>
              <h2>LOCATION</h2>
              <a href='#' >Tenkasi</a>
            </div>
            <div className='address' data-aos="zoom-in" data-aos-duration="1000">
              <div><i class="fa fa-phone" aria-hidden="true"></i></div>
              <h2>CALL</h2>
              <a href='#' >+91 8148443938</a>
            </div>
            <div className='address' data-aos="zoom-in" data-aos-duration="1000">
              <div><i class="fa fa-envelope-o" aria-hidden="true"></i></div>
              <h2>EMAIL</h2>
              <a href='#' >ealimchitfund@gmail.com</a>
            </div>
            <div className='address' data-aos="zoom-in" data-aos-duration="1000">
              <div><i class="fa fa-clock-o" aria-hidden="true"></i></div>
              <h2>WORKINH HOURS</h2>
              <a href='#' >All Days <br/> 10:00AM - 07:00PM</a>
            </div>
            
          </div>
          
          <div className='content2' data-aos="zoom-in" data-aos-duration="1000" >
            <Form />
        
          </div>
        
        </div>


      </div>


    </div>
  )
}

export default Contact