import React from 'react';
import './textimg.css';
import { FaArrowRightLong } from "react-icons/fa6";

const TextImage = ({ heading, title, text, imageSrc, reverse = false }) => {
    return (
        <div className={`text-img-section ${reverse ? 'reverse' : ''}`}>
            <div className='text-content'>
                <h2 className='font-bold mb-3'>{heading}</h2>
                <h1 className='text-[#DF3F44] font-extrabold'>{title}</h1>
                <p className='text-[#000000a5] my-4 '>{text}</p>
                <button className='text-btn text-[#ffffff] mt-9'>Get Race Ready <FaArrowRightLong className='ml-2' /></button>
            </div>
            <div className="img-content">
                <img src={imageSrc} alt='Horse' />
            </div>
        </div>
    )
}

export default TextImage;