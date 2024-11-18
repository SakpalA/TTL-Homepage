import React from 'react';
import './textimg.css';
import { FaArrowRightLong } from "react-icons/fa6";

const ImgText = ({ heading, title, text, imageSrc, reverse = false }) => {
  return (
    <div className={`text-img-section ${reverse ? 'reverse' : ''}`}>
            <div className='text-content'>
                <h2 className='font-bold intro-heading'>{heading}</h2>
                <h1 className='font-extrabold text-[#DF3F44] intro-title'>{title}</h1>
                <p className='text-[#000000a5] intro-text'>{text}</p>
                <button className='text-[#ffffff] text-btn'>Get Race Ready <FaArrowRightLong className='ml-2 arrow-icon' /></button>
            </div>
            <div className="img-content">
                <img src={imageSrc} alt='Horse' className='text-img'/>
            </div>
        </div>
  )
}

export default ImgText;