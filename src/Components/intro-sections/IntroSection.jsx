import React from 'react';
import TextImage from './TextImage';
import image1 from '../../Assets/Images/image1.png';
import image2 from '../../Assets/Images/image2.jpeg';
import './textimg.css';

const IntroSection = () => {

    return (
        <div className='intro-sec'>
            <TextImage
                heading='Uniquely formulated for horse trainers'
                title='Who Want to Win'
                text="From joint health to muscle strength, our products keep your horse fit, and ready to win. With advanced formulations trusted bu top trainers, you can push past the competition and achieve the results you'vh been aiming for. "
                imageSrc={image1} />
            <TextImage
                heading='Natural'
                title='Bleeder Remedy'
                text="While more than 95% of racehorses experience exercise-induced pulmonary haemorrhage (EIPH), commonly known as bleeders, you want to avoid exposing them to side effects like dehydration from potent drugs. TTL's BleederShield can help strengthen capillaries in the lungs, reduce oxidative stress, and improve blood flow. "
                imageSrc={image2}
                reverse />
        </div>
    );
};

export default IntroSection;