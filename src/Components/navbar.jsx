import React from 'react'
import logo from '../assets/hospital.avif'
import { Link } from 'react-router-dom'

const navbar = (props) => {
    // let brand= props.brand;
    const brand = "PharmaEasy";
    return (
        <nav className='inline-flex justify-between w-full px-24 h-20 bg-blue-100 text-sky-600 sticky'>
            <div className='inline-flex w-1/3 p-1'>
                <img src={logo} alt="hello" className='h-14 self-center' />
                <div className='w-fit px-2 content-center'>
                    <h2 className='text-sky-500 font-bold'>{brand}</h2>
                    <h3 className='text-gray-700 italic'>A Hospital that lives in your pocket</h3>
                </div>
            </div>
            <div className='content-center w-2/3 p-1'>
                <ul className=' items-center list-none inline-flex justify-between w-full font-bold'>
                    <Link to="/" className="hover:text-green-600">Home</Link>
                    <Link to="/about" className="hover:text-green-600">About Us</Link>
                    <Link to="/service" className="hover:text-green-600">Services</Link>
                    <Link to="/gallery" className="hover:text-green-600">Gallery</Link>
                    <Link to="/news" className="hover:text-green-600">News</Link>
                    <Link to="/contactus" className="nav-item bg-sky-400 hover:bg-sky-300 px-4 py-1 rounded text-white animate-pulse">Contact Us</Link>
                </ul>
            </div>
        </nav>
    )
}

export default navbar