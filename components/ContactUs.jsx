import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ContactUs = ({ num }) => {
  
  const toast_success = () => { toast('Email Sent!'); }
  const toast_fail = () => { toast('Error'); }
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rsyaonc', 'template_p83nfjr', form.current, '7jHtCbxop4BW2nz9r')
      .then((result) => {
          document.getElementById("buttonSubmit").innerHTML="Sent!";
          buttonSubmit.classList.add('text-center', 'w-full', 'p-3', 'rounded-2xl', 'font-semibold', 'text-white', 'bg-green-400', 'mt-14');

          console.log(result.text);
          toast_success();
      }, (error) => {
          console.log(error.text);
          toast_fail();
      });
  };

  return (
    <div id = "contact-us" className = 'justify-center bg-blue-400'>
        <div data-aos="fade-right" className = ' sm:flex sm:gap-5 p-5 sm:justify-center sm:p-10'>
          <div className = 'text-white uppercase font-semibold  text-8xl'>
              <div className='md:flex hidden'>We&apos;ll</div>
              <div className='md:flex hidden'>Be In</div>
              <div className='md:flex hidden'>Touch</div>
          </div>
          <div className='text-white uppercase text-center  text-4xl font-semibold md:hidden'>
            We&apos;ll Be in Touch
          </div>
          <form ref = {form} onSubmit = {sendEmail} className = 'mt-3 mb-5'>
            <div className = 'flex gap-20 '>
              <div className = 'flex flex-col gap-10'>
                <div>
                  <label className = 'text-white' for="fname">First name:</label>
                  <input className = 'rounded-lg p-2 outline-1 outline-white w-full' type="text" id="fname" name="fname"/>
                </div>
                <div>
                  <label className = 'text-white' for="lname">Last name:</label>
                  <input className = 'rounded-lg p-2 outline-1 outline-white w-full' type="text" id="lname" name="lname"/>
                </div>
              </div>
              <div>
              <div className = 'flex flex-col gap-10'>
                <div>
                  <label className = 'text-white' for="phonenumber">Phone Number:</label>
                  <input className = 'rounded-lg p-2 outline-1 outline-white w-full' type="text" id="phonenumber" name="phonenumber"/>
                </div>
                <div>
                  <label className = 'text-white' for="email">Email:</label>
                  <input className = 'rounded-lg p-2 outline-1 outline-white w-full' type="text" id="email" name="email"/>
                </div>
              </div>
              </div>
            </div>
  
            <div>
            <div id = "buttonSubmit">
             <button style = {{'border-width': '3px', 'border-color': 'white'}} className = 'text-center w-full p-3 rounded-2xl font-semibold hover:text-blue-400 text-white transition ease-in bg-blue-400 hover:bg-white mt-14'>Send</button>
            </div>
              <ToastContainer
  position="top-right"
  autoClose={5000}
  hideProgressBar={true}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  toastStyle = {{'background-color': 'rgb(34 197 94)', 'color': 'white', 'border-radius': '1rem', 'padding': '15px'}}
  />
            </div>
          </form>
        </div>
      </div>
  )
}

export default ContactUs