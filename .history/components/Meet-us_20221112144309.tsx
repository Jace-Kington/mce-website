import React from 'react'
import Image from 'next/image'
import image_2 from '../assets/ty-photo.png'


const MeetUs = () => {
  return (
    <div id = "meet-us" className = 'max-w-[100%]'>
        <div className = 'text-blue-400 uppercase font-semibold text-center'>Meet the Team</div>

        <div className = 'justify-center flex gap-10 m-10'>
            <div>
              <Image alt = "" className = 'rounded-2xl shadow-2xl shadow-blue-400 grayscale h-72 w-44' src = {image_2}/>
            </div>
            <div>
                <div className = 'uppercase text-lg'>CEO & Founder</div>
                <div className = 'text-6xl text-blue-400 pb-10'>Ty Hill</div>
                <div className = 'text-lg'>
                  <div className = ''>Networking & Connections Driven, </div>
                  <div>with a Strong Focus on Client Relationships,</div>
                  <div>Quality Workmanship & Safety.</div>
                </div>
                
            </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 320"><path fill="#60a5fa" fill-opacity="1" d="M0,288L48,256C96,224,192,160,288,149.3C384,139,480,181,576,170.7C672,160,768,96,864,112C960,128,1056,224,1152,266.7C1248,309,1344,299,1392,293.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
  )
}

export default MeetUs