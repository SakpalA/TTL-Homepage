import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Contact = () => {
    return (
        <div className='contact-sec'>
            <h1 className='font-bold text-[#df3f44] contact-heading'>Stay Ahead of the Pack</h1>
            <span className='text-[#414142]'>Sign up for tips, offers and more</span>
            <input type="email" placeholder='Type your email' className='inp' />
            <button className='contact-btn'>Subscribe Now <FaArrowRightLong className='ml-2' /></button>
            <div className='contact-icons'>
                <FaFacebookF className='mr-3 hover:text-[#df3f44] cursor-pointer'/>
                <FaTwitter className='mr-3 hover:text-[#df3f44] cursor-pointer'/>
                <AiFillInstagram className='mr-3 hover:text-[#df3f44] cursor-pointer'/>
                <FaLinkedinIn className='mr-3 hover:text-[#df3f44] cursor-pointer'/>
                <FaYoutube className='mr-3 hover:text-[#df3f44]cursor-pointer'/>
            </div>
        </div>
    )
};

export default Contact;