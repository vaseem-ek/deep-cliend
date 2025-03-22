import React from 'react'
import { AiFillPhone } from 'react-icons/ai'
import { CiLocationOn, CiTwitter } from 'react-icons/ci'
import { FaInstagram } from 'react-icons/fa'
import { FiYoutube } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { SlSocialFacebook } from 'react-icons/sl'
function Contact() {
    return (
        <div className='grid mt-4 h-screen p-3 md:px-20 md:mt-32 gap-5 grid-cols-1 md:grid-cols-3'>
                    <div className='border border-white rounded p-5 md:order-1'>
                        <div className='flex justify-center items-center'>
                            <div>
                                <h1 className='text-blue-600 text-xl font-semibold'>CONNECT WITH US</h1>
                                <div className='flex justify-center mt-5 items-center text-gray-500 gap-2'>
                                    <AiFillPhone className='text-orange-700' size={20} />
                                    <p>+91 879876523</p>
                                </div>
                                <div className='flex justify-center mt-1 items-center text-gray-500 gap-2'>
                                    <HiOutlineMail size={20} className='text-orange-700' />
                                    <p>info@deepnetsoft.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border border-white rounded p-5 flex flex-col justify-center md:order-2 order-first items-center h-full">
                        <h1 className="text-blue-600 md:text-3xl text-xl font-semibold text-center">
                            DEEP <span className="text-white">{' '} NET</span><span className="text-gray-600">SOFT</span>
                        </h1>
                        <div className="flex gap-4 justify-center mt-3">
                            <SlSocialFacebook title='facebook' className="text-white hover:text-blue-500 transition duration-300" size={20} />
                            <CiTwitter title='twitter' className="text-white hover:text-blue-400 transition duration-300" size={20} />
                            <FiYoutube title='youtube' className="text-white hover:text-red-500 transition duration-300" size={20} />
                            <FaInstagram title='instagram' className="text-white hover:text-pink-500 transition duration-300" size={20} />
                        </div>
                    </div>
        
                    <div className='border border-white rounded p-5 md:order-3'>
                        <div className='flex justify-center items-center'>
                            <div>
                                <h1 className='text-blue-600 text-xl text-center font-semibold'>FIND US</h1>
                                <div className='flex justify-center mt-5 text-gray-500 gap-2'>
                                    <CiLocationOn size={30} className='text-orange-700' />
                                    <p className='line-clamp-2 text-md md:text-2xl'>First floor, Gro Inforpark, Infopark Expy, Kakkanad</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default Contact
