import React from 'react';
import './subscribe.css';
import { FaCheckCircle } from "react-icons/fa";
import image4 from '../../Assets/Images/image4.png';

const Subscribe = () => {
  return (
    <section className='subscribe-sec'>
        <div className='subscribe-text'>
            <h3 className='subscribe-heading'><span className='text-[#DF3F44]'>Subscribe</span> & Save</h3>
            <span className='text-[#939598]'>Lorem ipusm dolor sit amet consectetur.</span>
            <ul className='subscribe-ul'>
                <li><FaCheckCircle className='mr-2 text-[#DF3F44]'/> Save Upto 20%</li>
                <li><FaCheckCircle className='mr-2 text-[#DF3F44]'/> From as little as $0.70 a day</li>
                <li><FaCheckCircle className='mr-2 text-[#DF3F44]'/> Pause or cancle anytime</li>
            </ul>
            <button className='subscribe-btn'>Shop Now</button>
        </div>
        <div className='subscribe-img'>
            <img src={image4} alt="" className='all-box-img'/>
        </div>
    </section>
  )
}

export default Subscribe;