import React from 'react';
import './trainers.css';
import trainer1 from '../../Assets/Images/trainer-1.jpeg';
import trainer2 from '../../Assets/Images/trainer-2.jpeg';
import trainer3 from '../../Assets/Images/trainer-3.jpeg';
import trainer4 from '../../Assets/Images/trainer-4.jpeg';
import jamesMorgan from '../../Assets/Images/james-morgan.jpeg';

const Trainers = () => {
    const imageData = [
        {
            id: 1,
            image: trainer1
        },
        {
            id: 2,
            image: trainer2
        },
        {
            id: 3,
            image: trainer3
        },
        {
            id: 4,
            image: trainer4
        }
    ]
    return (
        <section className='trainer-container'>
            <div className='trainer-content'>
                <h1 className='font-bold'><span className='text-[#df3f44]'>Trusted by trainers</span><br /> across New Zealand and Australia</h1>
                <p>Outperform the competition. Your horse's energy, stamina and recovery can be the 1% difference between first and second place. Combat fatigue, muscle stiffness and cramping with TTL's top-selling products, formulated for optimal performance and endurance.</p>
            </div>
            <div className='single-trainer-container'>
                {imageData.map(img => (
                    <div key={img.id} className='trainer-div'>
                        <img src={img.image} alt="Trainer" className='trainer-img' />
                        <h6 className='trainer-text'>At The Trainer Locker, I focus on building trust and communication between horse and rider, With over 15 years of experience.</h6>
                        <div className='flex items-center jm-div'>
                            <img src={jamesMorgan} alt="James Morgan" className='jm-img' />
                            <div className='jm-text-div'>
                                <h6 className='jm-name'>James Morgan</h6>
                                <span>Cerificate IV in Horse Racing</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Trainers;