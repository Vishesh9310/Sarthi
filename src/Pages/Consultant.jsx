import React from 'react'
import Nav from '../Components/navbarConsultation'
import Label from '../Components/label'
import { Link } from 'react-router-dom'
import Footer from '../Components/footer'
import logo from '../assets/jpg/logo1.jpg'
import Consultantform from '../Components/consultantform'

function Consultant() {


  return (
    <>


      <main className='bg-sky-100'>
        <article className='bg-[url(C:\Users\Chauh\007\src\assets\jpg\blue.jpg)] h-fit bg-cover'>
          <Nav />
          <div className='py-10 text-center'>
            <h1 className='text-9xl text-purple-100 font-semibold font-sans my-10'><span className='bg-purple-500 px-4'>Refreshingly</span> easy restaurant tech</h1>
            <p className='flex justify-center pb-10 gap-5'>
              <Link to='/signup' className='py-2 font-bold hover:text-purple-500 hover:border-purple-500 hover:bg-purple-200 text-white px-10 bg-none border-2 border-white rounded-4xl w-50 content-center'>Registration</Link>
              <Link to='/login' className='py-2 font-bold text-none px-10 hover:text-purple-500 hover:border-purple-500 hover:bg-purple-200 bg-white border-2 border-white rounded-4xl w-50 content-center'>Login</Link>
            </p>
          </div>

          <div className='inline-flex gap-5 px-24 mb-5 mt-20'>
            <div className='inline-flex w-1/2 bg-purple-100 rounded-4xl p-5'>
              <div className='w-1/2'>
                <h3 className='text-lg font-semibold'>Join affiliate program</h3><br />
                <h3 className='text-xl font-bold mb-24'>Join affiliate program, get fat comission, 20% as usual.</h3><br />
                <Link to='/signup' className='py-2 font-bold hover:animate-pulse text-white px-10 bg-black border-2 border-black rounded-4xl w-50 content-center'>Join now</Link>
              </div>
              <img src={logo} alt="" className='w-1/2 h-full rounded-r-4xl' />
            </div>

            <div className='inline-flex w-1/2 bg-purple-100 rounded-4xl p-5'>
              <div className='w-1/2'>
                <h3 className='text-lg font-semibold'>Join affiliate program</h3><br />
                <h3 className='text-xl font-bold mb-24'>Join affiliate program, get fat comission, 20% as usual.</h3><br />
                <Link to='/signup' className='py-2 font-bold hover:animate-pulse text-white px-10 bg-black border-2 border-black rounded-4xl w-50 content-center'>Join now</Link>
              </div>
              <img src={logo} alt="" className='w-1/2 h-full rounded-r-4xl' />
            </div>
          </div>

          <div className='inline-flex gap-5 px-24 mt-6 mb-100 w-full'>
            <div className='w-1/3 bg-purple-100 rounded-4xl'>
              <h3 className='text-lg font-bold p-5 w-2/3'>Subscribe and get maximum discount 90% off</h3>
              <div className='flex justify-between px-10 items-center'>
                <Link to='/signup' className=' font-bold text-white hover:animate-ping bg-black border-2 border-black rounded-4xl w-10 h-10 text-center content-center'>&rarr;</Link>
                <img src={logo} alt="" className='w-2/3 h-30 rounded-xl' />
              </div>
            </div>
            <div className='w-1/3 bg-purple-100 rounded-4xl'>
              <h3 className='text-lg font-bold p-5 w-2/3'>Subscribe and get maximum discount 90% off</h3>
              <div className='flex justify-between px-10 items-center'>
                <Link to='/signup' className=' font-bold text-white hover:animate-ping bg-black border-2 border-black rounded-4xl w-10 h-10 text-center content-center'>&rarr;</Link>
                <img src={logo} alt="" className='w-2/3 h-30 rounded-xl' />
              </div>
            </div>
            <div className='w-1/3 bg-purple-100 rounded-4xl p-5'>
              <h3 className='text-lg font-bold w-2/3 mb-10'>Subscribe and get maximum discount 90% off</h3>
              <input type="email"  className='w-full h-10 rounded-4xl py-2 px-5 bg-white text-gray-300 mb-10 outline-none' placeholder='Your email address'/>
              <Link to='/signup' className='py-2 font-bold hover:animate-pulse text-white px-10 bg-black border-2 border-black rounded-4xl w-50 content-center'>Subscribe</Link>
                
            </div>
          </div>
















        </article>













        <section className='bg-none h-fit flex'>
          <aside className=' w-fit bg-gray-100 shadow-2xl shadow-gray-400 py-5 pl-14 pr-1'>
            <h1 className='font-bold pt-5 pb-2'> Patient Features</h1>
            <ul>
              <li>Doctor Search & Filters</li>
              <li>Book & Manage Appointments</li>
              <li>Video Chat Consultation</li>
              <li>E-Prscriptions</li>
              <li>Medical Reacords & History</li>
              <li>Payment Gateway Integration</li>
              <li>Health Monitoring</li>
              <li>Emergency Consultation</li>
              <li>Multilingual Support</li>
              <li>Reminders & Notifications</li>
              <li>Review & Ratings</li>
            </ul>
            <h1 className='font-bold pt-5 pb-2'>Doctor Features</h1>
            <ul>
              <li>Doctor Profile & Verigication</li>
              <li>Appintment Mangement</li>
              <li>EHR Access</li>
              <li>E-prescription & Notes</li>
              <li>Earnings Dashboard</li>
            </ul>
            <h1 className='font-bold pt-5 pb-2'> Admin Features</h1>
            <ul>
              <li>User & Doctor Management</li>
              <li>Analytics & Reports</li>
              <li>Push Notifications & Annocements</li>
            </ul>
          </aside>

          <article className='p-10'>
            article
          </article>
        </section>

        <Label />
      </main >

      <Footer />

    </>
  )
}

export default Consultant