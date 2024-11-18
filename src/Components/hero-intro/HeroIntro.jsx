import React from 'react';
import './hero-intro.css';

const HeroIntro = () => {
  return (
    <section className='hero-section'>
        <div className='hero-container'>
          <span className='font-semibold text-sm hero-span'>MICROSECONDS MATTER</span>
          <h1 className='mt-2.5 font-extrabold hero-title'>Win your horserace <br /> with TTL supplements</h1>
          <p className='hero-text'>Scientifically formulated racehorse supplements <br /> from the home of champions</p>
          <button className='hero-btn'>Discover</button>
        </div>
      </section>
  )
}

export default HeroIntro;