import React, { useState, useEffect } from "react";
import Image from 'next/image'
import image_2 from '../assets/logo-1.png'
import Link from 'next/link'
import heroImage from '../assets/hero-image.jpg'

const Navbar = () => {
 

  return (
    <div id = "home" className=''>

      <nav className='flex fixed top-0 bg-white z-10 w-full mb-10 rounded-b-2xl shadow-lg justify-between items-center md:hidden'>
         <Image alt = "" src={image_2} className=' p-1 h-28 w-28' />
         
         <a className='bg-blue-400 hover:bg-blue-500 transition ease-in rounded-2xl p-3 mr-3' href="#contact-us">
              <span className='text-white'>Enquire Now</span>
           </a>
      </nav>

      <nav className=' md:flex fixed bg-white top-0 z-10 rounded-b-2xl shadow-lg left-0 right-0 hidden md:justify-between items-center pl-5 pr-5'>
        <Image alt = "" src={image_2} className=' p-2 h-28 w-28' />
        <div className='flex gap-10 items-center'>
          <a className='hover:text-blue-400 transition ease-in' href='#services-section'>
            Services
          </a>

          <a className='hover:text-blue-400 transition ease-in ' href="#meet-us">
            Team
          </a>

          <div className=''>
            <a className='bg-blue-400 hover:bg-blue-500 transition ease-in rounded-2xl p-3' href="#contact-us">
              <span className='text-white'>Enquire Now</span>
            </a>
          </div>

        </div>
      </nav>

      <div data-aos="fade-up-right" className='sm:flex sm:items-center mt-32  sm:justify-between'>
        <div className='text-center sm:text-left text-blue-400 mt-12 ml-0 sm:ml-12'>
          <div className='text-5xl sm:text-5xl'>
            The Best 
          </div>
          <strong className='text-5xl sm:text-7xl'>Trade Services</strong>
          <div className='text-5xl sm:text-5xl'>
            On the Sunny Coast
          </div>

          <div className='outline-rounded mt-12 bg-white'>
            <a  style = {{'border-width': '4px', 'border-color': '#60a5fa'}} className='rounded-2xl hover:bg-blue-400 hover:text-white transition p-4' href="#contact-us">
              Get Started
            </a>
          </div>
        </div>
        <div className='md:flex md:items-center hidden'>
            <Image className = 'rounded-3xl' src = {heroImage} height = {250} width = {500}/>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#60a5fa" fill-opacity="1" d="M0,192L48,186.7C96,181,192,171,288,160C384,149,480,139,576,144C672,149,768,171,864,197.3C960,224,1056,256,1152,261.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
  )
}

export default Navbar