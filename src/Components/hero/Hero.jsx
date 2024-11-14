import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <>
      <section className='hero-section'>
        <div className='hero-container'>
          <span className='hero-span text-sm font-semibold'>MICROSECONDS MATTER</span>
          <h1 className='hero-title font-extrabold mt-2.5'>Win your horserace <br /> with TTL supplements</h1>
          <p className='hero-text'>Scientifically formulated racehorse supplements <br /> from the home of champions</p>
          <button className='hero-btn'>Discover</button>
        </div>
      </section>
    </>
  )
}

export default Hero;