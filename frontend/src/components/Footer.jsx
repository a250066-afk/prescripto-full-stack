import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Prescripto is a full-stack web application designed to automate and streamline doctor appointment bookings for clinics and hospitals. Built on the MERN stack (MongoDB, Express.js, React.js, Node.js), the platform offers three-tier role-based authentication (patient, doctor, admin), real-time appointment scheduling, and secure payment integration via Razorpay/Stripe. By replacing manual processes with a centralized digital solution, Prescripto reduces administrative overhead, minimizes scheduling errors, and enhances patient satisfaction.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91-842-104-9659</li>
            <li>joshisopixel@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>© Prescripto 2025. All right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
