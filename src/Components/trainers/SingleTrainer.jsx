import React from 'react';
import './trainers.css';
import jamesMorgan from '../../Assets/Images/james-morgan.jpeg';

const SingleTrainer = ({ image }) => {
    return (
        <div className='trainer-div'>
            <img src={image.img} alt="Trainer" className='trainer-img' />
            <h6 className='trainer-text'>At The Trainer Locker, I focus on building trust and communication between horse and rider, With over 15 years of experience.</h6>
            <div className='flex items-center jm-div'>
                <img src={jamesMorgan} alt="James Morgan" className='jm-img' />
                <div className='jm-text-div'>
                    <h6 className='jm-name'>James Morgan</h6>
                    <span>Cerificate IV in Horse Racing</span>
                </div>
            </div>
        </div>
    )
}

export default SingleTrainer;