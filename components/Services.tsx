import React from 'react'
import Image from 'next/image'
import domestic from "../assets/domestic.jpg"
import industrial from "../assets/industrial.webp"
import commercial from "../assets/commercial.webp"

const Services = () => {
  return (
    <div id = 'services-section' className = 'bg-blue-400'>
        <div className = 'text-white text-center font-semibold text-lg uppercase underline-offset-1'>Our Services</div>
        <div data-aos="fade-right" className = 'sm:grid hidden sm:grid-cols-2 items-center justify-center m-10 '>
            <div data-aos="fade-up-right" className = 'mb-12'>
                <div className = 'text-white text-3xl sm:text-6xl font-bold mb-5'>Commercial</div>
                <div className = 'text-white text-lg leading-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque culpa at enim rem deleniti, doloribus veritatis iusto reiciendis totam cum aliquid tempore adipisci. </div>
            </div>
            <div data-aos="fade-right" className = ' mb-20'>
                <Image className = 'rounded-2xl h-88 w-96 text-center block m-auto shadow-2xl' src = {commercial}/>
            </div>
            <div data-aos="fade-right" className = "mb-12 items-center">
                <Image className = 'rounded-2xl mb-10 shadow-2xl' src = {industrial}/>
            </div>
            <div data-aos="fade-up-right" className = "mb-20 sm:ml-12 items-center">
                <div className = 'text-white text-3xl sm:text-6xl mb-5 font-bold'>Industrial</div>
                <div className = 'text-white leading-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sit, est fugiat quis aliquid dolore asperiores velit ducimus </div>
            </div>
             <div data-aos="fade-up-right" className = 'mr-12 mb-12'>
                <div className = 'text-white text-3xl sm:text-6xl mb-5 font-bold'>Domestic</div>
                <div className = 'text-white text-lg leading-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque culpa at enim rem deleniti, doloribus veritatis iusto reiciendis totam cum aliquid tempore adipisci. </div>
            </div>
            <div data-aos="fade-right" className = ''>
                <Image className = 'shadow-2xl rounded-2xl' src = {domestic}  alt = ""/>
            </div>
            
            <div className = 'sm:hidden'>
            </div>
        </div>
        <svg className = 'bg-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#60a5fa" fill-opacity="1" d="M0,64L48,106.7C96,149,192,235,288,240C384,245,480,171,576,149.3C672,128,768,160,864,181.3C960,203,1056,213,1152,202.7C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
    </div>
  )
}

export default Services