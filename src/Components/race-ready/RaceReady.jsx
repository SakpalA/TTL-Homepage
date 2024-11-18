import React from 'react';
import './race-ready.css';
import { FaArrowRightLong } from "react-icons/fa6";

const RaceReady = () => {
    return (
        <section className='race-ready-sec'>
            <div className='race-ready-text'>
                <h3>Race-ready performance starts now</h3>
                <h6 className='my-4'>TTL racehorse supplements are uniquely formulated in the United State - the most competitive horse racing arena in the world-to give your horses the staminaand health they need to push the limits for the win.</h6>
                <h3>Plus, they're 100% drug-free, so you can confidently train</h3>
                <button className='race-ready-btn'>Get Started Today <FaArrowRightLong className='ml-2' /></button>
            </div>
        </section>
    )
}

export default RaceReady;