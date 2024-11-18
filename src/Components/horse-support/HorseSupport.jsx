import React from 'react';
import './horse-support.css';
import data from '../product/data';
import SingleProduct from '../product/SingleProduct';
import horseride from '../../Assets/Images/horseride.jpeg';

const HorseSupport = () => {
  return (
    <section className='support-horse-container'>
      <div className='horseride-text'>
        <h1 className='font-bold horseride-heading'><span className='text-[#df3f44]'>Support</span> Your Horse, Head of Hoof</h1>
        <p className='text-[#414142]'>Click to learn how our products enhance specific areas.</p>
      </div>
      <div className='horseride-div'>
        <div className='horseride-prod'>
          <SingleProduct products={data[0]} />
        </div>
        <div className='horseride-img'>
          <img src={horseride} alt="Horse ride" />
        </div>
      </div>
    </section>
  )
}

export default HorseSupport;