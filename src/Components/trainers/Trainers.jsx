import React from 'react';
import './trainers.css';
import { trainerData } from './trainerData';
import SingleTrainer from './SingleTrainer';

const Trainers = () => {

    return (
        <section className='trainer-container'>
            <div className='trainer-content'>
                <h1 className='font-bold'><span className='text-[#df3f44]'>Trusted by trainers</span><br /> across New Zealand and Australia</h1>
                <p>Outperform the competition. Your horse's energy, stamina and recovery can be the 1% difference between first and second place. Combat fatigue, muscle stiffness and cramping with TTL's top-selling products, formulated for optimal performance and endurance.</p>
            </div>
            <div className='single-trainer-container'>
                {trainerData.map((img) => (
                    <SingleTrainer
                        key={img.id}
                        image={img} />
                ))}
            </div>
        </section>
    )
}

export default Trainers;